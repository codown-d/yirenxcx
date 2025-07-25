/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiApIfangwenrizhi';
import * as API from './types';

/** 导出API 访问日志 Excel GET /admin-api/infra/api-access-log/export-excel */
export function exportApiAccessLogExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportApiAccessLogExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportApiAccessLogExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportApiAccessLogExcel', options],
  });
}

/** 获得API 访问日志分页 GET /admin-api/infra/api-access-log/page */
export function getApiAccessLogPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getApiAccessLogPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getApiAccessLogPage(queryKey[1] as typeof options);
    },
    queryKey: ['getApiAccessLogPage', options],
  });
}
