/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得商品的分销金额 GET /app-api/trade/brokerage-record/get-product-brokerage-price */
export async function getProductBrokeragePrice({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductBrokeragePriceParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppBrokerageProductPriceRespVO>(
    '/app-api/trade/brokerage-record/get-product-brokerage-price',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得分销记录分页 GET /app-api/trade/brokerage-record/page */
export async function getBrokerageRecordPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppBrokerageRecordRespVO>(
    '/app-api/trade/brokerage-record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 绑定推广员 PUT /app-api/trade/brokerage-user/bind */
export async function bindBrokerageUser({
  body,
  options,
}: {
  body: API.AppBrokerageUserBindReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/trade/brokerage-user/bind',
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

/** 获得下级分销统计分页 GET /app-api/trade/brokerage-user/child-summary-page */
export async function getBrokerageUserChildSummaryPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageUserChildSummaryPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppBrokerageUserChildSummaryRespVO>(
    '/app-api/trade/brokerage-user/child-summary-page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得个人分销信息 GET /app-api/trade/brokerage-user/get */
export async function getBrokerageUser({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppBrokerageUserRespVO>(
    '/app-api/trade/brokerage-user/get',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得分销用户排行（基于佣金） GET /app-api/trade/brokerage-user/get-rank-by-price */
export async function getRankByPrice({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRankByPriceParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultInteger>(
    '/app-api/trade/brokerage-user/get-rank-by-price',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得个人分销统计 GET /app-api/trade/brokerage-user/get-summary */
export async function getBrokerageUserSummary({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppBrokerageUserMySummaryRespVO>(
    '/app-api/trade/brokerage-user/get-summary',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得分销用户排行分页（基于佣金） GET /app-api/trade/brokerage-user/rank-page-by-price */
export async function getBrokerageUserChildSummaryPageByPrice({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageUserChildSummaryPageByPriceParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppBrokerageUserRankByPriceRespVO>(
    '/app-api/trade/brokerage-user/rank-page-by-price',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得分销用户排行分页（基于用户量） GET /app-api/trade/brokerage-user/rank-page-by-user-count */
export async function getBrokerageUserRankPageByUserCount({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageUserRankPageByUserCountParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppBrokerageUserRankByUserCountRespVO>(
    '/app-api/trade/brokerage-user/rank-page-by-user-count',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
