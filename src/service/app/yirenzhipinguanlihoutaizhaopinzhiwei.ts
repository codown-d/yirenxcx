/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建招聘职位 POST /admin-api/yirenzhipin/job/create */
export async function createJob1({
  body,
  options,
}: {
  body: API.YRZPJobCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/yirenzhipin/job/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除招聘职位 DELETE /admin-api/yirenzhipin/job/delete */
export async function deleteJob1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteJob1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/yirenzhipin/job/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得招聘职位 GET /admin-api/yirenzhipin/job/get */
export async function getJob1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJob1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPJobRespVO>(
    '/admin-api/yirenzhipin/job/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得招聘职位分页 GET /admin-api/yirenzhipin/job/page */
export async function getJobPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPJobRespVO>(
    '/admin-api/yirenzhipin/job/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新招聘职位 PUT /admin-api/yirenzhipin/job/update */
export async function updateJob1({
  body,
  options,
}: {
  body: API.YRZPJobUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/yirenzhipin/job/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
