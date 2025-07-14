/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppkanjiahuodong';
import * as API from './types';

/** 获得砍价活动详情 GET /app-api/promotion/bargain-activity/get-detail */
export function getBargainActivityDetailQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainActivityDetailParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBargainActivityDetail(queryKey[1] as typeof options);
    },
    queryKey: ['getBargainActivityDetail', options],
  });
}

/** 获得砍价活动列表 用于小程序首页 GET /app-api/promotion/bargain-activity/list */
export function getBargainActivityListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainActivityListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBargainActivityList(queryKey[1] as typeof options);
    },
    queryKey: ['getBargainActivityList', options],
  });
}

/** 获得砍价活动分页 GET /app-api/promotion/bargain-activity/page */
export function getBargainActivityPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainActivityPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBargainActivityPage(queryKey[1] as typeof options);
    },
    queryKey: ['getBargainActivityPage', options],
  });
}
