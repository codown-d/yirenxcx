import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { toast } from '@/utils/toast'

import {
  AppAuthLoginReqVO,
  AppAuthSmsLoginReqVO,
  AppAuthWeixinMiniAppLoginReqVO,
  CommonResultAppAuthLoginRespVO,
  getUserInfo as getUserInfoResp,
  login,
  MemberUserDO,
  smsLogin,
  weixinMiniAppLogin,
} from '@/service/member'
import { genUserSig } from '@/service/app'
import { loginIM } from '@/utils/im'
import { RoleEmu } from './role'

// 初始化状态
const userInfoState: MemberUserDO = {
  id: 0,
  name: '',
  avatar: '/static/images/default-avatar.png',
  sexName: '男',
  point: 0,
  experience: 0,
}

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<MemberUserDO>({ ...userInfoState })
    const setUserInfo = (val: Partial<MemberUserDO>) => {
      if (!val.avatar) {
        val.avatar = userInfoState.avatar
      }
      userInfo.value = { ...userInfo.value, ...val }
    }
    const removeUserInfo = () => {
      uni.clearStorageSync()
      userInfo.value = { ...userInfoState }
    }
    /**
     * 密码登录
     */
    const loginWithPassword = async (mobile: string, password: string) => {
      try {
        const loginData: any = {
          mobile,
          password,
          // socialType: 0, // 非社交登录
          // socialCode: '',
          // socialState: '',
        }

        const res: CommonResultAppAuthLoginRespVO = await login({
          body: loginData,
        })

        if (res.code === 0 && res.data) {
          const { accessToken, userId, refreshToken, expiresTime } = res.data
          // 保存登录信息
          uni.setStorageSync('token', accessToken)
          uni.setStorageSync('refreshToken', refreshToken)
          uni.setStorageSync('userId', userId)
          uni.setStorageSync('expiresTime', expiresTime)

          await loginSuccess(userId)
          toast.success('登录成功')
          return res
        } else {
        }
      } catch (error) {
        throw error
      }
    }

    /**
     * 短信验证码登录
     */
    const loginWithSms = async (mobile: string, code: string) => {
      try {
        const smsLoginData: any = {
          mobile,
          code,
          // socialType: 0, // 非社交登录
          // socialCode: '',
          // socialState: '',
        }

        const res: CommonResultAppAuthLoginRespVO = await smsLogin({
          body: smsLoginData,
        })

        if (res.code === 0 && res.data) {
          const { accessToken, userId, refreshToken, expiresTime } = res.data
          // 保存登录信息
          uni.setStorageSync('token', accessToken)
          uni.setStorageSync('refreshToken', refreshToken)
          uni.setStorageSync('userId', userId)
          uni.setStorageSync('expiresTime', expiresTime)
          toast.success('登录成功')
          await getUserInfoFn()
          return res
        } else {
          throw new Error(res.msg || '登录失败')
        }
      } catch (error) {
        throw error
      }
    }
    /**
     * 获取用户信息
     */
    const getUserInfo = () => {
      return userInfo.value
    }
    /**
     * 获取用户信息
     */
    const getUserInfoFn = async () => {
      const res = await getUserInfoResp({})
      if (res.code === 0 && res.data) {
        setUserInfo(res.data)
        return res
      }
    }
    /**
     * 退出登录
     */
    const logout = async () => {
      removeUserInfo()
      toast.success('退出登录成功')
    }

    /**
     * 微信小程序登录
     */
    const wxLogin = async (code) => {
      try {
        // 获取微信小程序登录的code
        const wxLoginRes = await new Promise<UniApp.LoginRes>((resolve, reject) => {
          uni.login({
            provider: 'weixin',
            success: resolve,
            fail: reject,
          })
        })

        const loginData: AppAuthWeixinMiniAppLoginReqVO = {
          loginCode: wxLoginRes.code,
          phoneCode: code, // 普通微信登录不需要手机号
          // state: 'miniapp_login',
          state: 'default',
        }

        const res: CommonResultAppAuthLoginRespVO = await weixinMiniAppLogin({
          body: loginData,
        })

        if (res.code === 0 && res.data) {
          const { accessToken, userId, refreshToken, expiresTime } = res.data
          // 保存登录信息
          uni.setStorageSync('token', accessToken)
          uni.setStorageSync('refreshToken', refreshToken)
          uni.setStorageSync('userId', userId)
          uni.setStorageSync('expiresTime', expiresTime)

          await loginSuccess(userId)
          toast.success('微信登录成功')
          return res
        } else {
          throw new Error(res.msg || '微信登录失败')
        }
      } catch (error) {
        throw error
      }
    }
    const loginSuccess = async (userId) => {
      let roleInfo = JSON.parse(
        uni.getStorageSync('role') || JSON.stringify({ role: RoleEmu.seeker }),
      )
      let imUserId = `im_${roleInfo.role}_${userId}`
      let resUserSig = await genUserSig({ params: { userId: imUserId } })
      await loginIM(imUserId, resUserSig.data)
      await getUserInfoFn()
    }

    let getLoggedIn = () => {
      return !!uni.getStorageSync('token')
    }

    return {
      userInfo,
      loginWithPassword,
      loginWithSms,
      wxLogin,
      getUserInfo,
      getUserInfoFn,
      logout,
      removeUserInfo,
      getLoggedIn,
    }
  },
  {
    persist: true,
  },
)
