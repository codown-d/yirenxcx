/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建流程监听器 POST /admin-api/bpm/process-listener/create */
export async function createProcessListener({
  body,
  options,
}: {
  body: API.BpmProcessListenerSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/bpm/process-listener/create',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 删除流程监听器 DELETE /admin-api/bpm/process-listener/delete */
export async function deleteProcessListener({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteProcessListenerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/bpm/process-listener/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得流程监听器 GET /admin-api/bpm/process-listener/get */
export async function getProcessListener({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessListenerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBpmProcessListenerRespVO>(
    '/admin-api/bpm/process-listener/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得流程监听器分页 GET /admin-api/bpm/process-listener/page */
export async function getProcessListenerPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessListenerPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBpmProcessListenerRespVO>(
    '/admin-api/bpm/process-listener/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新流程监听器 PUT /admin-api/bpm/process-listener/update */
export async function updateProcessListener({
  body,
  options,
}: {
  body: API.BpmProcessListenerSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/bpm/process-listener/update',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}
