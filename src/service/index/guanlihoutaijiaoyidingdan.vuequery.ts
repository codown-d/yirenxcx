/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaijiaoyidingdan';
import * as API from './types';

/** 订单发货 PUT /admin-api/trade/order/delivery */
export function useDeliveryOrderMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deliveryOrder,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 查询核销码对应的订单 GET /admin-api/trade/order/get-by-pick-up-verify-code */
export function getByPickUpVerifyCodeQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getByPickUpVerifyCodeParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getByPickUpVerifyCode(queryKey[1] as typeof options);
    },
    queryKey: ['getByPickUpVerifyCode', options],
  });
}

/** 获得交易订单详情 GET /admin-api/trade/order/get-detail */
export function getOrderDetail1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderDetail1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderDetail1(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderDetail1', options],
  });
}

/** 获得交易订单的物流轨迹 GET /admin-api/trade/order/get-express-track-list */
export function getOrderExpressTrackList1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderExpressTrackList1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderExpressTrackList1(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderExpressTrackList1', options],
  });
}

/** 获得交易订单分页 GET /admin-api/trade/order/page */
export function getOrderPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderPage1', options],
  });
}

/** 订单核销 PUT /admin-api/trade/order/pick-up-by-id */
export function usePickUpOrderByIdMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.pickUpOrderById,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 订单核销 PUT /admin-api/trade/order/pick-up-by-verify-code */
export function usePickUpOrderByVerifyCodeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.pickUpOrderByVerifyCode,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得交易订单统计 GET /admin-api/trade/order/summary */
export function getOrderSummaryQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderSummaryParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderSummary(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderSummary', options],
  });
}

/** 修改订单收货地址 PUT /admin-api/trade/order/update-address */
export function useUpdateOrderAddressMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateOrderAddress,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 订单调价 PUT /admin-api/trade/order/update-price */
export function useUpdateOrderPriceMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateOrderPrice,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 订单备注 PUT /admin-api/trade/order/update-remark */
export function useUpdateOrderRemarkMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateOrderRemark,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
