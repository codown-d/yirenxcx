/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建岗位 POST /admin-api/system/post/create */
export async function createPost({
  body,
  options,
}: {
  body: API.PostSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/system/post/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除岗位 DELETE /admin-api/system/post/delete */
export async function deletePost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deletePostParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/post/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 岗位管理 GET /admin-api/system/post/export */
export async function export1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.export1Params;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/system/post/export', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得岗位信息 GET /admin-api/system/post/get */
export async function getPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPostParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPostRespVO>('/admin-api/system/post/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取岗位全列表 只包含被开启的岗位，主要用于前端的下拉选项 GET /admin-api/system/post/list-all-simple */
export async function getSimplePostList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListPostSimpleRespVO>(
    '/admin-api/system/post/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得岗位分页列表 GET /admin-api/system/post/page */
export async function getPostPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPostPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultPostRespVO>(
    '/admin-api/system/post/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取岗位全列表 只包含被开启的岗位，主要用于前端的下拉选项 GET /admin-api/system/post/simple-list */
export async function getSimplePostList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListPostSimpleRespVO>(
    '/admin-api/system/post/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 修改岗位 PUT /admin-api/system/post/update */
export async function updatePost({
  body,
  options,
}: {
  body: API.PostSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/post/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
