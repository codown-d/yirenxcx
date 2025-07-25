/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppjiaoyipeizhi';
import * as API from './types';

/** 获得交易配置 GET /app-api/trade/config/get */
export function getTradeConfigQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTradeConfig(queryKey[1] as typeof options);
    },
    queryKey: ['getTradeConfig', options],
  });
}
