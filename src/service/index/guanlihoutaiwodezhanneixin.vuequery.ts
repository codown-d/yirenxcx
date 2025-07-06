/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiwodezhanneixin';
import * as API from './types';

/** 获得站内信 GET /admin-api/system/notify-message/get */
export function getNotifyMessageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNotifyMessageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getNotifyMessage(queryKey[1] as typeof options);
    },
    queryKey: ['getNotifyMessage', options],
  });
}

/** 获得当前用户的未读站内信数量 GET /admin-api/system/notify-message/get-unread-count */
export function getUnreadNotifyMessageCountQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUnreadNotifyMessageCount(queryKey[1] as typeof options);
    },
    queryKey: ['getUnreadNotifyMessageCount', options],
  });
}

/** 获取当前用户的最新站内信列表，默认 10 条 GET /admin-api/system/notify-message/get-unread-list */
export function getUnreadNotifyMessageListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUnreadNotifyMessageListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUnreadNotifyMessageList(queryKey[1] as typeof options);
    },
    queryKey: ['getUnreadNotifyMessageList', options],
  });
}

/** 获得我的站内信分页 GET /admin-api/system/notify-message/my-page */
export function getMyMyNotifyMessagePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMyMyNotifyMessagePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMyMyNotifyMessagePage(queryKey[1] as typeof options);
    },
    queryKey: ['getMyMyNotifyMessagePage', options],
  });
}

/** 获得站内信分页 GET /admin-api/system/notify-message/page */
export function getNotifyMessagePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNotifyMessagePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getNotifyMessagePage(queryKey[1] as typeof options);
    },
    queryKey: ['getNotifyMessagePage', options],
  });
}

/** 标记所有站内信为已读 PUT /admin-api/system/notify-message/update-all-read */
export function useUpdateAllNotifyMessageReadMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateAllNotifyMessageRead,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 标记站内信为已读 PUT /admin-api/system/notify-message/update-read */
export function useUpdateNotifyMessageReadMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateNotifyMessageRead,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
