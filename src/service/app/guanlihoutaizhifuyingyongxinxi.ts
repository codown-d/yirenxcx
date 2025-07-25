/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建支付应用信息 POST /admin-api/pay/app/create */
export async function createApp({
  body,
  options,
}: {
  body: API.PayAppCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/pay/app/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除支付应用信息 DELETE /admin-api/pay/app/delete */
export async function deleteApp({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteAppParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/pay/app/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得支付应用信息 GET /admin-api/pay/app/get */
export async function getApp({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAppParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPayAppRespVO>('/admin-api/pay/app/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得应用列表 GET /admin-api/pay/app/list */
export async function getAppList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListPayAppRespVO>('/admin-api/pay/app/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获得支付应用信息分页 GET /admin-api/pay/app/page */
export async function getAppPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAppPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultPayAppPageItemRespVO>(
    '/admin-api/pay/app/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新支付应用信息 PUT /admin-api/pay/app/update */
export async function updateApp({
  body,
  options,
}: {
  body: API.PayAppUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/pay/app/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新支付应用状态 PUT /admin-api/pay/app/update-status */
export async function updateAppStatus({
  body,
  options,
}: {
  body: API.PayAppUpdateStatusReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/pay/app/update-status', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
