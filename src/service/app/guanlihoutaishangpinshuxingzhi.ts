/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建属性值 POST /admin-api/product/property/value/create */
export async function createPropertyValue({
  body,
  options,
}: {
  body: API.ProductPropertyValueSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/product/property/value/create',
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

/** 删除属性值 DELETE /admin-api/product/property/value/delete */
export async function deletePropertyValue({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deletePropertyValueParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/product/property/value/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得属性值 GET /admin-api/product/property/value/get */
export async function getPropertyValue({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPropertyValueParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultProductPropertyValueRespVO>(
    '/admin-api/product/property/value/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得属性值分页 GET /admin-api/product/property/value/page */
export async function getPropertyValuePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPropertyValuePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultProductPropertyValueRespVO>(
    '/admin-api/product/property/value/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得属性值精简列表 GET /admin-api/product/property/value/simple-list */
export async function getPropertyValueSimpleList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPropertyValueSimpleListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListProductPropertyValueRespVO>(
    '/admin-api/product/property/value/simple-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新属性值 PUT /admin-api/product/property/value/update */
export async function updatePropertyValue({
  body,
  options,
}: {
  body: API.ProductPropertyValueSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/product/property/value/update',
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
