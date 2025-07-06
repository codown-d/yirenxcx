/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得地区树 GET /app-api/system/area/tree */
export async function getAreaTree({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppAreaNodeRespVO>(
    '/app-api/system/area/tree',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
