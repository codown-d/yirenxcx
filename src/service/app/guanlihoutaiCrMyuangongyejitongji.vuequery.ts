/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMyuangongyejitongji';
import * as API from './types';

/** 合同数量统计 用于【合同数量分析】页面 GET /admin-api/crm/statistics-performance/get-contract-count-performance */
export function getContractCountPerformanceQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractCountPerformanceParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContractCountPerformance(queryKey[1] as typeof options);
    },
    queryKey: ['getContractCountPerformance', options],
  });
}

/** 合同金额统计 GET /admin-api/crm/statistics-performance/get-contract-price-performance */
export function getContractPriceStaffPerformanceQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractPriceStaffPerformanceParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContractPriceStaffPerformance(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getContractPriceStaffPerformance', options],
  });
}

/** 回款金额统计 GET /admin-api/crm/statistics-performance/get-receivable-price-performance */
export function getReceivablePriceStaffPerformanceQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePriceStaffPerformanceParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getReceivablePriceStaffPerformance(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getReceivablePriceStaffPerformance', options],
  });
}
