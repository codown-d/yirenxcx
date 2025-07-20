/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaizhifudingdan';
import * as API from './types';

/** 导出支付订单 Excel GET /admin-api/pay/order/export-excel */
export function exportOrderExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportOrderExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportOrderExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportOrderExcel', options],
  });
}

/** 获得支付订单 GET /admin-api/pay/order/get */
export function getOrder2QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrder2Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrder2(queryKey[1] as typeof options);
    },
    queryKey: ['getOrder2', options],
  });
}

/** 获得支付订单详情 GET /admin-api/pay/order/get-detail */
export function getOrderDetail3QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderDetail3Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderDetail3(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderDetail3', options],
  });
}

/** 获得支付订单分页 GET /admin-api/pay/order/page */
export function getOrderPage2QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderPage2Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderPage2(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderPage2', options],
  });
}

/** 提交支付订单 POST /admin-api/pay/order/submit */
export function useSubmitPayOrder1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultPayOrderSubmitRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.submitPayOrder1,
    onSuccess(data: API.CommonResultPayOrderSubmitRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
