/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建工具 POST /admin-api/ai/tool/create */
export async function createTool({
  body,
  options,
}: {
  body: API.AiToolSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/ai/tool/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除工具 DELETE /admin-api/ai/tool/delete */
export async function deleteTool({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteToolParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/tool/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得工具 GET /admin-api/ai/tool/get */
export async function getTool({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getToolParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiToolRespVO>('/admin-api/ai/tool/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得工具分页 GET /admin-api/ai/tool/page */
export async function getToolPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getToolPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiToolRespVO>(
    '/admin-api/ai/tool/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得工具列表 GET /admin-api/ai/tool/simple-list */
export async function getToolSimpleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAiToolRespVO>(
    '/admin-api/ai/tool/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新工具 PUT /admin-api/ai/tool/update */
export async function updateTool({
  body,
  options,
}: {
  body: API.AiToolSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/tool/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
