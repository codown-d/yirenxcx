/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建文章分类 POST /admin-api/promotion/article-category/create */
export async function createArticleCategory({
  body,
  options,
}: {
  body: API.ArticleCategoryCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/promotion/article-category/create',
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

/** 删除文章分类 DELETE /admin-api/promotion/article-category/delete */
export async function deleteArticleCategory({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteArticleCategoryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/article-category/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章分类 GET /admin-api/promotion/article-category/get */
export async function getArticleCategory({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticleCategoryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultArticleCategoryRespVO>(
    '/admin-api/promotion/article-category/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取文章分类精简信息列表 只包含被开启的文章分类，主要用于前端的下拉选项 GET /admin-api/promotion/article-category/list-all-simple */
export async function getSimpleDeptList2({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListArticleCategorySimpleRespVO>(
    '/admin-api/promotion/article-category/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得文章分类分页 GET /admin-api/promotion/article-category/page */
export async function getArticleCategoryPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticleCategoryPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultArticleCategoryRespVO>(
    '/admin-api/promotion/article-category/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新文章分类 PUT /admin-api/promotion/article-category/update */
export async function updateArticleCategory({
  body,
  options,
}: {
  body: API.ArticleCategoryUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/article-category/update',
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
