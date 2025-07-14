/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建参数配置 POST /admin-api/infra/config/create */
export async function createConfig({
  body,
  options,
}: {
  body: API.ConfigSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/infra/config/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除参数配置 DELETE /admin-api/infra/config/delete */
export async function deleteConfig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteConfigParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/infra/config/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出参数配置 GET /admin-api/infra/config/export */
export async function exportConfig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportConfigParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/infra/config/export', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得参数配置 GET /admin-api/infra/config/get */
export async function getConfig2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getConfig2Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultConfigRespVO>('/admin-api/infra/config/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据参数键名查询参数值 不可见的配置，不允许返回给前端 GET /admin-api/infra/config/get-value-by-key */
export async function getConfigKey({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getConfigKeyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>(
    '/admin-api/infra/config/get-value-by-key',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取参数配置分页 GET /admin-api/infra/config/page */
export async function getConfigPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getConfigPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultConfigRespVO>(
    '/admin-api/infra/config/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 修改参数配置 PUT /admin-api/infra/config/update */
export async function updateConfig1({
  body,
  options,
}: {
  body: API.ConfigSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/infra/config/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
