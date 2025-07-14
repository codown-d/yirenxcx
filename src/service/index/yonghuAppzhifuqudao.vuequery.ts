/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppzhifuqudao';
import * as API from './types';

/** 获得指定应用的开启的支付渠道编码列表 GET /app-api/pay/channel/get-enable-code-list */
export function getEnableChannelCodeListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getEnableChannelCodeListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getEnableChannelCodeList(queryKey[1] as typeof options);
    },
    queryKey: ['getEnableChannelCodeList', options],
  });
}
