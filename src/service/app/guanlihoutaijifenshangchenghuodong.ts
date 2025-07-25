/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 关闭积分商城活动 PUT /admin-api/promotion/point-activity/close */
export async function closeSeckillActivity1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.closeSeckillActivity1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/point-activity/close',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 创建积分商城活动 POST /admin-api/promotion/point-activity/create */
export async function createPointActivity({
  body,
  options,
}: {
  body: API.PointActivitySaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/promotion/point-activity/create',
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

/** 删除积分商城活动 DELETE /admin-api/promotion/point-activity/delete */
export async function deletePointActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deletePointActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/point-activity/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得积分商城活动 GET /admin-api/promotion/point-activity/get */
export async function getPointActivity1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointActivity1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPointActivityRespVO>(
    '/admin-api/promotion/point-activity/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得积分商城活动列表，基于活动编号数组 GET /admin-api/promotion/point-activity/list-by-ids */
export async function getPointActivityListByIds({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointActivityListByIdsParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListPointActivityRespVO>(
    '/admin-api/promotion/point-activity/list-by-ids',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得积分商城活动分页 GET /admin-api/promotion/point-activity/page */
export async function getPointActivityPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointActivityPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultPointActivityRespVO>(
    '/admin-api/promotion/point-activity/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新积分商城活动 PUT /admin-api/promotion/point-activity/update */
export async function updatePointActivity({
  body,
  options,
}: {
  body: API.PointActivitySaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/point-activity/update',
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
