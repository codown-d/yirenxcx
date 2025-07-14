/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaishangpinSpu';
import * as API from './types';

/** 创建商品 SPU POST /admin-api/product/spu/create */
export function useCreateProductSpuMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createProductSpu,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除商品 SPU DELETE /admin-api/product/spu/delete */
export function useDeleteSpuMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteSpu,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出商品 GET /admin-api/product/spu/export */
export function exportSpuListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportSpuListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportSpuList(queryKey[1] as typeof options);
    },
    queryKey: ['exportSpuList', options],
  });
}

/** 获得商品 SPU 分页 tab count GET /admin-api/product/spu/get-count */
export function getSpuCountQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSpuCount(queryKey[1] as typeof options);
    },
    queryKey: ['getSpuCount', options],
  });
}

/** 获得商品 SPU 明细 GET /admin-api/product/spu/get-detail */
export function getSpuDetail1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSpuDetail1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSpuDetail1(queryKey[1] as typeof options);
    },
    queryKey: ['getSpuDetail1', options],
  });
}

/** 获得商品 SPU 详情列表 GET /admin-api/product/spu/list */
export function getSpuList1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSpuList1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSpuList1(queryKey[1] as typeof options);
    },
    queryKey: ['getSpuList1', options],
  });
}

/** 获得商品 SPU 精简列表 GET /admin-api/product/spu/list-all-simple */
export function getSpuSimpleListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSpuSimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getSpuSimpleList', options],
  });
}

/** 获得商品 SPU 分页 GET /admin-api/product/spu/page */
export function getSpuPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSpuPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSpuPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getSpuPage1', options],
  });
}

/** 更新商品 SPU PUT /admin-api/product/spu/update */
export function useUpdateSpuMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateSpu,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新商品 SPU Status PUT /admin-api/product/spu/update-status */
export function useUpdateStatusMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateStatus,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
