/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取客户的首次合同、回款信息列表 用于【客户转化率】页面 GET /admin-api/crm/statistics-customer/get-contract-summary */
export async function getContractSummary({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractSummaryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsCustomerContractSummaryRespVO>(
    '/admin-api/crm/statistics-customer/get-contract-summary',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取客户成交周期(按用户) GET /admin-api/crm/statistics-customer/get-customer-deal-cycle-by-area */
export async function getCustomerDealCycleByArea({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerDealCycleByAreaParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsCustomerDealCycleByAreaRespVO>(
    '/admin-api/crm/statistics-customer/get-customer-deal-cycle-by-area',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取客户成交周期(按日期) GET /admin-api/crm/statistics-customer/get-customer-deal-cycle-by-date */
export async function getCustomerDealCycleByDate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerDealCycleByDateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsCustomerDealCycleByDateRespVO>(
    '/admin-api/crm/statistics-customer/get-customer-deal-cycle-by-date',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取客户成交周期(按用户) GET /admin-api/crm/statistics-customer/get-customer-deal-cycle-by-product */
export async function getCustomerDealCycleByProduct({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerDealCycleByProductParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsCustomerDealCycleByProductRespVO>(
    '/admin-api/crm/statistics-customer/get-customer-deal-cycle-by-product',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取客户成交周期(按用户) GET /admin-api/crm/statistics-customer/get-customer-deal-cycle-by-user */
export async function getCustomerDealCycleByUser({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerDealCycleByUserParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsCustomerDealCycleByUserRespVO>(
    '/admin-api/crm/statistics-customer/get-customer-deal-cycle-by-user',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取客户总量分析(按日期) GET /admin-api/crm/statistics-customer/get-customer-summary-by-date */
export async function getCustomerSummaryByDate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerSummaryByDateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsCustomerSummaryByDateRespVO>(
    '/admin-api/crm/statistics-customer/get-customer-summary-by-date',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取客户总量分析(按用户) GET /admin-api/crm/statistics-customer/get-customer-summary-by-user */
export async function getCustomerSummaryByUser({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerSummaryByUserParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsCustomerSummaryByUserRespVO>(
    '/admin-api/crm/statistics-customer/get-customer-summary-by-user',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取客户跟进次数分析(按日期) GET /admin-api/crm/statistics-customer/get-follow-up-summary-by-date */
export async function getFollowupSummaryByDate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowupSummaryByDateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsFollowUpSummaryByDateRespVO>(
    '/admin-api/crm/statistics-customer/get-follow-up-summary-by-date',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取客户跟进次数分析(按类型) GET /admin-api/crm/statistics-customer/get-follow-up-summary-by-type */
export async function getFollowUpSummaryByType({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowUpSummaryByTypeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsFollowUpSummaryByTypeRespVO>(
    '/admin-api/crm/statistics-customer/get-follow-up-summary-by-type',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取客户跟进次数分析(按用户) GET /admin-api/crm/statistics-customer/get-follow-up-summary-by-user */
export async function getFollowUpSummaryByUser({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowUpSummaryByUserParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsFollowUpSummaryByUserRespVO>(
    '/admin-api/crm/statistics-customer/get-follow-up-summary-by-user',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取公海客户分析(按日期) GET /admin-api/crm/statistics-customer/get-pool-summary-by-date */
export async function getPoolSummaryByDate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPoolSummaryByDateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsPoolSummaryByDateRespVO>(
    '/admin-api/crm/statistics-customer/get-pool-summary-by-date',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取公海客户分析(按用户) GET /admin-api/crm/statistics-customer/get-pool-summary-by-user */
export async function getPoolSummaryByUser({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPoolSummaryByUserParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsPoolSummaryByUserRespVO>(
    '/admin-api/crm/statistics-customer/get-pool-summary-by-user',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
