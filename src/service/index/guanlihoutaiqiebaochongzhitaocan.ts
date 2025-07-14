/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建钱包充值套餐 POST /admin-api/pay/wallet-recharge-package/create */
export async function createWalletRechargePackage({
  body,
  options,
}: {
  body: API.WalletRechargePackageCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/pay/wallet-recharge-package/create',
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

/** 删除钱包充值套餐 DELETE /admin-api/pay/wallet-recharge-package/delete */
export async function deleteWalletRechargePackage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteWalletRechargePackageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/pay/wallet-recharge-package/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得钱包充值套餐 GET /admin-api/pay/wallet-recharge-package/get */
export async function getWalletRechargePackage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletRechargePackageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultWalletRechargePackageRespVO>(
    '/admin-api/pay/wallet-recharge-package/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得钱包充值套餐分页 GET /admin-api/pay/wallet-recharge-package/page */
export async function getWalletRechargePackagePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWalletRechargePackagePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultWalletRechargePackageRespVO>(
    '/admin-api/pay/wallet-recharge-package/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新钱包充值套餐 PUT /admin-api/pay/wallet-recharge-package/update */
export async function updateWalletRechargePackage({
  body,
  options,
}: {
  body: API.WalletRechargePackageUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/pay/wallet-recharge-package/update',
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
