/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaicanshupeizhi';
import * as API from './types';

/** 创建参数配置 POST /admin-api/infra/config/create */
export function useCreateConfigMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createConfig,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除参数配置 DELETE /admin-api/infra/config/delete */
export function useDeleteConfigMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteConfig,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出参数配置 GET /admin-api/infra/config/export */
export function exportConfigQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportConfigParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportConfig(queryKey[1] as typeof options);
    },
    queryKey: ['exportConfig', options],
  });
}

/** 获得参数配置 GET /admin-api/infra/config/get */
export function getConfigQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getConfigParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getConfig(queryKey[1] as typeof options);
    },
    queryKey: ['getConfig', options],
  });
}

/** 根据参数键名查询参数值 不可见的配置，不允许返回给前端 GET /admin-api/infra/config/get-value-by-key */
export function getConfigKeyQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getConfigKeyParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getConfigKey(queryKey[1] as typeof options);
    },
    queryKey: ['getConfigKey', options],
  });
}

/** 获取参数配置分页 GET /admin-api/infra/config/page */
export function getConfigPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getConfigPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getConfigPage(queryKey[1] as typeof options);
    },
    queryKey: ['getConfigPage', options],
  });
}

/** 修改参数配置 PUT /admin-api/infra/config/update */
export function useUpdateConfigMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateConfig,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
