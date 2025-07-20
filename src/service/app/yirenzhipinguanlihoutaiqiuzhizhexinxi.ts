/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建求职者信息 POST /admin-api/yirenzhipin/job-seeker/create */
export async function createJobSeeker1({
  body,
  options,
}: {
  body: API.YRZPJobSeekerCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/yirenzhipin/job-seeker/create',
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

/** 删除求职者信息 DELETE /admin-api/yirenzhipin/job-seeker/delete */
export async function deleteJobSeeker1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteJobSeeker1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/job-seeker/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得求职者信息 GET /admin-api/yirenzhipin/job-seeker/get */
export async function getJobSeeker1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobSeeker1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPJobSeekerRespVO>(
    '/admin-api/yirenzhipin/job-seeker/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得指定用户的求职者信息 GET /admin-api/yirenzhipin/job-seeker/get-by-user-id */
export async function getJobSeekerByUserId({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobSeekerByUserIdParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPJobSeekerRespVO>(
    '/admin-api/yirenzhipin/job-seeker/get-by-user-id',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得求职者信息分页 GET /admin-api/yirenzhipin/job-seeker/page */
export async function getJobSeekerPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobSeekerPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPJobSeekerRespVO>(
    '/admin-api/yirenzhipin/job-seeker/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新求职者信息 PUT /admin-api/yirenzhipin/job-seeker/update */
export async function updateJobSeeker1({
  body,
  options,
}: {
  body: API.YRZPJobSeekerUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/job-seeker/update',
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
