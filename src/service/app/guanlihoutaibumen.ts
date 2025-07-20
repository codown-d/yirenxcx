/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建部门 POST /admin-api/system/dept/create */
export async function createDept({
  body,
  options,
}: {
  body: API.DeptSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/system/dept/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除部门 DELETE /admin-api/system/dept/delete */
export async function deleteDept({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDeptParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/dept/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得部门信息 GET /admin-api/system/dept/get */
export async function getDept({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeptParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDeptRespVO>('/admin-api/system/dept/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取部门列表 GET /admin-api/system/dept/list */
export async function getDeptList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeptListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDeptRespVO>(
    '/admin-api/system/dept/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取部门精简信息列表 只包含被开启的部门，主要用于前端的下拉选项 GET /admin-api/system/dept/list-all-simple */
export async function getSimpleDeptList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDeptSimpleRespVO>(
    '/admin-api/system/dept/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获取部门精简信息列表 只包含被开启的部门，主要用于前端的下拉选项 GET /admin-api/system/dept/simple-list */
export async function getSimpleDeptList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDeptSimpleRespVO>(
    '/admin-api/system/dept/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新部门 PUT /admin-api/system/dept/update */
export async function updateDept({
  body,
  options,
}: {
  body: API.DeptSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/dept/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
