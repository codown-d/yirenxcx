/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutailiuchengrenwushili';
import * as API from './types';

/** 通过任务 PUT /admin-api/bpm/task/approve */
export function useApproveTaskMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.approveTask,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 抄送任务 PUT /admin-api/bpm/task/copy */
export function useCopyTaskMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.copyTask,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 加签 before 前加签，after 后加签 PUT /admin-api/bpm/task/create-sign */
export function useCreateSignTaskMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createSignTask,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 委派任务 用于【流程详情】的【委派】按钮 PUT /admin-api/bpm/task/delegate */
export function useDelegateTaskMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.delegateTask,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 减签 DELETE /admin-api/bpm/task/delete-sign */
export function useDeleteSignTaskMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteSignTask,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获取 Done 已办任务分页 GET /admin-api/bpm/task/done-page */
export function getTaskDonePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTaskDonePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTaskDonePage(queryKey[1] as typeof options);
    },
    queryKey: ['getTaskDonePage', options],
  });
}

/** 获得指定父级任务的子任务列表 GET /admin-api/bpm/task/list-by-parent-task-id */
export function getTaskListByParentTaskIdQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTaskListByParentTaskIdParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTaskListByParentTaskId(queryKey[1] as typeof options);
    },
    queryKey: ['getTaskListByParentTaskId', options],
  });
}

/** 获得指定流程实例的任务列表 包括完成的、未完成的 GET /admin-api/bpm/task/list-by-process-instance-id */
export function getTaskListByProcessInstanceIdQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTaskListByProcessInstanceIdParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTaskListByProcessInstanceId(queryKey[1] as typeof options);
    },
    queryKey: ['getTaskListByProcessInstanceId', options],
  });
}

/** 获取所有可退回的节点 用于【流程详情】的【退回】按钮 GET /admin-api/bpm/task/list-by-return */
export function getTaskListByReturnQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTaskListByReturnParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTaskListByReturn(queryKey[1] as typeof options);
    },
    queryKey: ['getTaskListByReturn', options],
  });
}

/** 获取全部任务的分页 用于【流程任务】菜单 GET /admin-api/bpm/task/manager-page */
export function getTaskManagerPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTaskManagerPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTaskManagerPage(queryKey[1] as typeof options);
    },
    queryKey: ['getTaskManagerPage', options],
  });
}

/** 不通过任务 PUT /admin-api/bpm/task/reject */
export function useRejectTaskMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.rejectTask,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 退回任务 用于【流程详情】的【退回】按钮 PUT /admin-api/bpm/task/return */
export function useReturnTaskMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.returnTask,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获取 Todo 待办任务分页 GET /admin-api/bpm/task/todo-page */
export function getTaskTodoPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTaskTodoPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getTaskTodoPage(queryKey[1] as typeof options);
    },
    queryKey: ['getTaskTodoPage', options],
  });
}

/** 转派任务 用于【流程详情】的【转派】按钮 PUT /admin-api/bpm/task/transfer */
export function useTransferTaskMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.transferTask,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
