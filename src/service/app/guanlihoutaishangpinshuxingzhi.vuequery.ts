/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaishangpinshuxingzhi';
import * as API from './types';

/** 创建属性值 POST /admin-api/product/property/value/create */
export function useCreatePropertyValueMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createPropertyValue,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除属性值 DELETE /admin-api/product/property/value/delete */
export function useDeletePropertyValueMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deletePropertyValue,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得属性值 GET /admin-api/product/property/value/get */
export function getPropertyValueQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPropertyValueParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPropertyValue(queryKey[1] as typeof options);
    },
    queryKey: ['getPropertyValue', options],
  });
}

/** 获得属性值分页 GET /admin-api/product/property/value/page */
export function getPropertyValuePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPropertyValuePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPropertyValuePage(queryKey[1] as typeof options);
    },
    queryKey: ['getPropertyValuePage', options],
  });
}

/** 获得属性值精简列表 GET /admin-api/product/property/value/simple-list */
export function getPropertyValueSimpleListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPropertyValueSimpleListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPropertyValueSimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getPropertyValueSimpleList', options],
  });
}

/** 更新属性值 PUT /admin-api/product/property/value/update */
export function useUpdatePropertyValueMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updatePropertyValue,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
