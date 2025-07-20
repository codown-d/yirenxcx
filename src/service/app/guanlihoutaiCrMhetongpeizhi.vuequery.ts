/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMhetongpeizhi';
import * as API from './types';

/** 获取合同配置 GET /admin-api/crm/contract-config/get */
export function getCustomerPoolConfig1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerPoolConfig1(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerPoolConfig1', options],
  });
}

/** 更新合同配置 PUT /admin-api/crm/contract-config/save */
export function useSaveCustomerPoolConfig1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.saveCustomerPoolConfig1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
