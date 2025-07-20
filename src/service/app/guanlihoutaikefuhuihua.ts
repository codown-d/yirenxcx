/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 删除客服会话 DELETE /admin-api/promotion/kefu-conversation/delete */
export async function deleteConversation({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteConversationParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/kefu-conversation/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得客服会话 GET /admin-api/promotion/kefu-conversation/get */
export async function getConversation({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getConversationParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultKeFuConversationRespVO>(
    '/admin-api/promotion/kefu-conversation/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得客服会话列表 GET /admin-api/promotion/kefu-conversation/list */
export async function getConversationList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListKeFuConversationRespVO>(
    '/admin-api/promotion/kefu-conversation/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 置顶/取消置顶客服会话 PUT /admin-api/promotion/kefu-conversation/update-conversation-pinned */
export async function updateConversationPinned({
  body,
  options,
}: {
  body: API.KeFuConversationUpdatePinnedReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/kefu-conversation/update-conversation-pinned',
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
