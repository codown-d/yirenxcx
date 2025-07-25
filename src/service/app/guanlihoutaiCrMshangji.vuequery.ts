/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMshangji';
import * as API from './types';

/** 创建商机 POST /admin-api/crm/business/create */
export function useCreateBusinessMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createBusiness,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除商机 DELETE /admin-api/crm/business/delete */
export function useDeleteBusinessMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteBusiness,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出商机 Excel GET /admin-api/crm/business/export-excel */
export function exportBusinessExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportBusinessExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportBusinessExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportBusinessExcel', options],
  });
}

/** 获得商机 GET /admin-api/crm/business/get */
export function getBusinessQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBusiness(queryKey[1] as typeof options);
    },
    queryKey: ['getBusiness', options],
  });
}

/** 获得商机分页 GET /admin-api/crm/business/page */
export function getBusinessPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBusinessPage(queryKey[1] as typeof options);
    },
    queryKey: ['getBusinessPage', options],
  });
}

/** 获得联系人的商机分页 GET /admin-api/crm/business/page-by-contact */
export function getBusinessContactPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessContactPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBusinessContactPage(queryKey[1] as typeof options);
    },
    queryKey: ['getBusinessContactPage', options],
  });
}

/** 获得商机分页，基于指定客户 GET /admin-api/crm/business/page-by-customer */
export function getBusinessPageByCustomerQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessPageByCustomerParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBusinessPageByCustomer(queryKey[1] as typeof options);
    },
    queryKey: ['getBusinessPageByCustomer', options],
  });
}

/** 获得商机的精简列表 GET /admin-api/crm/business/simple-all-list */
export function getSimpleContactList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleContactList1(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleContactList1', options],
  });
}

/** 商机转移 PUT /admin-api/crm/business/transfer */
export function useTransferBusinessMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.transferBusiness,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新商机 PUT /admin-api/crm/business/update */
export function useUpdateBusinessMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateBusiness,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新商机状态 PUT /admin-api/crm/business/update-status */
export function useUpdateBusinessStatusMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateBusinessStatus,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
