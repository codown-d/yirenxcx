/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutairenzheng';
import * as API from './types';

/** 获取登录用户的权限信息 GET /admin-api/system/auth/get-permission-info */
export function getPermissionInfoQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPermissionInfo(queryKey[1] as typeof options);
    },
    queryKey: ['getPermissionInfo', options],
  });
}

/** 使用账号密码登录 POST /admin-api/system/auth/login */
export function useLogin1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultAuthLoginRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.login1,
    onSuccess(data: API.CommonResultAuthLoginRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 登出系统 POST /admin-api/system/auth/logout */
export function useLogout1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.logout1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 刷新令牌 POST /admin-api/system/auth/refresh-token */
export function useRefreshToken1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultAuthLoginRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.refreshToken1,
    onSuccess(data: API.CommonResultAuthLoginRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 注册用户 POST /admin-api/system/auth/register */
export function useRegisterMutation(options?: {
  onSuccess?: (value?: API.CommonResultAuthLoginRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.register,
    onSuccess(data: API.CommonResultAuthLoginRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 重置密码 POST /admin-api/system/auth/reset-password */
export function useResetPasswordMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.resetPassword,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 发送手机验证码 POST /admin-api/system/auth/send-sms-code */
export function useSendLoginSmsCodeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.sendLoginSmsCode,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 使用短信验证码登录 POST /admin-api/system/auth/sms-login */
export function useSmsLogin1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultAuthLoginRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.smsLogin1,
    onSuccess(data: API.CommonResultAuthLoginRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 社交授权的跳转 GET /admin-api/system/auth/social-auth-redirect */
export function socialLogin1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.socialLogin1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.socialLogin1(queryKey[1] as typeof options);
    },
    queryKey: ['socialLogin1', options],
  });
}

/** 社交快捷登录，使用 code 授权码 适合未登录的用户，但是社交账号已绑定用户 POST /admin-api/system/auth/social-login */
export function useSocialQuickLoginMutation(options?: {
  onSuccess?: (value?: API.CommonResultAuthLoginRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.socialQuickLogin,
    onSuccess(data: API.CommonResultAuthLoginRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
