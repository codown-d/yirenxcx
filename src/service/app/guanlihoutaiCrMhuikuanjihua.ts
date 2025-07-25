/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建回款计划 POST /admin-api/crm/receivable-plan/create */
export async function createReceivablePlan({
  body,
  options,
}: {
  body: API.CrmReceivablePlanSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/crm/receivable-plan/create',
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

/** 删除回款计划 DELETE /admin-api/crm/receivable-plan/delete */
export async function deleteReceivablePlan({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteReceivablePlanParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/receivable-plan/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 导出回款计划 Excel GET /admin-api/crm/receivable-plan/export-excel */
export async function exportReceivablePlanExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportReceivablePlanExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/crm/receivable-plan/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得回款计划 GET /admin-api/crm/receivable-plan/get */
export async function getReceivablePlan({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePlanParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmReceivablePlanRespVO>(
    '/admin-api/crm/receivable-plan/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得回款计划分页 GET /admin-api/crm/receivable-plan/page */
export async function getReceivablePlanPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePlanPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmReceivablePlanRespVO>(
    '/admin-api/crm/receivable-plan/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得回款计划分页，基于指定客户 GET /admin-api/crm/receivable-plan/page-by-customer */
export async function getReceivablePlanPageByCustomer({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePlanPageByCustomerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmReceivablePlanRespVO>(
    '/admin-api/crm/receivable-plan/page-by-customer',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得待回款提醒数量 GET /admin-api/crm/receivable-plan/remind-count */
export async function getReceivablePlanRemindCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/crm/receivable-plan/remind-count',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得回款计划精简列表 获得回款计划精简列表，主要用于前端的下拉选项 GET /admin-api/crm/receivable-plan/simple-list */
export async function getReceivablePlanSimpleList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePlanSimpleListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmReceivablePlanRespVO>(
    '/admin-api/crm/receivable-plan/simple-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新回款计划 PUT /admin-api/crm/receivable-plan/update */
export async function updateReceivablePlan({
  body,
  options,
}: {
  body: API.CrmReceivablePlanSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/receivable-plan/update',
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
