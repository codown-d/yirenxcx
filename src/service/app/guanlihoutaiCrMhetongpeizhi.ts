/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取合同配置 GET /admin-api/crm/contract-config/get */
export async function getCustomerPoolConfig1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmContractConfigRespVO>(
    '/admin-api/crm/contract-config/get',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新合同配置 PUT /admin-api/crm/contract-config/save */
export async function saveCustomerPoolConfig1({
  body,
  options,
}: {
  body: API.CrmContractConfigSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/contract-config/save',
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
