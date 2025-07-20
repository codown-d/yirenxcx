/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 删除消息 DELETE /admin-api/ai/chat/message/delete */
export async function deleteChatMessage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteChatMessageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/chat/message/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 管理员删除消息 DELETE /admin-api/ai/chat/message/delete-by-admin */
export async function deleteChatMessageByAdmin({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteChatMessageByAdminParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/ai/chat/message/delete-by-admin',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 删除指定对话的消息 DELETE /admin-api/ai/chat/message/delete-by-conversation-id */
export async function deleteChatMessageByConversationId({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteChatMessageByConversationIdParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/ai/chat/message/delete-by-conversation-id',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得指定对话的消息列表 GET /admin-api/ai/chat/message/list-by-conversation-id */
export async function getChatMessageListByConversationId({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatMessageListByConversationIdParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAiChatMessageRespVO>(
    '/admin-api/ai/chat/message/list-by-conversation-id',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得消息分页 用于【对话管理】菜单 GET /admin-api/ai/chat/message/page */
export async function getChatMessagePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatMessagePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiChatMessageRespVO>(
    '/admin-api/ai/chat/message/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 发送消息（段式） 一次性返回，响应较慢 POST /admin-api/ai/chat/message/send */
export async function sendMessage1({
  body,
  options,
}: {
  body: API.AiChatMessageSendReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiChatMessageSendRespVO>(
    '/admin-api/ai/chat/message/send',
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

/** 发送消息（流式） 流式返回，响应较快 POST /admin-api/ai/chat/message/send-stream */
export async function sendChatMessageStream({
  body,
  options,
}: {
  body: API.AiChatMessageSendReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiChatMessageSendRespVO[]>(
    '/admin-api/ai/chat/message/send-stream',
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
