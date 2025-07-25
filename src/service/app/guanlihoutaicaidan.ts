/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建菜单 POST /admin-api/system/menu/create */
export async function createMenu({
  body,
  options,
}: {
  body: API.MenuSaveVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/system/menu/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除菜单 DELETE /admin-api/system/menu/delete */
export async function deleteMenu({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteMenuParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/menu/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取菜单信息 GET /admin-api/system/menu/get */
export async function getMenu({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMenuParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMenuRespVO>('/admin-api/system/menu/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取菜单列表 用于【菜单管理】界面 GET /admin-api/system/menu/list */
export async function getMenuList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMenuListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMenuRespVO>(
    '/admin-api/system/menu/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取菜单精简信息列表 只包含被开启的菜单，用于【角色分配菜单】功能的选项。在多租户的场景下，会只返回租户所在套餐有的菜单 GET /admin-api/system/menu/list-all-simple */
export async function getSimpleMenuList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMenuSimpleRespVO>(
    '/admin-api/system/menu/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获取菜单精简信息列表 只包含被开启的菜单，用于【角色分配菜单】功能的选项。在多租户的场景下，会只返回租户所在套餐有的菜单 GET /admin-api/system/menu/simple-list */
export async function getSimpleMenuList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMenuSimpleRespVO>(
    '/admin-api/system/menu/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 修改菜单 PUT /admin-api/system/menu/update */
export async function updateMenu({
  body,
  options,
}: {
  body: API.MenuSaveVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/menu/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
