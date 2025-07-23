import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { toast } from '@/utils/toast'

import type {
  AppAuthLoginReqVO,
  AppAuthSmsLoginReqVO,
  AppAuthWeixinMiniAppLoginReqVO,
  AppMemberUserInfoRespVO,
  CommonResultAppAuthLoginRespVO,
  CommonResultAppMemberUserInfoRespVO,
} from '@/service/app/types'
import { getUserInfo, login, smsLogin, weixinMiniAppLogin } from '@/service/app'

// 用户信息类型定义
interface UserInfo extends AppMemberUserInfoRespVO {
  token?: string
  refreshToken?: string
  expiresTime?: string
  userId: number
}

// 初始化状态
const userInfoState: UserInfo = {
  id: 0,
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

          toast.success('登录成功')
          await getUserInfoFn()
          return res
        } else {
          throw new Error(res.msg || '登录失败')
        }
      } catch (error) {
        console.error('密码登录失败:', error)
        const errorMessage = error instanceof Error ? error.message : '登录失败'
        toast.error(errorMessage)
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
        console.error('短信登录失败:', error)
        const errorMessage = error instanceof Error ? error.message : '登录失败'
        toast.error(errorMessage)
        throw error
      }
    }
    /**
     * 获取用户信息
     */
    const getUserInfoFn = async () => {
      try {
        const res: CommonResultAppMemberUserInfoRespVO = await getUserInfo({})

        if (res.code === 0 && res.data) {
          const userData = res.data
          setUserInfo(userData)
          uni.setStorageSync('userInfo', userData)
          return res
        } else {
          throw new Error(res.msg || '获取用户信息失败')
        }
      } catch (error) {
        console.error('获取用户信息失败:', error)
        throw error
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
        console.error('退出登录失败:', error)
        // 即使接口调用失败，也要清除本地数据
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

          toast.success('微信登录成功')
          await getUserInfoFn()
          return res
        } else {
          throw new Error(res.msg || '微信登录失败')
        }
      } catch (error) {
        console.error('微信登录失败:', error)
        const errorMessage = error instanceof Error ? error.message : '微信登录失败'
        toast.error(errorMessage)
        throw error
      }
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
