/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppjifenshangchenghuodong';
import * as API from './types';

/** 获得积分商城活动明细 GET /app-api/promotion/point-activity/get-detail */
export function getPointActivityQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointActivityParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPointActivity(queryKey[1] as typeof options);
    },
    queryKey: ['getPointActivity', options],
  });
}

/** 获得积分商城活动列表，基于活动编号数组 GET /app-api/promotion/point-activity/list-by-ids */
export function getCombinationActivityListByIds1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationActivityListByIds1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCombinationActivityListByIds1(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getCombinationActivityListByIds1', options],
  });
}

/** 获得积分商城活动分页 GET /app-api/promotion/point-activity/page */
export function getPointActivityPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointActivityPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPointActivityPage(queryKey[1] as typeof options);
    },
    queryKey: ['getPointActivityPage', options],
  });
}
