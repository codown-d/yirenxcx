/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiRedisjiankong';
import * as API from './types';

/** 获得 Redis 监控信息 GET /admin-api/infra/redis/get-monitor-info */
export function getRedisMonitorInfoQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getRedisMonitorInfo(queryKey[1] as typeof options);
    },
    queryKey: ['getRedisMonitorInfo', options],
  });
}
