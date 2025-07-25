/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建用户类型 POST /admin-api/yirenzhipin/user-type/create */
export async function createUserType1({
  body,
  options,
}: {
  body: API.UserTypeCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/yirenzhipin/user-type/create',
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

/** 删除用户类型 DELETE /admin-api/yirenzhipin/user-type/delete */
export async function deleteUserType1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteUserType1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/user-type/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 导出用户类型 Excel GET /admin-api/yirenzhipin/user-type/export-excel */
export async function exportUserTypeExcel1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportUserTypeExcel1Params;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/yirenzhipin/user-type/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得用户类型 GET /admin-api/yirenzhipin/user-type/get */
export async function getUserType1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserType1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultUserTypeRespVO>(
    '/admin-api/yirenzhipin/user-type/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得用户类型列表 GET /admin-api/yirenzhipin/user-type/list */
export async function getUserTypeList1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserTypeList1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListUserTypeRespVO>(
    '/admin-api/yirenzhipin/user-type/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得用户类型分页 GET /admin-api/yirenzhipin/user-type/page */
export async function getUserTypePage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserTypePage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultUserTypeRespVO>(
    '/admin-api/yirenzhipin/user-type/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新用户类型 PUT /admin-api/yirenzhipin/user-type/update */
export async function updateUserType1({
  body,
  options,
}: {
  body: API.UserTypeUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/user-type/update',
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
