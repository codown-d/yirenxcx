/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiAIliaotianduihua';
import * as API from './types';

/** 创建【我的】聊天对话 POST /admin-api/ai/chat/conversation/create-my */
export function useCreateChatConversationMyMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createChatConversationMy,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 管理员删除对话 DELETE /admin-api/ai/chat/conversation/delete-by-admin */
export function useDeleteChatConversationByAdminMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteChatConversationByAdmin,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除未置顶的聊天对话 DELETE /admin-api/ai/chat/conversation/delete-by-unpinned */
export function useDeleteChatConversationMyByUnpinnedMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteChatConversationMyByUnpinned,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除聊天对话 DELETE /admin-api/ai/chat/conversation/delete-my */
export function useDeleteChatConversationMyMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteChatConversationMy,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得【我的】聊天对话 GET /admin-api/ai/chat/conversation/get-my */
export function getChatConversationMyQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatConversationMyParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getChatConversationMy(queryKey[1] as typeof options);
    },
    queryKey: ['getChatConversationMy', options],
  });
}

/** 获得【我的】聊天对话列表 GET /admin-api/ai/chat/conversation/my-list */
export function getChatConversationMyListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getChatConversationMyList(queryKey[1] as typeof options);
    },
    queryKey: ['getChatConversationMyList', options],
  });
}

/** 获得对话分页 用于【对话管理】菜单 GET /admin-api/ai/chat/conversation/page */
export function getChatConversationPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatConversationPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getChatConversationPage(queryKey[1] as typeof options);
    },
    queryKey: ['getChatConversationPage', options],
  });
}

/** 更新【我的】聊天对话 PUT /admin-api/ai/chat/conversation/update-my */
export function useUpdateChatConversationMyMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateChatConversationMy,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
