/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppmiaoshahuodong';
import * as API from './types';

/** 获得秒杀活动明细 GET /app-api/promotion/seckill-activity/get-detail */
export function getSeckillActivityQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillActivityParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSeckillActivity(queryKey[1] as typeof options);
    },
    queryKey: ['getSeckillActivity', options],
  });
}

/** 获得当前秒杀活动 获取当前正在进行的活动，提供给首页使用 GET /app-api/promotion/seckill-activity/get-now */
export function getNowSeckillActivityQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getNowSeckillActivity(queryKey[1] as typeof options);
    },
    queryKey: ['getNowSeckillActivity', options],
  });
}

/** 获得秒杀活动列表，基于活动编号数组 GET /app-api/promotion/seckill-activity/list-by-ids */
export function getCombinationActivityListByIdsQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationActivityListByIdsParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCombinationActivityListByIds(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getCombinationActivityListByIds', options],
  });
}

/** 获得秒杀活动分页 GET /app-api/promotion/seckill-activity/page */
export function getSeckillActivityPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillActivityPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSeckillActivityPage(queryKey[1] as typeof options);
    },
    queryKey: ['getSeckillActivityPage', options],
  });
}
