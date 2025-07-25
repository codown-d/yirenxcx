/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaishilifenlei';
import * as API from './types';

/** 创建示例分类 POST /admin-api/infra/demo02-category/create */
export function useCreateDemo02CategoryMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDemo02Category,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除示例分类 DELETE /admin-api/infra/demo02-category/delete */
export function useDeleteDemo02CategoryMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDemo02Category,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出示例分类 Excel GET /admin-api/infra/demo02-category/export-excel */
export function exportDemo02CategoryExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportDemo02CategoryExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportDemo02CategoryExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportDemo02CategoryExcel', options],
  });
}

/** 获得示例分类 GET /admin-api/infra/demo02-category/get */
export function getDemo02CategoryQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo02CategoryParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDemo02Category(queryKey[1] as typeof options);
    },
    queryKey: ['getDemo02Category', options],
  });
}

/** 获得示例分类列表 GET /admin-api/infra/demo02-category/list */
export function getDemo02CategoryListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo02CategoryListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDemo02CategoryList(queryKey[1] as typeof options);
    },
    queryKey: ['getDemo02CategoryList', options],
  });
}

/** 更新示例分类 PUT /admin-api/infra/demo02-category/update */
export function useUpdateDemo02CategoryMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDemo02Category,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
