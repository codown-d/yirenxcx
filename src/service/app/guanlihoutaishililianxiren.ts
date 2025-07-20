/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建示例联系人 POST /admin-api/infra/demo01-contact/create */
export async function createDemo01Contact({
  body,
  options,
}: {
  body: API.Demo01ContactSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/infra/demo01-contact/create',
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

/** 删除示例联系人 DELETE /admin-api/infra/demo01-contact/delete */
export async function deleteDemo01Contact({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDemo01ContactParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/demo01-contact/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 导出示例联系人 Excel GET /admin-api/infra/demo01-contact/export-excel */
export async function exportDemo01ContactExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportDemo01ContactExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/infra/demo01-contact/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得示例联系人 GET /admin-api/infra/demo01-contact/get */
export async function getDemo01Contact({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo01ContactParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDemo01ContactRespVO>(
    '/admin-api/infra/demo01-contact/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得示例联系人分页 GET /admin-api/infra/demo01-contact/page */
export async function getDemo01ContactPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo01ContactPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultDemo01ContactRespVO>(
    '/admin-api/infra/demo01-contact/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新示例联系人 PUT /admin-api/infra/demo01-contact/update */
export async function updateDemo01Contact({
  body,
  options,
}: {
  body: API.Demo01ContactSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/demo01-contact/update',
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
