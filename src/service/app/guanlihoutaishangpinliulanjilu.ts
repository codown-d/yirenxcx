/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得商品浏览记录分页 GET /admin-api/product/browse-history/page */
export async function getBrowseHistoryPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrowseHistoryPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultProductBrowseHistoryRespVO>(
    '/admin-api/product/browse-history/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
