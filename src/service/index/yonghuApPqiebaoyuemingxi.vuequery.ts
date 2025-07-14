/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPqiebaoyuemingxi';
import * as API from './types';

/** 获得钱包流水统计 GET /app-api/pay/wallet-transaction/get-summary */
export function getWalletTransactionSummaryQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletTransactionSummaryParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWalletTransactionSummary(queryKey[1] as typeof options);
    },
    queryKey: ['getWalletTransactionSummary', options],
  });
}

/** 获得钱包流水分页 GET /app-api/pay/wallet-transaction/page */
export function getWalletTransactionPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletTransactionPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWalletTransactionPage(queryKey[1] as typeof options);
    },
    queryKey: ['getWalletTransactionPage', options],
  });
}
