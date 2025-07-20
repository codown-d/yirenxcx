/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建 AI 工作流 POST /admin-api/ai/workflow/create */
export async function createWorkflow({
  body,
  options,
}: {
  body: API.AiWorkflowSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/ai/workflow/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 AI 工作流 DELETE /admin-api/ai/workflow/delete */
export async function deleteWorkflow({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteWorkflowParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/workflow/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得 AI 工作流 GET /admin-api/ai/workflow/get */
export async function getWorkflow({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWorkflowParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiWorkflowRespVO>(
    '/admin-api/ai/workflow/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得 AI 工作流分页 GET /admin-api/ai/workflow/page */
export async function getWorkflowPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWorkflowPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiWorkflowRespVO>(
    '/admin-api/ai/workflow/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 测试 AI 工作流 POST /admin-api/ai/workflow/test */
export async function testWorkflow({
  body,
  options,
}: {
  body: API.AiWorkflowTestReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultObject>('/admin-api/ai/workflow/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 AI 工作流 PUT /admin-api/ai/workflow/update */
export async function updateWorkflow({
  body,
  options,
}: {
  body: API.AiWorkflowSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/workflow/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
