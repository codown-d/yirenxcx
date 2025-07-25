/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPzhuangxiuyemian';
import * as API from './types';

/** 获得装修页面 GET /app-api/promotion/diy-page/get */
export function getDiyPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDiyPage(queryKey[1] as typeof options);
    },
    queryKey: ['getDiyPage', options],
  });
}
