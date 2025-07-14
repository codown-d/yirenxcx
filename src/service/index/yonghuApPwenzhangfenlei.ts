/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得文章分类列表 GET /app-api/promotion/article-category/list */
export async function getArticleCategoryList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppArticleCategoryRespVO>(
    '/app-api/promotion/article-category/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得文章分类列表 PUT /app-api/promotion/article-category/list */
export async function getArticleCategoryList2({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppArticleCategoryRespVO>(
    '/app-api/promotion/article-category/list',
    {
      method: 'PUT',
      ...(options || {}),
    }
  );
}

/** 获得文章分类列表 POST /app-api/promotion/article-category/list */
export async function getArticleCategoryList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppArticleCategoryRespVO>(
    '/app-api/promotion/article-category/list',
    {
      method: 'POST',
      ...(options || {}),
    }
  );
}

/** 获得文章分类列表 DELETE /app-api/promotion/article-category/list */
export async function getArticleCategoryList3({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppArticleCategoryRespVO>(
    '/app-api/promotion/article-category/list',
    {
      method: 'DELETE',
      ...(options || {}),
    }
  );
}

/** 获得文章分类列表 PATCH /app-api/promotion/article-category/list */
export async function getArticleCategoryList4({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppArticleCategoryRespVO>(
    '/app-api/promotion/article-category/list',
    {
      method: 'PATCH',
      ...(options || {}),
    }
  );
}
