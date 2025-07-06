/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaishujuyuanpeizhi';
import * as API from './types';

/** 创建数据源配置 POST /admin-api/infra/data-source-config/create */
export function useCreateDataSourceConfigMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDataSourceConfig,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除数据源配置 DELETE /admin-api/infra/data-source-config/delete */
export function useDeleteDataSourceConfigMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDataSourceConfig,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得数据源配置 GET /admin-api/infra/data-source-config/get */
export function getDataSourceConfigQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDataSourceConfigParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDataSourceConfig(queryKey[1] as typeof options);
    },
    queryKey: ['getDataSourceConfig', options],
  });
}

/** 获得数据源配置列表 GET /admin-api/infra/data-source-config/list */
export function getDataSourceConfigListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDataSourceConfigList(queryKey[1] as typeof options);
    },
    queryKey: ['getDataSourceConfigList', options],
  });
}

/** 更新数据源配置 PUT /admin-api/infra/data-source-config/update */
export function useUpdateDataSourceConfigMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDataSourceConfig,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
