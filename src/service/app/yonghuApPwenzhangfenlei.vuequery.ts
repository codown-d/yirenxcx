/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPwenzhangfenlei';
import * as API from './types';

/** 获得文章分类列表 GET /app-api/promotion/article-category/list */
export function getArticleCategoryListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getArticleCategoryList(queryKey[1] as typeof options);
    },
    queryKey: ['getArticleCategoryList', options],
  });
}

/** 获得文章分类列表 PUT /app-api/promotion/article-category/list */
export function useGetArticleCategoryList2Mutation(options?: {
  onSuccess?: (value?: API.CommonResultListAppArticleCategoryRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticleCategoryList2,
    onSuccess(data: API.CommonResultListAppArticleCategoryRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章分类列表 POST /app-api/promotion/article-category/list */
export function useGetArticleCategoryList1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultListAppArticleCategoryRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticleCategoryList1,
    onSuccess(data: API.CommonResultListAppArticleCategoryRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章分类列表 DELETE /app-api/promotion/article-category/list */
export function useGetArticleCategoryList3Mutation(options?: {
  onSuccess?: (value?: API.CommonResultListAppArticleCategoryRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticleCategoryList3,
    onSuccess(data: API.CommonResultListAppArticleCategoryRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章分类列表 PATCH /app-api/promotion/article-category/list */
export function useGetArticleCategoryList4Mutation(options?: {
  onSuccess?: (value?: API.CommonResultListAppArticleCategoryRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticleCategoryList4,
    onSuccess(data: API.CommonResultListAppArticleCategoryRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
