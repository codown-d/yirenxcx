/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建流程表达式 POST /admin-api/bpm/process-expression/create */
export async function createProcessExpression({
  body,
  options,
}: {
  body: API.BpmProcessExpressionSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/bpm/process-expression/create',
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

/** 删除流程表达式 DELETE /admin-api/bpm/process-expression/delete */
export async function deleteProcessExpression({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteProcessExpressionParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/bpm/process-expression/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得流程表达式 GET /admin-api/bpm/process-expression/get */
export async function getProcessExpression({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessExpressionParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBpmProcessExpressionRespVO>(
    '/admin-api/bpm/process-expression/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得流程表达式分页 GET /admin-api/bpm/process-expression/page */
export async function getProcessExpressionPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessExpressionPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBpmProcessExpressionRespVO>(
    '/admin-api/bpm/process-expression/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新流程表达式 PUT /admin-api/bpm/process-expression/update */
export async function updateProcessExpression({
  body,
  options,
}: {
  body: API.BpmProcessExpressionSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/bpm/process-expression/update',
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
