/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 导出短信日志 Excel GET /admin-api/system/sms-log/export-excel */
export async function exportSmsLogExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportSmsLogExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/system/sms-log/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得短信日志分页 GET /admin-api/system/sms-log/page */
export async function getSmsLogPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSmsLogPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultSmsLogRespVO>(
    '/admin-api/system/sms-log/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
