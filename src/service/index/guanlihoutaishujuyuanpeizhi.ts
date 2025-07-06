/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建数据源配置 POST /admin-api/infra/data-source-config/create */
export async function createDataSourceConfig({
  body,
  options,
}: {
  body: API.DataSourceConfigSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/infra/data-source-config/create',
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

/** 删除数据源配置 DELETE /admin-api/infra/data-source-config/delete */
export async function deleteDataSourceConfig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDataSourceConfigParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/data-source-config/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得数据源配置 GET /admin-api/infra/data-source-config/get */
export async function getDataSourceConfig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDataSourceConfigParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDataSourceConfigRespVO>(
    '/admin-api/infra/data-source-config/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得数据源配置列表 GET /admin-api/infra/data-source-config/list */
export async function getDataSourceConfigList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDataSourceConfigRespVO>(
    '/admin-api/infra/data-source-config/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新数据源配置 PUT /admin-api/infra/data-source-config/update */
export async function updateDataSourceConfig({
  body,
  options,
}: {
  body: API.DataSourceConfigSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/data-source-config/update',
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
