/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMhetong';
import * as API from './types';

/** 获得待审核合同数量 GET /admin-api/crm/contract/audit-count */
export function getAuditContractCountQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getAuditContractCount(queryKey[1] as typeof options);
    },
    queryKey: ['getAuditContractCount', options],
  });
}

/** 创建合同 POST /admin-api/crm/contract/create */
export function useCreateContractMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createContract,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除合同 DELETE /admin-api/crm/contract/delete */
export function useDeleteContractMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteContract,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出合同 Excel GET /admin-api/crm/contract/export-excel */
export function exportContractExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportContractExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportContractExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportContractExcel', options],
  });
}

/** 获得合同 GET /admin-api/crm/contract/get */
export function getContractQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContract(queryKey[1] as typeof options);
    },
    queryKey: ['getContract', options],
  });
}

/** 获得合同分页 GET /admin-api/crm/contract/page */
export function getContractPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContractPage(queryKey[1] as typeof options);
    },
    queryKey: ['getContractPage', options],
  });
}

/** 获得合同分页，基于指定商机 GET /admin-api/crm/contract/page-by-business */
export function getContractPageByBusinessQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractPageByBusinessParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContractPageByBusiness(queryKey[1] as typeof options);
    },
    queryKey: ['getContractPageByBusiness', options],
  });
}

/** 获得合同分页，基于指定客户 GET /admin-api/crm/contract/page-by-customer */
export function getContractPageByCustomerQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractPageByCustomerParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContractPageByCustomer(queryKey[1] as typeof options);
    },
    queryKey: ['getContractPageByCustomer', options],
  });
}

/** 获得即将到期（提醒）的合同数量 GET /admin-api/crm/contract/remind-count */
export function getRemindContractCountQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getRemindContractCount(queryKey[1] as typeof options);
    },
    queryKey: ['getRemindContractCount', options],
  });
}

/** 获得合同精简列表 只包含的合同，主要用于前端的下拉选项 GET /admin-api/crm/contract/simple-list */
export function getContractSimpleListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractSimpleListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContractSimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getContractSimpleList', options],
  });
}

/** 提交合同审批 PUT /admin-api/crm/contract/submit */
export function useSubmitContract1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.submitContract1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 合同转移 PUT /admin-api/crm/contract/transfer */
export function useTransferContractMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.transferContract,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新合同 PUT /admin-api/crm/contract/update */
export function useUpdateContractMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateContract,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
