/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppzidishuju';
import * as API from './types';

/** 根据字典类型查询字典数据信息 GET /app-api/system/dict-data/type */
export function getDictDataListByTypeQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDictDataListByTypeParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDictDataListByType(queryKey[1] as typeof options);
    },
    queryKey: ['getDictDataListByType', options],
  });
}
