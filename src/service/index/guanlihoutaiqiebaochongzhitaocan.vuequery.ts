/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiqiebaochongzhitaocan';
import * as API from './types';

/** 创建钱包充值套餐 POST /admin-api/pay/wallet-recharge-package/create */
export function useCreateWalletRechargePackageMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createWalletRechargePackage,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除钱包充值套餐 DELETE /admin-api/pay/wallet-recharge-package/delete */
export function useDeleteWalletRechargePackageMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteWalletRechargePackage,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得钱包充值套餐 GET /admin-api/pay/wallet-recharge-package/get */
export function getWalletRechargePackageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletRechargePackageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWalletRechargePackage(queryKey[1] as typeof options);
    },
    queryKey: ['getWalletRechargePackage', options],
  });
}

/** 获得钱包充值套餐分页 GET /admin-api/pay/wallet-recharge-package/page */
export function getWalletRechargePackagePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletRechargePackagePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWalletRechargePackagePage(queryKey[1] as typeof options);
    },
    queryKey: ['getWalletRechargePackagePage', options],
  });
}

/** 更新钱包充值套餐 PUT /admin-api/pay/wallet-recharge-package/update */
export function useUpdateWalletRechargePackageMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateWalletRechargePackage,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
