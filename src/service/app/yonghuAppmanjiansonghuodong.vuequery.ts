/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppmanjiansonghuodong';
import * as API from './types';

/** 获得满减送活动 GET /app-api/promotion/reward-activity/get */
export function getRewardActivityQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRewardActivityParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getRewardActivity(queryKey[1] as typeof options);
    },
    queryKey: ['getRewardActivity', options],
  });
}
