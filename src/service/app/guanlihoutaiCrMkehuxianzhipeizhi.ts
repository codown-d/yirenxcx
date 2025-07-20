/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建客户限制配置 POST /admin-api/crm/customer-limit-config/create */
export async function createCustomerLimitConfig({
  body,
  options,
}: {
  body: API.CrmCustomerLimitConfigSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/crm/customer-limit-config/create',
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

/** 删除客户限制配置 DELETE /admin-api/crm/customer-limit-config/delete */
export async function deleteCustomerLimitConfig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteCustomerLimitConfigParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/customer-limit-config/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得客户限制配置 GET /admin-api/crm/customer-limit-config/get */
export async function getCustomerLimitConfig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerLimitConfigParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmCustomerLimitConfigRespVO>(
    '/admin-api/crm/customer-limit-config/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得客户限制配置分页 GET /admin-api/crm/customer-limit-config/page */
export async function getCustomerLimitConfigPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerLimitConfigPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmCustomerLimitConfigRespVO>(
    '/admin-api/crm/customer-limit-config/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新客户限制配置 PUT /admin-api/crm/customer-limit-config/update */
export async function updateCustomerLimitConfig({
  body,
  options,
}: {
  body: API.CrmCustomerLimitConfigSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/customer-limit-config/update',
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
