/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得自提门店 GET /app-api/trade/delivery/pick-up-store/get */
export async function getOrder({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppDeliveryPickUpStoreRespVO>(
    '/app-api/trade/delivery/pick-up-store/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得自提门店列表 GET /app-api/trade/delivery/pick-up-store/list */
export async function getDeliveryPickUpStoreList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryPickUpStoreListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppDeliveryPickUpStoreRespVO>(
    '/app-api/trade/delivery/pick-up-store/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
