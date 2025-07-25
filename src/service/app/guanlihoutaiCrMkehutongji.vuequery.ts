/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMkehutongji';
import * as API from './types';

/** 获取客户的首次合同、回款信息列表 用于【客户转化率】页面 GET /admin-api/crm/statistics-customer/get-contract-summary */
export function getContractSummaryQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractSummaryParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContractSummary(queryKey[1] as typeof options);
    },
    queryKey: ['getContractSummary', options],
  });
}

/** 获取客户成交周期(按用户) GET /admin-api/crm/statistics-customer/get-customer-deal-cycle-by-area */
export function getCustomerDealCycleByAreaQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerDealCycleByAreaParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerDealCycleByArea(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerDealCycleByArea', options],
  });
}

/** 获取客户成交周期(按日期) GET /admin-api/crm/statistics-customer/get-customer-deal-cycle-by-date */
export function getCustomerDealCycleByDateQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerDealCycleByDateParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerDealCycleByDate(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerDealCycleByDate', options],
  });
}

/** 获取客户成交周期(按用户) GET /admin-api/crm/statistics-customer/get-customer-deal-cycle-by-product */
export function getCustomerDealCycleByProductQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerDealCycleByProductParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerDealCycleByProduct(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerDealCycleByProduct', options],
  });
}

/** 获取客户成交周期(按用户) GET /admin-api/crm/statistics-customer/get-customer-deal-cycle-by-user */
export function getCustomerDealCycleByUserQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerDealCycleByUserParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerDealCycleByUser(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerDealCycleByUser', options],
  });
}

/** 获取客户总量分析(按日期) GET /admin-api/crm/statistics-customer/get-customer-summary-by-date */
export function getCustomerSummaryByDateQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerSummaryByDateParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerSummaryByDate(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerSummaryByDate', options],
  });
}

/** 获取客户总量分析(按用户) GET /admin-api/crm/statistics-customer/get-customer-summary-by-user */
export function getCustomerSummaryByUserQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerSummaryByUserParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerSummaryByUser(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerSummaryByUser', options],
  });
}

/** 获取客户跟进次数分析(按日期) GET /admin-api/crm/statistics-customer/get-follow-up-summary-by-date */
export function getFollowupSummaryByDateQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowupSummaryByDateParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFollowupSummaryByDate(queryKey[1] as typeof options);
    },
    queryKey: ['getFollowupSummaryByDate', options],
  });
}

/** 获取客户跟进次数分析(按类型) GET /admin-api/crm/statistics-customer/get-follow-up-summary-by-type */
export function getFollowUpSummaryByTypeQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowUpSummaryByTypeParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFollowUpSummaryByType(queryKey[1] as typeof options);
    },
    queryKey: ['getFollowUpSummaryByType', options],
  });
}

/** 获取客户跟进次数分析(按用户) GET /admin-api/crm/statistics-customer/get-follow-up-summary-by-user */
export function getFollowUpSummaryByUserQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowUpSummaryByUserParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFollowUpSummaryByUser(queryKey[1] as typeof options);
    },
    queryKey: ['getFollowUpSummaryByUser', options],
  });
}

/** 获取公海客户分析(按日期) GET /admin-api/crm/statistics-customer/get-pool-summary-by-date */
export function getPoolSummaryByDateQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPoolSummaryByDateParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPoolSummaryByDate(queryKey[1] as typeof options);
    },
    queryKey: ['getPoolSummaryByDate', options],
  });
}

/** 获取公海客户分析(按用户) GET /admin-api/crm/statistics-customer/get-pool-summary-by-user */
export function getPoolSummaryByUserQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPoolSummaryByUserParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPoolSummaryByUser(queryKey[1] as typeof options);
    },
    queryKey: ['getPoolSummaryByUser', options],
  });
}
