/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './0Shouquan';
import * as API from './types';

/** 获得授权信息 适合 code 授权码模式，或者 implicit 简化模式；在 sso.vue 单点登录界面被【获取】调用 GET /admin-api/system/oauth2/authorize */
export function authorizeQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.authorizeParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.authorize(queryKey[1] as typeof options);
    },
    queryKey: ['authorize', options],
  });
}

/** 申请授权 适合 code 授权码模式，或者 implicit 简化模式；在 sso.vue 单点登录界面被【提交】调用 POST /admin-api/system/oauth2/authorize */
export function useApproveOrDenyMutation(options?: {
  onSuccess?: (value?: API.CommonResultString) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.approveOrDeny,
    onSuccess(data: API.CommonResultString) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 校验访问令牌 POST /admin-api/system/oauth2/check-token */
export function useCheckTokenMutation(options?: {
  onSuccess?: (value?: API.CommonResultOAuth2OpenCheckTokenRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.checkToken,
    onSuccess(data: API.CommonResultOAuth2OpenCheckTokenRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得访问令牌 适合 code 授权码模式，或者 implicit 简化模式；在 sso.vue 单点登录界面被【获取】调用 POST /admin-api/system/oauth2/token */
export function usePostAccessTokenMutation(options?: {
  onSuccess?: (value?: API.CommonResultOAuth2OpenAccessTokenRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.postAccessToken,
    onSuccess(data: API.CommonResultOAuth2OpenAccessTokenRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除访问令牌 DELETE /admin-api/system/oauth2/token */
export function useRevokeTokenMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.revokeToken,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
