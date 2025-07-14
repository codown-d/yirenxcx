/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaihuiyuanjingyanjilu';
import * as API from './types';

/** 获得会员经验记录 GET /admin-api/member/experience-record/get */
export function getExperienceRecordQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getExperienceRecordParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getExperienceRecord(queryKey[1] as typeof options);
    },
    queryKey: ['getExperienceRecord', options],
  });
}

/** 获得会员经验记录分页 GET /admin-api/member/experience-record/page */
export function getExperienceRecordPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getExperienceRecordPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getExperienceRecordPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getExperienceRecordPage1', options],
  });
}
