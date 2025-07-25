/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiwenjiancunchu';
import * as API from './types';

/** 创建文件 模式二：前端上传文件：配合 presigned-url 接口，记录上传了上传的文件 POST /admin-api/infra/file/create */
export function useCreateFile1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createFile1,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除文件 DELETE /admin-api/infra/file/delete */
export function useDeleteFileMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteFile,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得文件分页 GET /admin-api/infra/file/page */
export function getFilePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFilePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFilePage(queryKey[1] as typeof options);
    },
    queryKey: ['getFilePage', options],
  });
}

/** 获取文件预签名地址 模式二：前端上传文件：用于前端直接上传七牛、阿里云 OSS 等文件存储器 GET /admin-api/infra/file/presigned-url */
export function getFilePresignedUrl1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFilePresignedUrl1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFilePresignedUrl1(queryKey[1] as typeof options);
    },
    queryKey: ['getFilePresignedUrl1', options],
  });
}

/** 上传文件 模式一：后端上传文件 POST /admin-api/infra/file/upload */
export function useUploadFile1Mutation(options?: {
  onSuccess?: (value?: API.CommonResultString) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.uploadFile1,
    onSuccess(data: API.CommonResultString) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
