/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得积分商城活动明细 GET /app-api/promotion/point-activity/get-detail */
export async function getPointActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppPointActivityDetailRespVO>(
    '/app-api/promotion/point-activity/get-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得积分商城活动列表，基于活动编号数组 GET /app-api/promotion/point-activity/list-by-ids */
export async function getCombinationActivityListByIds1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationActivityListByIds1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppPointActivityRespVO>(
    '/app-api/promotion/point-activity/list-by-ids',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得积分商城活动分页 GET /app-api/promotion/point-activity/page */
export async function getPointActivityPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointActivityPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppPointActivityRespVO>(
    '/app-api/promotion/point-activity/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
