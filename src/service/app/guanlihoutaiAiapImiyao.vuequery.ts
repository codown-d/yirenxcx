/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiAiapImiyao';
import * as API from './types';

/** 创建 API 密钥 POST /admin-api/ai/api-key/create */
export function useCreateApiKeyMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createApiKey,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除 API 密钥 DELETE /admin-api/ai/api-key/delete */
export function useDeleteApiKeyMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteApiKey,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得 API 密钥 GET /admin-api/ai/api-key/get */
export function getApiKeyQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getApiKeyParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getApiKey(queryKey[1] as typeof options);
    },
    queryKey: ['getApiKey', options],
  });
}

/** 获得 API 密钥分页 GET /admin-api/ai/api-key/page */
export function getApiKeyPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getApiKeyPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getApiKeyPage(queryKey[1] as typeof options);
    },
    queryKey: ['getApiKeyPage', options],
  });
}

/** 获得 API 密钥分页列表 GET /admin-api/ai/api-key/simple-list */
export function getApiKeySimpleListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getApiKeySimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getApiKeySimpleList', options],
  });
}

/** 更新 API 密钥 PUT /admin-api/ai/api-key/update */
export function useUpdateApiKeyMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateApiKey,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
