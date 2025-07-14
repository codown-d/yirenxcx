/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得签到规则列表 GET /app-api/member/sign-in/config/list */
export async function getSignInConfigList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppMemberSignInConfigRespVO>(
    '/app-api/member/sign-in/config/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
