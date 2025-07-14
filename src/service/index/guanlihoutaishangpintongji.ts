/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得商品统计分析 GET /admin-api/statistics/product/analyse */
export async function getProductStatisticsAnalyse({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductStatisticsAnalyseParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDataComparisonRespVOProductStatisticsRespVO>(
    '/admin-api/statistics/product/analyse',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 导出获得商品统计明细 Excel（日期维度） GET /admin-api/statistics/product/export-excel */
export async function exportProductStatisticsExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportProductStatisticsExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/statistics/product/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得商品统计明细（日期维度） GET /admin-api/statistics/product/list */
export async function getProductStatisticsList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductStatisticsListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListProductStatisticsRespVO>(
    '/admin-api/statistics/product/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商品统计排行榜分页（商品维度） GET /admin-api/statistics/product/rank-page */
export async function getProductStatisticsRankPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductStatisticsRankPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultProductStatisticsRespVO>(
    '/admin-api/statistics/product/rank-page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
