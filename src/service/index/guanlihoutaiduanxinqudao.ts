/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建短信渠道 POST /admin-api/system/sms-channel/create */
export async function createSmsChannel({
  body,
  options,
}: {
  body: API.SmsChannelSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/system/sms-channel/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除短信渠道 DELETE /admin-api/system/sms-channel/delete */
export async function deleteSmsChannel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteSmsChannelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/sms-channel/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得短信渠道 GET /admin-api/system/sms-channel/get */
export async function getSmsChannel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSmsChannelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultSmsChannelRespVO>(
    '/admin-api/system/sms-channel/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得短信渠道精简列表 包含被禁用的短信渠道 GET /admin-api/system/sms-channel/list-all-simple */
export async function getSimpleSmsChannelList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListSmsChannelSimpleRespVO>(
    '/admin-api/system/sms-channel/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得短信渠道分页 GET /admin-api/system/sms-channel/page */
export async function getSmsChannelPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSmsChannelPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultSmsChannelRespVO>(
    '/admin-api/system/sms-channel/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得短信渠道精简列表 包含被禁用的短信渠道 GET /admin-api/system/sms-channel/simple-list */
export async function getSimpleSmsChannelList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListSmsChannelSimpleRespVO>(
    '/admin-api/system/sms-channel/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新短信渠道 PUT /admin-api/system/sms-channel/update */
export async function updateSmsChannel({
  body,
  options,
}: {
  body: API.SmsChannelSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/sms-channel/update',
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
