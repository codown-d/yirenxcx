/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得优惠劵模版 GET /app-api/promotion/coupon-template/get */
export async function getCouponTemplate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppCouponTemplateRespVO>(
    '/app-api/promotion/coupon-template/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得优惠劵模版列表 GET /app-api/promotion/coupon-template/list */
export async function getCouponTemplateList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplateListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppCouponTemplateRespVO>(
    '/app-api/promotion/coupon-template/list',
    {
      method: 'GET',
      params: {
        // count has a default value: 10
        count: '10',
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得优惠劵模版列表 GET /app-api/promotion/coupon-template/list-by-ids */
export async function getCouponTemplateList1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplateList1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppCouponTemplateRespVO>(
    '/app-api/promotion/coupon-template/list-by-ids',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得优惠劵模版分页 GET /app-api/promotion/coupon-template/page */
export async function getCouponTemplatePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplatePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppCouponTemplateRespVO>(
    '/app-api/promotion/coupon-template/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
