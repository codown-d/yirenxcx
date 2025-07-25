/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 清空商品浏览记录 DELETE /app-api/product/browse-history/clean */
export async function deleteBrowseHistory1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/product/browse-history/clean',
    {
      method: 'DELETE',
      ...(options || {}),
    }
  );
}

/** 删除商品浏览记录 DELETE /app-api/product/browse-history/delete */
export async function deleteBrowseHistory({
  body,
  options,
}: {
  body: API.AppProductBrowseHistoryDeleteReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/product/browse-history/delete',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 获得商品浏览记录分页 GET /app-api/product/browse-history/page */
export async function getBrowseHistoryPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrowseHistoryPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppProductBrowseHistoryRespVO>(
    '/app-api/product/browse-history/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
