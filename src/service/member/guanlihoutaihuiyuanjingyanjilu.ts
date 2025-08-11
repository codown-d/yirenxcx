/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得会员经验记录 GET /admin-api/member/experience-record/get */
export async function getExperienceRecord({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getExperienceRecordParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMemberExperienceRecordRespVO>(
    '/admin-api/member/experience-record/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得会员经验记录分页 GET /admin-api/member/experience-record/page */
export async function getExperienceRecordPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getExperienceRecordPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultMemberExperienceRecordRespVO>(
    '/admin-api/member/experience-record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
