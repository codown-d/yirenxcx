/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建 API 密钥 POST /admin-api/ai/api-key/create */
export async function createApiKey({
  body,
  options,
}: {
  body: API.AiApiKeySaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/ai/api-key/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 API 密钥 DELETE /admin-api/ai/api-key/delete */
export async function deleteApiKey({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteApiKeyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/api-key/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得 API 密钥 GET /admin-api/ai/api-key/get */
export async function getApiKey({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getApiKeyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiApiKeyRespVO>('/admin-api/ai/api-key/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得 API 密钥分页 GET /admin-api/ai/api-key/page */
export async function getApiKeyPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getApiKeyPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiApiKeyRespVO>(
    '/admin-api/ai/api-key/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得 API 密钥分页列表 GET /admin-api/ai/api-key/simple-list */
export async function getApiKeySimpleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAiModelRespVO>(
    '/admin-api/ai/api-key/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新 API 密钥 PUT /admin-api/ai/api-key/update */
export async function updateApiKey({
  body,
  options,
}: {
  body: API.AiApiKeySaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/api-key/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
