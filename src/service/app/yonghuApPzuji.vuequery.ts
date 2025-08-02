/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPzuji';
import * as API from './types';

/** 创建足迹 POST /app-api/yirenzhipin/app/zu-ji/create */
export function useCreateZuJiMutation(options?: {
  onSuccess?: (value?: API.CommonResultInteger) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createZuJi,
    onSuccess(data: API.CommonResultInteger) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得职位足迹 GET /app-api/yirenzhipin/app/zu-ji/get-by-job */
export function getZuJiByJobQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getZuJiByJob(queryKey[1] as typeof options);
    },
    queryKey: ['getZuJiByJob', options],
  });
}

/** 获得求职者足迹 GET /app-api/yirenzhipin/app/zu-ji/get-by-skeer */
export function getZuJiBySkeerQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getZuJiBySkeerParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getZuJiBySkeer(queryKey[1] as typeof options);
    },
    queryKey: ['getZuJiBySkeer', options],
  });
}

/** 获得足迹列表 GET /app-api/yirenzhipin/app/zu-ji/list */
export function getZuJiListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getZuJiList(queryKey[1] as typeof options);
    },
    queryKey: ['getZuJiList', options],
  });
}

/** 获得足迹分页 GET /app-api/yirenzhipin/app/zu-ji/page */
export function getZuJiPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getZuJiPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getZuJiPage(queryKey[1] as typeof options);
    },
    queryKey: ['getZuJiPage', options],
  });
}
