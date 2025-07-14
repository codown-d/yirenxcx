/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得用户钱包明细 GET /admin-api/pay/wallet/get */
export async function getWallet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPayWalletRespVO>('/admin-api/pay/wallet/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得会员钱包分页 GET /admin-api/pay/wallet/page */
export async function getWalletPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultPayWalletRespVO>(
    '/admin-api/pay/wallet/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新会员用户余额 PUT /admin-api/pay/wallet/update-balance */
export async function updateWalletBalance({
  body,
  options,
}: {
  body: API.PayWalletUpdateBalanceReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/pay/wallet/update-balance',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}
