/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得优惠劵 GET /app-api/promotion/coupon/get */
export async function getCoupon({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppCouponRespVO>(
    '/app-api/promotion/coupon/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得未使用的优惠劵数量 GET /app-api/promotion/coupon/get-unused-count */
export async function getUnusedCouponCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/app-api/promotion/coupon/get-unused-count',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 我的优惠劵列表 GET /app-api/promotion/coupon/page */
export async function getCouponPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppCouponRespVO>(
    '/app-api/promotion/coupon/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 领取优惠劵 POST /app-api/promotion/coupon/take */
export async function takeCoupon({
  params,
  body,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.takeCouponParams;
  body: API.AppCouponTakeReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/promotion/coupon/take', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}
