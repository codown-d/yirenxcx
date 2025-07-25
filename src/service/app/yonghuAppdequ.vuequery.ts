/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppdequ';
import * as API from './types';

/** 获得地区树 GET /app-api/system/area/tree */
export function getAreaTreeQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getAreaTree(queryKey[1] as typeof options);
    },
    queryKey: ['getAreaTree', options],
  });
}
