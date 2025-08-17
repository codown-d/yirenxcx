import { CustomRequestOptions } from '@/interceptors/request'
import { useUserStore } from '@/store'
import { goLogin, navigateToSub } from '.'
import { refreshToken } from '@/service/member'

export const tenantId = import.meta.env.VITE_APP_SHOPRO_TENANT_ID
/**
 * 请求方法: 主要是对 uni.request 的封装，去适配 openapi-ts-request 的 request 方法
 * @param options 请求参数
 * @returns 返回 Promise 对象
 */
const http = <T>(options: CustomRequestOptions) => {
  // 1. 获取用户信息
  const { removeUserInfo, setUserInfo } = useUserStore()
  // 1. 返回 Promise 对象
  return new Promise<T>((resolve, reject) => {
    uni.request({
      ...options,
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      // 响应成功
      async success(res) {
        // 状态码 2xx，参考 axios 的设计
        if (res.statusCode >= 200 && res.statusCode < 300 && res.data.code === 0) {
          // 2.1 提取核心数据 res.data
          resolve(res.data as T)
        } else if (res.statusCode === 401 || res.data.code === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页
          removeUserInfo()
          try {
            let res = await refreshToken({
              params: { refreshToken: uni.getStorageSync('refreshToken') },
            })
            const { accessToken, userId, expiresTime } = res.data
            uni.setStorageSync('token', accessToken)
            uni.setStorageSync('refreshToken', res.data.refreshToken)
            uni.setStorageSync('userId', userId)
            uni.setStorageSync('expiresTime', expiresTime)
            setUserInfo({
              token: accessToken,
              refreshToken: res.data.refreshToken,
              expiresTime,
            })
          } catch (error) {
            goLogin()
            uni.showToast({
              icon: 'none',
              title: '登录已失效',
            })
            reject(res)
          }
        } else {
          // 其他错误 -> 根据后端错误信息轻提示
          !options.hideErrorToast &&
            uni.showToast({
              icon: 'none',
              title: (res.data as T & { msg?: string })?.msg || '请求错误',
            })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}

/*
 * openapi-ts-request 工具的 request 跨客户端适配方法
 */
export default function request<T = unknown>(
  url: string,
  options: Omit<CustomRequestOptions, 'url'> & {
    params?: Record<string, unknown>
    headers?: Record<string, unknown>
  },
) {
  const requestOptions = {
    url,
    ...options,
  }

  if (options.params) {
    requestOptions.query = requestOptions.params
    delete requestOptions.params
  }
  requestOptions.header = {
    ...options.headers,
    'tenant-id': 1,
  }
  if (url.indexOf('list-all-simple') == -1) {
    requestOptions.header['Authorization'] = `Bearer ${uni.getStorageSync('token')}`
  }
  delete requestOptions.headers

  return http<T>(requestOptions)
}
