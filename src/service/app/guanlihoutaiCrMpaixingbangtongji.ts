/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得新增联系人数排行榜 GET /admin-api/crm/statistics-rank/get-contacts-count-rank */
export async function getContactsCountRank({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContactsCountRankParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsRankRespVO>(
    '/admin-api/crm/statistics-rank/get-contacts-count-rank',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得签约合同数量排行榜 GET /admin-api/crm/statistics-rank/get-contract-count-rank */
export async function getContractCountRank({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractCountRankParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsRankRespVO>(
    '/admin-api/crm/statistics-rank/get-contract-count-rank',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得合同金额排行榜 GET /admin-api/crm/statistics-rank/get-contract-price-rank */
export async function getContractPriceRank({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractPriceRankParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsRankRespVO>(
    '/admin-api/crm/statistics-rank/get-contract-price-rank',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得新增客户数排行榜 GET /admin-api/crm/statistics-rank/get-customer-count-rank */
export async function getCustomerCountRank({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerCountRankParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsRankRespVO>(
    '/admin-api/crm/statistics-rank/get-customer-count-rank',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得跟进次数排行榜 GET /admin-api/crm/statistics-rank/get-follow-count-rank */
export async function getFollowCountRank({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowCountRankParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsRankRespVO>(
    '/admin-api/crm/statistics-rank/get-follow-count-rank',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得跟进客户数排行榜 GET /admin-api/crm/statistics-rank/get-follow-customer-count-rank */
export async function getFollowCustomerCountRank({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowCustomerCountRankParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsRankRespVO>(
    '/admin-api/crm/statistics-rank/get-follow-customer-count-rank',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得产品销量排行榜 GET /admin-api/crm/statistics-rank/get-product-sales-rank */
export async function getProductSalesRank({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductSalesRankParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsRankRespVO>(
    '/admin-api/crm/statistics-rank/get-product-sales-rank',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得回款金额排行榜 GET /admin-api/crm/statistics-rank/get-receivable-price-rank */
export async function getReceivablePriceRank({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePriceRankParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCrmStatisticsRankRespVO>(
    '/admin-api/crm/statistics-rank/get-receivable-price-rank',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
