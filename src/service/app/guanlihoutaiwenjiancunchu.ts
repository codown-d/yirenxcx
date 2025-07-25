/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建文件 模式二：前端上传文件：配合 presigned-url 接口，记录上传了上传的文件 POST /admin-api/infra/file/create */
export async function createFile1({
  body,
  options,
}: {
  body: API.FileCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/infra/file/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除文件 DELETE /admin-api/infra/file/delete */
export async function deleteFile({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteFileParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/infra/file/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得文件分页 GET /admin-api/infra/file/page */
export async function getFilePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFilePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultFileRespVO>(
    '/admin-api/infra/file/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取文件预签名地址 模式二：前端上传文件：用于前端直接上传七牛、阿里云 OSS 等文件存储器 GET /admin-api/infra/file/presigned-url */
export async function getFilePresignedUrl1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFilePresignedUrl1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultFilePresignedUrlRespVO>(
    '/admin-api/infra/file/presigned-url',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 上传文件 模式一：后端上传文件 POST /admin-api/infra/file/upload */
export async function uploadFile1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.uploadFile1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/admin-api/infra/file/upload', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
