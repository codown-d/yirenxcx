/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPwenzhang';
import * as API from './types';

/** 增加文章浏览量 PUT /app-api/promotion/article/add-browse-count */
export function useAddBrowseCount1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.addBrowseCount1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章详情 GET /app-api/promotion/article/get */
export function getArticle1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticle1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getArticle1(queryKey[1] as typeof options);
    },
    queryKey: ['getArticle1', options],
  });
}

/** 获得文章详情 PUT /app-api/promotion/article/get */
export function useGetArticle3Mutation(options?: {
  onSuccess?: (value?: API.CommonResultAppArticleRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticle3,
    onSuccess(data: API.CommonResultAppArticleRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章详情 POST /app-api/promotion/article/get */
export function useGetArticle2Mutation(options?: {
  onSuccess?: (value?: API.CommonResultAppArticleRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticle2,
    onSuccess(data: API.CommonResultAppArticleRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章详情 DELETE /app-api/promotion/article/get */
export function useGetArticle4Mutation(options?: {
  onSuccess?: (value?: API.CommonResultAppArticleRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticle4,
    onSuccess(data: API.CommonResultAppArticleRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章详情 PATCH /app-api/promotion/article/get */
export function useGetArticle5Mutation(options?: {
  onSuccess?: (value?: API.CommonResultAppArticleRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticle5,
    onSuccess(data: API.CommonResultAppArticleRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章详情列表 GET /app-api/promotion/article/list */
export function getArticleListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticleListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getArticleList(queryKey[1] as typeof options);
    },
    queryKey: ['getArticleList', options],
  });
}

/** 获得文章详情列表 PUT /app-api/promotion/article/list */
export function useGetArticleList2Mutation(options?: {
  onSuccess?: (value?: API.CommonResultListAppArticleRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticleList2,
    onSuccess(data: API.CommonResultListAppArticleRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章详情列表 POST /app-api/promotion/article/list */
export function useGetArticleList1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultListAppArticleRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticleList1,
    onSuccess(data: API.CommonResultListAppArticleRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章详情列表 DELETE /app-api/promotion/article/list */
export function useGetArticleList3Mutation(options?: {
  onSuccess?: (value?: API.CommonResultListAppArticleRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticleList3,
    onSuccess(data: API.CommonResultListAppArticleRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章详情列表 PATCH /app-api/promotion/article/list */
export function useGetArticleList4Mutation(options?: {
  onSuccess?: (value?: API.CommonResultListAppArticleRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticleList4,
    onSuccess(data: API.CommonResultListAppArticleRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章详情分页 GET /app-api/promotion/article/page */
export function getArticlePage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticlePage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getArticlePage1(queryKey[1] as typeof options);
    },
    queryKey: ['getArticlePage1', options],
  });
}

/** 获得文章详情分页 PUT /app-api/promotion/article/page */
export function useGetArticlePage3Mutation(options?: {
  onSuccess?: (value?: API.CommonResultPageResultAppArticleRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticlePage3,
    onSuccess(data: API.CommonResultPageResultAppArticleRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章详情分页 POST /app-api/promotion/article/page */
export function useGetArticlePage2Mutation(options?: {
  onSuccess?: (value?: API.CommonResultPageResultAppArticleRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticlePage2,
    onSuccess(data: API.CommonResultPageResultAppArticleRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章详情分页 DELETE /app-api/promotion/article/page */
export function useGetArticlePage4Mutation(options?: {
  onSuccess?: (value?: API.CommonResultPageResultAppArticleRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticlePage4,
    onSuccess(data: API.CommonResultPageResultAppArticleRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文章详情分页 PATCH /app-api/promotion/article/page */
export function useGetArticlePage5Mutation(options?: {
  onSuccess?: (value?: API.CommonResultPageResultAppArticleRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getArticlePage5,
    onSuccess(data: API.CommonResultPageResultAppArticleRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
