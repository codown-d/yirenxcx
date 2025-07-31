/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPguanlian';
import * as API from './types';

/** 创建关联 POST /app-api/yirenzhipin/app/guan-lian/create */
export function useCreateGuanLianMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createGuanLian,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获取关联 GET /app-api/yirenzhipin/app/guan-lian/get */
export function getGuanZhuJobSeekerQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getGuanZhuJobSeekerParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getGuanZhuJobSeeker(queryKey[1] as typeof options);
    },
    queryKey: ['getGuanZhuJobSeeker', options],
  });
}

/** 取消 PUT /app-api/yirenzhipin/app/guan-lian/update */
export function useUpdateMutation(options?: {
  onSuccess?: (value?: API.CommonResult) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.update,
    onSuccess(data: API.CommonResult) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
