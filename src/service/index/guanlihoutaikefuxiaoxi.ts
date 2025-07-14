/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得客服消息列表 GET /admin-api/promotion/kefu-message/list */
export async function getKeFuMessageList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getKeFuMessageListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListKeFuMessageRespVO>(
    '/admin-api/promotion/kefu-message/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 发送客服消息 POST /admin-api/promotion/kefu-message/send */
export async function sendKeFuMessage({
  body,
  options,
}: {
  body: API.KeFuMessageSendReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/promotion/kefu-message/send',
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

/** 更新客服消息已读状态 PUT /admin-api/promotion/kefu-message/update-read-status */
export async function updateKeFuMessageReadStatus({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.updateKeFuMessageReadStatusParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/kefu-message/update-read-status',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
