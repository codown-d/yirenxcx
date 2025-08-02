/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPlijitoudi';
import * as API from './types';

/** 创建立即投递 POST /app-api/yirenzhipin/app/li-ji-tou-di/create */
export function useCreateLiJiTouDiMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createLiJiTouDi,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除立即投递 DELETE /app-api/yirenzhipin/app/li-ji-tou-di/delete */
export function useDeleteLiJiTouDiMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteLiJiTouDi,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得立即投递 GET /app-api/yirenzhipin/app/li-ji-tou-di/get */
export function getLiJiTouDiQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLiJiTouDiParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getLiJiTouDi(queryKey[1] as typeof options);
    },
    queryKey: ['getLiJiTouDi', options],
  });
}

/** 获得当前用户公司的立即投递列表 GET /app-api/yirenzhipin/app/li-ji-tou-di/list-by-job */
export function getLiJiTouDiListByUserQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getLiJiTouDiListByUser(queryKey[1] as typeof options);
    },
    queryKey: ['getLiJiTouDiListByUser', options],
  });
}

/** 获得求职者的立即投递列表 GET /app-api/yirenzhipin/app/li-ji-tou-di/list-by-seeker */
export function getLiJiTouDiListBySeekerQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getLiJiTouDiListBySeeker(queryKey[1] as typeof options);
    },
    queryKey: ['getLiJiTouDiListBySeeker', options],
  });
}

/** 获得立即投递分页 GET /app-api/yirenzhipin/app/li-ji-tou-di/page */
export function getLiJiTouDiPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLiJiTouDiPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getLiJiTouDiPage(queryKey[1] as typeof options);
    },
    queryKey: ['getLiJiTouDiPage', options],
  });
}
