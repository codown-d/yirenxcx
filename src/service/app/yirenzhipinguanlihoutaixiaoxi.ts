/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建消息 POST /admin-api/yirenzhipin/message/create */
export async function createMessage({
  body,
  options,
}: {
  body: API.YRZPMessageCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/yirenzhipin/message/create',
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

/** 删除消息 DELETE /admin-api/yirenzhipin/message/delete */
export async function deleteMessage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteMessageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/message/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得消息 GET /admin-api/yirenzhipin/message/get */
export async function getMessage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMessageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPMessageRespVO>(
    '/admin-api/yirenzhipin/message/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得消息分页 GET /admin-api/yirenzhipin/message/page */
export async function getMessagePage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMessagePage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPMessageRespVO>(
    '/admin-api/yirenzhipin/message/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
