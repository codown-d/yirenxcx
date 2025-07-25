/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppzitimendian';
import * as API from './types';

/** 获得自提门店 GET /app-api/trade/delivery/pick-up-store/get */
export function getOrderQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrder(queryKey[1] as typeof options);
    },
    queryKey: ['getOrder', options],
  });
}

/** 获得自提门店列表 GET /app-api/trade/delivery/pick-up-store/list */
export function getDeliveryPickUpStoreListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryPickUpStoreListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDeliveryPickUpStoreList(queryKey[1] as typeof options);
    },
    queryKey: ['getDeliveryPickUpStoreList', options],
  });
}
