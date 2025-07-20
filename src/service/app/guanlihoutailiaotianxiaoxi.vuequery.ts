/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutailiaotianxiaoxi';
import * as API from './types';

/** 删除消息 DELETE /admin-api/ai/chat/message/delete */
export function useDeleteChatMessageMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteChatMessage,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 管理员删除消息 DELETE /admin-api/ai/chat/message/delete-by-admin */
export function useDeleteChatMessageByAdminMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteChatMessageByAdmin,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除指定对话的消息 DELETE /admin-api/ai/chat/message/delete-by-conversation-id */
export function useDeleteChatMessageByConversationIdMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteChatMessageByConversationId,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得指定对话的消息列表 GET /admin-api/ai/chat/message/list-by-conversation-id */
export function getChatMessageListByConversationIdQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatMessageListByConversationIdParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getChatMessageListByConversationId(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getChatMessageListByConversationId', options],
  });
}

/** 获得消息分页 用于【对话管理】菜单 GET /admin-api/ai/chat/message/page */
export function getChatMessagePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatMessagePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getChatMessagePage(queryKey[1] as typeof options);
    },
    queryKey: ['getChatMessagePage', options],
  });
}

/** 发送消息（段式） 一次性返回，响应较慢 POST /admin-api/ai/chat/message/send */
export function useSendMessage1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultAiChatMessageSendRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.sendMessage1,
    onSuccess(data: API.CommonResultAiChatMessageSendRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 发送消息（流式） 流式返回，响应较快 POST /admin-api/ai/chat/message/send-stream */
export function useSendChatMessageStreamMutation(options?: {
  onSuccess?: (value?: API.CommonResultAiChatMessageSendRespVO[]) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.sendChatMessageStream,
    onSuccess(data: API.CommonResultAiChatMessageSendRespVO[]) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
