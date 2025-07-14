/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得单个商品，进行中的拼团、秒杀、砍价活动信息 每种活动，只返回一个 GET /app-api/promotion/activity/list-by-spu-id */
export async function getActivityListBySpuId({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getActivityListBySpuIdParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppActivityRespVO>(
    '/app-api/promotion/activity/list-by-spu-id',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
