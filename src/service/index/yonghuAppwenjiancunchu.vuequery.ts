/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppwenjiancunchu';
import * as API from './types';

/** 创建文件 模式二：前端上传文件：配合 presigned-url 接口，记录上传了上传的文件 POST /app-api/infra/file/create */
export function useCreateFileMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createFile,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获取文件预签名地址 模式二：前端上传文件：用于前端直接上传七牛、阿里云 OSS 等文件存储器 GET /app-api/infra/file/presigned-url */
export function getFilePresignedUrlQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFilePresignedUrlParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFilePresignedUrl(queryKey[1] as typeof options);
    },
    queryKey: ['getFilePresignedUrl', options],
  });
}

/** 上传文件 POST /app-api/infra/file/upload */
export function useUploadFileMutation(options?: {
  onSuccess?: (value?: API.CommonResultString) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.uploadFile,
    onSuccess(data: API.CommonResultString) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
