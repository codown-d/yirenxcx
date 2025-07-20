/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiAIliaotianjiaose';
import * as API from './types';

/** 获得聊天角色的分类列表 GET /admin-api/ai/chat-role/category-list */
export function getChatRoleCategoryListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getChatRoleCategoryList(queryKey[1] as typeof options);
    },
    queryKey: ['getChatRoleCategoryList', options],
  });
}

/** 创建聊天角色 POST /admin-api/ai/chat-role/create */
export function useCreateChatRoleMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createChatRole,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 创建【我的】聊天角色 POST /admin-api/ai/chat-role/create-my */
export function useCreateChatRoleMyMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createChatRoleMy,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除聊天角色 DELETE /admin-api/ai/chat-role/delete */
export function useDeleteChatRoleMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteChatRole,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除【我的】聊天角色 DELETE /admin-api/ai/chat-role/delete-my */
export function useDeleteChatRoleMyMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteChatRoleMy,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得聊天角色 GET /admin-api/ai/chat-role/get */
export function getChatRoleQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatRoleParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getChatRole(queryKey[1] as typeof options);
    },
    queryKey: ['getChatRole', options],
  });
}

/** 获得【我的】聊天角色 GET /admin-api/ai/chat-role/get-my */
export function getChatRoleMyQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatRoleMyParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getChatRoleMy(queryKey[1] as typeof options);
    },
    queryKey: ['getChatRoleMy', options],
  });
}

/** 获得【我的】聊天角色分页 GET /admin-api/ai/chat-role/my-page */
export function getChatRoleMyPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatRoleMyPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getChatRoleMyPage(queryKey[1] as typeof options);
    },
    queryKey: ['getChatRoleMyPage', options],
  });
}

/** 获得聊天角色分页 GET /admin-api/ai/chat-role/page */
export function getChatRolePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatRolePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getChatRolePage(queryKey[1] as typeof options);
    },
    queryKey: ['getChatRolePage', options],
  });
}

/** 更新聊天角色 PUT /admin-api/ai/chat-role/update */
export function useUpdateChatRoleMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateChatRole,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新【我的】聊天角色 PUT /admin-api/ai/chat-role/update-my */
export function useUpdateChatRoleMyMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateChatRoleMy,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
