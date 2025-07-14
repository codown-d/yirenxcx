/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPfenxiaotixian';
import * as API from './types';

/** 创建分销提现 POST /app-api/trade/brokerage-withdraw/create */
export function useCreateBrokerageWithdrawMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createBrokerageWithdraw,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得佣金提现 GET /app-api/trade/brokerage-withdraw/get */
export function getBrokerageWithdrawQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageWithdrawParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrokerageWithdraw(queryKey[1] as typeof options);
    },
    queryKey: ['getBrokerageWithdraw', options],
  });
}

/** 获得分销提现分页 GET /app-api/trade/brokerage-withdraw/page */
export function getBrokerageWithdrawPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageWithdrawPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrokerageWithdrawPage(queryKey[1] as typeof options);
    },
    queryKey: ['getBrokerageWithdrawPage', options],
  });
}
