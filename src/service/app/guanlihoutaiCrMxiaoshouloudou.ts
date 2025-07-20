/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取商机转化率分析(按日期) 用于【销售漏斗】页面 GET /admin-api/crm/statistics-funnel/get-business-inversion-rate-summary-by-date */
export async function getBusinessInversionRateSummaryByDate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessInversionRateSummaryByDateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsBusinessInversionRateSummaryByDateRespVO>(
    '/admin-api/crm/statistics-funnel/get-business-inversion-rate-summary-by-date',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商机分页(按日期) 用于【销售漏斗】页面的【新增商机分析】 GET /admin-api/crm/statistics-funnel/get-business-page-by-date */
export async function getBusinessPageByDate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessPageByDateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmBusinessRespVO>(
    '/admin-api/crm/statistics-funnel/get-business-page-by-date',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取新增商机分析(按日期) 用于【销售漏斗】页面 GET /admin-api/crm/statistics-funnel/get-business-summary-by-date */
export async function getBusinessSummaryByDate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessSummaryByDateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsBusinessSummaryByDateRespVO>(
    '/admin-api/crm/statistics-funnel/get-business-summary-by-date',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取商机结束状态统计 用于【销售漏斗】页面的【销售漏斗分析】 GET /admin-api/crm/statistics-funnel/get-business-summary-by-end-status */
export async function getBusinessSummaryByEndStatus({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessSummaryByEndStatusParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsBusinessSummaryByEndStatusRespVO>(
    '/admin-api/crm/statistics-funnel/get-business-summary-by-end-status',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取销售漏斗统计数据 用于【销售漏斗】页面的【销售漏斗分析】 GET /admin-api/crm/statistics-funnel/get-funnel-summary */
export async function getFunnelSummary({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFunnelSummaryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmStatisticFunnelSummaryRespVO>(
    '/admin-api/crm/statistics-funnel/get-funnel-summary',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
