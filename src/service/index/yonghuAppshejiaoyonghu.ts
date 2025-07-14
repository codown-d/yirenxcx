/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 社交绑定，使用 code 授权码 POST /app-api/member/social-user/bind */
export async function socialBind({
  body,
  options,
}: {
  body: API.AppSocialUserBindReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/app-api/member/social-user/bind', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获得社交用户 GET /app-api/member/social-user/get */
export async function getSocialUser({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSocialUserParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppSocialUserRespVO>(
    '/app-api/member/social-user/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得微信小程订阅模板列表 GET /app-api/member/social-user/get-subscribe-template-list */
export async function getSubscribeTemplateList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppSocialWxaSubscribeTemplateRespVO>(
    '/app-api/member/social-user/get-subscribe-template-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 取消社交绑定 DELETE /app-api/member/social-user/unbind */
export async function socialUnbind({
  body,
  options,
}: {
  body: API.AppSocialUserUnbindReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/member/social-user/unbind',
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

/** 获得微信小程序码(base64 image) POST /app-api/member/social-user/wxa-qrcode */
export async function getWxaQrcode({
  body,
  options,
}: {
  body: API.AppSocialWxaQrcodeReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>(
    '/app-api/member/social-user/wxa-qrcode',
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
