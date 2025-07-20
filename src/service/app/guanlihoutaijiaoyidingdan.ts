/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 订单发货 PUT /admin-api/trade/order/delivery */
export async function deliveryOrder({
  body,
  options,
}: {
  body: API.TradeOrderDeliveryReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/trade/order/delivery', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询核销码对应的订单 GET /admin-api/trade/order/get-by-pick-up-verify-code */
export async function getByPickUpVerifyCode({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getByPickUpVerifyCodeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultTradeOrderDetailRespVO>(
    '/admin-api/trade/order/get-by-pick-up-verify-code',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得交易订单详情 GET /admin-api/trade/order/get-detail */
export async function getOrderDetail1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderDetail1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultTradeOrderDetailRespVO>(
    '/admin-api/trade/order/get-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得交易订单的物流轨迹 GET /admin-api/trade/order/get-express-track-list */
export async function getOrderExpressTrackList1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderExpressTrackList1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListObject>(
    '/admin-api/trade/order/get-express-track-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得交易订单分页 GET /admin-api/trade/order/page */
export async function getOrderPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultTradeOrderPageItemRespVO>(
    '/admin-api/trade/order/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 订单核销 PUT /admin-api/trade/order/pick-up-by-id */
export async function pickUpOrderById({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.pickUpOrderByIdParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/order/pick-up-by-id',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 订单核销 PUT /admin-api/trade/order/pick-up-by-verify-code */
export async function pickUpOrderByVerifyCode({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.pickUpOrderByVerifyCodeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/order/pick-up-by-verify-code',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得交易订单统计 GET /admin-api/trade/order/summary */
export async function getOrderSummary({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderSummaryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultTradeOrderSummaryRespVO>(
    '/admin-api/trade/order/summary',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 修改订单收货地址 PUT /admin-api/trade/order/update-address */
export async function updateOrderAddress({
  body,
  options,
}: {
  body: API.TradeOrderUpdateAddressReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/order/update-address',
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

/** 订单调价 PUT /admin-api/trade/order/update-price */
export async function updateOrderPrice({
  body,
  options,
}: {
  body: API.TradeOrderUpdatePriceReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/order/update-price',
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

/** 订单备注 PUT /admin-api/trade/order/update-remark */
export async function updateOrderRemark({
  body,
  options,
}: {
  body: API.TradeOrderRemarkReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/order/update-remark',
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
