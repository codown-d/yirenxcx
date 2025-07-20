/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建 OAuth2 客户端 POST /admin-api/system/oauth2-client/create */
export async function createOAuth2Client({
  body,
  options,
}: {
  body: API.OAuth2ClientSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/system/oauth2-client/create',
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

/** 删除 OAuth2 客户端 DELETE /admin-api/system/oauth2-client/delete */
export async function deleteOAuth2Client({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteOAuth2ClientParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/oauth2-client/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得 OAuth2 客户端 GET /admin-api/system/oauth2-client/get */
export async function getOAuth2Client({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOAuth2ClientParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultOAuth2ClientRespVO>(
    '/admin-api/system/oauth2-client/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得 OAuth2 客户端分页 GET /admin-api/system/oauth2-client/page */
export async function getOAuth2ClientPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOAuth2ClientPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultOAuth2ClientRespVO>(
    '/admin-api/system/oauth2-client/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新 OAuth2 客户端 PUT /admin-api/system/oauth2-client/update */
export async function updateOAuth2Client({
  body,
  options,
}: {
  body: API.OAuth2ClientSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/oauth2-client/update',
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
