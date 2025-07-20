/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppkanjiazhuli';
import * as API from './types';

/** 创建砍价助力 给拼团记录砍一刀 POST /app-api/promotion/bargain-help/create */
export function useCreateBargainHelpMutation(options?: {
  onSuccess?: (value?: API.CommonResultInteger) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createBargainHelp,
    onSuccess(data: API.CommonResultInteger) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得砍价助力列表 GET /app-api/promotion/bargain-help/list */
export function getBargainHelpListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainHelpListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBargainHelpList(queryKey[1] as typeof options);
    },
    queryKey: ['getBargainHelpList', options],
  });
}
