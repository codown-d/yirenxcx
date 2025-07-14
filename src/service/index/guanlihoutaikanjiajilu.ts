/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得砍价记录分页 GET /admin-api/promotion/bargain-record/page */
export async function getBargainRecordPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainRecordPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBargainRecordPageItemRespVO>(
    '/admin-api/promotion/bargain-record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
