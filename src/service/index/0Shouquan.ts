/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得授权信息 适合 code 授权码模式，或者 implicit 简化模式；在 sso.vue 单点登录界面被【获取】调用 GET /admin-api/system/oauth2/authorize */
export async function authorize({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.authorizeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultOAuth2OpenAuthorizeInfoRespVO>(
    '/admin-api/system/oauth2/authorize',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 申请授权 适合 code 授权码模式，或者 implicit 简化模式；在 sso.vue 单点登录界面被【提交】调用 POST /admin-api/system/oauth2/authorize */
export async function approveOrDeny({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.approveOrDenyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/admin-api/system/oauth2/authorize', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 校验访问令牌 POST /admin-api/system/oauth2/check-token */
export async function checkToken({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.checkTokenParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultOAuth2OpenCheckTokenRespVO>(
    '/admin-api/system/oauth2/check-token',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得访问令牌 适合 code 授权码模式，或者 implicit 简化模式；在 sso.vue 单点登录界面被【获取】调用 POST /admin-api/system/oauth2/token */
export async function postAccessToken({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.postAccessTokenParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultOAuth2OpenAccessTokenRespVO>(
    '/admin-api/system/oauth2/token',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 删除访问令牌 DELETE /admin-api/system/oauth2/token */
export async function revokeToken({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.revokeTokenParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/oauth2/token', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
