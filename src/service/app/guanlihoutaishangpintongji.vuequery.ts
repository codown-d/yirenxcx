/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaishangpintongji';
import * as API from './types';

/** 获得商品统计分析 GET /admin-api/statistics/product/analyse */
export function getProductStatisticsAnalyseQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductStatisticsAnalyseParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProductStatisticsAnalyse(queryKey[1] as typeof options);
    },
    queryKey: ['getProductStatisticsAnalyse', options],
  });
}

/** 导出获得商品统计明细 Excel（日期维度） GET /admin-api/statistics/product/export-excel */
export function exportProductStatisticsExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportProductStatisticsExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportProductStatisticsExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportProductStatisticsExcel', options],
  });
}

/** 获得商品统计明细（日期维度） GET /admin-api/statistics/product/list */
export function getProductStatisticsListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductStatisticsListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProductStatisticsList(queryKey[1] as typeof options);
    },
    queryKey: ['getProductStatisticsList', options],
  });
}

/** 获得商品统计排行榜分页（商品维度） GET /admin-api/statistics/product/rank-page */
export function getProductStatisticsRankPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductStatisticsRankPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProductStatisticsRankPage(queryKey[1] as typeof options);
    },
    queryKey: ['getProductStatisticsRankPage', options],
  });
}
