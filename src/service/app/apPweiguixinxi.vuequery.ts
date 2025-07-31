/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './apPweiguixinxi';
import * as API from './types';

/** 获得违规信息 GET /app-api/yirenzhipin/app-wei-gui/get */
export function getWeiGuiQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWeiGuiParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWeiGui(queryKey[1] as typeof options);
    },
    queryKey: ['getWeiGui', options],
  });
}

/** 获得岗位的违规信息列表 GET /app-api/yirenzhipin/app-wei-gui/list-by-job */
export function getWeiGuiListByJobIdQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWeiGuiListByJobIdParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWeiGuiListByJobId(queryKey[1] as typeof options);
    },
    queryKey: ['getWeiGuiListByJobId', options],
  });
}

/** 获得求职者的违规信息列表 GET /app-api/yirenzhipin/app-wei-gui/list-by-seeker */
export function getWeiGuiListBySeekerIdQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWeiGuiListBySeekerIdParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWeiGuiListBySeekerId(queryKey[1] as typeof options);
    },
    queryKey: ['getWeiGuiListBySeekerId', options],
  });
}

/** 获得违规信息分页 GET /app-api/yirenzhipin/app-wei-gui/page */
export function getWeiGuiPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWeiGuiPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getWeiGuiPage(queryKey[1] as typeof options);
    },
    queryKey: ['getWeiGuiPage', options],
  });
}
