/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaimiaoshashiduan';
import * as API from './types';

/** 创建秒杀时段 POST /admin-api/promotion/seckill-config/create */
export function useCreateSeckillConfigMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createSeckillConfig,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除秒杀时段 DELETE /admin-api/promotion/seckill-config/delete */
export function useDeleteSeckillConfigMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteSeckillConfig,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得秒杀时段 GET /admin-api/promotion/seckill-config/get */
export function getSeckillConfigQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillConfigParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSeckillConfig(queryKey[1] as typeof options);
    },
    queryKey: ['getSeckillConfig', options],
  });
}

/** 获得所有秒杀时段列表 GET /admin-api/promotion/seckill-config/list */
export function getSeckillConfigList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSeckillConfigList1(queryKey[1] as typeof options);
    },
    queryKey: ['getSeckillConfigList1', options],
  });
}

/** 获得秒杀时间段分页 GET /admin-api/promotion/seckill-config/page */
export function getSeckillActivityPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillActivityPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSeckillActivityPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getSeckillActivityPage1', options],
  });
}

/** 获得所有开启状态的秒杀时段精简列表 主要用于前端的下拉选项 GET /admin-api/promotion/seckill-config/simple-list */
export function getSeckillConfigSimpleListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSeckillConfigSimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getSeckillConfigSimpleList', options],
  });
}

/** 更新秒杀时段 PUT /admin-api/promotion/seckill-config/update */
export function useUpdateSeckillConfigMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateSeckillConfig,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 修改时段配置状态 PUT /admin-api/promotion/seckill-config/update-status */
export function useUpdateSeckillConfigStatusMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateSeckillConfigStatus,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
