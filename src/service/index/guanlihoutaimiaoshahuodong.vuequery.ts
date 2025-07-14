/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaimiaoshahuodong';
import * as API from './types';

/** 关闭秒杀活动 PUT /admin-api/promotion/seckill-activity/close */
export function useCloseSeckillActivityMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.closeSeckillActivity,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 创建秒杀活动 POST /admin-api/promotion/seckill-activity/create */
export function useCreateSeckillActivityMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createSeckillActivity,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除秒杀活动 DELETE /admin-api/promotion/seckill-activity/delete */
export function useDeleteSeckillActivityMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteSeckillActivity,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得秒杀活动 GET /admin-api/promotion/seckill-activity/get */
export function getSeckillActivity1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillActivity1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSeckillActivity1(queryKey[1] as typeof options);
    },
    queryKey: ['getSeckillActivity1', options],
  });
}

/** 获得秒杀活动列表，基于活动编号数组 GET /admin-api/promotion/seckill-activity/list-by-ids */
export function getSeckillActivityListByIdsQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillActivityListByIdsParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSeckillActivityListByIds(queryKey[1] as typeof options);
    },
    queryKey: ['getSeckillActivityListByIds', options],
  });
}

/** 获得秒杀活动分页 GET /admin-api/promotion/seckill-activity/page */
export function getSeckillActivityPage2QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillActivityPage2Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSeckillActivityPage2(queryKey[1] as typeof options);
    },
    queryKey: ['getSeckillActivityPage2', options],
  });
}

/** 更新秒杀活动 PUT /admin-api/promotion/seckill-activity/update */
export function useUpdateSeckillActivityMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateSeckillActivity,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
