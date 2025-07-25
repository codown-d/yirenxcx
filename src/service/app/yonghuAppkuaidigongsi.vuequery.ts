/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppkuaidigongsi';
import * as API from './types';

/** 获得快递公司列表 GET /app-api/trade/delivery/express/list */
export function getDeliveryExpressListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDeliveryExpressList(queryKey[1] as typeof options);
    },
    queryKey: ['getDeliveryExpressList', options],
  });
}
