/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得求职者分页 GET /app-api/yirenzhipin/job-seeker/page */
export async function getJobSeekerPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobSeekerPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppYRZPJobSeekerRespVO>(
    '/app-api/yirenzhipin/job-seeker/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
