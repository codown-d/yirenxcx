/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMkehuhuaxiang';
import * as API from './types';

/** 获取客户地区统计数据 用于【城市分布分析】页面 GET /admin-api/crm/statistics-portrait/get-customer-area-summary */
export function getCustomerAreaSummaryQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerAreaSummaryParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerAreaSummary(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerAreaSummary', options],
  });
}

/** 获取客户行业统计数据 用于【客户行业分析】页面 GET /admin-api/crm/statistics-portrait/get-customer-industry-summary */
export function getCustomerIndustrySummaryQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerIndustrySummaryParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerIndustrySummary(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerIndustrySummary', options],
  });
}

/** 获取客户级别统计数据 用于【客户级别分析】页面 GET /admin-api/crm/statistics-portrait/get-customer-level-summary */
export function getCustomerLevelSummaryQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerLevelSummaryParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerLevelSummary(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerLevelSummary', options],
  });
}

/** 获取客户来源统计数据 用于【客户来源分析】页面 GET /admin-api/crm/statistics-portrait/get-customer-source-summary */
export function getCustomerSourceSummaryQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerSourceSummaryParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerSourceSummary(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerSourceSummary', options],
  });
}
