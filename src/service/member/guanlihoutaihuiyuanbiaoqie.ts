/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建会员标签 POST /admin-api/member/tag/create */
export async function createTag({
  body,
  options,
}: {
  body: API.MemberTagCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/member/tag/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除会员标签 DELETE /admin-api/member/tag/delete */
export async function deleteTag({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteTagParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/member/tag/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得会员标签 GET /admin-api/member/tag/get */
export async function getMemberTag({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMemberTagParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMemberTagRespVO>('/admin-api/member/tag/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得会员标签列表 GET /admin-api/member/tag/list */
export async function getMemberTagList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMemberTagListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMemberTagRespVO>(
    '/admin-api/member/tag/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取会员标签精简信息列表 只包含被开启的会员标签，主要用于前端的下拉选项 GET /admin-api/member/tag/list-all-simple */
export async function getSimpleTagList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMemberTagRespVO>(
    '/admin-api/member/tag/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得会员标签分页 GET /admin-api/member/tag/page */
export async function getTagPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTagPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultMemberTagRespVO>(
    '/admin-api/member/tag/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新会员标签 PUT /admin-api/member/tag/update */
export async function updateTag({
  body,
  options,
}: {
  body: API.MemberTagUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/member/tag/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
