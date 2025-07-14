/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 导出转账订单 Excel GET /admin-api/pay/transfer/export-excel */
export async function exportTransfer({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportTransferParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/pay/transfer/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得转账订单 GET /admin-api/pay/transfer/get */
export async function getTransfer({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTransferParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPayTransferRespVO>(
    '/admin-api/pay/transfer/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得转账订单分页 GET /admin-api/pay/transfer/page */
export async function getTransferPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTransferPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultPayTransferRespVO>(
    '/admin-api/pay/transfer/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
