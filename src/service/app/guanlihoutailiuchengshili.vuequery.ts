/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutailiuchengshili';
import * as API from './types';

/** 管理员取消流程实例 管理员撤回流程 DELETE /admin-api/bpm/process-instance/cancel-by-admin */
export function useCancelProcessInstanceByManagerMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.cancelProcessInstanceByManager,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 用户取消流程实例 取消发起的流程 DELETE /admin-api/bpm/process-instance/cancel-by-start-user */
export function useCancelProcessInstanceByStartUserMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.cancelProcessInstanceByStartUser,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 新建流程实例 POST /admin-api/bpm/process-instance/create */
export function useCreateProcessInstanceMutation(options?: {
  onSuccess?: (value?: API.CommonResultString) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createProcessInstance,
    onSuccess(data: API.CommonResultString) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得指定流程实例 在【流程详细】界面中，进行调用 GET /admin-api/bpm/process-instance/get */
export function getProcessInstanceQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessInstanceParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProcessInstance(queryKey[1] as typeof options);
    },
    queryKey: ['getProcessInstance', options],
  });
}

/** 获得审批详情 GET /admin-api/bpm/process-instance/get-approval-detail */
export function getApprovalDetailQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getApprovalDetailParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getApprovalDetail(queryKey[1] as typeof options);
    },
    queryKey: ['getApprovalDetail', options],
  });
}

/** 获取流程实例的 BPMN 模型视图 在【流程详细】界面中，进行调用 GET /admin-api/bpm/process-instance/get-bpmn-model-view */
export function getProcessInstanceBpmnModelViewQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessInstanceBpmnModelViewParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProcessInstanceBpmnModelView(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getProcessInstanceBpmnModelView', options],
  });
}

/** 获取下一个执行的流程节点 GET /admin-api/bpm/process-instance/get-next-approval-nodes */
export function getNextApprovalNodesQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNextApprovalNodesParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getNextApprovalNodes(queryKey[1] as typeof options);
    },
    queryKey: ['getNextApprovalNodes', options],
  });
}

/** 获得管理流程实例的分页列表 在【流程实例】菜单中，进行调用 GET /admin-api/bpm/process-instance/manager-page */
export function getProcessInstanceManagerPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessInstanceManagerPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProcessInstanceManagerPage(queryKey[1] as typeof options);
    },
    queryKey: ['getProcessInstanceManagerPage', options],
  });
}

/** 获得我的实例分页列表 在【我的流程】菜单中，进行调用 GET /admin-api/bpm/process-instance/my-page */
export function getProcessInstanceMyPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessInstanceMyPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProcessInstanceMyPage(queryKey[1] as typeof options);
    },
    queryKey: ['getProcessInstanceMyPage', options],
  });
}
