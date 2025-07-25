/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建用户分组 POST /admin-api/member/group/create */
export async function createGroup({
  body,
  options,
}: {
  body: API.MemberGroupCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/member/group/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户分组 DELETE /admin-api/member/group/delete */
export async function deleteGroup({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteGroupParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/member/group/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得用户分组 GET /admin-api/member/group/get */
export async function getGroup({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getGroupParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMemberGroupRespVO>(
    '/admin-api/member/group/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取会员分组精简信息列表 只包含被开启的会员分组，主要用于前端的下拉选项 GET /admin-api/member/group/list-all-simple */
export async function getSimpleGroupList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMemberGroupSimpleRespVO>(
    '/admin-api/member/group/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得用户分组分页 GET /admin-api/member/group/page */
export async function getGroupPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getGroupPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultMemberGroupRespVO>(
    '/admin-api/member/group/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新用户分组 PUT /admin-api/member/group/update */
export async function updateGroup({
  body,
  options,
}: {
  body: API.MemberGroupUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/member/group/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
