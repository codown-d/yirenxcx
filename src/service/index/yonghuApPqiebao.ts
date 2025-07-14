/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取钱包 GET /app-api/pay/wallet/get */
export async function getPayWallet({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppPayWalletRespVO>(
    '/app-api/pay/wallet/get',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
