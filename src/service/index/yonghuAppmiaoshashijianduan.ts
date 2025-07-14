/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得秒杀时间段列表 GET /app-api/promotion/seckill-config/list */
export async function getSeckillConfigList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppSeckillConfigRespVO>(
    '/app-api/promotion/seckill-config/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
