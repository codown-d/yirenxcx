/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得回调通知的明细 GET /admin-api/pay/notify/get-detail */
export async function getNotifyTaskDetail({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNotifyTaskDetailParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPayNotifyTaskDetailRespVO>(
    '/admin-api/pay/notify/get-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 支付渠道的统一【支付】回调 POST /admin-api/pay/notify/order/${param0} */
export async function notifyOrder({
  params,
  body,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.notifyOrderParams;
  body: string;
  options?: CustomRequestOptions;
}) {
  const { channelId: param0, ...queryParams } = params;

  return request<string>(`/admin-api/pay/notify/order/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获得回调通知分页 GET /admin-api/pay/notify/page */
export async function getNotifyTaskPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNotifyTaskPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultPayNotifyTaskRespVO>(
    '/admin-api/pay/notify/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 支付渠道的统一【退款】回调 POST /admin-api/pay/notify/refund/${param0} */
export async function notifyRefund({
  params,
  body,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.notifyRefundParams;
  body: string;
  options?: CustomRequestOptions;
}) {
  const { channelId: param0, ...queryParams } = params;

  return request<string>(`/admin-api/pay/notify/refund/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 支付渠道的统一【转账】回调 POST /admin-api/pay/notify/transfer/${param0} */
export async function notifyTransfer({
  params,
  body,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.notifyTransferParams;
  body: string;
  options?: CustomRequestOptions;
}) {
  const { channelId: param0, ...queryParams } = params;

  return request<string>(`/admin-api/pay/notify/transfer/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
