/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiduanxinhuidiao';
import * as API from './types';

/** 阿里云短信的回调 参见 https://help.aliyun.com/document_detail/120998.html 文档 POST /admin-api/system/sms/callback/aliyun */
export function useReceiveAliyunSmsStatusMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.receiveAliyunSmsStatus,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 华为云短信的回调 参见 https://support.huaweicloud.com/api-msgsms/sms_05_0003.html 文档 POST /admin-api/system/sms/callback/huawei */
export function useReceiveHuaweiSmsStatusMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.receiveHuaweiSmsStatus,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 七牛云短信的回调 参见 https://developer.qiniu.com/sms/5910/message-push 文档 POST /admin-api/system/sms/callback/qiniu */
export function useReceiveQiniuSmsStatusMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.receiveQiniuSmsStatus,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 腾讯云短信的回调 参见 https://cloud.tencent.com/document/product/382/52077 文档 POST /admin-api/system/sms/callback/tencent */
export function useReceiveTencentSmsStatusMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.receiveTencentSmsStatus,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
