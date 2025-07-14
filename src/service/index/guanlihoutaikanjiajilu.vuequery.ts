/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaikanjiajilu';
import * as API from './types';

/** 获得砍价记录分页 GET /admin-api/promotion/bargain-record/page */
export function getBargainRecordPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainRecordPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBargainRecordPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getBargainRecordPage1', options],
  });
}
