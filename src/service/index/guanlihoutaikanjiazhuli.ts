/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得砍价助力分页 GET /admin-api/promotion/bargain-help/page */
export async function getBargainHelpPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainHelpPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBargainHelpRespVO>(
    '/admin-api/promotion/bargain-help/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
