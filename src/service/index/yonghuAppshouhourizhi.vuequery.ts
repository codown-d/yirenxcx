/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppshouhourizhi';
import * as API from './types';

/** 获得售后日志列表 GET /app-api/trade/after-sale-log/list */
export function getAfterSaleLogListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAfterSaleLogListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getAfterSaleLogList(queryKey[1] as typeof options);
    },
    queryKey: ['getAfterSaleLogList', options],
  });
}
