/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMxiaoshouloudou';
import * as API from './types';

/** 获取商机转化率分析(按日期) 用于【销售漏斗】页面 GET /admin-api/crm/statistics-funnel/get-business-inversion-rate-summary-by-date */
export function getBusinessInversionRateSummaryByDateQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessInversionRateSummaryByDateParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBusinessInversionRateSummaryByDate(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getBusinessInversionRateSummaryByDate', options],
  });
}

/** 获得商机分页(按日期) 用于【销售漏斗】页面的【新增商机分析】 GET /admin-api/crm/statistics-funnel/get-business-page-by-date */
export function getBusinessPageByDateQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessPageByDateParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBusinessPageByDate(queryKey[1] as typeof options);
    },
    queryKey: ['getBusinessPageByDate', options],
  });
}

/** 获取新增商机分析(按日期) 用于【销售漏斗】页面 GET /admin-api/crm/statistics-funnel/get-business-summary-by-date */
export function getBusinessSummaryByDateQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessSummaryByDateParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBusinessSummaryByDate(queryKey[1] as typeof options);
    },
    queryKey: ['getBusinessSummaryByDate', options],
  });
}

/** 获取商机结束状态统计 用于【销售漏斗】页面的【销售漏斗分析】 GET /admin-api/crm/statistics-funnel/get-business-summary-by-end-status */
export function getBusinessSummaryByEndStatusQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessSummaryByEndStatusParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBusinessSummaryByEndStatus(queryKey[1] as typeof options);
    },
    queryKey: ['getBusinessSummaryByEndStatus', options],
  });
}

/** 获取销售漏斗统计数据 用于【销售漏斗】页面的【销售漏斗分析】 GET /admin-api/crm/statistics-funnel/get-funnel-summary */
export function getFunnelSummaryQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFunnelSummaryParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFunnelSummary(queryKey[1] as typeof options);
    },
    queryKey: ['getFunnelSummary', options],
  });
}
