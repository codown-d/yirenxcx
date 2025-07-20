/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得佣金记录 GET /admin-api/trade/brokerage-record/get */
export async function getBrokerageRecord({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageRecordParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBrokerageRecordRespVO>(
    '/admin-api/trade/brokerage-record/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得佣金记录分页 GET /admin-api/trade/brokerage-record/page */
export async function getBrokerageRecordPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageRecordPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBrokerageRecordRespVO>(
    '/admin-api/trade/brokerage-record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
