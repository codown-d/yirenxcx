/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPshangpinshoucang';
import * as API from './types';

/** 添加商品收藏 POST /app-api/product/favorite/create */
export function useCreateFavoriteMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createFavorite,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 取消单个商品收藏 DELETE /app-api/product/favorite/delete */
export function useDeleteFavoriteMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteFavorite,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 检查是否收藏过商品 GET /app-api/product/favorite/exits */
export function isFavoriteExistsQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.isFavoriteExistsParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.isFavoriteExists(queryKey[1] as typeof options);
    },
    queryKey: ['isFavoriteExists', options],
  });
}

/** 获得商品收藏数量 GET /app-api/product/favorite/get-count */
export function getFavoriteCountQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFavoriteCount(queryKey[1] as typeof options);
    },
    queryKey: ['getFavoriteCount', options],
  });
}

/** 获得商品收藏分页 GET /app-api/product/favorite/page */
export function getFavoritePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFavoritePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFavoritePage(queryKey[1] as typeof options);
    },
    queryKey: ['getFavoritePage', options],
  });
}
