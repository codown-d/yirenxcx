/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建流程分类 POST /admin-api/bpm/category/create */
export async function createCategory1({
  body,
  options,
}: {
  body: API.BpmCategorySaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/bpm/category/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除流程分类 DELETE /admin-api/bpm/category/delete */
export async function deleteCategory1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteCategory1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/category/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得流程分类 GET /admin-api/bpm/category/get */
export async function getCategory1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCategory1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBpmCategoryRespVO>(
    '/admin-api/bpm/category/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得流程分类分页 GET /admin-api/bpm/category/page */
export async function getCategoryPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCategoryPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBpmCategoryRespVO>(
    '/admin-api/bpm/category/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取流程分类的精简信息列表 只包含被开启的分类，主要用于前端的下拉选项 GET /admin-api/bpm/category/simple-list */
export async function getCategorySimpleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListBpmCategoryRespVO>(
    '/admin-api/bpm/category/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新流程分类 PUT /admin-api/bpm/category/update */
export async function updateCategory1({
  body,
  options,
}: {
  body: API.BpmCategorySaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/category/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量更新流程分类的排序 PUT /admin-api/bpm/category/update-sort-batch */
export async function updateCategorySortBatch({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.updateCategorySortBatchParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/bpm/category/update-sort-batch',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
