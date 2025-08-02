/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutailijitoudi';
import * as API from './types';

/** 创建立即投递 POST /admin-api/yirenzhipin/li-ji-tou-di/create */
export function useCreateLiJiTouDi1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createLiJiTouDi1,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除立即投递 DELETE /admin-api/yirenzhipin/li-ji-tou-di/delete */
export function useDeleteLiJiTouDi1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteLiJiTouDi1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 批量删除立即投递 DELETE /admin-api/yirenzhipin/li-ji-tou-di/delete-batch */
export function useDeleteLiJiTouDisMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteLiJiTouDis,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得立即投递 GET /admin-api/yirenzhipin/li-ji-tou-di/get */
export function getLiJiTouDi1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLiJiTouDi1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getLiJiTouDi1(queryKey[1] as typeof options);
    },
    queryKey: ['getLiJiTouDi1', options],
  });
}

/** 获得立即投递列表 GET /admin-api/yirenzhipin/li-ji-tou-di/list */
export function getLiJiTouDiListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLiJiTouDiListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getLiJiTouDiList(queryKey[1] as typeof options);
    },
    queryKey: ['getLiJiTouDiList', options],
  });
}

/** 获得立即投递分页 GET /admin-api/yirenzhipin/li-ji-tou-di/page */
export function getLiJiTouDiPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLiJiTouDiPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getLiJiTouDiPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getLiJiTouDiPage1', options],
  });
}

/** 更新立即投递 PUT /admin-api/yirenzhipin/li-ji-tou-di/update */
export function useUpdateLiJiTouDiMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateLiJiTouDi,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
