/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建段落 POST /admin-api/ai/knowledge/segment/create */
export async function createKnowledgeSegment({
  body,
  options,
}: {
  body: API.AiKnowledgeSegmentSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/ai/knowledge/segment/create',
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

/** 获取段落详情 GET /admin-api/ai/knowledge/segment/get */
export async function getKnowledgeSegment({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgeSegmentParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiKnowledgeSegmentRespVO>(
    '/admin-api/ai/knowledge/segment/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取文档处理列表 GET /admin-api/ai/knowledge/segment/get-process-list */
export async function getKnowledgeSegmentProcessList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgeSegmentProcessListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAiKnowledgeSegmentProcessRespVO>(
    '/admin-api/ai/knowledge/segment/get-process-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取段落分页 GET /admin-api/ai/knowledge/segment/page */
export async function getKnowledgeSegmentPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKnowledgeSegmentPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiKnowledgeSegmentRespVO>(
    '/admin-api/ai/knowledge/segment/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 搜索段落内容 GET /admin-api/ai/knowledge/segment/search */
export async function searchKnowledgeSegment({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.searchKnowledgeSegmentParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAiKnowledgeSegmentSearchRespVO>(
    '/admin-api/ai/knowledge/segment/search',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 切片内容 GET /admin-api/ai/knowledge/segment/split */
export async function splitContent({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.splitContentParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAiKnowledgeSegmentRespVO>(
    '/admin-api/ai/knowledge/segment/split',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新段落内容 PUT /admin-api/ai/knowledge/segment/update */
export async function updateKnowledgeSegment({
  body,
  options,
}: {
  body: API.AiKnowledgeSegmentSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/ai/knowledge/segment/update',
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

/** 启禁用段落内容 PUT /admin-api/ai/knowledge/segment/update-status */
export async function updateKnowledgeSegmentStatus({
  body,
  options,
}: {
  body: API.AiKnowledgeSegmentUpdateStatusReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/ai/knowledge/segment/update-status',
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
