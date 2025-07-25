/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得商品收藏分页 GET /admin-api/product/favorite/page */
export async function getFavoritePage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFavoritePage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultProductFavoriteRespVO>(
    '/admin-api/product/favorite/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
