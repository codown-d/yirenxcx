/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得快递公司列表 GET /app-api/trade/delivery/express/list */
export async function getDeliveryExpressList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppDeliveryExpressRespVO>(
    '/app-api/trade/delivery/express/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
