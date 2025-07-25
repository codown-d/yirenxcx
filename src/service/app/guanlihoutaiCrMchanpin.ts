/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建产品 POST /admin-api/crm/product/create */
export async function createProduct({
  body,
  options,
}: {
  body: API.CrmProductSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/crm/product/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除产品 DELETE /admin-api/crm/product/delete */
export async function deleteProduct({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteProductParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/product/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出产品 Excel GET /admin-api/crm/product/export-excel */
export async function exportProductExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportProductExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/crm/product/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得产品 GET /admin-api/crm/product/get */
export async function getProduct({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmProductRespVO>(
    '/admin-api/crm/product/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得产品分页 GET /admin-api/crm/product/page */
export async function getProductPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmProductRespVO>(
    '/admin-api/crm/product/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得产品精简列表 只包含被开启的产品，主要用于前端的下拉选项 GET /admin-api/crm/product/simple-list */
export async function getProductSimpleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmProductRespVO>(
    '/admin-api/crm/product/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新产品 PUT /admin-api/crm/product/update */
export async function updateProduct({
  body,
  options,
}: {
  body: API.CrmProductSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/product/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
