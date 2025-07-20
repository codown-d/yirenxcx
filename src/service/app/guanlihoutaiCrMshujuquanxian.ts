/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建数据权限 POST /admin-api/crm/permission/create */
export async function create({
  body,
  options,
}: {
  body: API.CrmPermissionSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/permission/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除数据权限 DELETE /admin-api/crm/permission/delete */
export async function deletePermission({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deletePermissionParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/permission/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除自己的数据权限 DELETE /admin-api/crm/permission/delete-self */
export async function deleteSelfPermission({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteSelfPermissionParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/permission/delete-self',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得数据权限列表 GET /admin-api/crm/permission/list */
export async function getPermissionList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPermissionListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmPermissionRespVO>(
    '/admin-api/crm/permission/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 编辑数据权限 PUT /admin-api/crm/permission/update */
export async function updatePermission({
  body,
  options,
}: {
  body: API.CrmPermissionUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/permission/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
