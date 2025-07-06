/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 社交绑定，使用 code 授权码 POST /admin-api/system/social-user/bind */
export async function socialBind({
  body,
  options,
}: {
  body: API.SocialUserBindReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/social-user/bind',
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

/** 获得社交用户 GET /admin-api/system/social-user/get */
export async function getSocialUser({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSocialUserParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultSocialUserRespVO>(
    '/admin-api/system/social-user/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得绑定社交用户列表 GET /admin-api/system/social-user/get-bind-list */
export async function getBindSocialUserList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListSocialUserRespVO>(
    '/admin-api/system/social-user/get-bind-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得社交用户分页 GET /admin-api/system/social-user/page */
export async function getSocialUserPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSocialUserPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultSocialUserRespVO>(
    '/admin-api/system/social-user/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 取消社交绑定 DELETE /admin-api/system/social-user/unbind */
export async function socialUnbind({
  body,
  options,
}: {
  body: API.SocialUserUnbindReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/social-user/unbind',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}
