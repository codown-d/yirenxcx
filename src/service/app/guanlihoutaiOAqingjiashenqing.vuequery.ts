/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiOAqingjiashenqing';
import * as API from './types';

/** 创建请求申请 POST /admin-api/bpm/oa/leave/create */
export function useCreateLeaveMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createLeave,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得请假申请 GET /admin-api/bpm/oa/leave/get */
export function getLeaveQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLeaveParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getLeave(queryKey[1] as typeof options);
    },
    queryKey: ['getLeave', options],
  });
}

/** 获得请假申请分页 GET /admin-api/bpm/oa/leave/page */
export function getLeavePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLeavePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getLeavePage(queryKey[1] as typeof options);
    },
    queryKey: ['getLeavePage', options],
  });
}
