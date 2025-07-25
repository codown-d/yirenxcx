/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建论坛帖子 POST /admin-api/yirenzhipin/forum-post/create */
export async function createForumPost1({
  body,
  options,
}: {
  body: API.YRZPForumPostCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/yirenzhipin/forum-post/create',
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

/** 删除论坛帖子 DELETE /admin-api/yirenzhipin/forum-post/delete */
export async function deleteForumPost1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteForumPost1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/forum-post/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得论坛帖子 GET /admin-api/yirenzhipin/forum-post/get */
export async function getForumPost1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getForumPost1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPForumPostRespVO>(
    '/admin-api/yirenzhipin/forum-post/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得论坛帖子分页 GET /admin-api/yirenzhipin/forum-post/page */
export async function getForumPostPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getForumPostPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPForumPostRespVO>(
    '/admin-api/yirenzhipin/forum-post/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新论坛帖子 PUT /admin-api/yirenzhipin/forum-post/update */
export async function updateForumPost({
  body,
  options,
}: {
  body: API.YRZPForumPostUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/forum-post/update',
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
