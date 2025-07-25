/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取客户地区统计数据 用于【城市分布分析】页面 GET /admin-api/crm/statistics-portrait/get-customer-area-summary */
export async function getCustomerAreaSummary({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerAreaSummaryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticCustomerAreaRespVO>(
    '/admin-api/crm/statistics-portrait/get-customer-area-summary',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取客户行业统计数据 用于【客户行业分析】页面 GET /admin-api/crm/statistics-portrait/get-customer-industry-summary */
export async function getCustomerIndustrySummary({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerIndustrySummaryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticCustomerIndustryRespVO>(
    '/admin-api/crm/statistics-portrait/get-customer-industry-summary',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取客户级别统计数据 用于【客户级别分析】页面 GET /admin-api/crm/statistics-portrait/get-customer-level-summary */
export async function getCustomerLevelSummary({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerLevelSummaryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticCustomerLevelRespVO>(
    '/admin-api/crm/statistics-portrait/get-customer-level-summary',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取客户来源统计数据 用于【客户来源分析】页面 GET /admin-api/crm/statistics-portrait/get-customer-source-summary */
export async function getCustomerSourceSummary({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerSourceSummaryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticCustomerSourceRespVO>(
    '/admin-api/crm/statistics-portrait/get-customer-source-summary',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
