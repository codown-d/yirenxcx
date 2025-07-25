/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取客户公海规则设置 GET /admin-api/crm/customer-pool-config/get */
export async function getCustomerPoolConfig({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmCustomerPoolConfigRespVO>(
    '/admin-api/crm/customer-pool-config/get',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新客户公海规则设置 PUT /admin-api/crm/customer-pool-config/save */
export async function saveCustomerPoolConfig({
  body,
  options,
}: {
  body: API.CrmCustomerPoolConfigSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/customer-pool-config/save',
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
