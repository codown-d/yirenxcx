/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建学生 POST /admin-api/infra/demo03-student/create */
export async function createDemo03Student({
  body,
  options,
}: {
  body: API.Demo03StudentSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/infra/demo03-student/create',
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

/** 删除学生 DELETE /admin-api/infra/demo03-student/delete */
export async function deleteDemo03Student({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDemo03StudentParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/demo03-student/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 创建学生课程 POST /admin-api/infra/demo03-student/demo03-course/create */
export async function createDemo03Course({
  body,
  options,
}: {
  body: API.Demo03CourseDO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/infra/demo03-student/demo03-course/create',
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

/** 删除学生课程 DELETE /admin-api/infra/demo03-student/demo03-course/delete */
export async function deleteDemo03Course({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDemo03CourseParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/demo03-student/demo03-course/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得学生课程 GET /admin-api/infra/demo03-student/demo03-course/get */
export async function getDemo03Course({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03CourseParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDemo03CourseDO>(
    '/admin-api/infra/demo03-student/demo03-course/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得学生课程列表 GET /admin-api/infra/demo03-student/demo03-course/list-by-student-id */
export async function getDemo03CourseListByStudentId({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03CourseListByStudentIdParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDemo03CourseDO>(
    '/admin-api/infra/demo03-student/demo03-course/list-by-student-id',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得学生课程分页 GET /admin-api/infra/demo03-student/demo03-course/page */
export async function getDemo03CoursePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03CoursePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultDemo03CourseDO>(
    '/admin-api/infra/demo03-student/demo03-course/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新学生课程 PUT /admin-api/infra/demo03-student/demo03-course/update */
export async function updateDemo03Course({
  body,
  options,
}: {
  body: API.Demo03CourseDO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/demo03-student/demo03-course/update',
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

/** 创建学生班级 POST /admin-api/infra/demo03-student/demo03-grade/create */
export async function createDemo03Grade({
  body,
  options,
}: {
  body: API.Demo03GradeDO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/infra/demo03-student/demo03-grade/create',
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

/** 删除学生班级 DELETE /admin-api/infra/demo03-student/demo03-grade/delete */
export async function deleteDemo03Grade({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDemo03GradeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/demo03-student/demo03-grade/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得学生班级 GET /admin-api/infra/demo03-student/demo03-grade/get */
export async function getDemo03Grade({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03GradeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDemo03GradeDO>(
    '/admin-api/infra/demo03-student/demo03-grade/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得学生班级 GET /admin-api/infra/demo03-student/demo03-grade/get-by-student-id */
export async function getDemo03GradeByStudentId({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03GradeByStudentIdParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDemo03GradeDO>(
    '/admin-api/infra/demo03-student/demo03-grade/get-by-student-id',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得学生班级分页 GET /admin-api/infra/demo03-student/demo03-grade/page */
export async function getDemo03GradePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03GradePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultDemo03GradeDO>(
    '/admin-api/infra/demo03-student/demo03-grade/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新学生班级 PUT /admin-api/infra/demo03-student/demo03-grade/update */
export async function updateDemo03Grade({
  body,
  options,
}: {
  body: API.Demo03GradeDO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/demo03-student/demo03-grade/update',
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

/** 导出学生 Excel GET /admin-api/infra/demo03-student/export-excel */
export async function exportDemo03StudentExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportDemo03StudentExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/infra/demo03-student/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得学生 GET /admin-api/infra/demo03-student/get */
export async function getDemo03Student({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03StudentParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDemo03StudentRespVO>(
    '/admin-api/infra/demo03-student/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得学生分页 GET /admin-api/infra/demo03-student/page */
export async function getDemo03StudentPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03StudentPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultDemo03StudentRespVO>(
    '/admin-api/infra/demo03-student/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新学生 PUT /admin-api/infra/demo03-student/update */
export async function updateDemo03Student({
  body,
  options,
}: {
  body: API.Demo03StudentSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/demo03-student/update',
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
