/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPshangpinSpu';
import * as API from './types';

/** 获得商品 SPU 明细 GET /app-api/product/spu/get-detail */
export function getSpuDetailQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSpuDetailParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSpuDetail(queryKey[1] as typeof options);
    },
    queryKey: ['getSpuDetail', options],
  });
}

/** 获得商品 SPU 列表 GET /app-api/product/spu/list-by-ids */
export function getSpuListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSpuListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSpuList(queryKey[1] as typeof options);
    },
    queryKey: ['getSpuList', options],
  });
}

/** 获得商品 SPU 分页 GET /app-api/product/spu/page */
export function getSpuPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSpuPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSpuPage(queryKey[1] as typeof options);
    },
    queryKey: ['getSpuPage', options],
  });
}
