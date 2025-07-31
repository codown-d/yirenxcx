/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 过滤替换敏感词 POST /app-api/yirenzhipin/mingan/replace */
export async function getJobPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>(
    '/app-api/yirenzhipin/mingan/replace',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
