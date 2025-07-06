/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaishejiaoyonghu';
import * as API from './types';

/** 社交绑定，使用 code 授权码 POST /admin-api/system/social-user/bind */
export function useSocialBindMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.socialBind,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得社交用户 GET /admin-api/system/social-user/get */
export function getSocialUserQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSocialUserParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSocialUser(queryKey[1] as typeof options);
    },
    queryKey: ['getSocialUser', options],
  });
}

/** 获得绑定社交用户列表 GET /admin-api/system/social-user/get-bind-list */
export function getBindSocialUserListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBindSocialUserList(queryKey[1] as typeof options);
    },
    queryKey: ['getBindSocialUserList', options],
  });
}

/** 获得社交用户分页 GET /admin-api/system/social-user/page */
export function getSocialUserPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSocialUserPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSocialUserPage(queryKey[1] as typeof options);
    },
    queryKey: ['getSocialUserPage', options],
  });
}

/** 取消社交绑定 DELETE /admin-api/system/social-user/unbind */
export function useSocialUnbindMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.socialUnbind,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
