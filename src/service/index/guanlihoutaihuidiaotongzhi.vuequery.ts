/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaihuidiaotongzhi';
import * as API from './types';

/** 获得回调通知的明细 GET /admin-api/pay/notify/get-detail */
export function getNotifyTaskDetailQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNotifyTaskDetailParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getNotifyTaskDetail(queryKey[1] as typeof options);
    },
    queryKey: ['getNotifyTaskDetail', options],
  });
}

/** 支付渠道的统一【支付】回调 POST /admin-api/pay/notify/order/${param0} */
export function useNotifyOrderMutation(options?: {
  onSuccess?: (value?: string) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.notifyOrder,
    onSuccess(data: string) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得回调通知分页 GET /admin-api/pay/notify/page */
export function getNotifyTaskPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNotifyTaskPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getNotifyTaskPage(queryKey[1] as typeof options);
    },
    queryKey: ['getNotifyTaskPage', options],
  });
}

/** 支付渠道的统一【退款】回调 POST /admin-api/pay/notify/refund/${param0} */
export function useNotifyRefundMutation(options?: {
  onSuccess?: (value?: string) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.notifyRefund,
    onSuccess(data: string) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 支付渠道的统一【转账】回调 POST /admin-api/pay/notify/transfer/${param0} */
export function useNotifyTransferMutation(options?: {
  onSuccess?: (value?: string) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.notifyTransfer,
    onSuccess(data: string) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
