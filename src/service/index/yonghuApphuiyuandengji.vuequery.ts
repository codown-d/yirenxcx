/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApphuiyuandengji';
import * as API from './types';

/** 获得会员等级列表 GET /app-api/member/level/list */
export function getLevelListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getLevelList(queryKey[1] as typeof options);
    },
    queryKey: ['getLevelList', options],
  });
}
