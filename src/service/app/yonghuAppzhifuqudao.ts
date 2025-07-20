/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得指定应用的开启的支付渠道编码列表 GET /app-api/pay/channel/get-enable-code-list */
export async function getEnableChannelCodeList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getEnableChannelCodeListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultSetString>(
    '/app-api/pay/channel/get-enable-code-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
