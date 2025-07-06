/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 导出操作日志 GET /admin-api/system/operate-log/export */
export async function exportOperateLog({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportOperateLogParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/system/operate-log/export', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查看操作日志分页列表 GET /admin-api/system/operate-log/page */
export async function pageOperateLog({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.pageOperateLogParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultOperateLogRespVO>(
    '/admin-api/system/operate-log/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
