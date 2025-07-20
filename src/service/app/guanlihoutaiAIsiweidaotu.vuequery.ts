/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiAIsiweidaotu';
import * as API from './types';

/** 删除思维导图 DELETE /admin-api/ai/mind-map/delete */
export function useDeleteMindMapMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteMindMap,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导图生成（流式） 流式返回，响应较快 POST /admin-api/ai/mind-map/generate-stream */
export function useGenerateMindMapMutation(options?: {
  onSuccess?: (value?: API.CommonResultString[]) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.generateMindMap,
    onSuccess(data: API.CommonResultString[]) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得思维导图分页 GET /admin-api/ai/mind-map/page */
export function getMindMapPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMindMapPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMindMapPage(queryKey[1] as typeof options);
    },
    queryKey: ['getMindMapPage', options],
  });
}
