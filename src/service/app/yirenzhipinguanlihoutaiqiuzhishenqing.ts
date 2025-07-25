/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建求职申请 POST /admin-api/yirenzhipin/job-application/create */
export async function createJobApplication({
  body,
  options,
}: {
  body: API.YRZPJobApplicationCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/yirenzhipin/job-application/create',
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

/** 删除求职申请 DELETE /admin-api/yirenzhipin/job-application/delete */
export async function deleteJobApplication({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteJobApplicationParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/job-application/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得求职申请 GET /admin-api/yirenzhipin/job-application/get */
export async function getJobApplication({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobApplicationParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPJobApplicationRespVO>(
    '/admin-api/yirenzhipin/job-application/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得求职申请分页 GET /admin-api/yirenzhipin/job-application/page */
export async function getJobApplicationPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobApplicationPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPJobApplicationRespVO>(
    '/admin-api/yirenzhipin/job-application/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新求职申请 PUT /admin-api/yirenzhipin/job-application/update */
export async function updateJobApplication({
  body,
  options,
}: {
  body: API.YRZPJobApplicationUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/job-application/update',
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

/** 更新求职申请状态 PUT /admin-api/yirenzhipin/job-application/update-status */
export async function updateJobApplicationStatus({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.updateJobApplicationStatusParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/job-application/update-status',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
