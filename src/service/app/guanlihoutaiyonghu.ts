/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 新增用户 POST /admin-api/system/user/create */
export async function createUser({
  body,
  options,
}: {
  body: API.UserSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/system/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户 DELETE /admin-api/system/user/delete */
export async function deleteUser({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteUserParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/user/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出用户 GET /admin-api/system/user/export */
export async function exportUserList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportUserListParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/system/user/export', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得用户详情 GET /admin-api/system/user/get */
export async function getUser({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultUserRespVO>('/admin-api/system/user/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得导入用户模板 GET /admin-api/system/user/get-import-template */
export async function importTemplate({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/system/user/get-import-template', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 导入用户 POST /admin-api/system/user/import */
export async function importExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.importExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultUserImportRespVO>(
    '/admin-api/system/user/import',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取用户精简信息列表 只包含被开启的用户，主要用于前端的下拉选项 GET /admin-api/system/user/list-all-simple */
export async function getSimpleUserList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListUserSimpleRespVO>(
    '/admin-api/system/user/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得用户分页列表 GET /admin-api/system/user/page */
export async function getUserPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultUserRespVO>(
    '/admin-api/system/user/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取用户精简信息列表 只包含被开启的用户，主要用于前端的下拉选项 GET /admin-api/system/user/simple-list */
export async function getSimpleUserList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListUserSimpleRespVO>(
    '/admin-api/system/user/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 修改用户 PUT /admin-api/system/user/update */
export async function updateUser1({
  body,
  options,
}: {
  body: API.UserSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/user/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重置用户密码 PUT /admin-api/system/user/update-password */
export async function updateUserPassword1({
  body,
  options,
}: {
  body: API.UserUpdatePasswordReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/user/update-password',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 修改用户状态 PUT /admin-api/system/user/update-status */
export async function updateUserStatus({
  body,
  options,
}: {
  body: API.UserUpdateStatusReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/user/update-status',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}
