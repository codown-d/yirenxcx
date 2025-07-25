/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 基于数据库的表结构，创建代码生成器的表和字段定义 POST /admin-api/infra/codegen/create-list */
export async function createCodegenList({
  body,
  options,
}: {
  body: API.CodegenCreateListReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListLong>(
    '/admin-api/infra/codegen/create-list',
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

/** 获得数据库自带的表定义列表 会过滤掉已经导入 Codegen 的表 GET /admin-api/infra/codegen/db/table/list */
export async function getDatabaseTableList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDatabaseTableListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDatabaseTableRespVO>(
    '/admin-api/infra/codegen/db/table/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 删除数据库的表和字段定义 DELETE /admin-api/infra/codegen/delete */
export async function deleteCodegen({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteCodegenParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/infra/codegen/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得表和字段的明细 GET /admin-api/infra/codegen/detail */
export async function getCodegenDetail({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCodegenDetailParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCodegenDetailRespVO>(
    '/admin-api/infra/codegen/detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 下载生成代码 GET /admin-api/infra/codegen/download */
export async function downloadCodegen({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.downloadCodegenParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/infra/codegen/download', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 预览生成代码 GET /admin-api/infra/codegen/preview */
export async function previewCodegen({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.previewCodegenParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCodegenPreviewRespVO>(
    '/admin-api/infra/codegen/preview',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 基于数据库的表结构，同步数据库的表和字段定义 PUT /admin-api/infra/codegen/sync-from-db */
export async function syncCodegenFromDb({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.syncCodegenFromDBParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/infra/codegen/sync-from-db',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得表定义列表 GET /admin-api/infra/codegen/table/list */
export async function getCodegenTableList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCodegenTableListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCodegenTableRespVO>(
    '/admin-api/infra/codegen/table/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得表定义分页 GET /admin-api/infra/codegen/table/page */
export async function getCodegenTablePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCodegenTablePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCodegenTableRespVO>(
    '/admin-api/infra/codegen/table/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新数据库的表和字段定义 PUT /admin-api/infra/codegen/update */
export async function updateCodegen({
  body,
  options,
}: {
  body: API.CodegenUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/infra/codegen/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
