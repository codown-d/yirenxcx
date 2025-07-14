/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 关闭拼团活动 PUT /admin-api/promotion/combination-activity/close */
export async function closeCombinationActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.closeCombinationActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/combination-activity/close',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 创建拼团活动 POST /admin-api/promotion/combination-activity/create */
export async function createCombinationActivity({
  body,
  options,
}: {
  body: API.CombinationActivityCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/promotion/combination-activity/create',
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

/** 删除拼团活动 DELETE /admin-api/promotion/combination-activity/delete */
export async function deleteCombinationActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteCombinationActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/combination-activity/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得拼团活动 GET /admin-api/promotion/combination-activity/get */
export async function getCombinationActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCombinationActivityRespVO>(
    '/admin-api/promotion/combination-activity/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得拼团活动列表，基于活动编号数组 GET /admin-api/promotion/combination-activity/list-by-ids */
export async function getCombinationActivityListByIds3({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationActivityListByIds3Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCombinationActivityRespVO>(
    '/admin-api/promotion/combination-activity/list-by-ids',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得拼团活动分页 GET /admin-api/promotion/combination-activity/page */
export async function getCombinationActivityPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationActivityPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCombinationActivityPageItemRespVO>(
    '/admin-api/promotion/combination-activity/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新拼团活动 PUT /admin-api/promotion/combination-activity/update */
export async function updateCombinationActivity({
  body,
  options,
}: {
  body: API.CombinationActivityUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/combination-activity/update',
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
