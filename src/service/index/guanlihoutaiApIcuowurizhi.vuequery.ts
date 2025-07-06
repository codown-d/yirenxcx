/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiApIcuowurizhi';
import * as API from './types';

/** 导出 API 错误日志 Excel GET /admin-api/infra/api-error-log/export-excel */
export function exportApiErrorLogExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportApiErrorLogExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportApiErrorLogExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportApiErrorLogExcel', options],
  });
}

/** 获得 API 错误日志分页 GET /admin-api/infra/api-error-log/page */
export function getApiErrorLogPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getApiErrorLogPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getApiErrorLogPage(queryKey[1] as typeof options);
    },
    queryKey: ['getApiErrorLogPage', options],
  });
}

/** 更新 API 错误日志的状态 PUT /admin-api/infra/api-error-log/update-status */
export function useUpdateApiErrorLogProcessMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateApiErrorLogProcess,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
