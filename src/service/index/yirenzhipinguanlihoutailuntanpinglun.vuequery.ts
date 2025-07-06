/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yirenzhipinguanlihoutailuntanpinglun';
import * as API from './types';

/** 创建论坛评论 POST /admin-api/yirenzhipin/forum-comment/create */
export function useCreateForumComment1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createForumComment1,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除论坛评论 DELETE /admin-api/yirenzhipin/forum-comment/delete */
export function useDeleteForumComment1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteForumComment1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得论坛评论 GET /admin-api/yirenzhipin/forum-comment/get */
export function getForumCommentQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getForumCommentParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getForumComment(queryKey[1] as typeof options);
    },
    queryKey: ['getForumComment', options],
  });
}

/** 获得论坛评论分页 GET /admin-api/yirenzhipin/forum-comment/page */
export function getForumCommentPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getForumCommentPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getForumCommentPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getForumCommentPage1', options],
  });
}
