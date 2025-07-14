/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 同步转账单 GET /app-api/pay/transfer/sync */
export async function syncTransfer({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.syncTransferParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/pay/transfer/sync', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
