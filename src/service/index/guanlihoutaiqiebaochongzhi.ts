/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 发起钱包充值退款 POST /admin-api/pay/wallet-recharge/refund */
export async function refundWalletRecharge({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.refundWalletRechargeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/pay/wallet-recharge/refund',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新钱包充值为已充值 POST /admin-api/pay/wallet-recharge/update-paid */
export async function updateWalletRechargerPaid({
  body,
  options,
}: {
  body: API.PayOrderNotifyReqDTO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/pay/wallet-recharge/update-paid',
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

/** 更新钱包充值为已退款 POST /admin-api/pay/wallet-recharge/update-refunded */
export async function updateWalletRechargeRefunded({
  body,
  options,
}: {
  body: API.PayRefundNotifyReqDTO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/pay/wallet-recharge/update-refunded',
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
