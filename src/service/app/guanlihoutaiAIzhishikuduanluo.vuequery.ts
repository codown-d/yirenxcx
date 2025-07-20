/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiAIzhishikuduanluo';
import * as API from './types';

/** 创建段落 POST /admin-api/ai/knowledge/segment/create */
export function useCreateKnowledgeSegmentMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createKnowledgeSegment,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获取段落详情 GET /admin-api/ai/knowledge/segment/get */
export function getKnowledgeSegmentQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgeSegmentParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getKnowledgeSegment(queryKey[1] as typeof options);
    },
    queryKey: ['getKnowledgeSegment', options],
  });
}

/** 获取文档处理列表 GET /admin-api/ai/knowledge/segment/get-process-list */
export function getKnowledgeSegmentProcessListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgeSegmentProcessListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getKnowledgeSegmentProcessList(queryKey[1] as typeof options);
    },
    queryKey: ['getKnowledgeSegmentProcessList', options],
  });
}

/** 获取段落分页 GET /admin-api/ai/knowledge/segment/page */
export function getKnowledgeSegmentPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgeSegmentPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getKnowledgeSegmentPage(queryKey[1] as typeof options);
    },
    queryKey: ['getKnowledgeSegmentPage', options],
  });
}

/** 搜索段落内容 GET /admin-api/ai/knowledge/segment/search */
export function searchKnowledgeSegmentQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.searchKnowledgeSegmentParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.searchKnowledgeSegment(queryKey[1] as typeof options);
    },
    queryKey: ['searchKnowledgeSegment', options],
  });
}

/** 切片内容 GET /admin-api/ai/knowledge/segment/split */
export function splitContentQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.splitContentParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.splitContent(queryKey[1] as typeof options);
    },
    queryKey: ['splitContent', options],
  });
}

/** 更新段落内容 PUT /admin-api/ai/knowledge/segment/update */
export function useUpdateKnowledgeSegmentMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateKnowledgeSegment,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 启禁用段落内容 PUT /admin-api/ai/knowledge/segment/update-status */
export function useUpdateKnowledgeSegmentStatusMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateKnowledgeSegmentStatus,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
