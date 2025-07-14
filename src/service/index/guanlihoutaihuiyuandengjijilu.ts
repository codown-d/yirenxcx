/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得会员等级记录 GET /admin-api/member/level-record/get */
export async function getLevelRecord({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLevelRecordParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMemberLevelRecordRespVO>(
    '/admin-api/member/level-record/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得会员等级记录分页 GET /admin-api/member/level-record/page */
export async function getLevelRecordPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLevelRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultMemberLevelRecordRespVO>(
    '/admin-api/member/level-record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
