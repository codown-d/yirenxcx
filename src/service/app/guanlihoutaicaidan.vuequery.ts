/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaicaidan';
import * as API from './types';

/** 创建菜单 POST /admin-api/system/menu/create */
export function useCreateMenuMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createMenu,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除菜单 DELETE /admin-api/system/menu/delete */
export function useDeleteMenuMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteMenu,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获取菜单信息 GET /admin-api/system/menu/get */
export function getMenuQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMenuParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMenu(queryKey[1] as typeof options);
    },
    queryKey: ['getMenu', options],
  });
}

/** 获取菜单列表 用于【菜单管理】界面 GET /admin-api/system/menu/list */
export function getMenuListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMenuListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getMenuList(queryKey[1] as typeof options);
    },
    queryKey: ['getMenuList', options],
  });
}

/** 获取菜单精简信息列表 只包含被开启的菜单，用于【角色分配菜单】功能的选项。在多租户的场景下，会只返回租户所在套餐有的菜单 GET /admin-api/system/menu/list-all-simple */
export function getSimpleMenuListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleMenuList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleMenuList', options],
  });
}

/** 获取菜单精简信息列表 只包含被开启的菜单，用于【角色分配菜单】功能的选项。在多租户的场景下，会只返回租户所在套餐有的菜单 GET /admin-api/system/menu/simple-list */
export function getSimpleMenuList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleMenuList1(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleMenuList1', options],
  });
}

/** 修改菜单 PUT /admin-api/system/menu/update */
export function useUpdateMenuMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateMenu,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
