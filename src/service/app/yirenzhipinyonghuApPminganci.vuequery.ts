/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yirenzhipinyonghuApPminganci';
import * as API from './types';

/** 过滤替换敏感词 POST /app-api/yirenzhipin/mingan/replace */
export function useGetJobPageMutation(options?: {
  onSuccess?: (value?: API.CommonResultString) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.getJobPage,
    onSuccess(data: API.CommonResultString) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
