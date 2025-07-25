/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaigangwei';
import * as API from './types';

/** 创建岗位 POST /admin-api/system/post/create */
export function useCreatePostMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createPost,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除岗位 DELETE /admin-api/system/post/delete */
export function useDeletePostMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deletePost,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 岗位管理 GET /admin-api/system/post/export */
export function export1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.export1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.export1(queryKey[1] as typeof options);
    },
    queryKey: ['export1', options],
  });
}

/** 获得岗位信息 GET /admin-api/system/post/get */
export function getPostQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPostParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPost(queryKey[1] as typeof options);
    },
    queryKey: ['getPost', options],
  });
}

/** 获取岗位全列表 只包含被开启的岗位，主要用于前端的下拉选项 GET /admin-api/system/post/list-all-simple */
export function getSimplePostListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimplePostList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimplePostList', options],
  });
}

/** 获得岗位分页列表 GET /admin-api/system/post/page */
export function getPostPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPostPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPostPage(queryKey[1] as typeof options);
    },
    queryKey: ['getPostPage', options],
  });
}

/** 获取岗位全列表 只包含被开启的岗位，主要用于前端的下拉选项 GET /admin-api/system/post/simple-list */
export function getSimplePostList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimplePostList1(queryKey[1] as typeof options);
    },
    queryKey: ['getSimplePostList1', options],
  });
}

/** 修改岗位 PUT /admin-api/system/post/update */
export function useUpdatePostMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updatePost,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
