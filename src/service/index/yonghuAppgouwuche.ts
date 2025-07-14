/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 添加购物车商品 POST /app-api/trade/cart/add */
export async function addCart({
  body,
  options,
}: {
  body: API.AppCartAddReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/app-api/trade/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除购物车商品 DELETE /app-api/trade/cart/delete */
export async function deleteCart({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteCartParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/trade/cart/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询用户在购物车中的商品数量 GET /app-api/trade/cart/get-count */
export async function getCartCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultInteger>('/app-api/trade/cart/get-count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询用户的购物车列表 GET /app-api/trade/cart/list */
export async function getCartList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppCartListRespVO>(
    '/app-api/trade/cart/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 重置购物车商品 PUT /app-api/trade/cart/reset */
export async function resetCart({
  body,
  options,
}: {
  body: API.AppCartResetReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/trade/cart/reset', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新购物车商品数量 PUT /app-api/trade/cart/update-count */
export async function updateCartCount({
  body,
  options,
}: {
  body: API.AppCartUpdateCountReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/trade/cart/update-count', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新购物车商品选中 PUT /app-api/trade/cart/update-selected */
export async function updateCartSelected({
  body,
  options,
}: {
  body: API.AppCartUpdateSelectedReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/trade/cart/update-selected',
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
