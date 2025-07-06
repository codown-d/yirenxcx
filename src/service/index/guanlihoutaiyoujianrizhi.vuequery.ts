/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiyoujianrizhi';
import * as API from './types';

/** 获得邮箱日志 GET /admin-api/system/mail-log/get */
export function getMailTemplate1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMailTemplate1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMailTemplate1(queryKey[1] as typeof options);
    },
    queryKey: ['getMailTemplate1', options],
  });
}

/** 获得邮箱日志分页 GET /admin-api/system/mail-log/page */
export function getMailLogPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMailLogPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMailLogPage(queryKey[1] as typeof options);
    },
    queryKey: ['getMailLogPage', options],
  });
}
