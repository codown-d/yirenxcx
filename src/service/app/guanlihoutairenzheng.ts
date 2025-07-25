/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取登录用户的权限信息 GET /admin-api/system/auth/get-permission-info */
export async function getPermissionInfo({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAuthPermissionInfoRespVO>(
    '/admin-api/system/auth/get-permission-info',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 使用账号密码登录 POST /admin-api/system/auth/login */
export async function login1({
  body,
  options,
}: {
  body: API.AuthLoginReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAuthLoginRespVO>(
    '/admin-api/system/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 登出系统 POST /admin-api/system/auth/logout */
export async function logout1({ options }: { options?: CustomRequestOptions }) {
  return request<API.CommonResultBoolean>('/admin-api/system/auth/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 刷新令牌 POST /admin-api/system/auth/refresh-token */
export async function refreshToken1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.refreshToken1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAuthLoginRespVO>(
    '/admin-api/system/auth/refresh-token',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 注册用户 POST /admin-api/system/auth/register */
export async function register({
  body,
  options,
}: {
  body: API.AuthRegisterReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAuthLoginRespVO>(
    '/admin-api/system/auth/register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 重置密码 POST /admin-api/system/auth/reset-password */
export async function resetPassword({
  body,
  options,
}: {
  body: API.AuthResetPasswordReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/auth/reset-password',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 发送手机验证码 POST /admin-api/system/auth/send-sms-code */
export async function sendLoginSmsCode({
  body,
  options,
}: {
  body: API.AuthSmsSendReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/auth/send-sms-code',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 使用短信验证码登录 POST /admin-api/system/auth/sms-login */
export async function smsLogin1({
  body,
  options,
}: {
  body: API.AuthSmsLoginReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAuthLoginRespVO>(
    '/admin-api/system/auth/sms-login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 社交授权的跳转 GET /admin-api/system/auth/social-auth-redirect */
export async function socialLogin1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.socialLogin1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>(
    '/admin-api/system/auth/social-auth-redirect',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 社交快捷登录，使用 code 授权码 适合未登录的用户，但是社交账号已绑定用户 POST /admin-api/system/auth/social-login */
export async function socialQuickLogin({
  body,
  options,
}: {
  body: API.AuthSocialLoginReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAuthLoginRespVO>(
    '/admin-api/system/auth/social-login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}
