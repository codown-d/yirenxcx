/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建论坛评论 POST /app-api/yirenzhipin/forum-comment/create */
export async function createForumComment({
  body,
  options,
}: {
  body: API.YRZPForumCommentCreateAppReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/app-api/yirenzhipin/forum-comment/create',
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

/** 删除论坛评论 DELETE /app-api/yirenzhipin/forum-comment/delete */
export async function deleteForumComment({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteForumCommentParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/yirenzhipin/forum-comment/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 点赞论坛评论 POST /app-api/yirenzhipin/forum-comment/like/${param0} */
export async function likeForumComment({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.likeForumCommentParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.CommonResultBoolean>(
    `/app-api/yirenzhipin/forum-comment/like/${param0}`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获得论坛评论分页 GET /app-api/yirenzhipin/forum-comment/page */
export async function getForumCommentPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getForumCommentPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPForumCommentRespAppVO>(
    '/app-api/yirenzhipin/forum-comment/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
