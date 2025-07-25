/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得钱包流水统计 GET /app-api/pay/wallet-transaction/get-summary */
export async function getWalletTransactionSummary({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletTransactionSummaryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppPayWalletTransactionSummaryRespVO>(
    '/app-api/pay/wallet-transaction/get-summary',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得钱包流水分页 GET /app-api/pay/wallet-transaction/page */
export async function getWalletTransactionPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletTransactionPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppPayWalletTransactionRespVO>(
    '/app-api/pay/wallet-transaction/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
