/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiAIgongzuoliu';
import * as API from './types';

/** 创建 AI 工作流 POST /admin-api/ai/workflow/create */
export function useCreateWorkflowMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createWorkflow,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除 AI 工作流 DELETE /admin-api/ai/workflow/delete */
export function useDeleteWorkflowMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteWorkflow,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得 AI 工作流 GET /admin-api/ai/workflow/get */
export function getWorkflowQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWorkflowParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWorkflow(queryKey[1] as typeof options);
    },
    queryKey: ['getWorkflow', options],
  });
}

/** 获得 AI 工作流分页 GET /admin-api/ai/workflow/page */
export function getWorkflowPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWorkflowPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWorkflowPage(queryKey[1] as typeof options);
    },
    queryKey: ['getWorkflowPage', options],
  });
}

/** 测试 AI 工作流 POST /admin-api/ai/workflow/test */
export function useTestWorkflowMutation(options?: {
  onSuccess?: (value?: API.CommonResultObject) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.testWorkflow,
    onSuccess(data: API.CommonResultObject) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新 AI 工作流 PUT /admin-api/ai/workflow/update */
export function useUpdateWorkflowMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateWorkflow,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
