/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建求职者信息 POST /app-api/yirenzhipin/job-seeker/create */
export async function createJobSeeker({
  body,
  options,
}: {
  body: API.YRZPJobSeekerCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/app-api/yirenzhipin/job-seeker/create',
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

/** 删除求职者信息 DELETE /app-api/yirenzhipin/job-seeker/delete */
export async function deleteJobSeeker({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteJobSeekerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/yirenzhipin/job-seeker/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得求职者信息 GET /app-api/yirenzhipin/job-seeker/get */
export async function getJobSeeker({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobSeekerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPJobSeekerDO>(
    '/app-api/yirenzhipin/job-seeker/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 根据id获得指定用户的求职信息 GET /app-api/yirenzhipin/job-seeker/get-by-user-ids */
export async function getJobSeekerByUserId({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobSeekerByUserIdParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListYRZPJobSeekerDO>(
    '/app-api/yirenzhipin/job-seeker/get-by-user-ids',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得求职者分页 GET /app-api/yirenzhipin/job-seeker/page */
export async function getJobSeekerPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobSeekerPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPJobSeekerDO>(
    '/app-api/yirenzhipin/job-seeker/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新求职者信息 PUT /app-api/yirenzhipin/job-seeker/update */
export async function updateJobSeeker({
  body,
  options,
}: {
  body: API.YRZPJobSeekerUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/yirenzhipin/job-seeker/update',
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
