/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得 IP 对应的地区名 GET /admin-api/system/area/get-by-ip */
export async function getAreaByIp({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAreaByIpParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/admin-api/system/area/get-by-ip', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得地区树 GET /admin-api/system/area/tree */
export async function getAreaTree1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAreaNodeRespVO>(
    '/admin-api/system/area/tree',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
