/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建属性项 POST /admin-api/product/property/create */
export async function createProperty({
  body,
  options,
}: {
  body: API.ProductPropertySaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/product/property/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除属性项 DELETE /admin-api/product/property/delete */
export async function deleteProperty({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deletePropertyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/product/property/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得属性项 GET /admin-api/product/property/get */
export async function getProperty({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPropertyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultProductPropertyRespVO>(
    '/admin-api/product/property/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得属性项分页 GET /admin-api/product/property/page */
export async function getPropertyPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPropertyPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultProductPropertyRespVO>(
    '/admin-api/product/property/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得属性项精简列表 GET /admin-api/product/property/simple-list */
export async function getPropertySimpleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListProductPropertyRespVO>(
    '/admin-api/product/property/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新属性项 PUT /admin-api/product/property/update */
export async function updateProperty({
  body,
  options,
}: {
  body: API.ProductPropertySaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/product/property/update',
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
