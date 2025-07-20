/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaigenjinjilu';
import * as API from './types';

/** 创建跟进记录 POST /admin-api/crm/follow-up-record/create */
export function useCreateFollowUpRecordMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createFollowUpRecord,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除跟进记录 DELETE /admin-api/crm/follow-up-record/delete */
export function useDeleteFollowUpRecordMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteFollowUpRecord,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得跟进记录 GET /admin-api/crm/follow-up-record/get */
export function getFollowUpRecordQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowUpRecordParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFollowUpRecord(queryKey[1] as typeof options);
    },
    queryKey: ['getFollowUpRecord', options],
  });
}

/** 获得跟进记录分页 GET /admin-api/crm/follow-up-record/page */
export function getFollowUpRecordPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowUpRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFollowUpRecordPage(queryKey[1] as typeof options);
    },
    queryKey: ['getFollowUpRecordPage', options],
  });
}
