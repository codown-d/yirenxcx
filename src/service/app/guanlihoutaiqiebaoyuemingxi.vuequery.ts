/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiqiebaoyuemingxi';
import * as API from './types';

/** 获得钱包流水分页 GET /admin-api/pay/wallet-transaction/page */
export function getWalletTransactionPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletTransactionPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWalletTransactionPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getWalletTransactionPage1', options],
  });
}
