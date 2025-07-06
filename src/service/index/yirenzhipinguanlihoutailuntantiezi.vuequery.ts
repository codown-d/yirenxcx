/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yirenzhipinguanlihoutailuntantiezi';
import * as API from './types';

/** 创建论坛帖子 POST /admin-api/yirenzhipin/forum-post/create */
export function useCreateForumPost1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createForumPost1,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除论坛帖子 DELETE /admin-api/yirenzhipin/forum-post/delete */
export function useDeleteForumPost1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteForumPost1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得论坛帖子 GET /admin-api/yirenzhipin/forum-post/get */
export function getForumPost1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getForumPost1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getForumPost1(queryKey[1] as typeof options);
    },
    queryKey: ['getForumPost1', options],
  });
}

/** 获得论坛帖子分页 GET /admin-api/yirenzhipin/forum-post/page */
export function getForumPostPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getForumPostPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getForumPostPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getForumPostPage1', options],
  });
}

/** 更新论坛帖子 PUT /admin-api/yirenzhipin/forum-post/update */
export function useUpdateForumPostMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateForumPost,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
