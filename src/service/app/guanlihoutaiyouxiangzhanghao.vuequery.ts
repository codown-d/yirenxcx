/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiyouxiangzhanghao';
import * as API from './types';

/** 创建邮箱账号 POST /admin-api/system/mail-account/create */
export function useCreateMailAccountMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createMailAccount,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除邮箱账号 DELETE /admin-api/system/mail-account/delete */
export function useDeleteMailAccountMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteMailAccount,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得邮箱账号 GET /admin-api/system/mail-account/get */
export function getMailAccountQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMailAccountParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMailAccount(queryKey[1] as typeof options);
    },
    queryKey: ['getMailAccount', options],
  });
}

/** 获得邮箱账号精简列表 GET /admin-api/system/mail-account/list-all-simple */
export function getSimpleMailAccountListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleMailAccountList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleMailAccountList', options],
  });
}

/** 获得邮箱账号分页 GET /admin-api/system/mail-account/page */
export function getMailAccountPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMailAccountPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMailAccountPage(queryKey[1] as typeof options);
    },
    queryKey: ['getMailAccountPage', options],
  });
}

/** 获得邮箱账号精简列表 GET /admin-api/system/mail-account/simple-list */
export function getSimpleMailAccountList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleMailAccountList1(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleMailAccountList1', options],
  });
}

/** 修改邮箱账号 PUT /admin-api/system/mail-account/update */
export function useUpdateMailAccountMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateMailAccount,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
