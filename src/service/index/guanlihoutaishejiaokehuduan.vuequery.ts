/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaishejiaokehuduan';
import * as API from './types';

/** 创建社交客户端 POST /admin-api/system/social-client/create */
export function useCreateSocialClientMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createSocialClient,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除社交客户端 DELETE /admin-api/system/social-client/delete */
export function useDeleteSocialClientMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteSocialClient,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得社交客户端 GET /admin-api/system/social-client/get */
export function getSocialClientQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSocialClientParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSocialClient(queryKey[1] as typeof options);
    },
    queryKey: ['getSocialClient', options],
  });
}

/** 获得社交客户端分页 GET /admin-api/system/social-client/page */
export function getSocialClientPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSocialClientPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSocialClientPage(queryKey[1] as typeof options);
    },
    queryKey: ['getSocialClientPage', options],
  });
}

/** 发送订阅消息 POST /admin-api/system/social-client/send-subscribe-message */
export function useSendSubscribeMessageMutation(options?: {
  onSuccess?: (value?: unknown) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.sendSubscribeMessage,
    onSuccess(data: unknown) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新社交客户端 PUT /admin-api/system/social-client/update */
export function useUpdateSocialClientMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateSocialClient,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
