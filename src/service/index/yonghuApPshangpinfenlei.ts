/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得商品分类列表 GET /app-api/product/category/list */
export async function getProductCategoryList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppCategoryRespVO>(
    '/app-api/product/category/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得商品分类列表，指定编号 GET /app-api/product/category/list-by-ids */
export async function getProductCategoryList1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductCategoryList1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppCategoryRespVO>(
    '/app-api/product/category/list-by-ids',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
