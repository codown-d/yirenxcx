/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaijiaose';
import * as API from './types';

/** 创建角色 POST /admin-api/system/role/create */
export function useCreateRoleMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createRole,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除角色 DELETE /admin-api/system/role/delete */
export function useDeleteRoleMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteRole,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出角色 Excel GET /admin-api/system/role/export-excel */
export function exportUsingGetQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportUsingGETParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportUsingGet(queryKey[1] as typeof options);
    },
    queryKey: ['exportUsingGet', options],
  });
}

/** 获得角色信息 GET /admin-api/system/role/get */
export function getRoleQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRoleParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getRole(queryKey[1] as typeof options);
    },
    queryKey: ['getRole', options],
  });
}

/** 获取角色精简信息列表 只包含被开启的角色，主要用于前端的下拉选项 GET /admin-api/system/role/list-all-simple */
export function getSimpleRoleListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleRoleList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleRoleList', options],
  });
}

/** 获得角色分页 GET /admin-api/system/role/page */
export function getRolePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRolePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getRolePage(queryKey[1] as typeof options);
    },
    queryKey: ['getRolePage', options],
  });
}

/** 获取角色精简信息列表 只包含被开启的角色，主要用于前端的下拉选项 GET /admin-api/system/role/simple-list */
export function getSimpleRoleList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleRoleList1(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleRoleList1', options],
  });
}

/** 修改角色 PUT /admin-api/system/role/update */
export function useUpdateRoleMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateRole,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
