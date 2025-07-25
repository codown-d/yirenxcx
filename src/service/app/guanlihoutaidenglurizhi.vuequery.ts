/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaidenglurizhi';
import * as API from './types';

/** 导出登录日志 Excel GET /admin-api/system/login-log/export */
export function exportLoginLogQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportLoginLogParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportLoginLog(queryKey[1] as typeof options);
    },
    queryKey: ['exportLoginLog', options],
  });
}

/** 获得登录日志分页列表 GET /admin-api/system/login-log/page */
export function getLoginLogPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLoginLogPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getLoginLogPage(queryKey[1] as typeof options);
    },
    queryKey: ['getLoginLogPage', options],
  });
}
