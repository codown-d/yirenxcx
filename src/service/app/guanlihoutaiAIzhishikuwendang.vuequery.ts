/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiAIzhishikuwendang';
import * as API from './types';

/** 新建文档（单个） POST /admin-api/ai/knowledge/document/create */
export function useCreateKnowledgeDocumentMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createKnowledgeDocument,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 新建文档（多个） POST /admin-api/ai/knowledge/document/create-list */
export function useCreateKnowledgeDocumentListMutation(options?: {
  onSuccess?: (value?: API.CommonResultListLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createKnowledgeDocumentList,
    onSuccess(data: API.CommonResultListLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除文档 DELETE /admin-api/ai/knowledge/document/delete */
export function useDeleteKnowledgeDocumentMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteKnowledgeDocument,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获取文档详情 GET /admin-api/ai/knowledge/document/get */
export function getKnowledgeDocumentQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgeDocumentParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getKnowledgeDocument(queryKey[1] as typeof options);
    },
    queryKey: ['getKnowledgeDocument', options],
  });
}

/** 获取文档分页 GET /admin-api/ai/knowledge/document/page */
export function getKnowledgeDocumentPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgeDocumentPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getKnowledgeDocumentPage(queryKey[1] as typeof options);
    },
    queryKey: ['getKnowledgeDocumentPage', options],
  });
}

/** 更新文档 PUT /admin-api/ai/knowledge/document/update */
export function useUpdateKnowledgeDocumentMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateKnowledgeDocument,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新文档状态 PUT /admin-api/ai/knowledge/document/update-status */
export function useUpdateKnowledgeDocumentStatusMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateKnowledgeDocumentStatus,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
