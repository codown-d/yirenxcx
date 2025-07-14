/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiqiedaojilu';
import * as API from './types';

/** 获得用户积分记录分页 GET /admin-api/member/point/record/page */
export function getPointRecordPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPointRecordPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPointRecordPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getPointRecordPage1', options],
  });
}

/** 获得签到记录分页 GET /admin-api/member/sign-in/record/page */
export function getSignInRecordPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSignInRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSignInRecordPage(queryKey[1] as typeof options);
    },
    queryKey: ['getSignInRecordPage', options],
  });
}
