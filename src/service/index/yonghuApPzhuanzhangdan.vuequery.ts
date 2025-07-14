/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPzhuanzhangdan';
import * as API from './types';

/** 同步转账单 GET /app-api/pay/transfer/sync */
export function syncTransferQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.syncTransferParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.syncTransfer(queryKey[1] as typeof options);
    },
    queryKey: ['syncTransfer', options],
  });
}
