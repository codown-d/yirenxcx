/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 回收优惠劵 DELETE /admin-api/promotion/coupon/delete */
export async function deleteCoupon({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteCouponParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/coupon/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得优惠劵分页 GET /admin-api/promotion/coupon/page */
export async function getCouponPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCouponPageItemRespVO>(
    '/admin-api/promotion/coupon/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 发送优惠劵 POST /admin-api/promotion/coupon/send */
export async function sendCoupon({
  body,
  options,
}: {
  body: API.CouponSendReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/promotion/coupon/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
