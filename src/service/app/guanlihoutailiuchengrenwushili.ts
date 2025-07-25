/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 通过任务 PUT /admin-api/bpm/task/approve */
export async function approveTask({
  body,
  options,
}: {
  body: API.BpmTaskApproveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/task/approve', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 抄送任务 PUT /admin-api/bpm/task/copy */
export async function copyTask({
  body,
  options,
}: {
  body: API.BpmTaskCopyReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/task/copy', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 加签 before 前加签，after 后加签 PUT /admin-api/bpm/task/create-sign */
export async function createSignTask({
  body,
  options,
}: {
  body: API.BpmTaskSignCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/task/create-sign', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 委派任务 用于【流程详情】的【委派】按钮 PUT /admin-api/bpm/task/delegate */
export async function delegateTask({
  body,
  options,
}: {
  body: API.BpmTaskDelegateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/task/delegate', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 减签 DELETE /admin-api/bpm/task/delete-sign */
export async function deleteSignTask({
  body,
  options,
}: {
  body: API.BpmTaskSignDeleteReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/task/delete-sign', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取 Done 已办任务分页 GET /admin-api/bpm/task/done-page */
export async function getTaskDonePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTaskDonePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBpmTaskRespVO>(
    '/admin-api/bpm/task/done-page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得指定父级任务的子任务列表 GET /admin-api/bpm/task/list-by-parent-task-id */
export async function getTaskListByParentTaskId({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTaskListByParentTaskIdParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListBpmTaskRespVO>(
    '/admin-api/bpm/task/list-by-parent-task-id',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得指定流程实例的任务列表 包括完成的、未完成的 GET /admin-api/bpm/task/list-by-process-instance-id */
export async function getTaskListByProcessInstanceId({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTaskListByProcessInstanceIdParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListBpmTaskRespVO>(
    '/admin-api/bpm/task/list-by-process-instance-id',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取所有可退回的节点 用于【流程详情】的【退回】按钮 GET /admin-api/bpm/task/list-by-return */
export async function getTaskListByReturn({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTaskListByReturnParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListBpmTaskRespVO>(
    '/admin-api/bpm/task/list-by-return',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取全部任务的分页 用于【流程任务】菜单 GET /admin-api/bpm/task/manager-page */
export async function getTaskManagerPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTaskManagerPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBpmTaskRespVO>(
    '/admin-api/bpm/task/manager-page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 不通过任务 PUT /admin-api/bpm/task/reject */
export async function rejectTask({
  body,
  options,
}: {
  body: API.BpmTaskRejectReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/task/reject', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退回任务 用于【流程详情】的【退回】按钮 PUT /admin-api/bpm/task/return */
export async function returnTask({
  body,
  options,
}: {
  body: API.BpmTaskReturnReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/task/return', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取 Todo 待办任务分页 GET /admin-api/bpm/task/todo-page */
export async function getTaskTodoPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getTaskTodoPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBpmTaskRespVO>(
    '/admin-api/bpm/task/todo-page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 转派任务 用于【流程详情】的【转派】按钮 PUT /admin-api/bpm/task/transfer */
export async function transferTask({
  body,
  options,
}: {
  body: API.BpmTaskTransferReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/task/transfer', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
