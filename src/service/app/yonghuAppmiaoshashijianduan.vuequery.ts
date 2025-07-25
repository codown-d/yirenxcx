/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppmiaoshashijianduan';
import * as API from './types';

/** 获得秒杀时间段列表 GET /app-api/promotion/seckill-config/list */
export function getSeckillConfigListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSeckillConfigList(queryKey[1] as typeof options);
    },
    queryKey: ['getSeckillConfigList', options],
  });
}
