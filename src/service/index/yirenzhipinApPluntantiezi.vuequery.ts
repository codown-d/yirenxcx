/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yirenzhipinApPluntantiezi';
import * as API from './types';

/** 创建论坛帖子 POST /app-api/yirenzhipin/forum-post/create */
export function useCreateForumPostMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createForumPost,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除论坛帖子 DELETE /app-api/yirenzhipin/forum-post/delete */
export function useDeleteForumPostMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteForumPost,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得论坛帖子 GET /app-api/yirenzhipin/forum-post/get */
export function getForumPostQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getForumPostParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getForumPost(queryKey[1] as typeof options);
    },
    queryKey: ['getForumPost', options],
  });
}

/** 点赞论坛帖子 POST /app-api/yirenzhipin/forum-post/like/${param0} */
export function useLikeForumPostMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.likeForumPost,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得论坛帖子分页 GET /app-api/yirenzhipin/forum-post/page */
export function getForumPostPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getForumPostPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getForumPostPage(queryKey[1] as typeof options);
    },
    queryKey: ['getForumPostPage', options],
  });
}
