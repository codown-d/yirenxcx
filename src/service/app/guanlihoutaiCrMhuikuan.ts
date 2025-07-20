/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得待审核回款数量 GET /admin-api/crm/receivable/audit-count */
export async function getAuditReceivableCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/crm/receivable/audit-count',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 创建回款 POST /admin-api/crm/receivable/create */
export async function createReceivable({
  body,
  options,
}: {
  body: API.CrmReceivableSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/crm/receivable/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除回款 DELETE /admin-api/crm/receivable/delete */
export async function deleteReceivable({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteReceivableParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/receivable/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出回款 Excel GET /admin-api/crm/receivable/export-excel */
export async function exportReceivableExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportReceivableExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/crm/receivable/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得回款 GET /admin-api/crm/receivable/get */
export async function getReceivable({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivableParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmReceivableRespVO>(
    '/admin-api/crm/receivable/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得回款分页 GET /admin-api/crm/receivable/page */
export async function getReceivablePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmReceivableRespVO>(
    '/admin-api/crm/receivable/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得回款分页，基于指定客户 GET /admin-api/crm/receivable/page-by-customer */
export async function getReceivablePageByCustomer({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePageByCustomerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmReceivableRespVO>(
    '/admin-api/crm/receivable/page-by-customer',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 提交回款审批 PUT /admin-api/crm/receivable/submit */
export async function submitContract({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.submitContractParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/receivable/submit', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新回款 PUT /admin-api/crm/receivable/update */
export async function updateReceivable({
  body,
  options,
}: {
  body: API.CrmReceivableSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/receivable/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
