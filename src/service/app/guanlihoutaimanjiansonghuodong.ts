/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 关闭满减送活动 PUT /admin-api/promotion/reward-activity/close */
export async function closeRewardActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.closeRewardActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/reward-activity/close',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 创建满减送活动 POST /admin-api/promotion/reward-activity/create */
export async function createRewardActivity({
  body,
  options,
}: {
  body: API.RewardActivityCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/promotion/reward-activity/create',
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

/** 删除满减送活动 DELETE /admin-api/promotion/reward-activity/delete */
export async function deleteRewardActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteRewardActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/reward-activity/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得满减送活动 GET /admin-api/promotion/reward-activity/get */
export async function getRewardActivity1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRewardActivity1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultRewardActivityRespVO>(
    '/admin-api/promotion/reward-activity/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得满减送活动分页 GET /admin-api/promotion/reward-activity/page */
export async function getRewardActivityPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRewardActivityPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultRewardActivityRespVO>(
    '/admin-api/promotion/reward-activity/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新满减送活动 PUT /admin-api/promotion/reward-activity/update */
export async function updateRewardActivity({
  body,
  options,
}: {
  body: API.RewardActivityUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/reward-activity/update',
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
