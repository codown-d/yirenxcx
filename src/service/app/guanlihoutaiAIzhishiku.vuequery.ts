/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiAIzhishiku';
import * as API from './types';

/** 创建知识库 POST /admin-api/ai/knowledge/create */
export function useCreateKnowledgeMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createKnowledge,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除知识库 DELETE /admin-api/ai/knowledge/delete */
export function useDeleteKnowledgeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteKnowledge,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得知识库 GET /admin-api/ai/knowledge/get */
export function getKnowledgeQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgeParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getKnowledge(queryKey[1] as typeof options);
    },
    queryKey: ['getKnowledge', options],
  });
}

/** 获取知识库分页 GET /admin-api/ai/knowledge/page */
export function getKnowledgePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getKnowledgePage(queryKey[1] as typeof options);
    },
    queryKey: ['getKnowledgePage', options],
  });
}

/** 获得知识库的精简列表 GET /admin-api/ai/knowledge/simple-list */
export function getKnowledgeSimpleListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getKnowledgeSimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getKnowledgeSimpleList', options],
  });
}

/** 更新知识库 PUT /admin-api/ai/knowledge/update */
export function useUpdateKnowledgeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateKnowledge,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
