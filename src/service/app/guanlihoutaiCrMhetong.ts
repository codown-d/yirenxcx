/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得待审核合同数量 GET /admin-api/crm/contract/audit-count */
export async function getAuditContractCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/crm/contract/audit-count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 创建合同 POST /admin-api/crm/contract/create */
export async function createContract({
  body,
  options,
}: {
  body: API.CrmContractSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/crm/contract/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除合同 DELETE /admin-api/crm/contract/delete */
export async function deleteContract({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteContractParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/contract/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出合同 Excel GET /admin-api/crm/contract/export-excel */
export async function exportContractExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportContractExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/crm/contract/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得合同 GET /admin-api/crm/contract/get */
export async function getContract({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmContractRespVO>(
    '/admin-api/crm/contract/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得合同分页 GET /admin-api/crm/contract/page */
export async function getContractPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmContractRespVO>(
    '/admin-api/crm/contract/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得合同分页，基于指定商机 GET /admin-api/crm/contract/page-by-business */
export async function getContractPageByBusiness({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractPageByBusinessParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmContractRespVO>(
    '/admin-api/crm/contract/page-by-business',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得合同分页，基于指定客户 GET /admin-api/crm/contract/page-by-customer */
export async function getContractPageByCustomer({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractPageByCustomerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmContractRespVO>(
    '/admin-api/crm/contract/page-by-customer',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得即将到期（提醒）的合同数量 GET /admin-api/crm/contract/remind-count */
export async function getRemindContractCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/crm/contract/remind-count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获得合同精简列表 只包含的合同，主要用于前端的下拉选项 GET /admin-api/crm/contract/simple-list */
export async function getContractSimpleList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractSimpleListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmContractRespVO>(
    '/admin-api/crm/contract/simple-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 提交合同审批 PUT /admin-api/crm/contract/submit */
export async function submitContract1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.submitContract1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/contract/submit', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 合同转移 PUT /admin-api/crm/contract/transfer */
export async function transferContract({
  body,
  options,
}: {
  body: API.CrmContractTransferReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/contract/transfer', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新合同 PUT /admin-api/crm/contract/update */
export async function updateContract({
  body,
  options,
}: {
  body: API.CrmContractSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/contract/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
