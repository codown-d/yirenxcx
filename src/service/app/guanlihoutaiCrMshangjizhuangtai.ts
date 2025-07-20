/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建商机状态 POST /admin-api/crm/business-status/create */
export async function createBusinessStatus({
  body,
  options,
}: {
  body: API.CrmBusinessStatusSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/crm/business-status/create',
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

/** 删除商机状态 DELETE /admin-api/crm/business-status/delete */
export async function deleteBusinessStatusType({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteBusinessStatusTypeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/business-status/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商机状态 GET /admin-api/crm/business-status/get */
export async function getBusinessStatusType({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessStatusTypeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmBusinessStatusRespVO>(
    '/admin-api/crm/business-status/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商机状态分页 GET /admin-api/crm/business-status/page */
export async function getBusinessStatusPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessStatusPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmBusinessStatusRespVO>(
    '/admin-api/crm/business-status/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商机状态列表 GET /admin-api/crm/business-status/status-simple-list */
export async function getBusinessStatusSimpleList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBusinessStatusSimpleListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListStatus>(
    '/admin-api/crm/business-status/status-simple-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商机状态组列表 GET /admin-api/crm/business-status/type-simple-list */
export async function getBusinessStatusTypeSimpleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmBusinessStatusRespVO>(
    '/admin-api/crm/business-status/type-simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新商机状态 PUT /admin-api/crm/business-status/update */
export async function updateBusinessStatus1({
  body,
  options,
}: {
  body: API.CrmBusinessStatusSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/business-status/update',
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
