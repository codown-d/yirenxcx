/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 添加商品收藏 POST /app-api/product/favorite/create */
export async function createFavorite({
  body,
  options,
}: {
  body: API.AppFavoriteReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/app-api/product/favorite/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消单个商品收藏 DELETE /app-api/product/favorite/delete */
export async function deleteFavorite({
  body,
  options,
}: {
  body: API.AppFavoriteReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/product/favorite/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 检查是否收藏过商品 GET /app-api/product/favorite/exits */
export async function isFavoriteExists({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.isFavoriteExistsParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/product/favorite/exits', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得商品收藏数量 GET /app-api/product/favorite/get-count */
export async function getFavoriteCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/app-api/product/favorite/get-count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获得商品收藏分页 GET /app-api/product/favorite/page */
export async function getFavoritePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFavoritePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppFavoriteRespVO>(
    '/app-api/product/favorite/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
