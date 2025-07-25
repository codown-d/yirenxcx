/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiduanxinqudao';
import * as API from './types';

/** 创建短信渠道 POST /admin-api/system/sms-channel/create */
export function useCreateSmsChannelMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createSmsChannel,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除短信渠道 DELETE /admin-api/system/sms-channel/delete */
export function useDeleteSmsChannelMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteSmsChannel,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得短信渠道 GET /admin-api/system/sms-channel/get */
export function getSmsChannelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSmsChannelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSmsChannel(queryKey[1] as typeof options);
    },
    queryKey: ['getSmsChannel', options],
  });
}

/** 获得短信渠道精简列表 包含被禁用的短信渠道 GET /admin-api/system/sms-channel/list-all-simple */
export function getSimpleSmsChannelList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleSmsChannelList1(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleSmsChannelList1', options],
  });
}

/** 获得短信渠道分页 GET /admin-api/system/sms-channel/page */
export function getSmsChannelPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSmsChannelPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSmsChannelPage(queryKey[1] as typeof options);
    },
    queryKey: ['getSmsChannelPage', options],
  });
}

/** 获得短信渠道精简列表 包含被禁用的短信渠道 GET /admin-api/system/sms-channel/simple-list */
export function getSimpleSmsChannelListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleSmsChannelList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleSmsChannelList', options],
  });
}

/** 更新短信渠道 PUT /admin-api/system/sms-channel/update */
export function useUpdateSmsChannelMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateSmsChannel,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
