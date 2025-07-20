/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaizitimendian';
import * as API from './types';

/** 绑定自提店员 POST /admin-api/trade/delivery/pick-up-store/bind */
export function useBindDeliveryPickUpStoreMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.bindDeliveryPickUpStore,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 创建自提门店 POST /admin-api/trade/delivery/pick-up-store/create */
export function useCreateDeliveryPickUpStoreMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDeliveryPickUpStore,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除自提门店 DELETE /admin-api/trade/delivery/pick-up-store/delete */
export function useDeleteDeliveryPickUpStoreMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDeliveryPickUpStore,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得自提门店 GET /admin-api/trade/delivery/pick-up-store/get */
export function getDeliveryPickUpStoreQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryPickUpStoreParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDeliveryPickUpStore(queryKey[1] as typeof options);
    },
    queryKey: ['getDeliveryPickUpStore', options],
  });
}

/** 获得自提门店列表 GET /admin-api/trade/delivery/pick-up-store/list */
export function getDeliveryPickUpStoreList1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryPickUpStoreList1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDeliveryPickUpStoreList1(queryKey[1] as typeof options);
    },
    queryKey: ['getDeliveryPickUpStoreList1', options],
  });
}

/** 获得自提门店分页 GET /admin-api/trade/delivery/pick-up-store/page */
export function getDeliveryPickUpStorePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryPickUpStorePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDeliveryPickUpStorePage(queryKey[1] as typeof options);
    },
    queryKey: ['getDeliveryPickUpStorePage', options],
  });
}

/** 获得自提门店精简信息列表 GET /admin-api/trade/delivery/pick-up-store/simple-list */
export function getSimpleDeliveryPickUpStoreListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleDeliveryPickUpStoreList(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getSimpleDeliveryPickUpStoreList', options],
  });
}

/** 更新自提门店 PUT /admin-api/trade/delivery/pick-up-store/update */
export function useUpdateDeliveryPickUpStoreMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDeliveryPickUpStore,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
