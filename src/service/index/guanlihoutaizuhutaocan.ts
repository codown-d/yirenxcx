/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建租户套餐 POST /admin-api/system/tenant-package/create */
export async function createTenantPackage({
  body,
  options,
}: {
  body: API.TenantPackageSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/system/tenant-package/create',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 删除租户套餐 DELETE /admin-api/system/tenant-package/delete */
export async function deleteTenantPackage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteTenantPackageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/tenant-package/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得租户套餐 GET /admin-api/system/tenant-package/get */
export async function getTenantPackage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTenantPackageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultTenantPackageRespVO>(
    '/admin-api/system/tenant-package/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取租户套餐精简信息列表 只包含被开启的租户套餐，主要用于前端的下拉选项 GET /admin-api/system/tenant-package/get-simple-list */
export async function getTenantPackageList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListTenantPackageSimpleRespVO>(
    '/admin-api/system/tenant-package/get-simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得租户套餐分页 GET /admin-api/system/tenant-package/page */
export async function getTenantPackagePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTenantPackagePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultTenantPackageRespVO>(
    '/admin-api/system/tenant-package/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取租户套餐精简信息列表 只包含被开启的租户套餐，主要用于前端的下拉选项 GET /admin-api/system/tenant-package/simple-list */
export async function getTenantPackageList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListTenantPackageSimpleRespVO>(
    '/admin-api/system/tenant-package/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新租户套餐 PUT /admin-api/system/tenant-package/update */
export async function updateTenantPackage({
  body,
  options,
}: {
  body: API.TenantPackageSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/tenant-package/update',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}
