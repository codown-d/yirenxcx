import request from '@/utils/request'

export async function sendSms({ body, options }: { body: any; options?: any }) {
  return request<any>('/app-api/member/auth/send-sms-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
export async function getBannerList({ params, options }: { params: any; options?: any }) {
  return request<any>('/app-api/promotion/banner/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    ...(options || {}),
  })
}
