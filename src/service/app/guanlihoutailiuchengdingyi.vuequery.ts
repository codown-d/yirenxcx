/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutailiuchengdingyi';
import * as API from './types';

/** 获得流程定义 GET /admin-api/bpm/process-definition/get */
export function getProcessDefinitionQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessDefinitionParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProcessDefinition(queryKey[1] as typeof options);
    },
    queryKey: ['getProcessDefinition', options],
  });
}

/** 获得流程定义列表 GET /admin-api/bpm/process-definition/list */
export function getProcessDefinitionListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessDefinitionListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProcessDefinitionList(queryKey[1] as typeof options);
    },
    queryKey: ['getProcessDefinitionList', options],
  });
}

/** 获得流程定义分页 GET /admin-api/bpm/process-definition/page */
export function getProcessDefinitionPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessDefinitionPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProcessDefinitionPage(queryKey[1] as typeof options);
    },
    queryKey: ['getProcessDefinitionPage', options],
  });
}

/** 获得流程定义精简列表 只包含未挂起的流程，主要用于前端的下拉选项 GET /admin-api/bpm/process-definition/simple-list */
export function getSimpleProcessDefinitionListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleProcessDefinitionList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleProcessDefinitionList', options],
  });
}
