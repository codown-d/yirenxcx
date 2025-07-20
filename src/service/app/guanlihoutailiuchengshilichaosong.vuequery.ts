/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutailiuchengshilichaosong';
import * as API from './types';

/** 获得抄送流程分页列表 GET /admin-api/bpm/process-instance/copy/page */
export function getProcessInstanceCopyPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessInstanceCopyPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProcessInstanceCopyPage(queryKey[1] as typeof options);
    },
    queryKey: ['getProcessInstanceCopyPage', options],
  });
}
