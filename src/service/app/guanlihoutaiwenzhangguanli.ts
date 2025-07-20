/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建文章管理 POST /admin-api/promotion/article/create */
export async function createArticle({
  body,
  options,
}: {
  body: API.ArticleCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/promotion/article/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除文章管理 DELETE /admin-api/promotion/article/delete */
export async function deleteArticle({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteArticleParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/article/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章管理 GET /admin-api/promotion/article/get */
export async function getArticle({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticleParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultArticleRespVO>(
    '/admin-api/promotion/article/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章管理分页 GET /admin-api/promotion/article/page */
export async function getArticlePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticlePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultArticleRespVO>(
    '/admin-api/promotion/article/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新文章管理 PUT /admin-api/promotion/article/update */
export async function updateArticle({
  body,
  options,
}: {
  body: API.ArticleUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/article/update',
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
