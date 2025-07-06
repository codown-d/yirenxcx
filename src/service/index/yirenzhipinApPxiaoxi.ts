/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得未读消息数量 GET /app-api/yirenzhipin/message/get-unread-count */
export async function getUnreadMessageCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/app-api/yirenzhipin/message/get-unread-count',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得消息分页 GET /app-api/yirenzhipin/message/page */
export async function getMessagePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMessagePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPMessageRespAppVO>(
    '/app-api/yirenzhipin/message/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 标记所有消息为已读 PUT /app-api/yirenzhipin/message/read-all */
export async function markAllMessagesAsRead({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/yirenzhipin/message/read-all',
    {
      method: 'PUT',
      ...(options || {}),
    }
  );
}

/** 标记消息为已读 PUT /app-api/yirenzhipin/message/read/${param0} */
export async function markMessageAsRead({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.markMessageAsReadParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.CommonResultBoolean>(
    `/app-api/yirenzhipin/message/read/${param0}`,
    {
      method: 'PUT',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 发送消息 POST /app-api/yirenzhipin/message/send */
export async function sendMessage({
  body,
  options,
}: {
  body: API.YRZPMessageSendAppReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/app-api/yirenzhipin/message/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
