/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建文件 模式二：前端上传文件：配合 presigned-url 接口，记录上传了上传的文件 POST /app-api/infra/file/create */
export async function createFile({
  body,
  options,
}: {
  body: API.FileCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/app-api/infra/file/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取文件预签名地址 模式二：前端上传文件：用于前端直接上传七牛、阿里云 OSS 等文件存储器 GET /app-api/infra/file/presigned-url */
export async function getFilePresignedUrl({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFilePresignedUrlParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultFilePresignedUrlRespVO>(
    '/app-api/infra/file/presigned-url',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 上传文件 POST /app-api/infra/file/upload */
export async function uploadFile({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.uploadFileParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/app-api/infra/file/upload', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
