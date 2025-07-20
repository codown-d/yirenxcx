/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 取消交易订单 DELETE /app-api/trade/order/cancel */
export async function cancelOrder({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.cancelOrderParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/trade/order/cancel', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建订单 POST /app-api/trade/order/create */
export async function createOrder({
  body,
  options,
}: {
  body: API.AppTradeOrderCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppTradeOrderCreateRespVO>(
    '/app-api/trade/order/create',
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

/** 删除交易订单 DELETE /app-api/trade/order/delete */
export async function deleteOrder({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteOrderParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/trade/order/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得交易订单数量 GET /app-api/trade/order/get-count */
export async function getOrderCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMapStringLong>(
    '/app-api/trade/order/get-count',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得交易订单 GET /app-api/trade/order/get-detail */
export async function getOrderDetail({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderDetailParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppTradeOrderDetailRespVO>(
    '/app-api/trade/order/get-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得交易订单的物流轨迹 GET /app-api/trade/order/get-express-track-list */
export async function getOrderExpressTrackList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderExpressTrackListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppOrderExpressTrackRespDTO>(
    '/app-api/trade/order/get-express-track-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 创建交易订单项的评价 POST /app-api/trade/order/item/create-comment */
export async function createOrderItemComment({
  body,
  options,
}: {
  body: API.AppTradeOrderItemCommentCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/app-api/trade/order/item/create-comment',
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

/** 获得交易订单项 GET /app-api/trade/order/item/get */
export async function getOrderItem({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderItemParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppTradeOrderItemRespVO>(
    '/app-api/trade/order/item/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得交易订单分页 GET /app-api/trade/order/page */
export async function getOrderPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppTradeOrderPageItemRespVO>(
    '/app-api/trade/order/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 确认交易订单收货 PUT /app-api/trade/order/receive */
export async function receiveOrder({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.receiveOrderParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/trade/order/receive', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得订单结算信息 GET /app-api/trade/order/settlement */
export async function settlementOrder({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.settlementOrderParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppTradeOrderSettlementRespVO>(
    '/app-api/trade/order/settlement',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商品结算信息 用于商品列表、商品详情，获得参与活动后的价格信息 GET /app-api/trade/order/settlement-product */
export async function settlementProduct({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.settlementProductParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppTradeProductSettlementRespVO>(
    '/app-api/trade/order/settlement-product',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新订单为已支付 POST /app-api/trade/order/update-paid */
export async function updateOrderPaid({
  body,
  options,
}: {
  body: API.PayOrderNotifyReqDTO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/trade/order/update-paid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
