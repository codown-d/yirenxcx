/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 删除音乐 DELETE /admin-api/ai/music/delete */
export async function deleteMusic({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteMusicParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/music/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除【我的】音乐记录 DELETE /admin-api/ai/music/delete-my */
export async function deleteMusicMy({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteMusicMyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/music/delete-my', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 音乐生成 POST /admin-api/ai/music/generate */
export async function generateMusic({
  body,
  options,
}: {
  body: API.AiSunoGenerateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListLong>('/admin-api/ai/music/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取【我的】音乐 GET /admin-api/ai/music/get-my */
export async function getMusicMy({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMusicMyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiMusicRespVO>('/admin-api/ai/music/get-my', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得【我的】音乐分页 GET /admin-api/ai/music/my-page */
export async function getMusicMyPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMusicMyPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiMusicRespVO>(
    '/admin-api/ai/music/my-page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得音乐分页 GET /admin-api/ai/music/page */
export async function getMusicPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMusicPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiMusicRespVO>(
    '/admin-api/ai/music/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新音乐 PUT /admin-api/ai/music/update */
export async function updateMusic({
  body,
  options,
}: {
  body: API.AiMusicUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/music/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改【我的】音乐 目前只支持修改标题 POST /admin-api/ai/music/update-my */
export async function updateMy({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.updateMyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/music/update-my', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
