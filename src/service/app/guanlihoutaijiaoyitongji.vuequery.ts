/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaijiaoyitongji';
import * as API from './types';

/** 获得交易状况统计 GET /admin-api/statistics/trade/analyse */
export function getTradeStatisticsAnalyseQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTradeStatisticsAnalyseParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTradeStatisticsAnalyse(queryKey[1] as typeof options);
    },
    queryKey: ['getTradeStatisticsAnalyse', options],
  });
}

/** 导出获得交易状况明细 Excel GET /admin-api/statistics/trade/export-excel */
export function exportTradeStatisticsExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportTradeStatisticsExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportTradeStatisticsExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportTradeStatisticsExcel', options],
  });
}

/** 获得交易状况明细 GET /admin-api/statistics/trade/list */
export function getTradeStatisticsListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTradeStatisticsListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTradeStatisticsList(queryKey[1] as typeof options);
    },
    queryKey: ['getTradeStatisticsList', options],
  });
}

/** 获得交易订单数量 GET /admin-api/statistics/trade/order-comparison */
export function getOrderComparisonQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderComparison(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderComparison', options],
  });
}

/** 获得交易订单数量 GET /admin-api/statistics/trade/order-count */
export function getOrderCount1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderCount1(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderCount1', options],
  });
}

/** 获得订单量趋势统计 GET /admin-api/statistics/trade/order-count-trend */
export function getOrderCountTrendComparisonQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderCountTrendComparisonParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderCountTrendComparison(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderCountTrendComparison', options],
  });
}

/** 获得交易统计 GET /admin-api/statistics/trade/summary */
export function getTradeSummaryComparisonQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTradeSummaryComparison(queryKey[1] as typeof options);
    },
    queryKey: ['getTradeSummaryComparison', options],
  });
}
