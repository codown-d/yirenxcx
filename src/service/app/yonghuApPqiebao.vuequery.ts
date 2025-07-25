/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPqiebao';
import * as API from './types';

/** 获取钱包 GET /app-api/pay/wallet/get */
export function getPayWalletQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPayWallet(queryKey[1] as typeof options);
    },
    queryKey: ['getPayWallet', options],
  });
}
