/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 导出登录日志 Excel GET /admin-api/system/login-log/export */
export async function exportLoginLog({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportLoginLogParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/system/login-log/export', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得登录日志分页列表 GET /admin-api/system/login-log/page */
export async function getLoginLogPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLoginLogPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultLoginLogRespVO>(
    '/admin-api/system/login-log/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
