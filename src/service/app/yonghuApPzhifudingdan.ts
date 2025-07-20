/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得支付订单 GET /app-api/pay/order/get */
export async function getOrder1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrder1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPayOrderRespVO>('/app-api/pay/order/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 提交支付订单 POST /app-api/pay/order/submit */
export async function submitPayOrder({
  body,
  options,
}: {
  body: API.AppPayOrderSubmitReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppPayOrderSubmitRespVO>(
    '/app-api/pay/order/submit',
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
