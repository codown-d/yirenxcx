/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 取消售后 DELETE /app-api/trade/after-sale/cancel */
export async function cancelAfterSale({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.cancelAfterSaleParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/trade/after-sale/cancel', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 申请售后 POST /app-api/trade/after-sale/create */
export async function createAfterSale({
  body,
  options,
}: {
  body: API.AppAfterSaleCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/app-api/trade/after-sale/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退回货物 PUT /app-api/trade/after-sale/delivery */
export async function deliveryAfterSale({
  body,
  options,
}: {
  body: API.AppAfterSaleDeliveryReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/trade/after-sale/delivery',
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

/** 获得售后订单 GET /app-api/trade/after-sale/get */
export async function getAfterSale({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAfterSaleParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppAfterSaleRespVO>(
    '/app-api/trade/after-sale/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得售后分页 GET /app-api/trade/after-sale/page */
export async function getAfterSalePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAfterSalePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppAfterSaleRespVO>(
    '/app-api/trade/after-sale/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
