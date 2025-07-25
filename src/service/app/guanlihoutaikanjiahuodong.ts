/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 关闭砍价活动 PUT /admin-api/promotion/bargain-activity/close */
export async function closeSeckillActivity2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.closeSeckillActivity2Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/bargain-activity/close',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 创建砍价活动 POST /admin-api/promotion/bargain-activity/create */
export async function createBargainActivity({
  body,
  options,
}: {
  body: API.BargainActivityCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/promotion/bargain-activity/create',
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

/** 删除砍价活动 DELETE /admin-api/promotion/bargain-activity/delete */
export async function deleteBargainActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteBargainActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/bargain-activity/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得砍价活动 GET /admin-api/promotion/bargain-activity/get */
export async function getBargainActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBargainActivityRespVO>(
    '/admin-api/promotion/bargain-activity/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得砍价活动分页 GET /admin-api/promotion/bargain-activity/page */
export async function getBargainActivityPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainActivityPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBargainActivityPageItemRespVO>(
    '/admin-api/promotion/bargain-activity/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新砍价活动 PUT /admin-api/promotion/bargain-activity/update */
export async function updateBargainActivity({
  body,
  options,
}: {
  body: API.BargainActivityUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/bargain-activity/update',
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
