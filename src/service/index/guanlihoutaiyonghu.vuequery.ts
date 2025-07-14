/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiyonghu';
import * as API from './types';

/** 新增用户 POST /admin-api/system/user/create */
export function useCreateUserMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createUser,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除用户 DELETE /admin-api/system/user/delete */
export function useDeleteUserMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteUser,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出用户 GET /admin-api/system/user/export */
export function exportUserListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportUserListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportUserList(queryKey[1] as typeof options);
    },
    queryKey: ['exportUserList', options],
  });
}

/** 获得用户详情 GET /admin-api/system/user/get */
export function getUserQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUser(queryKey[1] as typeof options);
    },
    queryKey: ['getUser', options],
  });
}

/** 获得导入用户模板 GET /admin-api/system/user/get-import-template */
export function importTemplateQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.importTemplate(queryKey[1] as typeof options);
    },
    queryKey: ['importTemplate', options],
  });
}

/** 导入用户 POST /admin-api/system/user/import */
export function useImportExcelMutation(options?: {
  onSuccess?: (value?: API.CommonResultUserImportRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.importExcel,
    onSuccess(data: API.CommonResultUserImportRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获取用户精简信息列表 只包含被开启的用户，主要用于前端的下拉选项 GET /admin-api/system/user/list-all-simple */
export function getSimpleUserListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleUserList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleUserList', options],
  });
}

/** 获得用户分页列表 GET /admin-api/system/user/page */
export function getUserPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUserPage(queryKey[1] as typeof options);
    },
    queryKey: ['getUserPage', options],
  });
}

/** 获取用户精简信息列表 只包含被开启的用户，主要用于前端的下拉选项 GET /admin-api/system/user/simple-list */
export function getSimpleUserList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleUserList1(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleUserList1', options],
  });
}

/** 修改用户 PUT /admin-api/system/user/update */
export function useUpdateUser1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateUser1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 重置用户密码 PUT /admin-api/system/user/update-password */
export function useUpdateUserPassword1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateUserPassword1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 修改用户状态 PUT /admin-api/system/user/update-status */
export function useUpdateUserStatusMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateUserStatus,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
