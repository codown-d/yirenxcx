/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得砍价活动详情 GET /app-api/promotion/bargain-activity/get-detail */
export async function getBargainActivityDetail({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainActivityDetailParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppBargainActivityDetailRespVO>(
    '/app-api/promotion/bargain-activity/get-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得砍价活动列表 用于小程序首页 GET /app-api/promotion/bargain-activity/list */
export async function getBargainActivityList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainActivityListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppBargainActivityRespVO>(
    '/app-api/promotion/bargain-activity/list',
    {
      method: 'GET',
      params: {
        // count has a default value: 6
        count: '6',
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得砍价活动分页 GET /app-api/promotion/bargain-activity/page */
export async function getBargainActivityPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainActivityPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppBargainActivityRespVO>(
    '/app-api/promotion/bargain-activity/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
