/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建职位分类 POST /admin-api/yirenzhipin/job-category/create */
export async function createJobCategory({
  body,
  options,
}: {
  body: API.YRZPJobCategoryCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/yirenzhipin/job-category/create',
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

/** 删除职位分类 DELETE /admin-api/yirenzhipin/job-category/delete */
export async function deleteJobCategory({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteJobCategoryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/job-category/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得职位分类 GET /admin-api/yirenzhipin/job-category/get */
export async function getJobCategory({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobCategoryParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPJobCategoryRespVO>(
    '/admin-api/yirenzhipin/job-category/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得职位分类列表 GET /admin-api/yirenzhipin/job-category/list-by-parent */
export async function getJobCategoryListByParentId({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobCategoryListByParentIdParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListYRZPJobCategoryRespVO>(
    '/admin-api/yirenzhipin/job-category/list-by-parent',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得职位分类分页 GET /admin-api/yirenzhipin/job-category/page */
export async function getJobCategoryPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getJobCategoryPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPJobCategoryRespVO>(
    '/admin-api/yirenzhipin/job-category/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新职位分类 PUT /admin-api/yirenzhipin/job-category/update */
export async function updateJobCategory({
  body,
  options,
}: {
  body: API.YRZPJobCategoryUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/job-category/update',
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
