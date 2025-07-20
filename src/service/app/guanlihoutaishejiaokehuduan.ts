/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建社交客户端 POST /admin-api/system/social-client/create */
export async function createSocialClient({
  body,
  options,
}: {
  body: API.SocialClientSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/system/social-client/create',
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

/** 删除社交客户端 DELETE /admin-api/system/social-client/delete */
export async function deleteSocialClient({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteSocialClientParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/social-client/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得社交客户端 GET /admin-api/system/social-client/get */
export async function getSocialClient({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSocialClientParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultSocialClientRespVO>(
    '/admin-api/system/social-client/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得社交客户端分页 GET /admin-api/system/social-client/page */
export async function getSocialClientPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSocialClientPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultSocialClientRespVO>(
    '/admin-api/system/social-client/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 发送订阅消息 POST /admin-api/system/social-client/send-subscribe-message */
export async function sendSubscribeMessage({
  body,
  options,
}: {
  body: API.SocialWxaSubscribeMessageSendReqDTO;
  options?: CustomRequestOptions;
}) {
  return request<unknown>(
    '/admin-api/system/social-client/send-subscribe-message',
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

/** 更新社交客户端 PUT /admin-api/system/social-client/update */
export async function updateSocialClient({
  body,
  options,
}: {
  body: API.SocialClientSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/social-client/update',
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
