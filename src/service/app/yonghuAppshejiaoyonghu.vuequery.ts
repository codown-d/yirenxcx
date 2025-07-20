/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppshejiaoyonghu';
import * as API from './types';

/** 社交绑定，使用 code 授权码 POST /app-api/member/social-user/bind */
export function useSocialBindMutation(options?: {
  onSuccess?: (value?: API.CommonResultString) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.socialBind,
    onSuccess(data: API.CommonResultString) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得社交用户 GET /app-api/member/social-user/get */
export function getSocialUserQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSocialUserParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSocialUser(queryKey[1] as typeof options);
    },
    queryKey: ['getSocialUser', options],
  });
}

/** 获得微信小程订阅模板列表 GET /app-api/member/social-user/get-subscribe-template-list */
export function getSubscribeTemplateListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSubscribeTemplateList(queryKey[1] as typeof options);
    },
    queryKey: ['getSubscribeTemplateList', options],
  });
}

/** 取消社交绑定 DELETE /app-api/member/social-user/unbind */
export function useSocialUnbindMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.socialUnbind,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得微信小程序码(base64 image) POST /app-api/member/social-user/wxa-qrcode */
export function useGetWxaQrcodeMutation(options?: {
  onSuccess?: (value?: API.CommonResultString) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getWxaQrcode,
    onSuccess(data: API.CommonResultString) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
