/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建示例订单 POST /admin-api/pay/demo-order/create */
export async function createDemoOrder({
  body,
  options,
}: {
  body: API.PayDemoOrderCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/pay/demo-order/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获得示例订单分页 GET /admin-api/pay/demo-order/page */
export async function getDemoOrderPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemoOrderPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultPayDemoOrderRespVO>(
    '/admin-api/pay/demo-order/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 发起示例订单的退款 PUT /admin-api/pay/demo-order/refund */
export async function refundDemoOrder({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.refundDemoOrderParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/pay/demo-order/refund', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新示例订单为已支付 POST /admin-api/pay/demo-order/update-paid */
export async function updateDemoOrderPaid({
  body,
  options,
}: {
  body: API.PayOrderNotifyReqDTO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/pay/demo-order/update-paid',
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

/** 更新示例订单为已退款 POST /admin-api/pay/demo-order/update-refunded */
export async function updateDemoOrderRefunded({
  body,
  options,
}: {
  body: API.PayRefundNotifyReqDTO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/pay/demo-order/update-refunded',
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
