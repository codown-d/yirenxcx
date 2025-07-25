/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiAIxiezuo';
import * as API from './types';

/** 删除写作 DELETE /admin-api/ai/write/delete */
export function useDeleteWriteMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteWrite,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 写作生成（流式） 流式返回，响应较快 POST /admin-api/ai/write/generate-stream */
export function useGenerateWriteContentMutation(options?: {
  onSuccess?: (value?: API.CommonResultString[]) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.generateWriteContent,
    onSuccess(data: API.CommonResultString[]) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得写作分页 GET /admin-api/ai/write/page */
export function getWritePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWritePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWritePage(queryKey[1] as typeof options);
    },
    queryKey: ['getWritePage', options],
  });
}
