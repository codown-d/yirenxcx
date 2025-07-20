/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得装修页面 GET /app-api/promotion/diy-page/get */
export async function getDiyPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppDiyPagePropertyRespVO>(
    '/app-api/promotion/diy-page/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
