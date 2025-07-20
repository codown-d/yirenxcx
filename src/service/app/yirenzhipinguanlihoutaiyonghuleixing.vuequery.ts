/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yirenzhipinguanlihoutaiyonghuleixing';
import * as API from './types';

/** 创建用户类型 POST /admin-api/yirenzhipin/user-type/create */
export function useCreateUserTypeMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createUserType,
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
export function useDeleteUserTypeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteUserType,
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
export function exportUserTypeExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportUserTypeExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportUserTypeExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportUserTypeExcel', options],
  });
}

/** 获得用户类型 GET /admin-api/yirenzhipin/user-type/get */
export function getUserTypeQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserTypeParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUserType(queryKey[1] as typeof options);
    },
    queryKey: ['getUserType', options],
  });
}

/** 获得用户类型列表 GET /admin-api/yirenzhipin/user-type/list */
export function getUserTypeListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserTypeListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUserTypeList(queryKey[1] as typeof options);
    },
    queryKey: ['getUserTypeList', options],
  });
}

/** 获得用户类型分页 GET /admin-api/yirenzhipin/user-type/page */
export function getUserTypePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserTypePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUserTypePage(queryKey[1] as typeof options);
    },
    queryKey: ['getUserTypePage', options],
  });
}

/** 更新用户类型 PUT /admin-api/yirenzhipin/user-type/update */
export function useUpdateUserTypeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateUserType,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
