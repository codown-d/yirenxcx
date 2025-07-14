/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得售后日志列表 GET /app-api/trade/after-sale-log/list */
export async function getAfterSaleLogList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAfterSaleLogListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppAfterSaleLogRespVO>(
    '/app-api/trade/after-sale-log/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
