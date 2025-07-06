/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaidaimashengchengqi';
import * as API from './types';

/** 基于数据库的表结构，创建代码生成器的表和字段定义 POST /admin-api/infra/codegen/create-list */
export function useCreateCodegenListMutation(options?: {
  onSuccess?: (value?: API.CommonResultListLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createCodegenList,
    onSuccess(data: API.CommonResultListLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得数据库自带的表定义列表 会过滤掉已经导入 Codegen 的表 GET /admin-api/infra/codegen/db/table/list */
export function getDatabaseTableListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDatabaseTableListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDatabaseTableList(queryKey[1] as typeof options);
    },
    queryKey: ['getDatabaseTableList', options],
  });
}

/** 删除数据库的表和字段定义 DELETE /admin-api/infra/codegen/delete */
export function useDeleteCodegenMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteCodegen,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得表和字段的明细 GET /admin-api/infra/codegen/detail */
export function getCodegenDetailQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCodegenDetailParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCodegenDetail(queryKey[1] as typeof options);
    },
    queryKey: ['getCodegenDetail', options],
  });
}

/** 下载生成代码 GET /admin-api/infra/codegen/download */
export function downloadCodegenQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.downloadCodegenParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.downloadCodegen(queryKey[1] as typeof options);
    },
    queryKey: ['downloadCodegen', options],
  });
}

/** 预览生成代码 GET /admin-api/infra/codegen/preview */
export function previewCodegenQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.previewCodegenParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.previewCodegen(queryKey[1] as typeof options);
    },
    queryKey: ['previewCodegen', options],
  });
}

/** 基于数据库的表结构，同步数据库的表和字段定义 PUT /admin-api/infra/codegen/sync-from-db */
export function useSyncCodegenFromDbMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.syncCodegenFromDb,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得表定义列表 GET /admin-api/infra/codegen/table/list */
export function getCodegenTableListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCodegenTableListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCodegenTableList(queryKey[1] as typeof options);
    },
    queryKey: ['getCodegenTableList', options],
  });
}

/** 获得表定义分页 GET /admin-api/infra/codegen/table/page */
export function getCodegenTablePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCodegenTablePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCodegenTablePage(queryKey[1] as typeof options);
    },
    queryKey: ['getCodegenTablePage', options],
  });
}

/** 更新数据库的表和字段定义 PUT /admin-api/infra/codegen/update */
export function useUpdateCodegenMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateCodegen,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
