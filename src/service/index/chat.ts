/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

// 聊天相关类型定义
export interface ChatItem {
  id: string
  name: string
  avatar: string
  lastMessage: string
  lastMessageTime: string
  unreadCount: number
  isRecruiter: boolean
  userId: string
  conversationId: string
}

export interface ChatMessage {
  id: string
  conversationId: string
  senderId: string
  senderName: string
  senderAvatar: string
  content: string
  messageType: 'text' | 'image' | 'file' | 'system'
  createTime: string
  isRead: boolean
}

export interface SystemNotification {
  id: string
  type: 'job_recommendation' | 'interview_invitation' | 'application_update' | 'system_update'
  title: string
  content: string
  createTime: string
  isRead: boolean
  data?: any
}

export interface ChatListParams {
  page: number
  pageSize: number
  keyword?: string
}

export interface ChatListResponse {
  code: number
  data: {
    list: ChatItem[]
    total: number
    pages: number
    current: number
    size: number
  }
  msg: string
}

export interface MessageListParams {
  conversationId: string
  page: number
  pageSize: number
  lastMessageId?: string
}

export interface MessageListResponse {
  code: number
  data: {
    list: ChatMessage[]
    total: number
    hasMore: boolean
  }
  msg: string
}

export interface SendMessageRequest {
  conversationId: string
  content: string
  messageType: 'text' | 'image' | 'file'
  receiverId: string
}

export interface SendMessageResponse {
  code: number
  data: {
    messageId: string
    message: ChatMessage
  }
  msg: string
}

export interface NotificationListParams {
  page: number
  pageSize: number
  type?: string
  isRead?: boolean
}

export interface NotificationListResponse {
  code: number
  data: {
    list: SystemNotification[]
    total: number
    unreadCount: number
  }
  msg: string
}

export interface CreateConversationRequest {
  receiverId: string
  receiverName: string
  receiverAvatar: string
}

export interface CreateConversationResponse {
  code: number
  data: {
    conversationId: string
    conversation: ChatItem
  }
  msg: string
}

/** 获取聊天列表 GET /app-api/chat/conversation/list */
export async function getChatList({
  params,
  options,
}: {
  params: ChatListParams;
  options?: CustomRequestOptions;
}): Promise<ChatListResponse> {
  return request<ChatListResponse>('/app-api/chat/conversation/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取聊天消息列表 GET /app-api/chat/message/list */
export async function getMessageList({
  params,
  options,
}: {
  params: MessageListParams;
  options?: CustomRequestOptions;
}): Promise<MessageListResponse> {
  return request<MessageListResponse>('/app-api/chat/message/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 发送消息 POST /app-api/chat/message/send */
export async function sendMessage({
  body,
  options,
}: {
  body: SendMessageRequest;
  options?: CustomRequestOptions;
}): Promise<SendMessageResponse> {
  return request<SendMessageResponse>('/app-api/chat/message/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建会话 POST /app-api/chat/conversation/create */
export async function createConversation({
  body,
  options,
}: {
  body: CreateConversationRequest;
  options?: CustomRequestOptions;
}): Promise<CreateConversationResponse> {
  return request<CreateConversationResponse>('/app-api/chat/conversation/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 标记消息为已读 PUT /app-api/chat/message/read */
export async function markMessageAsRead({
  body,
  options,
}: {
  body: {
    conversationId: string;
    messageIds?: string[];
  };
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: boolean;
    msg: string;
  }>('/app-api/chat/message/read', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取系统通知列表 GET /app-api/notification/list */
export async function getNotificationList({
  params,
  options,
}: {
  params: NotificationListParams;
  options?: CustomRequestOptions;
}): Promise<NotificationListResponse> {
  return request<NotificationListResponse>('/app-api/notification/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 标记通知为已读 PUT /app-api/notification/read */
export async function markNotificationAsRead({
  body,
  options,
}: {
  body: {
    notificationIds: string[];
  };
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: boolean;
    msg: string;
  }>('/app-api/notification/read', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除会话 DELETE /app-api/chat/conversation/delete */
export async function deleteConversation({
  params,
  options,
}: {
  params: {
    conversationId: string;
  };
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: boolean;
    msg: string;
  }>('/app-api/chat/conversation/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取未读消息数量 GET /app-api/chat/unread/count */
export async function getUnreadCount({
  options,
}: {
  options?: CustomRequestOptions;
} = {}) {
  return request<{
    code: number;
    data: {
      chatUnreadCount: number;
      notificationUnreadCount: number;
      totalUnreadCount: number;
    };
    msg: string;
  }>('/app-api/chat/unread/count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 搜索聊天记录 GET /app-api/chat/message/search */
export async function searchMessages({
  params,
  options,
}: {
  params: {
    keyword: string;
    conversationId?: string;
    page: number;
    pageSize: number;
  };
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: {
      list: ChatMessage[];
      total: number;
    };
    msg: string;
  }>('/app-api/chat/message/search', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
