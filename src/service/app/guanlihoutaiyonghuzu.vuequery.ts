/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiyonghuzu';
import * as API from './types';

/** 创建用户组 POST /admin-api/bpm/user-group/create */
export function useCreateUserGroupMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createUserGroup,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除用户组 DELETE /admin-api/bpm/user-group/delete */
export function useDeleteUserGroupMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteUserGroup,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得用户组 GET /admin-api/bpm/user-group/get */
export function getUserGroupQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserGroupParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUserGroup(queryKey[1] as typeof options);
    },
    queryKey: ['getUserGroup', options],
  });
}

/** 获得用户组分页 GET /admin-api/bpm/user-group/page */
export function getUserGroupPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserGroupPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUserGroupPage(queryKey[1] as typeof options);
    },
    queryKey: ['getUserGroupPage', options],
  });
}

/** 获取用户组精简信息列表 只包含被开启的用户组，主要用于前端的下拉选项 GET /admin-api/bpm/user-group/simple-list */
export function getUserGroupSimpleListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUserGroupSimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getUserGroupSimpleList', options],
  });
}

/** 更新用户组 PUT /admin-api/bpm/user-group/update */
export function useUpdateUserGroupMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateUserGroup,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
