/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得客服消息列表 GET /app-api/promotion/kefu-message/list */
export async function getKefuMessageList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKefuMessageListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListKeFuMessageRespVO>(
    '/app-api/promotion/kefu-message/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 发送客服消息 POST /app-api/promotion/kefu-message/send */
export async function sendKefuMessage({
  body,
  options,
}: {
  body: API.AppKeFuMessageSendReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/app-api/promotion/kefu-message/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新客服消息已读状态 PUT /app-api/promotion/kefu-message/update-read-status */
export async function updateKefuMessageReadStatus({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.updateKefuMessageReadStatusParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/promotion/kefu-message/update-read-status',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
