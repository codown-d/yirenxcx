/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMkehuxianzhipeizhi';
import * as API from './types';

/** 创建客户限制配置 POST /admin-api/crm/customer-limit-config/create */
export function useCreateCustomerLimitConfigMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createCustomerLimitConfig,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除客户限制配置 DELETE /admin-api/crm/customer-limit-config/delete */
export function useDeleteCustomerLimitConfigMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteCustomerLimitConfig,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得客户限制配置 GET /admin-api/crm/customer-limit-config/get */
export function getCustomerLimitConfigQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerLimitConfigParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerLimitConfig(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerLimitConfig', options],
  });
}

/** 获得客户限制配置分页 GET /admin-api/crm/customer-limit-config/page */
export function getCustomerLimitConfigPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerLimitConfigPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerLimitConfigPage(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerLimitConfigPage', options],
  });
}

/** 更新客户限制配置 PUT /admin-api/crm/customer-limit-config/update */
export function useUpdateCustomerLimitConfigMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateCustomerLimitConfig,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
