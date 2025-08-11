/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得用户积分记录分页 GET /app-api/member/point/record/page */
export async function getPointRecordPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppMemberPointRecordRespVO>(
    '/app-api/member/point/record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 签到 POST /app-api/member/sign-in/record/create */
export async function createSignInRecord({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppMemberSignInRecordRespVO>(
    '/app-api/member/sign-in/record/create',
    {
      method: 'POST',
      ...(options || {}),
    }
  );
}

/** 获得个人签到统计 GET /app-api/member/sign-in/record/get-summary */
export async function getSignInRecordSummary({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppMemberSignInRecordSummaryRespVO>(
    '/app-api/member/sign-in/record/get-summary',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得签到记录分页 GET /app-api/member/sign-in/record/page */
export async function getSignRecordPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSignRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppMemberSignInRecordRespVO>(
    '/app-api/member/sign-in/record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
