/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yirenzhipinguanlihoutaiyonghuleixing';
import * as API from './types';

/** 创建用户类型 POST /admin-api/yirenzhipin/user-type/create */
export function useCreateUserType1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createUserType1,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除用户类型 DELETE /admin-api/yirenzhipin/user-type/delete */
export function useDeleteUserType1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteUserType1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出用户类型 Excel GET /admin-api/yirenzhipin/user-type/export-excel */
export function exportUserTypeExcel1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportUserTypeExcel1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportUserTypeExcel1(queryKey[1] as typeof options);
    },
    queryKey: ['exportUserTypeExcel1', options],
  });
}

/** 获得用户类型 GET /admin-api/yirenzhipin/user-type/get */
export function getUserType1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserType1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUserType1(queryKey[1] as typeof options);
    },
    queryKey: ['getUserType1', options],
  });
}

/** 获得用户类型列表 GET /admin-api/yirenzhipin/user-type/list */
export function getUserTypeList1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserTypeList1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUserTypeList1(queryKey[1] as typeof options);
    },
    queryKey: ['getUserTypeList1', options],
  });
}

/** 获得用户类型分页 GET /admin-api/yirenzhipin/user-type/page */
export function getUserTypePage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserTypePage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUserTypePage1(queryKey[1] as typeof options);
    },
    queryKey: ['getUserTypePage1', options],
  });
}
