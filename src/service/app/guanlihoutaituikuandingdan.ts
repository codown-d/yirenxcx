/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 导出退款订单 Excel GET /admin-api/pay/refund/export-excel */
export async function exportRefundExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportRefundExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/pay/refund/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得退款订单 GET /admin-api/pay/refund/get */
export async function getRefund({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRefundParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPayRefundDetailsRespVO>(
    '/admin-api/pay/refund/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得退款订单分页 GET /admin-api/pay/refund/page */
export async function getRefundPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRefundPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultPayRefundPageItemRespVO>(
    '/admin-api/pay/refund/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
