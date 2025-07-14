/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApphuiyuanjingyanjilu';
import * as API from './types';

/** 获得会员经验记录分页 GET /app-api/member/experience-record/page */
export function getExperienceRecordPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getExperienceRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getExperienceRecordPage(queryKey[1] as typeof options);
    },
    queryKey: ['getExperienceRecordPage', options],
  });
}
