/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaihuiyuandengjijilu';
import * as API from './types';

/** 获得会员等级记录 GET /admin-api/member/level-record/get */
export function getLevelRecordQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLevelRecordParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getLevelRecord(queryKey[1] as typeof options);
    },
    queryKey: ['getLevelRecord', options],
  });
}

/** 获得会员等级记录分页 GET /admin-api/member/level-record/page */
export function getLevelRecordPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLevelRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getLevelRecordPage(queryKey[1] as typeof options);
    },
    queryKey: ['getLevelRecordPage', options],
  });
}
