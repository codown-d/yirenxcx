/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 合同数量统计 用于【合同数量分析】页面 GET /admin-api/crm/statistics-performance/get-contract-count-performance */
export async function getContractCountPerformance({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractCountPerformanceParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsPerformanceRespVO>(
    '/admin-api/crm/statistics-performance/get-contract-count-performance',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 合同金额统计 GET /admin-api/crm/statistics-performance/get-contract-price-performance */
export async function getContractPriceStaffPerformance({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractPriceStaffPerformanceParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsPerformanceRespVO>(
    '/admin-api/crm/statistics-performance/get-contract-price-performance',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 回款金额统计 GET /admin-api/crm/statistics-performance/get-receivable-price-performance */
export async function getReceivablePriceStaffPerformance({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePriceStaffPerformanceParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsPerformanceRespVO>(
    '/admin-api/crm/statistics-performance/get-receivable-price-performance',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
