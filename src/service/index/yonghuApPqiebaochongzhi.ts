/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建钱包充值记录（发起充值） POST /app-api/pay/wallet-recharge/create */
export async function createWalletRecharge({
  body,
  options,
}: {
  body: API.AppPayWalletRechargeCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppPayWalletRechargeCreateRespVO>(
    '/app-api/pay/wallet-recharge/create',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 获得钱包充值记录分页 GET /app-api/pay/wallet-recharge/page */
export async function getWalletRechargePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletRechargePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppPayWalletRechargeRespVO>(
    '/app-api/pay/wallet-recharge/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
