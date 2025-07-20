/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 导出 API 错误日志 Excel GET /admin-api/infra/api-error-log/export-excel */
export async function exportApiErrorLogExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportApiErrorLogExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/infra/api-error-log/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得 API 错误日志分页 GET /admin-api/infra/api-error-log/page */
export async function getApiErrorLogPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getApiErrorLogPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultApiErrorLogRespVO>(
    '/admin-api/infra/api-error-log/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新 API 错误日志的状态 PUT /admin-api/infra/api-error-log/update-status */
export async function updateApiErrorLogProcess({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.updateApiErrorLogProcessParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/api-error-log/update-status',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
