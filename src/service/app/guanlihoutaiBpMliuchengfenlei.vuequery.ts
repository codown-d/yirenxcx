/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiBpMliuchengfenlei';
import * as API from './types';

/** 创建流程分类 POST /admin-api/bpm/category/create */
export function useCreateCategory1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createCategory1,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除流程分类 DELETE /admin-api/bpm/category/delete */
export function useDeleteCategory1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteCategory1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得流程分类 GET /admin-api/bpm/category/get */
export function getCategory1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCategory1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCategory1(queryKey[1] as typeof options);
    },
    queryKey: ['getCategory1', options],
  });
}

/** 获得流程分类分页 GET /admin-api/bpm/category/page */
export function getCategoryPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCategoryPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCategoryPage(queryKey[1] as typeof options);
    },
    queryKey: ['getCategoryPage', options],
  });
}

/** 获取流程分类的精简信息列表 只包含被开启的分类，主要用于前端的下拉选项 GET /admin-api/bpm/category/simple-list */
export function getCategorySimpleListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCategorySimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getCategorySimpleList', options],
  });
}

/** 更新流程分类 PUT /admin-api/bpm/category/update */
export function useUpdateCategory1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateCategory1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 批量更新流程分类的排序 PUT /admin-api/bpm/category/update-sort-batch */
export function useUpdateCategorySortBatchMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateCategorySortBatch,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
