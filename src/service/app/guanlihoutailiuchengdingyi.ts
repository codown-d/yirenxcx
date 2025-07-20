/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得流程定义 GET /admin-api/bpm/process-definition/get */
export async function getProcessDefinition({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessDefinitionParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBpmProcessDefinitionRespVO>(
    '/admin-api/bpm/process-definition/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得流程定义列表 GET /admin-api/bpm/process-definition/list */
export async function getProcessDefinitionList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessDefinitionListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListBpmProcessDefinitionRespVO>(
    '/admin-api/bpm/process-definition/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得流程定义分页 GET /admin-api/bpm/process-definition/page */
export async function getProcessDefinitionPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessDefinitionPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBpmProcessDefinitionRespVO>(
    '/admin-api/bpm/process-definition/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得流程定义精简列表 只包含未挂起的流程，主要用于前端的下拉选项 GET /admin-api/bpm/process-definition/simple-list */
export async function getSimpleProcessDefinitionList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListBpmProcessDefinitionRespVO>(
    '/admin-api/bpm/process-definition/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
