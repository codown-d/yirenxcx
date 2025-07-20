/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPzhifudingdan';
import * as API from './types';

/** 获得支付订单 GET /app-api/pay/order/get */
export function getOrder1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrder1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrder1(queryKey[1] as typeof options);
    },
    queryKey: ['getOrder1', options],
  });
}

/** 提交支付订单 POST /app-api/pay/order/submit */
export function useSubmitPayOrderMutation(options?: {
  onSuccess?: (value?: API.CommonResultAppPayOrderSubmitRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.submitPayOrder,
    onSuccess(data: API.CommonResultAppPayOrderSubmitRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
