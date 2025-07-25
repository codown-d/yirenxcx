/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaishangpinpinpai';
import * as API from './types';

/** 创建品牌 POST /admin-api/product/brand/create */
export function useCreateBrandMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createBrand,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除品牌 DELETE /admin-api/product/brand/delete */
export function useDeleteBrandMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteBrand,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得品牌 GET /admin-api/product/brand/get */
export function getBrandQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrandParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrand(queryKey[1] as typeof options);
    },
    queryKey: ['getBrand', options],
  });
}

/** 获得品牌列表 GET /admin-api/product/brand/list */
export function getBrandListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrandListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrandList(queryKey[1] as typeof options);
    },
    queryKey: ['getBrandList', options],
  });
}

/** 获取品牌精简信息列表 主要用于前端的下拉选项 GET /admin-api/product/brand/list-all-simple */
export function getSimpleBrandListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleBrandList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleBrandList', options],
  });
}

/** 获得品牌分页 GET /admin-api/product/brand/page */
export function getBrandPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrandPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrandPage(queryKey[1] as typeof options);
    },
    queryKey: ['getBrandPage', options],
  });
}

/** 更新品牌 PUT /admin-api/product/brand/update */
export function useUpdateBrandMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateBrand,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
