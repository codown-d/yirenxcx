/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 删除写作 DELETE /admin-api/ai/write/delete */
export async function deleteWrite({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteWriteParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/write/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 写作生成（流式） 流式返回，响应较快 POST /admin-api/ai/write/generate-stream */
export async function generateWriteContent({
  body,
  options,
}: {
  body: API.AiWriteGenerateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString[]>(
    '/admin-api/ai/write/generate-stream',
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

/** 获得写作分页 GET /admin-api/ai/write/page */
export async function getWritePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWritePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiWriteRespVO>(
    '/admin-api/ai/write/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
