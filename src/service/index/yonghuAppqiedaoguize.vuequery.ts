/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppqiedaoguize';
import * as API from './types';

/** 获得签到规则列表 GET /app-api/member/sign-in/config/list */
export function getSignInConfigListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSignInConfigList(queryKey[1] as typeof options);
    },
    queryKey: ['getSignInConfigList', options],
  });
}
