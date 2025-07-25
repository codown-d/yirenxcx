/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得拼团活动明细 GET /app-api/promotion/combination-activity/get-detail */
export async function getCombinationActivityDetail({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationActivityDetailParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppCombinationActivityDetailRespVO>(
    '/app-api/promotion/combination-activity/get-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得拼团活动列表，基于活动编号数组 GET /app-api/promotion/combination-activity/list-by-ids */
export async function getCombinationActivityListByIds2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationActivityListByIds2Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppCombinationActivityRespVO>(
    '/app-api/promotion/combination-activity/list-by-ids',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得拼团活动分页 GET /app-api/promotion/combination-activity/page */
export async function getCombinationActivityPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationActivityPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppCombinationActivityRespVO>(
    '/app-api/promotion/combination-activity/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得拼团记录明细 GET /app-api/promotion/combination-record/get-detail */
export async function getCombinationRecordDetail({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationRecordDetailParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppCombinationRecordDetailRespVO>(
    '/app-api/promotion/combination-record/get-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得最近 n 条拼团记录（团长发起的） GET /app-api/promotion/combination-record/get-head-list */
export async function getHeadCombinationRecordList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getHeadCombinationRecordListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppCombinationRecordRespVO>(
    '/app-api/promotion/combination-record/get-head-list',
    {
      method: 'GET',
      params: {
        // count has a default value: 20
        count: '20',
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得拼团记录的概要信息 用于小程序首页 GET /app-api/promotion/combination-record/get-summary */
export async function getCombinationRecordSummary({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppCombinationRecordSummaryRespVO>(
    '/app-api/promotion/combination-record/get-summary',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得我的拼团记录分页 GET /app-api/promotion/combination-record/page */
export async function getCombinationRecordPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppCombinationRecordRespVO>(
    '/app-api/promotion/combination-record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
