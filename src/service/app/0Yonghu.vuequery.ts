/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './0Yonghu';
import * as API from './types';

/** 获得用户基本信息 GET /admin-api/system/oauth2/user/get */
export function getUserInfo1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUserInfo1(queryKey[1] as typeof options);
    },
    queryKey: ['getUserInfo1', options],
  });
}

/** 更新用户基本信息 PUT /admin-api/system/oauth2/user/update */
export function useUpdateUserInfoMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateUserInfo,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
