/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMlianxiren';
import * as API from './types';

/** 创建联系人 POST /admin-api/crm/contact/create */
export function useCreateContactMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createContact,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 创建联系人与商机的关联 POST /admin-api/crm/contact/create-business-list */
export function useCreateContactBusinessListMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createContactBusinessList,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 创建联系人与商机的关联 POST /admin-api/crm/contact/create-business-list2 */
export function useCreateContactBusinessList2Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createContactBusinessList2,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除联系人 DELETE /admin-api/crm/contact/delete */
export function useDeleteContactMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteContact,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除联系人与联系人的关联 DELETE /admin-api/crm/contact/delete-business-list */
export function useDeleteContactBusinessListMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteContactBusinessList,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除联系人与联系人的关联 DELETE /admin-api/crm/contact/delete-business-list2 */
export function useDeleteContactBusinessList1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteContactBusinessList1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出联系人 Excel GET /admin-api/crm/contact/export-excel */
export function exportContactExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportContactExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportContactExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportContactExcel', options],
  });
}

/** 获得联系人 GET /admin-api/crm/contact/get */
export function getContactQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContactParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContact(queryKey[1] as typeof options);
    },
    queryKey: ['getContact', options],
  });
}

/** 获得联系人分页 GET /admin-api/crm/contact/page */
export function getContactPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContactPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContactPage(queryKey[1] as typeof options);
    },
    queryKey: ['getContactPage', options],
  });
}

/** 获得联系人分页，基于指定商机 GET /admin-api/crm/contact/page-by-business */
export function getContactPageByBusinessQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContactPageByBusinessParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContactPageByBusiness(queryKey[1] as typeof options);
    },
    queryKey: ['getContactPageByBusiness', options],
  });
}

/** 获得联系人分页，基于指定客户 GET /admin-api/crm/contact/page-by-customer */
export function getContactPageByCustomerQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContactPageByCustomerParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContactPageByCustomer(queryKey[1] as typeof options);
    },
    queryKey: ['getContactPageByCustomer', options],
  });
}

/** 获得联系人的精简列表 GET /admin-api/crm/contact/simple-all-list */
export function getSimpleContactListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleContactList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleContactList', options],
  });
}

/** 联系人转移 PUT /admin-api/crm/contact/transfer */
export function useTransferContactMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.transferContact,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新联系人 PUT /admin-api/crm/contact/update */
export function useUpdateContactMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateContact,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
