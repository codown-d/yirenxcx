/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 管理员取消流程实例 管理员撤回流程 DELETE /admin-api/bpm/process-instance/cancel-by-admin */
export async function cancelProcessInstanceByManager({
  body,
  options,
}: {
  body: API.BpmProcessInstanceCancelReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/bpm/process-instance/cancel-by-admin',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 用户取消流程实例 取消发起的流程 DELETE /admin-api/bpm/process-instance/cancel-by-start-user */
export async function cancelProcessInstanceByStartUser({
  body,
  options,
}: {
  body: API.BpmProcessInstanceCancelReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/bpm/process-instance/cancel-by-start-user',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 新建流程实例 POST /admin-api/bpm/process-instance/create */
export async function createProcessInstance({
  body,
  options,
}: {
  body: API.BpmProcessInstanceCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>(
    '/admin-api/bpm/process-instance/create',
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

/** 获得指定流程实例 在【流程详细】界面中，进行调用 GET /admin-api/bpm/process-instance/get */
export async function getProcessInstance({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessInstanceParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBpmProcessInstanceRespVO>(
    '/admin-api/bpm/process-instance/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得审批详情 GET /admin-api/bpm/process-instance/get-approval-detail */
export async function getApprovalDetail({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getApprovalDetailParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBpmApprovalDetailRespVO>(
    '/admin-api/bpm/process-instance/get-approval-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取流程实例的 BPMN 模型视图 在【流程详细】界面中，进行调用 GET /admin-api/bpm/process-instance/get-bpmn-model-view */
export async function getProcessInstanceBpmnModelView({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessInstanceBpmnModelViewParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBpmProcessInstanceBpmnModelViewRespVO>(
    '/admin-api/bpm/process-instance/get-bpmn-model-view',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取下一个执行的流程节点 GET /admin-api/bpm/process-instance/get-next-approval-nodes */
export async function getNextApprovalNodes({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNextApprovalNodesParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListActivityNode>(
    '/admin-api/bpm/process-instance/get-next-approval-nodes',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得管理流程实例的分页列表 在【流程实例】菜单中，进行调用 GET /admin-api/bpm/process-instance/manager-page */
export async function getProcessInstanceManagerPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessInstanceManagerPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBpmProcessInstanceRespVO>(
    '/admin-api/bpm/process-instance/manager-page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得我的实例分页列表 在【我的流程】菜单中，进行调用 GET /admin-api/bpm/process-instance/my-page */
export async function getProcessInstanceMyPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessInstanceMyPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBpmProcessInstanceRespVO>(
    '/admin-api/bpm/process-instance/my-page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
