/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiguanlianbiao';
import * as API from './types';

/** 创建关联 POST /admin-api/yirenzhipin/guan-lian/create */
export function useCreateGuanLian1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createGuanLian1,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除关联 DELETE /admin-api/yirenzhipin/guan-lian/delete */
export function useDeleteGuanLianMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteGuanLian,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得关联 GET /admin-api/yirenzhipin/guan-lian/get */
export function getGuanLianQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getGuanLianParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getGuanLian(queryKey[1] as typeof options);
    },
    queryKey: ['getGuanLian', options],
  });
}

/** echarts统计数据 GET /admin-api/yirenzhipin/guan-lian/list */
export function getGuanLianListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getGuanLianList(queryKey[1] as typeof options);
    },
    queryKey: ['getGuanLianList', options],
  });
}
