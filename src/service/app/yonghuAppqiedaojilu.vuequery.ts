/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppqiedaojilu';
import * as API from './types';

/** 获得用户积分记录分页 GET /app-api/member/point/record/page */
export function getPointRecordPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPointRecordPage(queryKey[1] as typeof options);
    },
    queryKey: ['getPointRecordPage', options],
  });
}

/** 签到 POST /app-api/member/sign-in/record/create */
export function useCreateSignInRecordMutation(options?: {
  onSuccess?: (value?: API.CommonResultAppMemberSignInRecordRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createSignInRecord,
    onSuccess(data: API.CommonResultAppMemberSignInRecordRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得个人签到统计 GET /app-api/member/sign-in/record/get-summary */
export function getSignInRecordSummaryQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSignInRecordSummary(queryKey[1] as typeof options);
    },
    queryKey: ['getSignInRecordSummary', options],
  });
}

/** 获得签到记录分页 GET /app-api/member/sign-in/record/page */
export function getSignRecordPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSignRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSignRecordPage(queryKey[1] as typeof options);
    },
    queryKey: ['getSignRecordPage', options],
  });
}
