/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMshangjizhuangtai';
import * as API from './types';

/** 创建商机状态 POST /admin-api/crm/business-status/create */
export function useCreateBusinessStatusMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createBusinessStatus,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除商机状态 DELETE /admin-api/crm/business-status/delete */
export function useDeleteBusinessStatusTypeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteBusinessStatusType,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得商机状态 GET /admin-api/crm/business-status/get */
export function getBusinessStatusTypeQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessStatusTypeParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBusinessStatusType(queryKey[1] as typeof options);
    },
    queryKey: ['getBusinessStatusType', options],
  });
}

/** 获得商机状态分页 GET /admin-api/crm/business-status/page */
export function getBusinessStatusPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessStatusPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBusinessStatusPage(queryKey[1] as typeof options);
    },
    queryKey: ['getBusinessStatusPage', options],
  });
}

/** 获得商机状态列表 GET /admin-api/crm/business-status/status-simple-list */
export function getBusinessStatusSimpleListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessStatusSimpleListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBusinessStatusSimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getBusinessStatusSimpleList', options],
  });
}

/** 获得商机状态组列表 GET /admin-api/crm/business-status/type-simple-list */
export function getBusinessStatusTypeSimpleListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBusinessStatusTypeSimpleList(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getBusinessStatusTypeSimpleList', options],
  });
}

/** 更新商机状态 PUT /admin-api/crm/business-status/update */
export function useUpdateBusinessStatus1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateBusinessStatus1,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
