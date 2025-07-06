/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaicaozuorizhi';
import * as API from './types';

/** 导出操作日志 GET /admin-api/system/operate-log/export */
export function exportOperateLogQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportOperateLogParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportOperateLog(queryKey[1] as typeof options);
    },
    queryKey: ['exportOperateLog', options],
  });
}

/** 查看操作日志分页列表 GET /admin-api/system/operate-log/page */
export function pageOperateLogQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.pageOperateLogParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.pageOperateLog(queryKey[1] as typeof options);
    },
    queryKey: ['pageOperateLog', options],
  });
}
