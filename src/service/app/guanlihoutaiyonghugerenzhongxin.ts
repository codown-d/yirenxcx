/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得登录用户信息 GET /admin-api/system/user/profile/get */
export async function getUserProfile({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultUserProfileRespVO>(
    '/admin-api/system/user/profile/get',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 修改用户个人信息 PUT /admin-api/system/user/profile/update */
export async function updateUserProfile({
  body,
  options,
}: {
  body: API.UserProfileUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/user/profile/update',
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

/** 修改用户个人密码 PUT /admin-api/system/user/profile/update-password */
export async function updateUserProfilePassword({
  body,
  options,
}: {
  body: API.UserProfileUpdatePasswordReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/user/profile/update-password',
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
