/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 关闭限时折扣活动 PUT /admin-api/promotion/discount-activity/close */
export async function closeRewardActivity1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.closeRewardActivity1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/discount-activity/close',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 创建限时折扣活动 POST /admin-api/promotion/discount-activity/create */
export async function createDiscountActivity({
  body,
  options,
}: {
  body: API.DiscountActivityCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/promotion/discount-activity/create',
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

/** 删除限时折扣活动 DELETE /admin-api/promotion/discount-activity/delete */
export async function deleteDiscountActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDiscountActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/discount-activity/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得限时折扣活动 GET /admin-api/promotion/discount-activity/get */
export async function getDiscountActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiscountActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDiscountActivityRespVO>(
    '/admin-api/promotion/discount-activity/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得限时折扣活动分页 GET /admin-api/promotion/discount-activity/page */
export async function getDiscountActivityPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiscountActivityPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultDiscountActivityRespVO>(
    '/admin-api/promotion/discount-activity/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新限时折扣活动 PUT /admin-api/promotion/discount-activity/update */
export async function updateDiscountActivity({
  body,
  options,
}: {
  body: API.DiscountActivityUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/discount-activity/update',
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
