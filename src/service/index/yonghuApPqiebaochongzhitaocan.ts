/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得钱包充值套餐列表 GET /app-api/pay/wallet-recharge-package/list */
export async function getWalletRechargePackageList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppPayWalletPackageRespVO>(
    '/app-api/pay/wallet-recharge-package/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
