/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建用户组 POST /admin-api/bpm/user-group/create */
export async function createUserGroup({
  body,
  options,
}: {
  body: API.BpmUserGroupSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/bpm/user-group/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户组 DELETE /admin-api/bpm/user-group/delete */
export async function deleteUserGroup({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteUserGroupParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/user-group/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得用户组 GET /admin-api/bpm/user-group/get */
export async function getUserGroup({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserGroupParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBpmUserGroupRespVO>(
    '/admin-api/bpm/user-group/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得用户组分页 GET /admin-api/bpm/user-group/page */
export async function getUserGroupPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserGroupPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBpmUserGroupRespVO>(
    '/admin-api/bpm/user-group/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取用户组精简信息列表 只包含被开启的用户组，主要用于前端的下拉选项 GET /admin-api/bpm/user-group/simple-list */
export async function getUserGroupSimpleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListBpmUserGroupRespVO>(
    '/admin-api/bpm/user-group/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新用户组 PUT /admin-api/bpm/user-group/update */
export async function updateUserGroup({
  body,
  options,
}: {
  body: API.BpmUserGroupSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/user-group/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
