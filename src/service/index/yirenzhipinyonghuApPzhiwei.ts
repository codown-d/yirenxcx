/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得职位分页 GET /app-api/yirenzhipin/job/page */
export async function getJobPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppYRZPJobRespVO>(
    '/app-api/yirenzhipin/job/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
