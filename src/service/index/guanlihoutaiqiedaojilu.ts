/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得用户积分记录分页 GET /admin-api/member/point/record/page */
export async function getPointRecordPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointRecordPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultMemberPointRecordRespVO>(
    '/admin-api/member/point/record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得签到记录分页 GET /admin-api/member/sign-in/record/page */
export async function getSignInRecordPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSignInRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultMemberSignInRecordRespVO>(
    '/admin-api/member/sign-in/record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
