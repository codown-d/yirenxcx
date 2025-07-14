/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPyonghushoujiandezhi';
import * as API from './types';

/** 创建用户收件地址 POST /app-api/member/address/create */
export function useCreateAddressMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createAddress,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除用户收件地址 DELETE /app-api/member/address/delete */
export function useDeleteAddressMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteAddress,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得用户收件地址 GET /app-api/member/address/get */
export function getAddressQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAddressParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getAddress(queryKey[1] as typeof options);
    },
    queryKey: ['getAddress', options],
  });
}

/** 获得默认的用户收件地址 GET /app-api/member/address/get-default */
export function getDefaultUserAddressQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDefaultUserAddress(queryKey[1] as typeof options);
    },
    queryKey: ['getDefaultUserAddress', options],
  });
}

/** 获得用户收件地址列表 GET /app-api/member/address/list */
export function getAddressListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getAddressList(queryKey[1] as typeof options);
    },
    queryKey: ['getAddressList', options],
  });
}

/** 更新用户收件地址 PUT /app-api/member/address/update */
export function useUpdateAddressMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateAddress,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
