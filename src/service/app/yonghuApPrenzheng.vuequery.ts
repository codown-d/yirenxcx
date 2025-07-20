/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPrenzheng';
import * as API from './types';

/** 创建微信 JS SDK 初始化所需的签名 参考 https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html 文档 POST /app-api/member/auth/create-weixin-jsapi-signature */
export function useCreateWeixinMpJsapiSignatureMutation(options?: {
  onSuccess?: (value?: API.CommonResultSocialWxJsapiSignatureRespDTO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createWeixinMpJsapiSignature,
    onSuccess(data: API.CommonResultSocialWxJsapiSignatureRespDTO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 使用手机 + 密码登录 POST /app-api/member/auth/login */
export function useLoginMutation(options?: {
  onSuccess?: (value?: API.CommonResultAppAuthLoginRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.login,
    onSuccess(data: API.CommonResultAppAuthLoginRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 登出系统 POST /app-api/member/auth/logout */
export function useLogoutMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.logout,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 刷新令牌 POST /app-api/member/auth/refresh-token */
export function useRefreshTokenMutation(options?: {
  onSuccess?: (value?: API.CommonResultAppAuthLoginRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.refreshToken,
    onSuccess(data: API.CommonResultAppAuthLoginRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 发送手机验证码 POST /app-api/member/auth/send-sms-code */
export function useSendSmsCodeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.sendSmsCode,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 使用手机 + 验证码登录 POST /app-api/member/auth/sms-login */
export function useSmsLoginMutation(options?: {
  onSuccess?: (value?: API.CommonResultAppAuthLoginRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.smsLogin,
    onSuccess(data: API.CommonResultAppAuthLoginRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 社交授权的跳转 GET /app-api/member/auth/social-auth-redirect */
export function socialAuthRedirectQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.socialAuthRedirectParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.socialAuthRedirect(queryKey[1] as typeof options);
    },
    queryKey: ['socialAuthRedirect', options],
  });
}

/** 社交快捷登录，使用 code 授权码 适合未登录的用户，但是社交账号已绑定用户 POST /app-api/member/auth/social-login */
export function useSocialLoginMutation(options?: {
  onSuccess?: (value?: API.CommonResultAppAuthLoginRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.socialLogin,
    onSuccess(data: API.CommonResultAppAuthLoginRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 校验手机验证码 POST /app-api/member/auth/validate-sms-code */
export function useValidateSmsCodeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.validateSmsCode,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 微信小程序的一键登录 POST /app-api/member/auth/weixin-mini-app-login */
export function useWeixinMiniAppLoginMutation(options?: {
  onSuccess?: (value?: API.CommonResultAppAuthLoginRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.weixinMiniAppLogin,
    onSuccess(data: API.CommonResultAppAuthLoginRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
