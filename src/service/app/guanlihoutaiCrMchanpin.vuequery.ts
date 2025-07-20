/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMchanpin';
import * as API from './types';

/** 创建产品 POST /admin-api/crm/product/create */
export function useCreateProductMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createProduct,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除产品 DELETE /admin-api/crm/product/delete */
export function useDeleteProductMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteProduct,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出产品 Excel GET /admin-api/crm/product/export-excel */
export function exportProductExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportProductExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportProductExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportProductExcel', options],
  });
}

/** 获得产品 GET /admin-api/crm/product/get */
export function getProductQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProduct(queryKey[1] as typeof options);
    },
    queryKey: ['getProduct', options],
  });
}

/** 获得产品分页 GET /admin-api/crm/product/page */
export function getProductPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProductPage(queryKey[1] as typeof options);
    },
    queryKey: ['getProductPage', options],
  });
}

/** 获得产品精简列表 只包含被开启的产品，主要用于前端的下拉选项 GET /admin-api/crm/product/simple-list */
export function getProductSimpleListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProductSimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getProductSimpleList', options],
  });
}

/** 更新产品 PUT /admin-api/crm/product/update */
export function useUpdateProductMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateProduct,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
