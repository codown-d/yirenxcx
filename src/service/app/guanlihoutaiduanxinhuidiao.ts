/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 阿里云短信的回调 参见 https://help.aliyun.com/document_detail/120998.html 文档 POST /admin-api/system/sms/callback/aliyun */
export async function receiveAliyunSmsStatus({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/sms/callback/aliyun',
    {
      method: 'POST',
      ...(options || {}),
    }
  );
}

/** 华为云短信的回调 参见 https://support.huaweicloud.com/api-msgsms/sms_05_0003.html 文档 POST /admin-api/system/sms/callback/huawei */
export async function receiveHuaweiSmsStatus({
  body,
  options,
}: {
  body: string;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/sms/callback/huawei',
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

/** 七牛云短信的回调 参见 https://developer.qiniu.com/sms/5910/message-push 文档 POST /admin-api/system/sms/callback/qiniu */
export async function receiveQiniuSmsStatus({
  body,
  options,
}: {
  body: string;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/sms/callback/qiniu',
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

/** 腾讯云短信的回调 参见 https://cloud.tencent.com/document/product/382/52077 文档 POST /admin-api/system/sms/callback/tencent */
export async function receiveTencentSmsStatus({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/sms/callback/tencent',
    {
      method: 'POST',
      ...(options || {}),
    }
  );
}
