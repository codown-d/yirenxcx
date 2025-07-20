/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建品牌 POST /admin-api/product/brand/create */
export async function createBrand({
  body,
  options,
}: {
  body: API.ProductBrandCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/product/brand/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除品牌 DELETE /admin-api/product/brand/delete */
export async function deleteBrand({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteBrandParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/product/brand/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得品牌 GET /admin-api/product/brand/get */
export async function getBrand({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrandParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultProductBrandRespVO>(
    '/admin-api/product/brand/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得品牌列表 GET /admin-api/product/brand/list */
export async function getBrandList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrandListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListProductBrandRespVO>(
    '/admin-api/product/brand/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取品牌精简信息列表 主要用于前端的下拉选项 GET /admin-api/product/brand/list-all-simple */
export async function getSimpleBrandList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListProductBrandSimpleRespVO>(
    '/admin-api/product/brand/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得品牌分页 GET /admin-api/product/brand/page */
export async function getBrandPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrandPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultProductBrandRespVO>(
    '/admin-api/product/brand/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新品牌 PUT /admin-api/product/brand/update */
export async function updateBrand({
  body,
  options,
}: {
  body: API.ProductBrandUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/product/brand/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
