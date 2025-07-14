/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 同意售后 PUT /admin-api/trade/after-sale/agree */
export async function agreeAfterSale({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.agreeAfterSaleParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/trade/after-sale/agree', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 拒绝售后 PUT /admin-api/trade/after-sale/disagree */
export async function disagreeAfterSale({
  body,
  options,
}: {
  body: API.AfterSaleDisagreeReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/after-sale/disagree',
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

/** 获得售后订单详情 GET /admin-api/trade/after-sale/get-detail */
export async function getOrderDetail2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderDetail2Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAfterSaleDetailRespVO>(
    '/admin-api/trade/after-sale/get-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得售后订单分页 GET /admin-api/trade/after-sale/page */
export async function getAfterSalePage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAfterSalePage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAfterSaleRespPageItemVO>(
    '/admin-api/trade/after-sale/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 确认收货 PUT /admin-api/trade/after-sale/receive */
export async function receiveAfterSale({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.receiveAfterSaleParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/after-sale/receive',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 确认退款 PUT /admin-api/trade/after-sale/refund */
export async function refundAfterSale({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.refundAfterSaleParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/after-sale/refund',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 拒绝收货 PUT /admin-api/trade/after-sale/refuse */
export async function refuseAfterSale({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.refuseAfterSaleParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/after-sale/refuse',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新售后订单为已退款 POST /admin-api/trade/after-sale/update-refunded */
export async function updateAfterSaleRefunded({
  body,
  options,
}: {
  body: API.PayRefundNotifyReqDTO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/after-sale/update-refunded',
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
