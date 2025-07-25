/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaizhuanzhangdan';
import * as API from './types';

/** 导出转账订单 Excel GET /admin-api/pay/transfer/export-excel */
export function exportTransferQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportTransferParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportTransfer(queryKey[1] as typeof options);
    },
    queryKey: ['exportTransfer', options],
  });
}

/** 获得转账订单 GET /admin-api/pay/transfer/get */
export function getTransferQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTransferParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTransfer(queryKey[1] as typeof options);
    },
    queryKey: ['getTransfer', options],
  });
}

/** 获得转账订单分页 GET /admin-api/pay/transfer/page */
export function getTransferPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTransferPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTransferPage(queryKey[1] as typeof options);
    },
    queryKey: ['getTransferPage', options],
  });
}
