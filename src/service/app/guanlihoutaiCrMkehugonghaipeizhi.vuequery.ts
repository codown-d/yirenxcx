/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMkehugonghaipeizhi';
import * as API from './types';

/** 获取客户公海规则设置 GET /admin-api/crm/customer-pool-config/get */
export function getCustomerPoolConfigQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerPoolConfig(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerPoolConfig', options],
  });
}

/** 更新客户公海规则设置 PUT /admin-api/crm/customer-pool-config/save */
export function useSaveCustomerPoolConfigMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.saveCustomerPoolConfig,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
