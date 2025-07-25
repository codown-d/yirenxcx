/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiyonghushoujiandezhi';
import * as API from './types';

/** 获得用户收件地址列表 GET /admin-api/member/address/list */
export function getAddressList1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAddressList1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getAddressList1(queryKey[1] as typeof options);
    },
    queryKey: ['getAddressList1', options],
  });
}
