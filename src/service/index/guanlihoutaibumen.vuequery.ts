/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaibumen';
import * as API from './types';

/** 创建部门 POST /admin-api/system/dept/create */
export function useCreateDeptMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDept,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除部门 DELETE /admin-api/system/dept/delete */
export function useDeleteDeptMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDept,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得部门信息 GET /admin-api/system/dept/get */
export function getDeptQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeptParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDept(queryKey[1] as typeof options);
    },
    queryKey: ['getDept', options],
  });
}

/** 获取部门列表 GET /admin-api/system/dept/list */
export function getDeptListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeptListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDeptList(queryKey[1] as typeof options);
    },
    queryKey: ['getDeptList', options],
  });
}

/** 获取部门精简信息列表 只包含被开启的部门，主要用于前端的下拉选项 GET /admin-api/system/dept/list-all-simple */
export function getSimpleDeptListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleDeptList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleDeptList', options],
  });
}

/** 获取部门精简信息列表 只包含被开启的部门，主要用于前端的下拉选项 GET /admin-api/system/dept/simple-list */
export function getSimpleDeptList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleDeptList1(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleDeptList1', options],
  });
}

/** 更新部门 PUT /admin-api/system/dept/update */
export function useUpdateDeptMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDept,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
