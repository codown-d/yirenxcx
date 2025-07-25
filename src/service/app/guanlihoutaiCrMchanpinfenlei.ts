/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建产品分类 POST /admin-api/crm/product-category/create */
export async function createProductCategory({
  body,
  options,
}: {
  body: API.CrmProductCategoryCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/crm/product-category/create',
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

/** 删除产品分类 DELETE /admin-api/crm/product-category/delete */
export async function deleteProductCategory({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteProductCategoryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/product-category/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得产品分类 GET /admin-api/crm/product-category/get */
export async function getProductCategory({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductCategoryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmProductCategoryRespVO>(
    '/admin-api/crm/product-category/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得产品分类列表 GET /admin-api/crm/product-category/list */
export async function getProductCategoryList2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductCategoryList2Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmProductCategoryRespVO>(
    '/admin-api/crm/product-category/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新产品分类 PUT /admin-api/crm/product-category/update */
export async function updateProductCategory({
  body,
  options,
}: {
  body: API.CrmProductCategoryCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/product-category/update',
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
