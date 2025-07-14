/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaihuiyuanbiaoqie';
import * as API from './types';

/** 创建会员标签 POST /admin-api/member/tag/create */
export function useCreateTagMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createTag,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除会员标签 DELETE /admin-api/member/tag/delete */
export function useDeleteTagMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteTag,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得会员标签 GET /admin-api/member/tag/get */
export function getMemberTagQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMemberTagParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMemberTag(queryKey[1] as typeof options);
    },
    queryKey: ['getMemberTag', options],
  });
}

/** 获得会员标签列表 GET /admin-api/member/tag/list */
export function getMemberTagListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMemberTagListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMemberTagList(queryKey[1] as typeof options);
    },
    queryKey: ['getMemberTagList', options],
  });
}

/** 获取会员标签精简信息列表 只包含被开启的会员标签，主要用于前端的下拉选项 GET /admin-api/member/tag/list-all-simple */
export function getSimpleTagListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleTagList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleTagList', options],
  });
}

/** 获得会员标签分页 GET /admin-api/member/tag/page */
export function getTagPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTagPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTagPage(queryKey[1] as typeof options);
    },
    queryKey: ['getTagPage', options],
  });
}

/** 更新会员标签 PUT /admin-api/member/tag/update */
export function useUpdateTagMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateTag,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
