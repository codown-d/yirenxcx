/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaixuesheng';
import * as API from './types';

/** 创建学生 POST /admin-api/infra/demo03-student/create */
export function useCreateDemo03StudentMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDemo03Student,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除学生 DELETE /admin-api/infra/demo03-student/delete */
export function useDeleteDemo03StudentMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDemo03Student,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 创建学生课程 POST /admin-api/infra/demo03-student/demo03-course/create */
export function useCreateDemo03CourseMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDemo03Course,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除学生课程 DELETE /admin-api/infra/demo03-student/demo03-course/delete */
export function useDeleteDemo03CourseMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDemo03Course,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得学生课程 GET /admin-api/infra/demo03-student/demo03-course/get */
export function getDemo03CourseQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03CourseParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDemo03Course(queryKey[1] as typeof options);
    },
    queryKey: ['getDemo03Course', options],
  });
}

/** 获得学生课程列表 GET /admin-api/infra/demo03-student/demo03-course/list-by-student-id */
export function getDemo03CourseListByStudentIdQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03CourseListByStudentIdParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDemo03CourseListByStudentId(queryKey[1] as typeof options);
    },
    queryKey: ['getDemo03CourseListByStudentId', options],
  });
}

/** 获得学生课程分页 GET /admin-api/infra/demo03-student/demo03-course/page */
export function getDemo03CoursePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03CoursePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDemo03CoursePage(queryKey[1] as typeof options);
    },
    queryKey: ['getDemo03CoursePage', options],
  });
}

/** 更新学生课程 PUT /admin-api/infra/demo03-student/demo03-course/update */
export function useUpdateDemo03CourseMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDemo03Course,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 创建学生班级 POST /admin-api/infra/demo03-student/demo03-grade/create */
export function useCreateDemo03GradeMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDemo03Grade,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除学生班级 DELETE /admin-api/infra/demo03-student/demo03-grade/delete */
export function useDeleteDemo03GradeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDemo03Grade,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得学生班级 GET /admin-api/infra/demo03-student/demo03-grade/get */
export function getDemo03GradeQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03GradeParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDemo03Grade(queryKey[1] as typeof options);
    },
    queryKey: ['getDemo03Grade', options],
  });
}

/** 获得学生班级 GET /admin-api/infra/demo03-student/demo03-grade/get-by-student-id */
export function getDemo03GradeByStudentIdQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03GradeByStudentIdParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDemo03GradeByStudentId(queryKey[1] as typeof options);
    },
    queryKey: ['getDemo03GradeByStudentId', options],
  });
}

/** 获得学生班级分页 GET /admin-api/infra/demo03-student/demo03-grade/page */
export function getDemo03GradePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03GradePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDemo03GradePage(queryKey[1] as typeof options);
    },
    queryKey: ['getDemo03GradePage', options],
  });
}

/** 更新学生班级 PUT /admin-api/infra/demo03-student/demo03-grade/update */
export function useUpdateDemo03GradeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDemo03Grade,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出学生 Excel GET /admin-api/infra/demo03-student/export-excel */
export function exportDemo03StudentExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportDemo03StudentExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportDemo03StudentExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportDemo03StudentExcel', options],
  });
}

/** 获得学生 GET /admin-api/infra/demo03-student/get */
export function getDemo03StudentQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03StudentParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDemo03Student(queryKey[1] as typeof options);
    },
    queryKey: ['getDemo03Student', options],
  });
}

/** 获得学生分页 GET /admin-api/infra/demo03-student/page */
export function getDemo03StudentPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemo03StudentPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDemo03StudentPage(queryKey[1] as typeof options);
    },
    queryKey: ['getDemo03StudentPage', options],
  });
}

/** 更新学生 PUT /admin-api/infra/demo03-student/update */
export function useUpdateDemo03StudentMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDemo03Student,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
