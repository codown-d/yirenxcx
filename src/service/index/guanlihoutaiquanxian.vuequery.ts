/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiquanxian';
import * as API from './types';

/** 赋予角色数据权限 POST /admin-api/system/permission/assign-role-data-scope */
export function useAssignRoleDataScopeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.assignRoleDataScope,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 赋予角色菜单 POST /admin-api/system/permission/assign-role-menu */
export function useAssignRoleMenuMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.assignRoleMenu,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 赋予用户角色 POST /admin-api/system/permission/assign-user-role */
export function useAssignUserRoleMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.assignUserRole,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得角色拥有的菜单编号 GET /admin-api/system/permission/list-role-menus */
export function getRoleMenuListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRoleMenuListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getRoleMenuList(queryKey[1] as typeof options);
    },
    queryKey: ['getRoleMenuList', options],
  });
}

/** 获得管理员拥有的角色编号列表 GET /admin-api/system/permission/list-user-roles */
export function listAdminRolesQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.listAdminRolesParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.listAdminRoles(queryKey[1] as typeof options);
    },
    queryKey: ['listAdminRoles', options],
  });
}
