/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaizuhu';
import * as API from './types';

/** 创建租户 POST /admin-api/system/tenant/create */
export function useCreateTenantMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createTenant,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除租户 DELETE /admin-api/system/tenant/delete */
export function useDeleteTenantMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteTenant,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出租户 Excel GET /admin-api/system/tenant/export-excel */
export function exportTenantExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportTenantExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportTenantExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportTenantExcel', options],
  });
}

/** 获得租户 GET /admin-api/system/tenant/get */
export function getTenantQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTenantParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTenant(queryKey[1] as typeof options);
    },
    queryKey: ['getTenant', options],
  });
}

/** 使用域名，获得租户信息 登录界面，根据用户的域名，获得租户信息 GET /admin-api/system/tenant/get-by-website */
export function getTenantByWebsiteQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTenantByWebsiteParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTenantByWebsite(queryKey[1] as typeof options);
    },
    queryKey: ['getTenantByWebsite', options],
  });
}

/** 使用租户名，获得租户编号 登录界面，根据用户的租户名，获得租户编号 GET /admin-api/system/tenant/get-id-by-name */
export function getTenantIdByNameQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTenantIdByNameParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTenantIdByName(queryKey[1] as typeof options);
    },
    queryKey: ['getTenantIdByName', options],
  });
}

/** 获得租户分页 GET /admin-api/system/tenant/page */
export function getTenantPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTenantPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTenantPage(queryKey[1] as typeof options);
    },
    queryKey: ['getTenantPage', options],
  });
}

/** 获取租户精简信息列表 只包含被开启的租户，用于【首页】功能的选择租户选项 GET /admin-api/system/tenant/simple-list */
export function getTenantSimpleListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTenantSimpleList(queryKey[1] as typeof options);
    },
    queryKey: ['getTenantSimpleList', options],
  });
}

/** 更新租户 PUT /admin-api/system/tenant/update */
export function useUpdateTenantMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateTenant,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
