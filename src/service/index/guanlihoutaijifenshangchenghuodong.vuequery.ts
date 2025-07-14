/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaijifenshangchenghuodong';
import * as API from './types';

/** 关闭积分商城活动 PUT /admin-api/promotion/point-activity/close */
export function useCloseSeckillActivity1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.closeSeckillActivity1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 创建积分商城活动 POST /admin-api/promotion/point-activity/create */
export function useCreatePointActivityMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createPointActivity,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除积分商城活动 DELETE /admin-api/promotion/point-activity/delete */
export function useDeletePointActivityMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deletePointActivity,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得积分商城活动 GET /admin-api/promotion/point-activity/get */
export function getPointActivity1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointActivity1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPointActivity1(queryKey[1] as typeof options);
    },
    queryKey: ['getPointActivity1', options],
  });
}

/** 获得积分商城活动列表，基于活动编号数组 GET /admin-api/promotion/point-activity/list-by-ids */
export function getPointActivityListByIdsQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointActivityListByIdsParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPointActivityListByIds(queryKey[1] as typeof options);
    },
    queryKey: ['getPointActivityListByIds', options],
  });
}

/** 获得积分商城活动分页 GET /admin-api/promotion/point-activity/page */
export function getPointActivityPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointActivityPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPointActivityPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getPointActivityPage1', options],
  });
}

/** 更新积分商城活动 PUT /admin-api/promotion/point-activity/update */
export function useUpdatePointActivityMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updatePointActivity,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
