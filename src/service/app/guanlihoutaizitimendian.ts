/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 绑定自提店员 POST /admin-api/trade/delivery/pick-up-store/bind */
export async function bindDeliveryPickUpStore({
  body,
  options,
}: {
  body: API.DeliveryPickUpBindReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/delivery/pick-up-store/bind',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 创建自提门店 POST /admin-api/trade/delivery/pick-up-store/create */
export async function createDeliveryPickUpStore({
  body,
  options,
}: {
  body: API.DeliveryPickUpStoreCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/trade/delivery/pick-up-store/create',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 删除自提门店 DELETE /admin-api/trade/delivery/pick-up-store/delete */
export async function deleteDeliveryPickUpStore({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDeliveryPickUpStoreParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/delivery/pick-up-store/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得自提门店 GET /admin-api/trade/delivery/pick-up-store/get */
export async function getDeliveryPickUpStore({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryPickUpStoreParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDeliveryPickUpStoreRespVO>(
    '/admin-api/trade/delivery/pick-up-store/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得自提门店列表 GET /admin-api/trade/delivery/pick-up-store/list */
export async function getDeliveryPickUpStoreList1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryPickUpStoreList1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDeliveryPickUpStoreRespVO>(
    '/admin-api/trade/delivery/pick-up-store/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得自提门店分页 GET /admin-api/trade/delivery/pick-up-store/page */
export async function getDeliveryPickUpStorePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryPickUpStorePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultDeliveryPickUpStoreRespVO>(
    '/admin-api/trade/delivery/pick-up-store/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得自提门店精简信息列表 GET /admin-api/trade/delivery/pick-up-store/simple-list */
export async function getSimpleDeliveryPickUpStoreList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDeliveryPickUpStoreSimpleRespVO>(
    '/admin-api/trade/delivery/pick-up-store/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新自提门店 PUT /admin-api/trade/delivery/pick-up-store/update */
export async function updateDeliveryPickUpStore({
  body,
  options,
}: {
  body: API.DeliveryPickUpStoreUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/delivery/pick-up-store/update',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}
