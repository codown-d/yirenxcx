/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaishililianxiren';
import * as API from './types';

/** 创建示例联系人 POST /admin-api/infra/demo01-contact/create */
export function useCreateDemo01ContactMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDemo01Contact,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除示例联系人 DELETE /admin-api/infra/demo01-contact/delete */
export function useDeleteDemo01ContactMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDemo01Contact,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出示例联系人 Excel GET /admin-api/infra/demo01-contact/export-excel */
export function exportDemo01ContactExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportDemo01ContactExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportDemo01ContactExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportDemo01ContactExcel', options],
  });
}

/** 获得示例联系人 GET /admin-api/infra/demo01-contact/get */
export function getDemo01ContactQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo01ContactParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDemo01Contact(queryKey[1] as typeof options);
    },
    queryKey: ['getDemo01Contact', options],
  });
}

/** 获得示例联系人分页 GET /admin-api/infra/demo01-contact/page */
export function getDemo01ContactPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo01ContactPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDemo01ContactPage(queryKey[1] as typeof options);
    },
    queryKey: ['getDemo01ContactPage', options],
  });
}

/** 更新示例联系人 PUT /admin-api/infra/demo01-contact/update */
export function useUpdateDemo01ContactMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDemo01Contact,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
