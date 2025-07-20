/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建知识库 POST /admin-api/ai/knowledge/create */
export async function createKnowledge({
  body,
  options,
}: {
  body: API.AiKnowledgeSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/ai/knowledge/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除知识库 DELETE /admin-api/ai/knowledge/delete */
export async function deleteKnowledge({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteKnowledgeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/knowledge/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得知识库 GET /admin-api/ai/knowledge/get */
export async function getKnowledge({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiKnowledgeRespVO>(
    '/admin-api/ai/knowledge/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取知识库分页 GET /admin-api/ai/knowledge/page */
export async function getKnowledgePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiKnowledgeRespVO>(
    '/admin-api/ai/knowledge/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得知识库的精简列表 GET /admin-api/ai/knowledge/simple-list */
export async function getKnowledgeSimpleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAiKnowledgeRespVO>(
    '/admin-api/ai/knowledge/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新知识库 PUT /admin-api/ai/knowledge/update */
export async function updateKnowledge({
  body,
  options,
}: {
  body: API.AiKnowledgeSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/knowledge/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
