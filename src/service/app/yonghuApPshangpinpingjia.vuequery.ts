/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPshangpinpingjia';
import * as API from './types';

/** 获得商品评价分页 GET /app-api/product/comment/page */
export function getCommentPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCommentPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCommentPage(queryKey[1] as typeof options);
    },
    queryKey: ['getCommentPage', options],
  });
}
