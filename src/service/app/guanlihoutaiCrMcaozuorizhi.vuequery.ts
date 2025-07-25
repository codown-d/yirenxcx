/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMcaozuorizhi';
import * as API from './types';

/** 获得操作日志 GET /admin-api/crm/operate-log/page */
export function getCustomerOperateLogQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerOperateLogParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerOperateLog(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerOperateLog', options],
  });
}
