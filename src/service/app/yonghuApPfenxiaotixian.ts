/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建分销提现 POST /app-api/trade/brokerage-withdraw/create */
export async function createBrokerageWithdraw({
  body,
  options,
}: {
  body: API.AppBrokerageWithdrawCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/app-api/trade/brokerage-withdraw/create',
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

/** 获得佣金提现 GET /app-api/trade/brokerage-withdraw/get */
export async function getBrokerageWithdraw({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageWithdrawParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppBrokerageWithdrawRespVO>(
    '/app-api/trade/brokerage-withdraw/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得分销提现分页 GET /app-api/trade/brokerage-withdraw/page */
export async function getBrokerageWithdrawPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageWithdrawPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppBrokerageWithdrawRespVO>(
    '/app-api/trade/brokerage-withdraw/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
