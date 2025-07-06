/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建角色 POST /admin-api/system/role/create */
export async function createRole({
  body,
  options,
}: {
  body: API.RoleSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/system/role/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除角色 DELETE /admin-api/system/role/delete */
export async function deleteRole({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteRoleParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/role/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出角色 Excel GET /admin-api/system/role/export-excel */
export async function exportUsingGet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportUsingGETParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/system/role/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得角色信息 GET /admin-api/system/role/get */
export async function getRole({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRoleParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultRoleRespVO>('/admin-api/system/role/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取角色精简信息列表 只包含被开启的角色，主要用于前端的下拉选项 GET /admin-api/system/role/list-all-simple */
export async function getSimpleRoleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListRoleRespVO>(
    '/admin-api/system/role/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得角色分页 GET /admin-api/system/role/page */
export async function getRolePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRolePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultRoleRespVO>(
    '/admin-api/system/role/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取角色精简信息列表 只包含被开启的角色，主要用于前端的下拉选项 GET /admin-api/system/role/simple-list */
export async function getSimpleRoleList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListRoleRespVO>(
    '/admin-api/system/role/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 修改角色 PUT /admin-api/system/role/update */
export async function updateRole({
  body,
  options,
}: {
  body: API.RoleSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/role/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
