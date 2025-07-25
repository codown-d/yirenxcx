/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建用户收件地址 POST /app-api/member/address/create */
export async function createAddress({
  body,
  options,
}: {
  body: API.AppAddressCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/app-api/member/address/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户收件地址 DELETE /app-api/member/address/delete */
export async function deleteAddress({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteAddressParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/member/address/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得用户收件地址 GET /app-api/member/address/get */
export async function getAddress({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAddressParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppAddressRespVO>(
    '/app-api/member/address/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得默认的用户收件地址 GET /app-api/member/address/get-default */
export async function getDefaultUserAddress({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppAddressRespVO>(
    '/app-api/member/address/get-default',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得用户收件地址列表 GET /app-api/member/address/list */
export async function getAddressList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppAddressRespVO>(
    '/app-api/member/address/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新用户收件地址 PUT /app-api/member/address/update */
export async function updateAddress({
  body,
  options,
}: {
  body: API.AppAddressUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/member/address/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
