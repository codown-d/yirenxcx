/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得交易配置 GET /app-api/trade/config/get */
export async function getTradeConfig({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppTradeConfigRespVO>(
    '/app-api/trade/config/get',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
