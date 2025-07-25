/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMhuikuan';
import * as API from './types';

/** 获得待审核回款数量 GET /admin-api/crm/receivable/audit-count */
export function getAuditReceivableCountQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getAuditReceivableCount(queryKey[1] as typeof options);
    },
    queryKey: ['getAuditReceivableCount', options],
  });
}

/** 创建回款 POST /admin-api/crm/receivable/create */
export function useCreateReceivableMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createReceivable,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除回款 DELETE /admin-api/crm/receivable/delete */
export function useDeleteReceivableMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteReceivable,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出回款 Excel GET /admin-api/crm/receivable/export-excel */
export function exportReceivableExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportReceivableExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportReceivableExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportReceivableExcel', options],
  });
}

/** 获得回款 GET /admin-api/crm/receivable/get */
export function getReceivableQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivableParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getReceivable(queryKey[1] as typeof options);
    },
    queryKey: ['getReceivable', options],
  });
}

/** 获得回款分页 GET /admin-api/crm/receivable/page */
export function getReceivablePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getReceivablePage(queryKey[1] as typeof options);
    },
    queryKey: ['getReceivablePage', options],
  });
}

/** 获得回款分页，基于指定客户 GET /admin-api/crm/receivable/page-by-customer */
export function getReceivablePageByCustomerQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePageByCustomerParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getReceivablePageByCustomer(queryKey[1] as typeof options);
    },
    queryKey: ['getReceivablePageByCustomer', options],
  });
}

/** 提交回款审批 PUT /admin-api/crm/receivable/submit */
export function useSubmitContractMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.submitContract,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新回款 PUT /admin-api/crm/receivable/update */
export function useUpdateReceivableMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateReceivable,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
