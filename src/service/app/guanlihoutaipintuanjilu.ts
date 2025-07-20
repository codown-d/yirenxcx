/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得拼团记录的概要信息 用于拼团记录页面展示 GET /admin-api/promotion/combination-record/get-summary */
export async function getCombinationRecordSummary1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCombinationRecordSummaryVO>(
    '/admin-api/promotion/combination-record/get-summary',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得拼团记录分页 GET /admin-api/promotion/combination-record/page */
export async function getCombinationRecordPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationRecordPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCombinationRecordPageItemRespVO>(
    '/admin-api/promotion/combination-record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
