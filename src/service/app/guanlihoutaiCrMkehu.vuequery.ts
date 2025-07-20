/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMkehu';
import * as API from './types';

/** 创建客户 POST /admin-api/crm/customer/create */
export function useCreateCustomerMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createCustomer,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除客户 DELETE /admin-api/crm/customer/delete */
export function useDeleteCustomerMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteCustomer,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 分配公海给对应负责人 PUT /admin-api/crm/customer/distribute */
export function useDistributeCustomerMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.distributeCustomer,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出客户 Excel GET /admin-api/crm/customer/export-excel */
export function exportCustomerExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportCustomerExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportCustomerExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportCustomerExcel', options],
  });
}

/** 获得分配给我、待跟进的线索数量的客户数量 GET /admin-api/crm/customer/follow-count */
export function getFollowCustomerCountQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFollowCustomerCount(queryKey[1] as typeof options);
    },
    queryKey: ['getFollowCustomerCount', options],
  });
}

/** 获得客户 GET /admin-api/crm/customer/get */
export function getCustomerQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomer(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomer', options],
  });
}

/** 获得导入客户模板 GET /admin-api/crm/customer/get-import-template */
export function importTemplate1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.importTemplate1(queryKey[1] as typeof options);
    },
    queryKey: ['importTemplate1', options],
  });
}

/** 导入客户 POST /admin-api/crm/customer/import */
export function useImportExcel1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultCrmCustomerImportRespVO) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.importExcel1,
    onSuccess(data: API.CommonResultCrmCustomerImportRespVO) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 锁定/解锁客户 PUT /admin-api/crm/customer/lock */
export function useLockCustomerMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.lockCustomer,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得客户分页 GET /admin-api/crm/customer/page */
export function getCustomerPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerPage(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerPage', options],
  });
}

/** 数据放入公海 PUT /admin-api/crm/customer/put-pool */
export function usePutCustomerPoolMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.putCustomerPool,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得待进入公海客户数量 GET /admin-api/crm/customer/put-pool-remind-count */
export function getPutPoolRemindCustomerCountQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPutPoolRemindCustomerCount(queryKey[1] as typeof options);
    },
    queryKey: ['getPutPoolRemindCustomerCount', options],
  });
}

/** 获得待进入公海客户分页 GET /admin-api/crm/customer/put-pool-remind-page */
export function getPutPoolRemindCustomerPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPutPoolRemindCustomerPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getPutPoolRemindCustomerPage(queryKey[1] as typeof options);
    },
    queryKey: ['getPutPoolRemindCustomerPage', options],
  });
}

/** 领取公海客户 PUT /admin-api/crm/customer/receive */
export function useReceiveCustomerMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.receiveCustomer,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获取客户精简信息列表 只包含有读权限的客户，主要用于前端的下拉选项 GET /admin-api/crm/customer/simple-list */
export function getCustomerSimpleListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerSimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerSimpleList', options],
  });
}

/** 获得今日需联系客户数量 GET /admin-api/crm/customer/today-contact-count */
export function getTodayContactCustomerCountQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTodayContactCustomerCount(queryKey[1] as typeof options);
    },
    queryKey: ['getTodayContactCustomerCount', options],
  });
}

/** 转移客户 PUT /admin-api/crm/customer/transfer */
export function useTransferCustomerMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.transferCustomer,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新客户 PUT /admin-api/crm/customer/update */
export function useUpdateCustomerMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateCustomer,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新客户的成交状态 PUT /admin-api/crm/customer/update-deal-status */
export function useUpdateCustomerDealStatusMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateCustomerDealStatus,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
