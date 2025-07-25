/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建微信 JS SDK 初始化所需的签名 参考 https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html 文档 POST /app-api/member/auth/create-weixin-jsapi-signature */
export async function createWeixinMpJsapiSignature({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.createWeixinMpJsapiSignatureParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultSocialWxJsapiSignatureRespDTO>(
    '/app-api/member/auth/create-weixin-jsapi-signature',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 使用手机 + 密码登录 POST /app-api/member/auth/login */
export async function login({
  body,
  options,
}: {
  body: API.AppAuthLoginReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppAuthLoginRespVO>(
    '/app-api/member/auth/login',
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

/** 登出系统 POST /app-api/member/auth/logout */
export async function logout({ options }: { options?: CustomRequestOptions }) {
  return request<API.CommonResultBoolean>('/app-api/member/auth/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 刷新令牌 POST /app-api/member/auth/refresh-token */
export async function refreshToken({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.refreshTokenParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppAuthLoginRespVO>(
    '/app-api/member/auth/refresh-token',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 发送手机验证码 POST /app-api/member/auth/send-sms-code */
export async function sendSmsCode({
  body,
  options,
}: {
  body: API.AppAuthSmsSendReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/member/auth/send-sms-code',
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

/** 使用手机 + 验证码登录 POST /app-api/member/auth/sms-login */
export async function smsLogin({
  body,
  options,
}: {
  body: API.AppAuthSmsLoginReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppAuthLoginRespVO>(
    '/app-api/member/auth/sms-login',
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

/** 社交授权的跳转 GET /app-api/member/auth/social-auth-redirect */
export async function socialAuthRedirect({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.socialAuthRedirectParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>(
    '/app-api/member/auth/social-auth-redirect',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 社交快捷登录，使用 code 授权码 适合未登录的用户，但是社交账号已绑定用户 POST /app-api/member/auth/social-login */
export async function socialLogin({
  body,
  options,
}: {
  body: API.AppAuthSocialLoginReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppAuthLoginRespVO>(
    '/app-api/member/auth/social-login',
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

/** 校验手机验证码 POST /app-api/member/auth/validate-sms-code */
export async function validateSmsCode({
  body,
  options,
}: {
  body: API.AppAuthSmsValidateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/member/auth/validate-sms-code',
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

/** 微信小程序的一键登录 POST /app-api/member/auth/weixin-mini-app-login */
export async function weixinMiniAppLogin({
  body,
  options,
}: {
  body: API.AppAuthWeixinMiniAppLoginReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppAuthLoginRespVO>(
    '/app-api/member/auth/weixin-mini-app-login',
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
