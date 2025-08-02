/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得基本信息 GET /app-api/member/user/get */
export async function getUserInfo({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMemberUserDO>('/app-api/member/user/get', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据多个id获得基本信息 GET /app-api/member/user/getUserByIds */
export async function getUserByIds({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserByIdsParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMemberUserDO>(
    '/app-api/member/user/getUserByIds',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 重置密码 用户忘记密码时使用 PUT /app-api/member/user/reset-password */
export async function resetUserPassword({
  body,
  options,
}: {
  body: API.AppMemberUserResetPasswordReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/member/user/reset-password',
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

/** 修改基本信息 PUT /app-api/member/user/update */
export async function updateUser({
  body,
  options,
}: {
  body: API.AppMemberUserUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/app-api/member/user/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改用户手机 PUT /app-api/member/user/update-mobile */
export async function updateUserMobile({
  body,
  options,
}: {
  body: API.AppMemberUserUpdateMobileReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/member/user/update-mobile',
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

/** 基于微信小程序的授权码，修改用户手机 PUT /app-api/member/user/update-mobile-by-weixin */
export async function updateUserMobileByWeixin({
  body,
  options,
}: {
  body: API.AppMemberUserUpdateMobileByWeixinReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/member/user/update-mobile-by-weixin',
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

/** 修改用户密码 用户修改密码时使用 PUT /app-api/member/user/update-password */
export async function updateUserPassword({
  body,
  options,
}: {
  body: API.AppMemberUserUpdatePasswordReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/member/user/update-password',
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
