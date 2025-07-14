/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaituikuandingdan';
import * as API from './types';

/** 导出退款订单 Excel GET /admin-api/pay/refund/export-excel */
export function exportRefundExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportRefundExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportRefundExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportRefundExcel', options],
  });
}

/** 获得退款订单 GET /admin-api/pay/refund/get */
export function getRefundQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRefundParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getRefund(queryKey[1] as typeof options);
    },
    queryKey: ['getRefund', options],
  });
}

/** 获得退款订单分页 GET /admin-api/pay/refund/page */
export function getRefundPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRefundPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getRefundPage(queryKey[1] as typeof options);
    },
    queryKey: ['getRefundPage', options],
  });
}
