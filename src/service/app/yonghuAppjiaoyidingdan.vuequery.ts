/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppjiaoyidingdan';
import * as API from './types';

/** 取消交易订单 DELETE /app-api/trade/order/cancel */
export function useCancelOrderMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.cancelOrder,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 创建订单 POST /app-api/trade/order/create */
export function useCreateOrderMutation(options?: {
  onSuccess?: (value?: API.CommonResultAppTradeOrderCreateRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createOrder,
    onSuccess(data: API.CommonResultAppTradeOrderCreateRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除交易订单 DELETE /app-api/trade/order/delete */
export function useDeleteOrderMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteOrder,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得交易订单数量 GET /app-api/trade/order/get-count */
export function getOrderCountQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderCount(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderCount', options],
  });
}

/** 获得交易订单 GET /app-api/trade/order/get-detail */
export function getOrderDetailQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderDetailParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderDetail(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderDetail', options],
  });
}

/** 获得交易订单的物流轨迹 GET /app-api/trade/order/get-express-track-list */
export function getOrderExpressTrackListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderExpressTrackListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderExpressTrackList(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderExpressTrackList', options],
  });
}

/** 创建交易订单项的评价 POST /app-api/trade/order/item/create-comment */
export function useCreateOrderItemCommentMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createOrderItemComment,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得交易订单项 GET /app-api/trade/order/item/get */
export function getOrderItemQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderItemParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderItem(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderItem', options],
  });
}

/** 获得交易订单分页 GET /app-api/trade/order/page */
export function getOrderPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getOrderPage(queryKey[1] as typeof options);
    },
    queryKey: ['getOrderPage', options],
  });
}

/** 确认交易订单收货 PUT /app-api/trade/order/receive */
export function useReceiveOrderMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.receiveOrder,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得订单结算信息 GET /app-api/trade/order/settlement */
export function settlementOrderQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.settlementOrderParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.settlementOrder(queryKey[1] as typeof options);
    },
    queryKey: ['settlementOrder', options],
  });
}

/** 获得商品结算信息 用于商品列表、商品详情，获得参与活动后的价格信息 GET /app-api/trade/order/settlement-product */
export function settlementProductQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.settlementProductParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.settlementProduct(queryKey[1] as typeof options);
    },
    queryKey: ['settlementProduct', options],
  });
}

/** 更新订单为已支付 POST /app-api/trade/order/update-paid */
export function useUpdateOrderPaidMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateOrderPaid,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
