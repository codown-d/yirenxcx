/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得商品评价分页 GET /app-api/product/comment/page */
export async function getCommentPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCommentPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppProductCommentRespVO>(
    '/app-api/product/comment/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
