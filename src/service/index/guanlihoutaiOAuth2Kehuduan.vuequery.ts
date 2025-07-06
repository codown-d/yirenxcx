/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiOAuth2Kehuduan';
import * as API from './types';

/** 创建 OAuth2 客户端 POST /admin-api/system/oauth2-client/create */
export function useCreateOAuth2ClientMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createOAuth2Client,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除 OAuth2 客户端 DELETE /admin-api/system/oauth2-client/delete */
export function useDeleteOAuth2ClientMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteOAuth2Client,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得 OAuth2 客户端 GET /admin-api/system/oauth2-client/get */
export function getOAuth2ClientQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOAuth2ClientParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOAuth2Client(queryKey[1] as typeof options);
    },
    queryKey: ['getOAuth2Client', options],
  });
}

/** 获得 OAuth2 客户端分页 GET /admin-api/system/oauth2-client/page */
export function getOAuth2ClientPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOAuth2ClientPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOAuth2ClientPage(queryKey[1] as typeof options);
    },
    queryKey: ['getOAuth2ClientPage', options],
  });
}

/** 更新 OAuth2 客户端 PUT /admin-api/system/oauth2-client/update */
export function useUpdateOAuth2ClientMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateOAuth2Client,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
