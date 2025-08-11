/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建签到规则 POST /admin-api/member/sign-in/config/create */
export async function createSignInConfig({
  body,
  options,
}: {
  body: API.MemberSignInConfigCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/member/sign-in/config/create',
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

/** 删除签到规则 DELETE /admin-api/member/sign-in/config/delete */
export async function deleteSignInConfig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteSignInConfigParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/member/sign-in/config/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得签到规则 GET /admin-api/member/sign-in/config/get */
export async function getSignInConfig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSignInConfigParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMemberSignInConfigRespVO>(
    '/admin-api/member/sign-in/config/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得签到规则列表 GET /admin-api/member/sign-in/config/list */
export async function getSignInConfigList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMemberSignInConfigRespVO>(
    '/admin-api/member/sign-in/config/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新签到规则 PUT /admin-api/member/sign-in/config/update */
export async function updateSignInConfig({
  body,
  options,
}: {
  body: API.MemberSignInConfigUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/member/sign-in/config/update',
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
