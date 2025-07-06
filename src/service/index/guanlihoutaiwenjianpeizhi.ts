/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建文件配置 POST /admin-api/infra/file-config/create */
export async function createFileConfig({
  body,
  options,
}: {
  body: API.FileConfigSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/infra/file-config/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除文件配置 DELETE /admin-api/infra/file-config/delete */
export async function deleteFileConfig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteFileConfigParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/file-config/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文件配置 GET /admin-api/infra/file-config/get */
export async function getFileConfig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFileConfigParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultFileConfigRespVO>(
    '/admin-api/infra/file-config/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文件配置分页 GET /admin-api/infra/file-config/page */
export async function getFileConfigPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFileConfigPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultFileConfigRespVO>(
    '/admin-api/infra/file-config/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 测试文件配置是否正确 GET /admin-api/infra/file-config/test */
export async function testFileConfig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.testFileConfigParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/admin-api/infra/file-config/test', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新文件配置 PUT /admin-api/infra/file-config/update */
export async function updateFileConfig({
  body,
  options,
}: {
  body: API.FileConfigSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/file-config/update',
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

/** 更新文件配置为 Master PUT /admin-api/infra/file-config/update-master */
export async function updateFileConfigMaster({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.updateFileConfigMasterParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/file-config/update-master',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
