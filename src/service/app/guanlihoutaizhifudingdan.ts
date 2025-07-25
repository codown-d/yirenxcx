/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 导出支付订单 Excel GET /admin-api/pay/order/export-excel */
export async function exportOrderExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportOrderExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/pay/order/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得支付订单 GET /admin-api/pay/order/get */
export async function getOrder2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrder2Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPayOrderRespVO>('/admin-api/pay/order/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得支付订单详情 GET /admin-api/pay/order/get-detail */
export async function getOrderDetail3({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderDetail3Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPayOrderDetailsRespVO>(
    '/admin-api/pay/order/get-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得支付订单分页 GET /admin-api/pay/order/page */
export async function getOrderPage2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderPage2Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultPayOrderPageItemRespVO>(
    '/admin-api/pay/order/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 提交支付订单 POST /admin-api/pay/order/submit */
export async function submitPayOrder1({
  body,
  options,
}: {
  body: API.PayOrderSubmitReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPayOrderSubmitRespVO>(
    '/admin-api/pay/order/submit',
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
