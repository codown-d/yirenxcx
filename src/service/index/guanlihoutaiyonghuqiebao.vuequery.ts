/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiyonghuqiebao';
import * as API from './types';

/** 获得用户钱包明细 GET /admin-api/pay/wallet/get */
export function getWalletQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWallet(queryKey[1] as typeof options);
    },
    queryKey: ['getWallet', options],
  });
}

/** 获得会员钱包分页 GET /admin-api/pay/wallet/page */
export function getWalletPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWalletPage(queryKey[1] as typeof options);
    },
    queryKey: ['getWalletPage', options],
  });
}

/** 更新会员用户余额 PUT /admin-api/pay/wallet/update-balance */
export function useUpdateWalletBalanceMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateWalletBalance,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
