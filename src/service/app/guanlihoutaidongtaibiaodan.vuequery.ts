/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaidongtaibiaodan';
import * as API from './types';

/** 创建动态表单 POST /admin-api/bpm/form/create */
export function useCreateFormMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createForm,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除动态表单 DELETE /admin-api/bpm/form/delete */
export function useDeleteFormMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteForm,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得动态表单 GET /admin-api/bpm/form/get */
export function getFormQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFormParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getForm(queryKey[1] as typeof options);
    },
    queryKey: ['getForm', options],
  });
}

/** 获得动态表单的精简列表 用于表单下拉框 GET /admin-api/bpm/form/list-all-simple */
export function getFormSimpleListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFormSimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getFormSimpleList', options],
  });
}

/** 获得动态表单分页 GET /admin-api/bpm/form/page */
export function getFormPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFormPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFormPage(queryKey[1] as typeof options);
    },
    queryKey: ['getFormPage', options],
  });
}

/** 获得动态表单的精简列表 用于表单下拉框 GET /admin-api/bpm/form/simple-list */
export function getFormSimpleList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFormSimpleList1(queryKey[1] as typeof options);
    },
    queryKey: ['getFormSimpleList1', options],
  });
}

/** 更新动态表单 PUT /admin-api/bpm/form/update */
export function useUpdateFormMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateForm,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
