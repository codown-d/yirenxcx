/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiduanxinrizhi';
import * as API from './types';

/** 导出短信日志 Excel GET /admin-api/system/sms-log/export-excel */
export function exportSmsLogExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportSmsLogExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportSmsLogExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportSmsLogExcel', options],
  });
}

/** 获得短信日志分页 GET /admin-api/system/sms-log/page */
export function getSmsLogPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSmsLogPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSmsLogPage(queryKey[1] as typeof options);
    },
    queryKey: ['getSmsLogPage', options],
  });
}
