/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaishangpinshoucang';
import * as API from './types';

/** 获得商品收藏分页 GET /admin-api/product/favorite/page */
export function getFavoritePage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFavoritePage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFavoritePage1(queryKey[1] as typeof options);
    },
    queryKey: ['getFavoritePage1', options],
  });
}
