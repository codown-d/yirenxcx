/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得会员用户 GET /admin-api/member/user/get */
export async function getUser({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMemberUserRespVO>(
    '/admin-api/member/user/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得会员用户分页 GET /admin-api/member/user/page */
export async function getUserPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultMemberUserRespVO>(
    '/admin-api/member/user/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新会员用户 PUT /admin-api/member/user/update */
export async function updateUser1({
  body,
  options,
}: {
  body: API.MemberUserUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/member/user/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新会员用户等级 PUT /admin-api/member/user/update-level */
export async function updateUserLevel({
  body,
  options,
}: {
  body: API.MemberUserUpdateLevelReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/member/user/update-level',
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

/** 更新会员用户积分 PUT /admin-api/member/user/update-point */
export async function updateUserPoint({
  body,
  options,
}: {
  body: API.MemberUserUpdatePointReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/member/user/update-point',
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
