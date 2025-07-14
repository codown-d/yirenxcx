/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得交易状况统计 GET /admin-api/statistics/trade/analyse */
export async function getTradeStatisticsAnalyse({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTradeStatisticsAnalyseParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDataComparisonRespVOTradeTrendSummaryRespVO>(
    '/admin-api/statistics/trade/analyse',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 导出获得交易状况明细 Excel GET /admin-api/statistics/trade/export-excel */
export async function exportTradeStatisticsExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportTradeStatisticsExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/statistics/trade/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得交易状况明细 GET /admin-api/statistics/trade/list */
export async function getTradeStatisticsList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTradeStatisticsListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListTradeTrendSummaryRespVO>(
    '/admin-api/statistics/trade/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得交易订单数量 GET /admin-api/statistics/trade/order-comparison */
export async function getOrderComparison({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDataComparisonRespVOTradeOrderSummaryRespVO>(
    '/admin-api/statistics/trade/order-comparison',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得交易订单数量 GET /admin-api/statistics/trade/order-count */
export async function getOrderCount1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultTradeOrderCountRespVO>(
    '/admin-api/statistics/trade/order-count',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得订单量趋势统计 GET /admin-api/statistics/trade/order-count-trend */
export async function getOrderCountTrendComparison({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderCountTrendComparisonParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDataComparisonRespVOTradeOrderTrendRespVO>(
    '/admin-api/statistics/trade/order-count-trend',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得交易统计 GET /admin-api/statistics/trade/summary */
export async function getTradeSummaryComparison({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDataComparisonRespVOTradeSummaryRespVO>(
    '/admin-api/statistics/trade/summary',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
