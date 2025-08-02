/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建定时任务 POST /admin-api/infra/job/create */
export async function createJob2({
  body,
  options,
}: {
  body: API.JobSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/infra/job/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除定时任务 DELETE /admin-api/infra/job/delete */
export async function deleteJob2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteJob2Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/infra/job/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出定时任务 Excel GET /admin-api/infra/job/export-excel */
export async function exportJobExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportJobExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/infra/job/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得定时任务 GET /admin-api/infra/job/get */
export async function getJob1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJob1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultJobRespVO>('/admin-api/infra/job/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得定时任务的下 n 次执行时间 GET /admin-api/infra/job/get_next_times */
export async function getJobNextTimes({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobNextTimesParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListLocalDateTime>(
    '/admin-api/infra/job/get_next_times',
    {
      method: 'GET',
      params: {
        // count has a default value: 5
        count: '5',
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得定时任务分页 GET /admin-api/infra/job/page */
export async function getJobPage3({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobPage3Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultJobRespVO>(
    '/admin-api/infra/job/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 同步定时任务 POST /admin-api/infra/job/sync */
export async function syncJob({ options }: { options?: CustomRequestOptions }) {
  return request<API.CommonResultBoolean>('/admin-api/infra/job/sync', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 触发定时任务 PUT /admin-api/infra/job/trigger */
export async function triggerJob({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.triggerJobParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/infra/job/trigger', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新定时任务 PUT /admin-api/infra/job/update */
export async function updateJob2({
  body,
  options,
}: {
  body: API.JobSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/infra/job/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新定时任务的状态 PUT /admin-api/infra/job/update-status */
export async function updateJobStatus({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.updateJobStatusParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/job/update-status',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
