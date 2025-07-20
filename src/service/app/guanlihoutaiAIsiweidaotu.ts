/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 删除思维导图 DELETE /admin-api/ai/mind-map/delete */
export async function deleteMindMap({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteMindMapParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/mind-map/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导图生成（流式） 流式返回，响应较快 POST /admin-api/ai/mind-map/generate-stream */
export async function generateMindMap({
  body,
  options,
}: {
  body: API.AiMindMapGenerateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString[]>(
    '/admin-api/ai/mind-map/generate-stream',
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

/** 获得思维导图分页 GET /admin-api/ai/mind-map/page */
export async function getMindMapPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMindMapPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiMindMapRespVO>(
    '/admin-api/ai/mind-map/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
