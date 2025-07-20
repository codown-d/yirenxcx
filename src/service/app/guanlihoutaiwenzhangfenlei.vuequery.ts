/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiwenzhangfenlei';
import * as API from './types';

/** 创建文章分类 POST /admin-api/promotion/article-category/create */
export function useCreateArticleCategoryMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createArticleCategory,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除文章分类 DELETE /admin-api/promotion/article-category/delete */
export function useDeleteArticleCategoryMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteArticleCategory,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章分类 GET /admin-api/promotion/article-category/get */
export function getArticleCategoryQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticleCategoryParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getArticleCategory(queryKey[1] as typeof options);
    },
    queryKey: ['getArticleCategory', options],
  });
}

/** 获取文章分类精简信息列表 只包含被开启的文章分类，主要用于前端的下拉选项 GET /admin-api/promotion/article-category/list-all-simple */
export function getSimpleDeptList2QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleDeptList2(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleDeptList2', options],
  });
}

/** 获得文章分类分页 GET /admin-api/promotion/article-category/page */
export function getArticleCategoryPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticleCategoryPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getArticleCategoryPage(queryKey[1] as typeof options);
    },
    queryKey: ['getArticleCategoryPage', options],
  });
}

/** 更新文章分类 PUT /admin-api/promotion/article-category/update */
export function useUpdateArticleCategoryMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateArticleCategory,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
