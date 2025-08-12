import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { toast } from '@/utils/toast'

import {
  AppAuthLoginReqVO,
  AppAuthLoginRespVO,
  AppAuthSmsLoginReqVO,
  AppAuthWeixinMiniAppLoginReqVO,
  CommonResultAppAuthLoginRespVO,
  getUserInfo,
  login,
  smsLogin,
  weixinMiniAppLogin,
} from '@/service/member'
import { genUserSig } from '@/service/app'
import { loginIM } from '@/utils/im'
import { RoleEmu } from './role'

// 用户信息类型定义
interface UserInfo extends AppAuthLoginRespVO {
  token: string
  refreshToken: string
  expiresTime: string
  userId: number
  avatar: string
  nickname: string
}

// 初始化状态
const userInfoState: UserInfo = {
  userId: 0,
  nickname: '',
  avatar: '/static/images/default-avatar.png',
  mobile: '',
  sex: 1,
  point: 0,
  experience: 0,
  brokerageEnabled: false,
  token: '',
  refreshToken: '',
  expiresTime: '',
}

export const useUserStore = defineStore(
  'user',
  () => {
    // 定义用户信息
    const userInfo = ref<UserInfo>({ ...userInfoState })

    // 设置用户信息
    const setUserInfo = (val: Partial<UserInfo>) => {
      console.log('设置用户信息', val)
      // 若头像为空 则使用默认头像
      if (!val.avatar) {
        val.avatar = userInfoState.avatar
      }
      userInfo.value = { ...userInfo.value, ...val }
    }
    // 删除用户信息
    const removeUserInfo = () => {
      userInfo.value = { ...userInfoState }
      uni.removeStorageSync('userInfo')
      uni.removeStorageSync('token')
      uni.removeStorageSync('refreshToken')
      uni.removeStorageSync('userId')
      uni.removeStorageSync('expiresTime')
    }
    /**
     * 密码登录
     */
    const loginWithPassword = async (mobile: string, password: string) => {
      try {
        const loginData: AppAuthLoginReqVO = {
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

          // 更新用户信息中的token
          setUserInfo({
            token: accessToken,
            refreshToken,
            expiresTime,
          })

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
        const smsLoginData: AppAuthSmsLoginReqVO = {
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

          // 更新用户信息中的token
          setUserInfo({
            token: accessToken,
            refreshToken,
            expiresTime,
          })

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
    const getUserInfoFn = async () => {
      const res = await getUserInfo({})
      if (res.code === 0 && res.data) {
        const userData = res.data
        setUserInfo(userData)
        uni.setStorageSync('userInfo', userData)
        return res
      }
    }
    /**
     * 退出登录
     */
    const logout = async () => {
      try {
        // await apiLogout({})
        removeUserInfo()
        toast.success('退出登录成功')
      } catch (error) {
        removeUserInfo()
      }
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

        console.log('微信登录code', wxLoginRes.code, code)

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

          // 更新用户信息中的token
          setUserInfo({
            token: accessToken,
            refreshToken,
            expiresTime,
          })
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
    // 计算属性：是否已登录
    const isLoggedIn = computed(() => !!userInfo.value.token)

    // 初始化时从本地存储恢复用户信息
    const initUserInfo = () => {
      try {
        const storedUserInfo = uni.getStorageSync('userInfo')
        const storedToken = uni.getStorageSync('token')
        const storedRefreshToken = uni.getStorageSync('refreshToken')
        const storedExpiresTime = uni.getStorageSync('expiresTime')

        if (storedUserInfo && storedToken) {
          setUserInfo({
            ...storedUserInfo,
            token: storedToken,
            refreshToken: storedRefreshToken,
            expiresTime: storedExpiresTime,
          })
        }
      } catch (error) {
        console.error('初始化用户信息失败:', error)
      }
    }

    // 页面加载时初始化用户信息
    initUserInfo()

    return {
      userInfo,
      loginWithPassword,
      loginWithSms,
      wxLogin,
      getUserInfo: getUserInfoFn,
      logout,
      setUserInfo,
      removeUserInfo,
      isLoggedIn,
      initUserInfo,
    }
  },
  {
    persist: true,
  },
)
