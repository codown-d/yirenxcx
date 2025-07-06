/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得站内信 GET /admin-api/system/notify-message/get */
export async function getNotifyMessage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNotifyMessageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultNotifyMessageRespVO>(
    '/admin-api/system/notify-message/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得当前用户的未读站内信数量 GET /admin-api/system/notify-message/get-unread-count */
export async function getUnreadNotifyMessageCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/system/notify-message/get-unread-count',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获取当前用户的最新站内信列表，默认 10 条 GET /admin-api/system/notify-message/get-unread-list */
export async function getUnreadNotifyMessageList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUnreadNotifyMessageListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListNotifyMessageRespVO>(
    '/admin-api/system/notify-message/get-unread-list',
    {
      method: 'GET',
      params: {
        // size has a default value: 10
        size: '10',
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得我的站内信分页 GET /admin-api/system/notify-message/my-page */
export async function getMyMyNotifyMessagePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMyMyNotifyMessagePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultNotifyMessageRespVO>(
    '/admin-api/system/notify-message/my-page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得站内信分页 GET /admin-api/system/notify-message/page */
export async function getNotifyMessagePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNotifyMessagePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultNotifyMessageRespVO>(
    '/admin-api/system/notify-message/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 标记所有站内信为已读 PUT /admin-api/system/notify-message/update-all-read */
export async function updateAllNotifyMessageRead({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/notify-message/update-all-read',
    {
      method: 'PUT',
      ...(options || {}),
    }
  );
}

/** 标记站内信为已读 PUT /admin-api/system/notify-message/update-read */
export async function updateNotifyMessageRead({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.updateNotifyMessageReadParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/notify-message/update-read',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
