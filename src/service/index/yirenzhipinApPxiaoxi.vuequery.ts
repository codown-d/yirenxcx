/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yirenzhipinApPxiaoxi';
import * as API from './types';

/** 获得未读消息数量 GET /app-api/yirenzhipin/message/get-unread-count */
export function getUnreadMessageCountQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUnreadMessageCount(queryKey[1] as typeof options);
    },
    queryKey: ['getUnreadMessageCount', options],
  });
}

/** 获得消息分页 GET /app-api/yirenzhipin/message/page */
export function getMessagePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMessagePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMessagePage(queryKey[1] as typeof options);
    },
    queryKey: ['getMessagePage', options],
  });
}

/** 标记所有消息为已读 PUT /app-api/yirenzhipin/message/read-all */
export function useMarkAllMessagesAsReadMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.markAllMessagesAsRead,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 标记消息为已读 PUT /app-api/yirenzhipin/message/read/${param0} */
export function useMarkMessageAsReadMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.markMessageAsRead,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 发送消息 POST /app-api/yirenzhipin/message/send */
export function useSendMessageMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.sendMessage,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
