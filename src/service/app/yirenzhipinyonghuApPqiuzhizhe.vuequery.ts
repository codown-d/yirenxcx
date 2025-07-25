/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yirenzhipinyonghuApPqiuzhizhe';
import * as API from './types';

/** 创建求职者信息 POST /app-api/yirenzhipin/job-seeker/create */
export function useCreateJobSeekerMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createJobSeeker,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除求职者信息 DELETE /app-api/yirenzhipin/job-seeker/delete */
export function useDeleteJobSeekerMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteJobSeeker,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得求职者信息 GET /app-api/yirenzhipin/job-seeker/get */
export function getJobSeekerQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobSeekerParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getJobSeeker(queryKey[1] as typeof options);
    },
    queryKey: ['getJobSeeker', options],
  });
}

/** 获得求职者分页 GET /app-api/yirenzhipin/job-seeker/page */
export function getJobSeekerPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobSeekerPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getJobSeekerPage(queryKey[1] as typeof options);
    },
    queryKey: ['getJobSeekerPage', options],
  });
}

/** 更新求职者信息 PUT /app-api/yirenzhipin/job-seeker/update */
export function useUpdateJobSeekerMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateJobSeeker,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
