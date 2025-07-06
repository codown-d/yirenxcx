/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yirenzhipinguanlihoutaizhiweifenlei';
import * as API from './types';

/** 创建职位分类 POST /admin-api/yirenzhipin/job-category/create */
export function useCreateJobCategoryMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createJobCategory,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除职位分类 DELETE /admin-api/yirenzhipin/job-category/delete */
export function useDeleteJobCategoryMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteJobCategory,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得职位分类 GET /admin-api/yirenzhipin/job-category/get */
export function getJobCategoryQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobCategoryParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getJobCategory(queryKey[1] as typeof options);
    },
    queryKey: ['getJobCategory', options],
  });
}

/** 获得职位分类列表 GET /admin-api/yirenzhipin/job-category/list-by-parent */
export function getJobCategoryListByParentIdQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobCategoryListByParentIdParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getJobCategoryListByParentId(queryKey[1] as typeof options);
    },
    queryKey: ['getJobCategoryListByParentId', options],
  });
}

/** 获得职位分类分页 GET /admin-api/yirenzhipin/job-category/page */
export function getJobCategoryPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobCategoryPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getJobCategoryPage(queryKey[1] as typeof options);
    },
    queryKey: ['getJobCategoryPage', options],
  });
}

/** 更新职位分类 PUT /admin-api/yirenzhipin/job-category/update */
export function useUpdateJobCategoryMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateJobCategory,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
