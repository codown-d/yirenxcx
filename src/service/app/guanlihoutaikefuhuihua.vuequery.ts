/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaikefuhuihua';
import * as API from './types';

/** 删除客服会话 DELETE /admin-api/promotion/kefu-conversation/delete */
export function useDeleteConversationMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteConversation,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得客服会话 GET /admin-api/promotion/kefu-conversation/get */
export function getConversationQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getConversationParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getConversation(queryKey[1] as typeof options);
    },
    queryKey: ['getConversation', options],
  });
}

/** 获得客服会话列表 GET /admin-api/promotion/kefu-conversation/list */
export function getConversationListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getConversationList(queryKey[1] as typeof options);
    },
    queryKey: ['getConversationList', options],
  });
}

/** 置顶/取消置顶客服会话 PUT /admin-api/promotion/kefu-conversation/update-conversation-pinned */
export function useUpdateConversationPinnedMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateConversationPinned,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
