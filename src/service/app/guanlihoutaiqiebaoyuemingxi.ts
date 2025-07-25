/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得钱包流水分页 GET /admin-api/pay/wallet-transaction/page */
export async function getWalletTransactionPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletTransactionPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultPayWalletTransactionRespVO>(
    '/admin-api/pay/wallet-transaction/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
