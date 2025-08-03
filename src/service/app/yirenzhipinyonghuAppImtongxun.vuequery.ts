/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yirenzhipinyonghuAppImtongxun';
import * as API from './types';

/** 获取im通讯密钥 GET /app-api/yirenzhipin/im/genUserSig */
export function genUserSigQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.genUserSigParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.genUserSig(queryKey[1] as typeof options);
    },
    queryKey: ['genUserSig', options],
  });
}
