/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiyongjinjilu';
import * as API from './types';

/** 获得佣金记录 GET /admin-api/trade/brokerage-record/get */
export function getBrokerageRecordQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageRecordParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrokerageRecord(queryKey[1] as typeof options);
    },
    queryKey: ['getBrokerageRecord', options],
  });
}

/** 获得佣金记录分页 GET /admin-api/trade/brokerage-record/page */
export function getBrokerageRecordPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageRecordPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrokerageRecordPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getBrokerageRecordPage1', options],
  });
}
