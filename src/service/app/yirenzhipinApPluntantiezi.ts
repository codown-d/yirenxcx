/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建论坛帖子 POST /app-api/yirenzhipin/forum-post/create */
export async function createForumPost({
  body,
  options,
}: {
  body: API.YRZPForumPostCreateAppReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/app-api/yirenzhipin/forum-post/create',
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

/** 删除论坛帖子 DELETE /app-api/yirenzhipin/forum-post/delete */
export async function deleteForumPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteForumPostParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/yirenzhipin/forum-post/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得论坛帖子 GET /app-api/yirenzhipin/forum-post/get */
export async function getForumPost({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getForumPostParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPForumPostDO>(
    '/app-api/yirenzhipin/forum-post/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得论坛帖子分页 GET /app-api/yirenzhipin/forum-post/page */
export async function getForumPostPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getForumPostPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPForumPostDO>(
    '/app-api/yirenzhipin/forum-post/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
