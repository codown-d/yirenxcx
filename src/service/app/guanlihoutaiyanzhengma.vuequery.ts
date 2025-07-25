/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiyanzhengma';
import * as API from './types';

/** 校验验证码 POST /admin-api/system/captcha/check */
export function useCheckMutation(options?: {
  onSuccess?: (value?: API.ResponseModel) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.check,
    onSuccess(data: API.ResponseModel) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得验证码 POST /admin-api/system/captcha/get */
export function useGetMutation(options?: {
  onSuccess?: (value?: API.ResponseModel) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.get,
    onSuccess(data: API.ResponseModel) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
