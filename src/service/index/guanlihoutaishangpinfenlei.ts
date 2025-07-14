/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建商品分类 POST /admin-api/product/category/create */
export async function createCategory({
  body,
  options,
}: {
  body: API.ProductCategorySaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/product/category/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除商品分类 DELETE /admin-api/product/category/delete */
export async function deleteCategory({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteCategoryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/product/category/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商品分类 GET /admin-api/product/category/get */
export async function getCategory({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCategoryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultProductCategoryRespVO>(
    '/admin-api/product/category/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商品分类列表 GET /admin-api/product/category/list */
export async function getCategoryList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCategoryListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListProductCategoryRespVO>(
    '/admin-api/product/category/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新商品分类 PUT /admin-api/product/category/update */
export async function updateCategory({
  body,
  options,
}: {
  body: API.ProductCategorySaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/product/category/update',
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
