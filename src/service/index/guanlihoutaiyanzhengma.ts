/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 校验验证码 POST /admin-api/system/captcha/check */
export async function check({
  body,
  options,
}: {
  body: API.CaptchaVO;
  options?: CustomRequestOptions;
}) {
  return request<API.ResponseModel>('/admin-api/system/captcha/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获得验证码 POST /admin-api/system/captcha/get */
export async function get({
  body,
  options,
}: {
  body: API.CaptchaVO;
  options?: CustomRequestOptions;
}) {
  return request<API.ResponseModel>('/admin-api/system/captcha/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
