/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 新建文档（单个） POST /admin-api/ai/knowledge/document/create */
export async function createKnowledgeDocument({
  body,
  options,
}: {
  body: API.AiKnowledgeDocumentCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/ai/knowledge/document/create',
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

/** 新建文档（多个） POST /admin-api/ai/knowledge/document/create-list */
export async function createKnowledgeDocumentList({
  body,
  options,
}: {
  body: API.AiKnowledgeDocumentCreateListReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListLong>(
    '/admin-api/ai/knowledge/document/create-list',
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

/** 删除文档 DELETE /admin-api/ai/knowledge/document/delete */
export async function deleteKnowledgeDocument({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteKnowledgeDocumentParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/ai/knowledge/document/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取文档详情 GET /admin-api/ai/knowledge/document/get */
export async function getKnowledgeDocument({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgeDocumentParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiKnowledgeDocumentRespVO>(
    '/admin-api/ai/knowledge/document/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取文档分页 GET /admin-api/ai/knowledge/document/page */
export async function getKnowledgeDocumentPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgeDocumentPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiKnowledgeDocumentRespVO>(
    '/admin-api/ai/knowledge/document/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新文档 PUT /admin-api/ai/knowledge/document/update */
export async function updateKnowledgeDocument({
  body,
  options,
}: {
  body: API.AiKnowledgeDocumentUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/ai/knowledge/document/update',
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

/** 更新文档状态 PUT /admin-api/ai/knowledge/document/update-status */
export async function updateKnowledgeDocumentStatus({
  body,
  options,
}: {
  body: API.AiKnowledgeDocumentUpdateStatusReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/ai/knowledge/document/update-status',
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
