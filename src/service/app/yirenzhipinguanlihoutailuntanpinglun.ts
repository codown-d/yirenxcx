/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建论坛评论 POST /admin-api/yirenzhipin/forum-comment/create */
export async function createForumComment1({
  body,
  options,
}: {
  body: API.YRZPForumCommentCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/yirenzhipin/forum-comment/create',
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

/** 删除论坛评论 DELETE /admin-api/yirenzhipin/forum-comment/delete */
export async function deleteForumComment1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteForumComment1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/forum-comment/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得论坛评论 GET /admin-api/yirenzhipin/forum-comment/get */
export async function getForumComment({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getForumCommentParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPForumCommentRespVO>(
    '/admin-api/yirenzhipin/forum-comment/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得论坛评论分页 GET /admin-api/yirenzhipin/forum-comment/page */
export async function getForumCommentPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getForumCommentPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPForumCommentRespVO>(
    '/admin-api/yirenzhipin/forum-comment/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
