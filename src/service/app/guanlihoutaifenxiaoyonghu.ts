/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 清除推广员 PUT /admin-api/trade/brokerage-user/clear-bind-user */
export async function clearBindUser({
  body,
  options,
}: {
  body: API.BrokerageUserClearBrokerageUserReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/brokerage-user/clear-bind-user',
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

/** 创建分销用户 POST /admin-api/trade/brokerage-user/create */
export async function createBrokerageUser({
  body,
  options,
}: {
  body: API.BrokerageUserCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/trade/brokerage-user/create',
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

/** 获得分销用户 GET /admin-api/trade/brokerage-user/get */
export async function getBrokerageUser1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageUser1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBrokerageUserRespVO>(
    '/admin-api/trade/brokerage-user/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得分销用户分页 GET /admin-api/trade/brokerage-user/page */
export async function getBrokerageUserPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageUserPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBrokerageUserRespVO>(
    '/admin-api/trade/brokerage-user/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 修改推广员 PUT /admin-api/trade/brokerage-user/update-bind-user */
export async function updateBindUser({
  body,
  options,
}: {
  body: API.BrokerageUserUpdateBrokerageUserReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/brokerage-user/update-bind-user',
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

/** 修改推广资格 PUT /admin-api/trade/brokerage-user/update-brokerage-enable */
export async function updateBrokerageEnabled({
  body,
  options,
}: {
  body: API.BrokerageUserUpdateBrokerageEnabledReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/brokerage-user/update-brokerage-enable',
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
