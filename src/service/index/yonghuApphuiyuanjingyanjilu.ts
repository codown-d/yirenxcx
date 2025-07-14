/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得会员经验记录分页 GET /app-api/member/experience-record/page */
export async function getExperienceRecordPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getExperienceRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppMemberExperienceRecordRespVO>(
    '/app-api/member/experience-record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
