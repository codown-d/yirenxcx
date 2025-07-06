/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得 Redis 监控信息 GET /admin-api/infra/redis/get-monitor-info */
export async function getRedisMonitorInfo({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultRedisMonitorRespVO>(
    '/admin-api/infra/redis/get-monitor-info',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
