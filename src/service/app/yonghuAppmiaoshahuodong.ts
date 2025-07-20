/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得秒杀活动明细 GET /app-api/promotion/seckill-activity/get-detail */
export async function getSeckillActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppSeckillActivityDetailRespVO>(
    '/app-api/promotion/seckill-activity/get-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得当前秒杀活动 获取当前正在进行的活动，提供给首页使用 GET /app-api/promotion/seckill-activity/get-now */
export async function getNowSeckillActivity({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppSeckillActivityNowRespVO>(
    '/app-api/promotion/seckill-activity/get-now',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得秒杀活动列表，基于活动编号数组 GET /app-api/promotion/seckill-activity/list-by-ids */
export async function getCombinationActivityListByIds({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationActivityListByIdsParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppSeckillActivityRespVO>(
    '/app-api/promotion/seckill-activity/list-by-ids',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得秒杀活动分页 GET /app-api/promotion/seckill-activity/page */
export async function getSeckillActivityPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillActivityPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppSeckillActivityRespVO>(
    '/app-api/promotion/seckill-activity/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
