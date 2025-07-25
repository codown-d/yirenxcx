/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建【我的】聊天对话 POST /admin-api/ai/chat/conversation/create-my */
export async function createChatConversationMy({
  body,
  options,
}: {
  body: API.AiChatConversationCreateMyReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/ai/chat/conversation/create-my',
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

/** 管理员删除对话 DELETE /admin-api/ai/chat/conversation/delete-by-admin */
export async function deleteChatConversationByAdmin({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteChatConversationByAdminParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/ai/chat/conversation/delete-by-admin',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 删除未置顶的聊天对话 DELETE /admin-api/ai/chat/conversation/delete-by-unpinned */
export async function deleteChatConversationMyByUnpinned({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/ai/chat/conversation/delete-by-unpinned',
    {
      method: 'DELETE',
      ...(options || {}),
    }
  );
}

/** 删除聊天对话 DELETE /admin-api/ai/chat/conversation/delete-my */
export async function deleteChatConversationMy({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteChatConversationMyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/ai/chat/conversation/delete-my',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得【我的】聊天对话 GET /admin-api/ai/chat/conversation/get-my */
export async function getChatConversationMy({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatConversationMyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiChatConversationRespVO>(
    '/admin-api/ai/chat/conversation/get-my',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得【我的】聊天对话列表 GET /admin-api/ai/chat/conversation/my-list */
export async function getChatConversationMyList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAiChatConversationRespVO>(
    '/admin-api/ai/chat/conversation/my-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得对话分页 用于【对话管理】菜单 GET /admin-api/ai/chat/conversation/page */
export async function getChatConversationPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatConversationPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiChatConversationRespVO>(
    '/admin-api/ai/chat/conversation/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新【我的】聊天对话 PUT /admin-api/ai/chat/conversation/update-my */
export async function updateChatConversationMy({
  body,
  options,
}: {
  body: API.AiChatConversationUpdateMyReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/ai/chat/conversation/update-my',
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
