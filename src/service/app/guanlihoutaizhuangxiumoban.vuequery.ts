/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaizhuangxiumoban';
import * as API from './types';

/** 创建装修模板 POST /admin-api/promotion/diy-template/create */
export function useCreateDiyTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDiyTemplate,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除装修模板 DELETE /admin-api/promotion/diy-template/delete */
export function useDeleteDiyTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDiyTemplate,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得装修模板 GET /admin-api/promotion/diy-template/get */
export function getDiyTemplate1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyTemplate1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDiyTemplate1(queryKey[1] as typeof options);
    },
    queryKey: ['getDiyTemplate1', options],
  });
}

/** 获得装修模板属性 GET /admin-api/promotion/diy-template/get-property */
export function getDiyTemplatePropertyQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyTemplatePropertyParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDiyTemplateProperty(queryKey[1] as typeof options);
    },
    queryKey: ['getDiyTemplateProperty', options],
  });
}

/** 获得装修模板分页 GET /admin-api/promotion/diy-template/page */
export function getDiyTemplatePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyTemplatePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDiyTemplatePage(queryKey[1] as typeof options);
    },
    queryKey: ['getDiyTemplatePage', options],
  });
}

/** 更新装修模板 PUT /admin-api/promotion/diy-template/update */
export function useUpdateDiyTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDiyTemplate,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新装修模板属性 PUT /admin-api/promotion/diy-template/update-property */
export function useUpdateDiyTemplatePropertyMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDiyTemplateProperty,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 使用装修模板 PUT /admin-api/promotion/diy-template/use */
export function useUseDiyTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.useDiyTemplate,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
