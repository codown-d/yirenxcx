/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建示例分类 POST /admin-api/infra/demo02-category/create */
export async function createDemo02Category({
  body,
  options,
}: {
  body: API.Demo02CategorySaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/infra/demo02-category/create',
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

/** 删除示例分类 DELETE /admin-api/infra/demo02-category/delete */
export async function deleteDemo02Category({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDemo02CategoryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/demo02-category/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 导出示例分类 Excel GET /admin-api/infra/demo02-category/export-excel */
export async function exportDemo02CategoryExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportDemo02CategoryExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/infra/demo02-category/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得示例分类 GET /admin-api/infra/demo02-category/get */
export async function getDemo02Category({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo02CategoryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDemo02CategoryRespVO>(
    '/admin-api/infra/demo02-category/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得示例分类列表 GET /admin-api/infra/demo02-category/list */
export async function getDemo02CategoryList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo02CategoryListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDemo02CategoryRespVO>(
    '/admin-api/infra/demo02-category/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新示例分类 PUT /admin-api/infra/demo02-category/update */
export async function updateDemo02Category({
  body,
  options,
}: {
  body: API.Demo02CategorySaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/demo02-category/update',
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
