/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPpintuanhuodong';
import * as API from './types';

/** 获得拼团活动明细 GET /app-api/promotion/combination-activity/get-detail */
export function getCombinationActivityDetailQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationActivityDetailParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCombinationActivityDetail(queryKey[1] as typeof options);
    },
    queryKey: ['getCombinationActivityDetail', options],
  });
}

/** 获得拼团活动列表，基于活动编号数组 GET /app-api/promotion/combination-activity/list-by-ids */
export function getCombinationActivityListByIds2QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationActivityListByIds2Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCombinationActivityListByIds2(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getCombinationActivityListByIds2', options],
  });
}

/** 获得拼团活动分页 GET /app-api/promotion/combination-activity/page */
export function getCombinationActivityPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationActivityPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCombinationActivityPage(queryKey[1] as typeof options);
    },
    queryKey: ['getCombinationActivityPage', options],
  });
}

/** 获得拼团记录明细 GET /app-api/promotion/combination-record/get-detail */
export function getCombinationRecordDetailQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationRecordDetailParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCombinationRecordDetail(queryKey[1] as typeof options);
    },
    queryKey: ['getCombinationRecordDetail', options],
  });
}

/** 获得最近 n 条拼团记录（团长发起的） GET /app-api/promotion/combination-record/get-head-list */
export function getHeadCombinationRecordListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getHeadCombinationRecordListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getHeadCombinationRecordList(queryKey[1] as typeof options);
    },
    queryKey: ['getHeadCombinationRecordList', options],
  });
}

/** 获得拼团记录的概要信息 用于小程序首页 GET /app-api/promotion/combination-record/get-summary */
export function getCombinationRecordSummaryQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCombinationRecordSummary(queryKey[1] as typeof options);
    },
    queryKey: ['getCombinationRecordSummary', options],
  });
}

/** 获得我的拼团记录分页 GET /app-api/promotion/combination-record/page */
export function getCombinationRecordPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCombinationRecordPage(queryKey[1] as typeof options);
    },
    queryKey: ['getCombinationRecordPage', options],
  });
}
