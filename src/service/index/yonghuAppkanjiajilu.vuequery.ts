/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppkanjiajilu';
import * as API from './types';

/** 创建砍价记录 参与砍价活动 POST /app-api/promotion/bargain-record/create */
export function useCreateBargainRecordMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createBargainRecord,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得砍价记录的明细 GET /app-api/promotion/bargain-record/get-detail */
export function getBargainRecordDetailQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainRecordDetailParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBargainRecordDetail(queryKey[1] as typeof options);
    },
    queryKey: ['getBargainRecordDetail', options],
  });
}

/** 获得砍价记录的概要信息 用于小程序首页 GET /app-api/promotion/bargain-record/get-summary */
export function getBargainRecordSummaryQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBargainRecordSummary(queryKey[1] as typeof options);
    },
    queryKey: ['getBargainRecordSummary', options],
  });
}

/** 获得砍价记录的分页 GET /app-api/promotion/bargain-record/page */
export function getBargainRecordPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBargainRecordPage(queryKey[1] as typeof options);
    },
    queryKey: ['getBargainRecordPage', options],
  });
}
