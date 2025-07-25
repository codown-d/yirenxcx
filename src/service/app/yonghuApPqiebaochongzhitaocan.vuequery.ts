/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPqiebaochongzhitaocan';
import * as API from './types';

/** 获得钱包充值套餐列表 GET /app-api/pay/wallet-recharge-package/list */
export function getWalletRechargePackageListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWalletRechargePackageList(queryKey[1] as typeof options);
    },
    queryKey: ['getWalletRechargePackageList', options],
  });
}
