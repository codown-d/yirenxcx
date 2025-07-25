/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建线索 POST /admin-api/crm/clue/create */
export async function createClue({
  body,
  options,
}: {
  body: API.CrmClueSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/crm/clue/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除线索 DELETE /admin-api/crm/clue/delete */
export async function deleteClue({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteClueParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/clue/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出线索 Excel GET /admin-api/crm/clue/export-excel */
export async function exportClueExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportClueExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/crm/clue/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得分配给我的、待跟进的线索数量 GET /admin-api/crm/clue/follow-count */
export async function getFollowClueCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/crm/clue/follow-count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获得线索 GET /admin-api/crm/clue/get */
export async function getClue({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getClueParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmClueRespVO>('/admin-api/crm/clue/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得线索分页 GET /admin-api/crm/clue/page */
export async function getCluePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCluePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmClueRespVO>(
    '/admin-api/crm/clue/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 线索转移 PUT /admin-api/crm/clue/transfer */
export async function transferClue({
  body,
  options,
}: {
  body: API.CrmClueTransferReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/clue/transfer', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 线索转化为客户 PUT /admin-api/crm/clue/transform */
export async function transformClue({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.transformClueParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/clue/transform', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新线索 PUT /admin-api/crm/clue/update */
export async function updateClue({
  body,
  options,
}: {
  body: API.CrmClueSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/clue/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
