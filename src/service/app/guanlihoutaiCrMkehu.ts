/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建客户 POST /admin-api/crm/customer/create */
export async function createCustomer({
  body,
  options,
}: {
  body: API.CrmCustomerSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/crm/customer/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除客户 DELETE /admin-api/crm/customer/delete */
export async function deleteCustomer({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteCustomerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/customer/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分配公海给对应负责人 PUT /admin-api/crm/customer/distribute */
export async function distributeCustomer({
  body,
  options,
}: {
  body: API.CrmCustomerDistributeReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/customer/distribute',
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

/** 导出客户 Excel GET /admin-api/crm/customer/export-excel */
export async function exportCustomerExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportCustomerExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/crm/customer/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得分配给我、待跟进的线索数量的客户数量 GET /admin-api/crm/customer/follow-count */
export async function getFollowCustomerCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/crm/customer/follow-count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获得客户 GET /admin-api/crm/customer/get */
export async function getCustomer({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmCustomerRespVO>(
    '/admin-api/crm/customer/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得导入客户模板 GET /admin-api/crm/customer/get-import-template */
export async function importTemplate1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/crm/customer/get-import-template', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 导入客户 POST /admin-api/crm/customer/import */
export async function importExcel1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.importExcel1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmCustomerImportRespVO>(
    '/admin-api/crm/customer/import',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 锁定/解锁客户 PUT /admin-api/crm/customer/lock */
export async function lockCustomer({
  body,
  options,
}: {
  body: API.CrmCustomerLockReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/customer/lock', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获得客户分页 GET /admin-api/crm/customer/page */
export async function getCustomerPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmCustomerRespVO>(
    '/admin-api/crm/customer/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 数据放入公海 PUT /admin-api/crm/customer/put-pool */
export async function putCustomerPool({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.putCustomerPoolParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/customer/put-pool', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得待进入公海客户数量 GET /admin-api/crm/customer/put-pool-remind-count */
export async function getPutPoolRemindCustomerCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/crm/customer/put-pool-remind-count',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得待进入公海客户分页 GET /admin-api/crm/customer/put-pool-remind-page */
export async function getPutPoolRemindCustomerPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getPutPoolRemindCustomerPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmCustomerRespVO>(
    '/admin-api/crm/customer/put-pool-remind-page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 领取公海客户 PUT /admin-api/crm/customer/receive */
export async function receiveCustomer({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.receiveCustomerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/customer/receive', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取客户精简信息列表 只包含有读权限的客户，主要用于前端的下拉选项 GET /admin-api/crm/customer/simple-list */
export async function getCustomerSimpleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmCustomerRespVO>(
    '/admin-api/crm/customer/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得今日需联系客户数量 GET /admin-api/crm/customer/today-contact-count */
export async function getTodayContactCustomerCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/crm/customer/today-contact-count',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 转移客户 PUT /admin-api/crm/customer/transfer */
export async function transferCustomer({
  body,
  options,
}: {
  body: API.CrmCustomerTransferReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/customer/transfer', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新客户 PUT /admin-api/crm/customer/update */
export async function updateCustomer({
  body,
  options,
}: {
  body: API.CrmCustomerSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/customer/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新客户的成交状态 PUT /admin-api/crm/customer/update-deal-status */
export async function updateCustomerDealStatus({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.updateCustomerDealStatusParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/customer/update-deal-status',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
