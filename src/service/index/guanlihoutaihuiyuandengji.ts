/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建会员等级 POST /admin-api/member/level/create */
export async function createLevel({
  body,
  options,
}: {
  body: API.MemberLevelCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/member/level/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除会员等级 DELETE /admin-api/member/level/delete */
export async function deleteLevel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteLevelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/member/level/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得会员等级 GET /admin-api/member/level/get */
export async function getLevel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLevelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMemberLevelRespVO>(
    '/admin-api/member/level/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得会员等级列表 GET /admin-api/member/level/list */
export async function getLevelList1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLevelList1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMemberLevelRespVO>(
    '/admin-api/member/level/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取会员等级精简信息列表 只包含被开启的会员等级，主要用于前端的下拉选项 GET /admin-api/member/level/list-all-simple */
export async function getSimpleLevelList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMemberLevelSimpleRespVO>(
    '/admin-api/member/level/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新会员等级 PUT /admin-api/member/level/update */
export async function updateLevel({
  body,
  options,
}: {
  body: API.MemberLevelUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/member/level/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
