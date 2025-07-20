/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得交易中心配置 GET /admin-api/trade/config/get */
export async function getConfig({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultTradeConfigRespVO>(
    '/admin-api/trade/config/get',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新交易中心配置 PUT /admin-api/trade/config/save */
export async function updateConfig({
  body,
  options,
}: {
  body: API.TradeConfigSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/trade/config/save', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
