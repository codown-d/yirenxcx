/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得会员分析数据 GET /admin-api/statistics/member/analyse */
export async function getMemberAnalyse({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMemberAnalyseParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMemberAnalyseRespVO>(
    '/admin-api/statistics/member/analyse',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 按照省份，获得会员统计列表 GET /admin-api/statistics/member/area-statistics-list */
export async function getMemberAreaStatisticsList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMemberAreaStatisticsRespVO>(
    '/admin-api/statistics/member/area-statistics-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得会员注册数量列表 GET /admin-api/statistics/member/register-count-list */
export async function getMemberRegisterCountList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMemberRegisterCountListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMemberRegisterCountRespVO>(
    '/admin-api/statistics/member/register-count-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 按照性别，获得会员统计列表 GET /admin-api/statistics/member/sex-statistics-list */
export async function getMemberSexStatisticsList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMemberSexStatisticsRespVO>(
    '/admin-api/statistics/member/sex-statistics-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得会员统计（实时统计） GET /admin-api/statistics/member/summary */
export async function getMemberSummary({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMemberSummaryRespVO>(
    '/admin-api/statistics/member/summary',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 按照终端，获得会员统计列表 GET /admin-api/statistics/member/terminal-statistics-list */
export async function getMemberTerminalStatisticsList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMemberTerminalStatisticsRespVO>(
    '/admin-api/statistics/member/terminal-statistics-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得用户数量对照 GET /admin-api/statistics/member/user-count-comparison */
export async function getUserCountComparison({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDataComparisonRespVOMemberCountRespVO>(
    '/admin-api/statistics/member/user-count-comparison',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
