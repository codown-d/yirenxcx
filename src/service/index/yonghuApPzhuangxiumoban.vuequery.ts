/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPzhuangxiumoban';
import * as API from './types';

/** 获得装修模板 GET /app-api/promotion/diy-template/get */
export function getDiyTemplateQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyTemplateParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDiyTemplate(queryKey[1] as typeof options);
    },
    queryKey: ['getDiyTemplate', options],
  });
}

/** 使用中的装修模板 GET /app-api/promotion/diy-template/used */
export function getUsedDiyTemplateQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUsedDiyTemplate(queryKey[1] as typeof options);
    },
    queryKey: ['getUsedDiyTemplate', options],
  });
}
