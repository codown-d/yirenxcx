/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaizhifutongji';
import * as API from './types';

/** 获取充值金额 GET /admin-api/statistics/pay/summary */
export function getWalletRechargePriceQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWalletRechargePrice(queryKey[1] as typeof options);
    },
    queryKey: ['getWalletRechargePrice', options],
  });
}
