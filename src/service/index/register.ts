/* eslint-disable */
// @ts-ignore
import request from '@/utils/request'
import { CustomRequestOptions } from '@/interceptors/request'

// 注册相关类型定义
export interface RegisterRequest {
  phone: string
  smsCode: string
  password: string
  realName: string
  inviteCode?: string
}

export interface RegisterResponse {
  code: number
  data: {
    userId: string
    phone: string
    realName: string
    token: string
    needRoleSelection: boolean
  }
  msg: string
}

export interface SendSmsRequest {
  phone: string
  type: 'register' | 'login' | 'reset'
}

export interface SendSmsResponse {
  code: number
  data: {
    success: boolean
    countdown: number
  }
  msg: string
}

export interface CheckPhoneRequest {
  phone: string
}

export interface CheckPhoneResponse {
  code: number
  data: {
    exists: boolean
    canRegister: boolean
  }
  msg: string
}

export interface ValidateInviteCodeRequest {
  inviteCode: string
}

export interface ValidateInviteCodeResponse {
  code: number
  data: {
    valid: boolean
    inviterName?: string
    benefits?: string[]
  }
  msg: string
}

export interface UserProfileRequest {
  userId: string
  avatar?: string
  nickname?: string
  gender?: 'male' | 'female' | 'unknown'
  birthday?: string
  location?: string
  bio?: string
}

export interface UserProfileResponse {
  code: number
  data: {
    success: boolean
  }
  msg: string
}

export interface ResetPasswordRequest {
  phone: string
  smsCode: string
  newPassword: string
  verifyToken?: string
}

export interface ResetPasswordResponse {
  code: number
  data: {
    success: boolean
    message: string
  }
  msg: string
}

/** 发送短信验证码 POST /app-api/auth/send-sms */
export async function sendSmsCode({
  body,
  options,
}: {
  body: SendSmsRequest
  options?: CustomRequestOptions
}): Promise<SendSmsResponse> {
  return request<SendSmsResponse>('/app-api/auth/send-sms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 检查手机号是否已注册 POST /app-api/auth/check-phone */
export async function checkPhoneExists({
  body,
  options,
}: {
  body: CheckPhoneRequest
  options?: CustomRequestOptions
}): Promise<CheckPhoneResponse> {
  return request<CheckPhoneResponse>('/app-api/auth/check-phone', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 验证邀请码 POST /app-api/auth/validate-invite-code */
export async function validateInviteCode({
  body,
  options,
}: {
  body: ValidateInviteCodeRequest
  options?: CustomRequestOptions
}): Promise<ValidateInviteCodeResponse> {
  return request<ValidateInviteCodeResponse>('/app-api/auth/validate-invite-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 用户注册 POST /app-api/auth/register */
export async function registerUser({
  body,
  options,
}: {
  body: RegisterRequest
  options?: CustomRequestOptions
}): Promise<RegisterResponse> {
  return request<RegisterResponse>('/app-api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 完善用户资料 PUT /app-api/user/profile */
export async function updateUserProfile({
  body,
  options,
}: {
  body: UserProfileRequest
  options?: CustomRequestOptions
}): Promise<UserProfileResponse> {
  return request<UserProfileResponse>('/app-api/user/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 获取注册统计信息 GET /app-api/auth/register-stats */
export async function getRegisterStats({
  options,
}: {
  options?: CustomRequestOptions
} = {}) {
  return request<{
    code: number
    data: {
      totalUsers: number
      todayRegisters: number
      monthlyRegisters: number
      popularInviteCodes: Array<{
        code: string
        count: number
        inviterName: string
      }>
    }
    msg: string
  }>('/app-api/auth/register-stats', {
    method: 'GET',
    ...(options || {}),
  })
}

/** 重发验证码 POST /app-api/auth/resend-sms */
export async function resendSmsCode({
  body,
  options,
}: {
  body: {
    phone: string
    type: 'register' | 'login' | 'reset'
  }
  options?: CustomRequestOptions
}) {
  return request<SendSmsResponse>('/app-api/auth/resend-sms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 验证短信验证码 POST /app-api/auth/verify-sms */
export async function verifySmsCode({
  body,
  options,
}: {
  body: {
    phone: string
    smsCode: string
    type: 'register' | 'login' | 'reset'
  }
  options?: CustomRequestOptions
}) {
  return request<{
    code: number
    data: {
      valid: boolean
      token?: string
    }
    msg: string
  }>('/app-api/auth/verify-sms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 检查用户名是否可用 POST /app-api/auth/check-username */
export async function checkUsernameAvailable({
  body,
  options,
}: {
  body: {
    username: string
  }
  options?: CustomRequestOptions
}) {
  return request<{
    code: number
    data: {
      available: boolean
      suggestions?: string[]
    }
    msg: string
  }>('/app-api/auth/check-username', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 获取注册协议内容 GET /app-api/auth/agreements */
export async function getAgreements({
  params,
  options,
}: {
  params?: {
    type?: 'user' | 'privacy' | 'service'
  }
  options?: CustomRequestOptions
} = {}) {
  return request<{
    code: number
    data: {
      userAgreement: string
      privacyPolicy: string
      serviceTerms: string
      lastUpdated: string
    }
    msg: string
  }>('/app-api/auth/agreements', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 重置密码 POST /app-api/auth/reset-password */
export async function resetPassword({
  body,
  options,
}: {
  body: ResetPasswordRequest
  options?: CustomRequestOptions
}): Promise<ResetPasswordResponse> {
  return request<ResetPasswordResponse>('/app-api/auth/reset-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 验证重置密码权限 POST /app-api/auth/verify-reset-permission */
export async function verifyResetPermission({
  body,
  options,
}: {
  body: {
    phone: string
    smsCode: string
  }
  options?: CustomRequestOptions
}) {
  return request<{
    code: number
    data: {
      valid: boolean
      token: string
      expiresIn: number
    }
    msg: string
  }>('/app-api/auth/verify-reset-permission', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
