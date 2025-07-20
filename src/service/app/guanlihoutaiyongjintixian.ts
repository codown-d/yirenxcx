/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 通过申请 PUT /admin-api/trade/brokerage-withdraw/approve */
export async function approveBrokerageWithdraw({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.approveBrokerageWithdrawParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/brokerage-withdraw/approve',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得佣金提现 GET /admin-api/trade/brokerage-withdraw/get */
export async function getBrokerageWithdraw1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageWithdraw1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBrokerageWithdrawRespVO>(
    '/admin-api/trade/brokerage-withdraw/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得佣金提现分页 GET /admin-api/trade/brokerage-withdraw/page */
export async function getBrokerageWithdrawPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageWithdrawPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBrokerageWithdrawRespVO>(
    '/admin-api/trade/brokerage-withdraw/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 驳回申请 PUT /admin-api/trade/brokerage-withdraw/reject */
export async function rejectBrokerageWithdraw({
  body,
  options,
}: {
  body: API.BrokerageWithdrawRejectReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/brokerage-withdraw/reject',
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

/** 更新佣金提现的转账结果 POST /admin-api/trade/brokerage-withdraw/update-transferred */
export async function updateBrokerageWithdrawTransferred({
  body,
  options,
}: {
  body: API.PayTransferNotifyReqDTO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/brokerage-withdraw/update-transferred',
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
