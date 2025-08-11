/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得会员配置 GET /admin-api/member/config/get */
export async function getConfig({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMemberConfigRespVO>(
    '/admin-api/member/config/get',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 保存会员配置 PUT /admin-api/member/config/save */
export async function saveConfig({
  body,
  options,
}: {
  body: API.MemberConfigSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/member/config/save', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
