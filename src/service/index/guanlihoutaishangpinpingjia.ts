/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 添加自评 POST /admin-api/product/comment/create */
export async function createComment({
  body,
  options,
}: {
  body: API.ProductCommentCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/product/comment/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获得商品评价分页 GET /admin-api/product/comment/page */
export async function getCommentPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCommentPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultProductCommentRespVO>(
    '/admin-api/product/comment/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 商家回复 PUT /admin-api/product/comment/reply */
export async function commentReply({
  body,
  options,
}: {
  body: API.ProductCommentReplyReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/product/comment/reply', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 显示 / 隐藏评论 PUT /admin-api/product/comment/update-visible */
export async function updateCommentVisible({
  body,
  options,
}: {
  body: API.ProductCommentUpdateVisibleReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/product/comment/update-visible',
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
