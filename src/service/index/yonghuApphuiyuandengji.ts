/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得会员等级列表 GET /app-api/member/level/list */
export async function getLevelList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppMemberLevelRespVO>(
    '/app-api/member/level/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
