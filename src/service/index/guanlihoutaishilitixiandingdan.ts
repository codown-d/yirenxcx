/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建示例提现单 POST /admin-api/pay/demo-withdraw/create */
export async function createDemoWithdraw({
  body,
  options,
}: {
  body: API.PayDemoWithdrawCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/pay/demo-withdraw/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获得示例提现单分页 GET /admin-api/pay/demo-withdraw/page */
export async function getDemoWithdrawPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDemoWithdrawPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultPayDemoWithdrawRespVO>(
    '/admin-api/pay/demo-withdraw/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 提现单转账 POST /admin-api/pay/demo-withdraw/transfer */
export async function transferDemoWithdraw({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.transferDemoWithdrawParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/pay/demo-withdraw/transfer',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新示例提现单的转账状态 POST /admin-api/pay/demo-withdraw/update-transferred */
export async function updateDemoWithdrawTransferred({
  body,
  options,
}: {
  body: API.PayTransferNotifyReqDTO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/pay/demo-withdraw/update-transferred',
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
