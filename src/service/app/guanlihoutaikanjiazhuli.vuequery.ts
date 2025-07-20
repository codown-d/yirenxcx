/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaikanjiazhuli';
import * as API from './types';

/** 获得砍价助力分页 GET /admin-api/promotion/bargain-help/page */
export function getBargainHelpPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainHelpPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBargainHelpPage(queryKey[1] as typeof options);
    },
    queryKey: ['getBargainHelpPage', options],
  });
}
