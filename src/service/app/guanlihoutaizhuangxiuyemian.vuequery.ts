/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaizhuangxiuyemian';
import * as API from './types';

/** 创建装修页面 POST /admin-api/promotion/diy-page/create */
export function useCreateDiyPageMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDiyPage,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除装修页面 DELETE /admin-api/promotion/diy-page/delete */
export function useDeleteDiyPageMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDiyPage,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得装修页面 GET /admin-api/promotion/diy-page/get */
export function getDiyPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDiyPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getDiyPage1', options],
  });
}

/** 获得装修页面属性 GET /admin-api/promotion/diy-page/get-property */
export function getDiyPagePropertyQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyPagePropertyParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDiyPageProperty(queryKey[1] as typeof options);
    },
    queryKey: ['getDiyPageProperty', options],
  });
}

/** 获得装修页面列表 GET /admin-api/promotion/diy-page/list */
export function getDiyPageListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyPageListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDiyPageList(queryKey[1] as typeof options);
    },
    queryKey: ['getDiyPageList', options],
  });
}

/** 获得装修页面分页 GET /admin-api/promotion/diy-page/page */
export function getDiyPagePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyPagePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDiyPagePage(queryKey[1] as typeof options);
    },
    queryKey: ['getDiyPagePage', options],
  });
}

/** 更新装修页面 PUT /admin-api/promotion/diy-page/update */
export function useUpdateDiyPageMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDiyPage,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新装修页面属性 PUT /admin-api/promotion/diy-page/update-property */
export function useUpdateDiyPagePropertyMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDiyPageProperty,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
