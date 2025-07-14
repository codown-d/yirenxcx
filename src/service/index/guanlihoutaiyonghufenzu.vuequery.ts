/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiyonghufenzu';
import * as API from './types';

/** 创建用户分组 POST /admin-api/member/group/create */
export function useCreateGroupMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createGroup,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除用户分组 DELETE /admin-api/member/group/delete */
export function useDeleteGroupMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteGroup,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得用户分组 GET /admin-api/member/group/get */
export function getGroupQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getGroupParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getGroup(queryKey[1] as typeof options);
    },
    queryKey: ['getGroup', options],
  });
}

/** 获取会员分组精简信息列表 只包含被开启的会员分组，主要用于前端的下拉选项 GET /admin-api/member/group/list-all-simple */
export function getSimpleGroupListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleGroupList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleGroupList', options],
  });
}

/** 获得用户分组分页 GET /admin-api/member/group/page */
export function getGroupPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getGroupPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getGroupPage(queryKey[1] as typeof options);
    },
    queryKey: ['getGroupPage', options],
  });
}

/** 更新用户分组 PUT /admin-api/member/group/update */
export function useUpdateGroupMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateGroup,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
