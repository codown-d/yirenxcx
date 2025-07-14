/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPshangpinfenlei';
import * as API from './types';

/** 获得商品分类列表 GET /app-api/product/category/list */
export function getProductCategoryListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProductCategoryList(queryKey[1] as typeof options);
    },
    queryKey: ['getProductCategoryList', options],
  });
}

/** 获得商品分类列表，指定编号 GET /app-api/product/category/list-by-ids */
export function getProductCategoryList1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductCategoryList1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProductCategoryList1(queryKey[1] as typeof options);
    },
    queryKey: ['getProductCategoryList1', options],
  });
}
