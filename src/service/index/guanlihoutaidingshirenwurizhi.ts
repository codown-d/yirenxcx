/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 导出定时任务日志 Excel GET /admin-api/infra/job-log/export-excel */
export async function exportJobLogExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportJobLogExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/infra/job-log/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得定时任务日志 GET /admin-api/infra/job-log/get */
export async function getJobLog({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobLogParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultJobLogRespVO>('/admin-api/infra/job-log/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得定时任务日志分页 GET /admin-api/infra/job-log/page */
export async function getJobLogPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobLogPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultJobLogRespVO>(
    '/admin-api/infra/job-log/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
