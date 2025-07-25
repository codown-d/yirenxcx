/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaizuhutaocan';
import * as API from './types';

/** 创建租户套餐 POST /admin-api/system/tenant-package/create */
export function useCreateTenantPackageMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createTenantPackage,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除租户套餐 DELETE /admin-api/system/tenant-package/delete */
export function useDeleteTenantPackageMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteTenantPackage,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得租户套餐 GET /admin-api/system/tenant-package/get */
export function getTenantPackageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTenantPackageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTenantPackage(queryKey[1] as typeof options);
    },
    queryKey: ['getTenantPackage', options],
  });
}

/** 获取租户套餐精简信息列表 只包含被开启的租户套餐，主要用于前端的下拉选项 GET /admin-api/system/tenant-package/get-simple-list */
export function getTenantPackageListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTenantPackageList(queryKey[1] as typeof options);
    },
    queryKey: ['getTenantPackageList', options],
  });
}

/** 获得租户套餐分页 GET /admin-api/system/tenant-package/page */
export function getTenantPackagePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTenantPackagePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTenantPackagePage(queryKey[1] as typeof options);
    },
    queryKey: ['getTenantPackagePage', options],
  });
}

/** 获取租户套餐精简信息列表 只包含被开启的租户套餐，主要用于前端的下拉选项 GET /admin-api/system/tenant-package/simple-list */
export function getTenantPackageList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTenantPackageList1(queryKey[1] as typeof options);
    },
    queryKey: ['getTenantPackageList1', options],
  });
}

/** 更新租户套餐 PUT /admin-api/system/tenant-package/update */
export function useUpdateTenantPackageMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateTenantPackage,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
