/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建支付渠道  POST /admin-api/pay/channel/create */
export async function createChannel({
  body,
  options,
}: {
  body: API.PayChannelCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/pay/channel/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除支付渠道  DELETE /admin-api/pay/channel/delete */
export async function deleteChannel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteChannelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/pay/channel/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得支付渠道 GET /admin-api/pay/channel/get */
export async function getChannel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getChannelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPayChannelRespVO>(
    '/admin-api/pay/channel/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得指定应用的开启的支付渠道编码列表 GET /admin-api/pay/channel/get-enable-code-list */
export async function getEnableChannelCodeList1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getEnableChannelCodeList1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultSetString>(
    '/admin-api/pay/channel/get-enable-code-list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新支付渠道  PUT /admin-api/pay/channel/update */
export async function updateChannel({
  body,
  options,
}: {
  body: API.PayChannelUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/pay/channel/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
