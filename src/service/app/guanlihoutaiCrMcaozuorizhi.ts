/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得操作日志 GET /admin-api/crm/operate-log/page */
export async function getCustomerOperateLog({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerOperateLogParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmOperateLogRespVO>(
    '/admin-api/crm/operate-log/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
