/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 导出API 访问日志 Excel GET /admin-api/infra/api-access-log/export-excel */
export async function exportApiAccessLogExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportApiAccessLogExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/infra/api-access-log/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得API 访问日志分页 GET /admin-api/infra/api-access-log/page */
export async function getApiAccessLogPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getApiAccessLogPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultApiAccessLogRespVO>(
    '/admin-api/infra/api-access-log/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
