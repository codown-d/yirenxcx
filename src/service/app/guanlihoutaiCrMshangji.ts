/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建商机 POST /admin-api/crm/business/create */
export async function createBusiness({
  body,
  options,
}: {
  body: API.CrmBusinessSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/crm/business/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除商机 DELETE /admin-api/crm/business/delete */
export async function deleteBusiness({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteBusinessParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/business/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出商机 Excel GET /admin-api/crm/business/export-excel */
export async function exportBusinessExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportBusinessExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/crm/business/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得商机 GET /admin-api/crm/business/get */
export async function getBusiness({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmBusinessRespVO>(
    '/admin-api/crm/business/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商机分页 GET /admin-api/crm/business/page */
export async function getBusinessPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmBusinessRespVO>(
    '/admin-api/crm/business/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得联系人的商机分页 GET /admin-api/crm/business/page-by-contact */
export async function getBusinessContactPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessContactPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmBusinessRespVO>(
    '/admin-api/crm/business/page-by-contact',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商机分页，基于指定客户 GET /admin-api/crm/business/page-by-customer */
export async function getBusinessPageByCustomer({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessPageByCustomerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmBusinessRespVO>(
    '/admin-api/crm/business/page-by-customer',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商机的精简列表 GET /admin-api/crm/business/simple-all-list */
export async function getSimpleContactList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmBusinessRespVO>(
    '/admin-api/crm/business/simple-all-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 商机转移 PUT /admin-api/crm/business/transfer */
export async function transferBusiness({
  body,
  options,
}: {
  body: API.CrmBusinessTransferReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/business/transfer', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新商机 PUT /admin-api/crm/business/update */
export async function updateBusiness({
  body,
  options,
}: {
  body: API.CrmBusinessSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/business/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新商机状态 PUT /admin-api/crm/business/update-status */
export async function updateBusinessStatus({
  body,
  options,
}: {
  body: API.CrmBusinessUpdateStatusReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/business/update-status',
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
