/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建模型 POST /admin-api/ai/model/create */
export async function createModel1({
  body,
  options,
}: {
  body: API.AiModelSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/ai/model/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除模型 DELETE /admin-api/ai/model/delete */
export async function deleteModel1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteModel1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/model/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得模型 GET /admin-api/ai/model/get */
export async function getModel1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getModel1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiModelRespVO>('/admin-api/ai/model/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得模型分页 GET /admin-api/ai/model/page */
export async function getModelPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getModelPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiModelRespVO>(
    '/admin-api/ai/model/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得模型列表 GET /admin-api/ai/model/simple-list */
export async function getModelSimpleList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getModelSimpleListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAiModelRespVO>(
    '/admin-api/ai/model/simple-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新模型 PUT /admin-api/ai/model/update */
export async function updateModel1({
  body,
  options,
}: {
  body: API.AiModelSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/model/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
