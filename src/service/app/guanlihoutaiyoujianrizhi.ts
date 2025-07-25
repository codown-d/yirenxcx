/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得邮箱日志 GET /admin-api/system/mail-log/get */
export async function getMailTemplate1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMailTemplate1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMailLogRespVO>(
    '/admin-api/system/mail-log/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得邮箱日志分页 GET /admin-api/system/mail-log/page */
export async function getMailLogPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMailLogPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultMailLogRespVO>(
    '/admin-api/system/mail-log/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
