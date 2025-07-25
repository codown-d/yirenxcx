/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMhuikuanjihua';
import * as API from './types';

/** 创建回款计划 POST /admin-api/crm/receivable-plan/create */
export function useCreateReceivablePlanMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createReceivablePlan,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除回款计划 DELETE /admin-api/crm/receivable-plan/delete */
export function useDeleteReceivablePlanMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteReceivablePlan,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出回款计划 Excel GET /admin-api/crm/receivable-plan/export-excel */
export function exportReceivablePlanExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportReceivablePlanExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportReceivablePlanExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportReceivablePlanExcel', options],
  });
}

/** 获得回款计划 GET /admin-api/crm/receivable-plan/get */
export function getReceivablePlanQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePlanParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getReceivablePlan(queryKey[1] as typeof options);
    },
    queryKey: ['getReceivablePlan', options],
  });
}

/** 获得回款计划分页 GET /admin-api/crm/receivable-plan/page */
export function getReceivablePlanPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePlanPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getReceivablePlanPage(queryKey[1] as typeof options);
    },
    queryKey: ['getReceivablePlanPage', options],
  });
}

/** 获得回款计划分页，基于指定客户 GET /admin-api/crm/receivable-plan/page-by-customer */
export function getReceivablePlanPageByCustomerQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePlanPageByCustomerParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getReceivablePlanPageByCustomer(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getReceivablePlanPageByCustomer', options],
  });
}

/** 获得待回款提醒数量 GET /admin-api/crm/receivable-plan/remind-count */
export function getReceivablePlanRemindCountQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getReceivablePlanRemindCount(queryKey[1] as typeof options);
    },
    queryKey: ['getReceivablePlanRemindCount', options],
  });
}

/** 获得回款计划精简列表 获得回款计划精简列表，主要用于前端的下拉选项 GET /admin-api/crm/receivable-plan/simple-list */
export function getReceivablePlanSimpleListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePlanSimpleListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getReceivablePlanSimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getReceivablePlanSimpleList', options],
  });
}

/** 更新回款计划 PUT /admin-api/crm/receivable-plan/update */
export function useUpdateReceivablePlanMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateReceivablePlan,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
