/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建租户 POST /admin-api/system/tenant/create */
export async function createTenant({
  body,
  options,
}: {
  body: API.TenantSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/system/tenant/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除租户 DELETE /admin-api/system/tenant/delete */
export async function deleteTenant({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteTenantParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/tenant/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出租户 Excel GET /admin-api/system/tenant/export-excel */
export async function exportTenantExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportTenantExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/system/tenant/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得租户 GET /admin-api/system/tenant/get */
export async function getTenant({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTenantParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultTenantRespVO>('/admin-api/system/tenant/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 使用域名，获得租户信息 登录界面，根据用户的域名，获得租户信息 GET /admin-api/system/tenant/get-by-website */
export async function getTenantByWebsite({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTenantByWebsiteParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultTenantRespVO>(
    '/admin-api/system/tenant/get-by-website',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 使用租户名，获得租户编号 登录界面，根据用户的租户名，获得租户编号 GET /admin-api/system/tenant/get-id-by-name */
export async function getTenantIdByName({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTenantIdByNameParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/system/tenant/get-id-by-name',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得租户分页 GET /admin-api/system/tenant/page */
export async function getTenantPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTenantPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultTenantRespVO>(
    '/admin-api/system/tenant/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取租户精简信息列表 只包含被开启的租户，用于【首页】功能的选择租户选项 GET /admin-api/system/tenant/simple-list */
export async function getTenantSimpleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListTenantRespVO>(
    '/admin-api/system/tenant/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新租户 PUT /admin-api/system/tenant/update */
export async function updateTenant({
  body,
  options,
}: {
  body: API.TenantSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/tenant/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
