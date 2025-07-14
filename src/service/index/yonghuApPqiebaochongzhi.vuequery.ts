/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPqiebaochongzhi';
import * as API from './types';

/** 创建钱包充值记录（发起充值） POST /app-api/pay/wallet-recharge/create */
export function useCreateWalletRechargeMutation(options?: {
  onSuccess?: (
    value?: API.CommonResultAppPayWalletRechargeCreateRespVO
  ) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createWalletRecharge,
    onSuccess(data: API.CommonResultAppPayWalletRechargeCreateRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得钱包充值记录分页 GET /app-api/pay/wallet-recharge/page */
export function getWalletRechargePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletRechargePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWalletRechargePage(queryKey[1] as typeof options);
    },
    queryKey: ['getWalletRechargePage', options],
  });
}
