/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得聊天角色的分类列表 GET /admin-api/ai/chat-role/category-list */
export async function getChatRoleCategoryList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListString>(
    '/admin-api/ai/chat-role/category-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 创建聊天角色 POST /admin-api/ai/chat-role/create */
export async function createChatRole({
  body,
  options,
}: {
  body: API.AiChatRoleSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/ai/chat-role/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建【我的】聊天角色 POST /admin-api/ai/chat-role/create-my */
export async function createChatRoleMy({
  body,
  options,
}: {
  body: API.AiChatRoleSaveMyReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/ai/chat-role/create-my', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除聊天角色 DELETE /admin-api/ai/chat-role/delete */
export async function deleteChatRole({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteChatRoleParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/chat-role/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除【我的】聊天角色 DELETE /admin-api/ai/chat-role/delete-my */
export async function deleteChatRoleMy({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteChatRoleMyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/chat-role/delete-my', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得聊天角色 GET /admin-api/ai/chat-role/get */
export async function getChatRole({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatRoleParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiChatRoleRespVO>(
    '/admin-api/ai/chat-role/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得【我的】聊天角色 GET /admin-api/ai/chat-role/get-my */
export async function getChatRoleMy({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatRoleMyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiChatRoleRespVO>(
    '/admin-api/ai/chat-role/get-my',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得【我的】聊天角色分页 GET /admin-api/ai/chat-role/my-page */
export async function getChatRoleMyPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatRoleMyPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiChatRoleRespVO>(
    '/admin-api/ai/chat-role/my-page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得聊天角色分页 GET /admin-api/ai/chat-role/page */
export async function getChatRolePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChatRolePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiChatRoleRespVO>(
    '/admin-api/ai/chat-role/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新聊天角色 PUT /admin-api/ai/chat-role/update */
export async function updateChatRole({
  body,
  options,
}: {
  body: API.AiChatRoleSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/chat-role/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新【我的】聊天角色 PUT /admin-api/ai/chat-role/update-my */
export async function updateChatRoleMy({
  body,
  options,
}: {
  body: API.AiChatRoleSaveMyReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/chat-role/update-my', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
