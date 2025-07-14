/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaipintuanjilu';
import * as API from './types';

/** 获得拼团记录的概要信息 用于拼团记录页面展示 GET /admin-api/promotion/combination-record/get-summary */
export function getCombinationRecordSummary1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCombinationRecordSummary1(queryKey[1] as typeof options);
    },
    queryKey: ['getCombinationRecordSummary1', options],
  });
}

/** 获得拼团记录分页 GET /admin-api/promotion/combination-record/page */
export function getCombinationRecordPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCombinationRecordPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCombinationRecordPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getCombinationRecordPage1', options],
  });
}
