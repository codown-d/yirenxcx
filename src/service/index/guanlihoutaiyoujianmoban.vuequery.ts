/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiyoujianmoban';
import * as API from './types';

/** 创建邮件模版 POST /admin-api/system/mail-template/create */
export function useCreateMailTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createMailTemplate,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除邮件模版 DELETE /admin-api/system/mail-template/delete */
export function useDeleteMailTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteMailTemplate,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得邮件模版 GET /admin-api/system/mail-template/get */
export function getMailTemplateQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMailTemplateParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMailTemplate(queryKey[1] as typeof options);
    },
    queryKey: ['getMailTemplate', options],
  });
}

/** 获得邮件模版精简列表 GET /admin-api/system/mail-template/list-all-simple */
export function getSimpleTemplateList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleTemplateList1(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleTemplateList1', options],
  });
}

/** 获得邮件模版分页 GET /admin-api/system/mail-template/page */
export function getMailTemplatePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMailTemplatePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMailTemplatePage(queryKey[1] as typeof options);
    },
    queryKey: ['getMailTemplatePage', options],
  });
}

/** 发送短信 POST /admin-api/system/mail-template/send-mail */
export function useSendMailMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.sendMail,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得邮件模版精简列表 GET /admin-api/system/mail-template/simple-list */
export function getSimpleTemplateList2QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleTemplateList2(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleTemplateList2', options],
  });
}

/** 修改邮件模版 PUT /admin-api/system/mail-template/update */
export function useUpdateMailTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateMailTemplate,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
