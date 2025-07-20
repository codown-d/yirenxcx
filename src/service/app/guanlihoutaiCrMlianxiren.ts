/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建联系人 POST /admin-api/crm/contact/create */
export async function createContact({
  body,
  options,
}: {
  body: API.CrmContactSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/crm/contact/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建联系人与商机的关联 POST /admin-api/crm/contact/create-business-list */
export async function createContactBusinessList({
  body,
  options,
}: {
  body: API.CrmContactBusinessReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/contact/create-business-list',
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

/** 创建联系人与商机的关联 POST /admin-api/crm/contact/create-business-list2 */
export async function createContactBusinessList2({
  body,
  options,
}: {
  body: API.CrmContactBusiness2ReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/contact/create-business-list2',
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

/** 删除联系人 DELETE /admin-api/crm/contact/delete */
export async function deleteContact({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteContactParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/contact/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除联系人与联系人的关联 DELETE /admin-api/crm/contact/delete-business-list */
export async function deleteContactBusinessList({
  body,
  options,
}: {
  body: API.CrmContactBusinessReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/contact/delete-business-list',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 删除联系人与联系人的关联 DELETE /admin-api/crm/contact/delete-business-list2 */
export async function deleteContactBusinessList1({
  body,
  options,
}: {
  body: API.CrmContactBusiness2ReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/contact/delete-business-list2',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 导出联系人 Excel GET /admin-api/crm/contact/export-excel */
export async function exportContactExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportContactExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/crm/contact/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得联系人 GET /admin-api/crm/contact/get */
export async function getContact({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContactParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmContactRespVO>(
    '/admin-api/crm/contact/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得联系人分页 GET /admin-api/crm/contact/page */
export async function getContactPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContactPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmContactRespVO>(
    '/admin-api/crm/contact/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得联系人分页，基于指定商机 GET /admin-api/crm/contact/page-by-business */
export async function getContactPageByBusiness({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContactPageByBusinessParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmContactRespVO>(
    '/admin-api/crm/contact/page-by-business',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得联系人分页，基于指定客户 GET /admin-api/crm/contact/page-by-customer */
export async function getContactPageByCustomer({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContactPageByCustomerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmContactRespVO>(
    '/admin-api/crm/contact/page-by-customer',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得联系人的精简列表 GET /admin-api/crm/contact/simple-all-list */
export async function getSimpleContactList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmContactRespVO>(
    '/admin-api/crm/contact/simple-all-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 联系人转移 PUT /admin-api/crm/contact/transfer */
export async function transferContact({
  body,
  options,
}: {
  body: API.CrmContactTransferReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/contact/transfer', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新联系人 PUT /admin-api/crm/contact/update */
export async function updateContact({
  body,
  options,
}: {
  body: API.CrmContactSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/crm/contact/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
