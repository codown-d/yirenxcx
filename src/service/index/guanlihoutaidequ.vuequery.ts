/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaidequ';
import * as API from './types';

/** 获得 IP 对应的地区名 GET /admin-api/system/area/get-by-ip */
export function getAreaByIpQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAreaByIpParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getAreaByIp(queryKey[1] as typeof options);
    },
    queryKey: ['getAreaByIp', options],
  });
}

/** 获得地区树 GET /admin-api/system/area/tree */
export function getAreaTree1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getAreaTree1(queryKey[1] as typeof options);
    },
    queryKey: ['getAreaTree1', options],
  });
}
