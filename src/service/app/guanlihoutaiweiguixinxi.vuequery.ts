/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiweiguixinxi';
import * as API from './types';

/** 创建违规信息 POST /admin-api/yirenzhipin/wei-gui/create */
export function useCreateWeiGuiMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createWeiGui,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除违规信息 DELETE /admin-api/yirenzhipin/wei-gui/delete */
export function useDeleteWeiGuiMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteWeiGui,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得违规信息分页 GET /admin-api/yirenzhipin/wei-gui/page */
export function getWeiGuiPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWeiGuiPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWeiGuiPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getWeiGuiPage1', options],
  });
}

/** 更新违规信息 PUT /admin-api/yirenzhipin/wei-gui/update */
export function useUpdateWeiGuiMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateWeiGui,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
