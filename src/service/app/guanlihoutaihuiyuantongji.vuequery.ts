/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaihuiyuantongji';
import * as API from './types';

/** 获得会员分析数据 GET /admin-api/statistics/member/analyse */
export function getMemberAnalyseQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMemberAnalyseParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMemberAnalyse(queryKey[1] as typeof options);
    },
    queryKey: ['getMemberAnalyse', options],
  });
}

/** 按照省份，获得会员统计列表 GET /admin-api/statistics/member/area-statistics-list */
export function getMemberAreaStatisticsListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMemberAreaStatisticsList(queryKey[1] as typeof options);
    },
    queryKey: ['getMemberAreaStatisticsList', options],
  });
}

/** 获得会员注册数量列表 GET /admin-api/statistics/member/register-count-list */
export function getMemberRegisterCountListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMemberRegisterCountListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMemberRegisterCountList(queryKey[1] as typeof options);
    },
    queryKey: ['getMemberRegisterCountList', options],
  });
}

/** 按照性别，获得会员统计列表 GET /admin-api/statistics/member/sex-statistics-list */
export function getMemberSexStatisticsListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMemberSexStatisticsList(queryKey[1] as typeof options);
    },
    queryKey: ['getMemberSexStatisticsList', options],
  });
}

/** 获得会员统计（实时统计） GET /admin-api/statistics/member/summary */
export function getMemberSummaryQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMemberSummary(queryKey[1] as typeof options);
    },
    queryKey: ['getMemberSummary', options],
  });
}

/** 按照终端，获得会员统计列表 GET /admin-api/statistics/member/terminal-statistics-list */
export function getMemberTerminalStatisticsListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMemberTerminalStatisticsList(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getMemberTerminalStatisticsList', options],
  });
}

/** 获得用户数量对照 GET /admin-api/statistics/member/user-count-comparison */
export function getUserCountComparisonQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUserCountComparison(queryKey[1] as typeof options);
    },
    queryKey: ['getUserCountComparison', options],
  });
}
