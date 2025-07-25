/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得用户基本信息 GET /admin-api/system/oauth2/user/get */
export async function getUserInfo1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultOAuth2UserInfoRespVO>(
    '/admin-api/system/oauth2/user/get',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新用户基本信息 PUT /admin-api/system/oauth2/user/update */
export async function updateUserInfo({
  body,
  options,
}: {
  body: API.OAuth2UserUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/oauth2/user/update',
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
