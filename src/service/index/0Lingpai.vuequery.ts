/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './0Lingpai';
import * as API from './types';

/** 删除访问令牌 DELETE /admin-api/system/oauth2-token/delete */
export function useDeleteAccessTokenMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteAccessToken,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得访问令牌分页 只返回有效期内的 GET /admin-api/system/oauth2-token/page */
export function getAccessTokenPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAccessTokenPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getAccessTokenPage(queryKey[1] as typeof options);
    },
    queryKey: ['getAccessTokenPage', options],
  });
}
