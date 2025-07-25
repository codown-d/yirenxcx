/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaidingshirenwurizhi';
import * as API from './types';

/** 导出定时任务日志 Excel GET /admin-api/infra/job-log/export-excel */
export function exportJobLogExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportJobLogExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportJobLogExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportJobLogExcel', options],
  });
}

/** 获得定时任务日志 GET /admin-api/infra/job-log/get */
export function getJobLogQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobLogParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getJobLog(queryKey[1] as typeof options);
    },
    queryKey: ['getJobLog', options],
  });
}

/** 获得定时任务日志分页 GET /admin-api/infra/job-log/page */
export function getJobLogPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobLogPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getJobLogPage(queryKey[1] as typeof options);
    },
    queryKey: ['getJobLogPage', options],
  });
}
