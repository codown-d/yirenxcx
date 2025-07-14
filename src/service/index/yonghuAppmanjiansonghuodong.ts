/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得满减送活动 GET /app-api/promotion/reward-activity/get */
export async function getRewardActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRewardActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppRewardActivityRespVO>(
    '/app-api/promotion/reward-activity/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
