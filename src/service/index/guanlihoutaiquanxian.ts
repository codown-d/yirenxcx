/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 赋予角色数据权限 POST /admin-api/system/permission/assign-role-data-scope */
export async function assignRoleDataScope({
  body,
  options,
}: {
  body: API.PermissionAssignRoleDataScopeReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/permission/assign-role-data-scope',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 赋予角色菜单 POST /admin-api/system/permission/assign-role-menu */
export async function assignRoleMenu({
  body,
  options,
}: {
  body: API.PermissionAssignRoleMenuReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/permission/assign-role-menu',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 赋予用户角色 POST /admin-api/system/permission/assign-user-role */
export async function assignUserRole({
  body,
  options,
}: {
  body: API.PermissionAssignUserRoleReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/permission/assign-user-role',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 获得角色拥有的菜单编号 GET /admin-api/system/permission/list-role-menus */
export async function getRoleMenuList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRoleMenuListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultSetLong>(
    '/admin-api/system/permission/list-role-menus',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得管理员拥有的角色编号列表 GET /admin-api/system/permission/list-user-roles */
export async function listAdminRoles({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.listAdminRolesParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultSetLong>(
    '/admin-api/system/permission/list-user-roles',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
