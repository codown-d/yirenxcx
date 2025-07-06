/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建通知公告 POST /admin-api/system/notice/create */
export async function createNotice({
  body,
  options,
}: {
  body: API.NoticeSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/system/notice/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除通知公告 DELETE /admin-api/system/notice/delete */
export async function deleteNotice({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteNoticeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/notice/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得通知公告 GET /admin-api/system/notice/get */
export async function getNotice({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNoticeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultNoticeRespVO>('/admin-api/system/notice/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取通知公告列表 GET /admin-api/system/notice/page */
export async function getNoticePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNoticePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultNoticeRespVO>(
    '/admin-api/system/notice/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 推送通知公告 只发送给 websocket 连接在线的用户 POST /admin-api/system/notice/push */
export async function push({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.pushParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/notice/push', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改通知公告 PUT /admin-api/system/notice/update */
export async function updateNotice({
  body,
  options,
}: {
  body: API.NoticeSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/system/notice/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
