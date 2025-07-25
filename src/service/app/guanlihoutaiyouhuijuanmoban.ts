/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建优惠劵模板 POST /admin-api/promotion/coupon-template/create */
export async function createCouponTemplate({
  body,
  options,
}: {
  body: API.CouponTemplateCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/promotion/coupon-template/create',
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

/** 删除优惠劵模板 DELETE /admin-api/promotion/coupon-template/delete */
export async function deleteCouponTemplate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteCouponTemplateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/coupon-template/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得优惠劵模板 GET /admin-api/promotion/coupon-template/get */
export async function getCouponTemplate1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplate1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCouponTemplateRespVO>(
    '/admin-api/promotion/coupon-template/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得优惠劵模板列表 GET /admin-api/promotion/coupon-template/list */
export async function getCouponTemplateList2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplateList2Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCouponTemplateRespVO>(
    '/admin-api/promotion/coupon-template/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得优惠劵模板分页 GET /admin-api/promotion/coupon-template/page */
export async function getCouponTemplatePage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplatePage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCouponTemplateRespVO>(
    '/admin-api/promotion/coupon-template/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新优惠劵模板 PUT /admin-api/promotion/coupon-template/update */
export async function updateCouponTemplate({
  body,
  options,
}: {
  body: API.CouponTemplateUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/coupon-template/update',
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

/** 更新优惠劵模板状态 PUT /admin-api/promotion/coupon-template/update-status */
export async function updateCouponTemplateStatus({
  body,
  options,
}: {
  body: API.CouponTemplateUpdateStatusReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/coupon-template/update-status',
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
