/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiCrMpaixingbangtongji';
import * as API from './types';

/** 获得新增联系人数排行榜 GET /admin-api/crm/statistics-rank/get-contacts-count-rank */
export function getContactsCountRankQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContactsCountRankParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContactsCountRank(queryKey[1] as typeof options);
    },
    queryKey: ['getContactsCountRank', options],
  });
}

/** 获得签约合同数量排行榜 GET /admin-api/crm/statistics-rank/get-contract-count-rank */
export function getContractCountRankQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractCountRankParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContractCountRank(queryKey[1] as typeof options);
    },
    queryKey: ['getContractCountRank', options],
  });
}

/** 获得合同金额排行榜 GET /admin-api/crm/statistics-rank/get-contract-price-rank */
export function getContractPriceRankQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getContractPriceRankParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getContractPriceRank(queryKey[1] as typeof options);
    },
    queryKey: ['getContractPriceRank', options],
  });
}

/** 获得新增客户数排行榜 GET /admin-api/crm/statistics-rank/get-customer-count-rank */
export function getCustomerCountRankQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCustomerCountRankParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCustomerCountRank(queryKey[1] as typeof options);
    },
    queryKey: ['getCustomerCountRank', options],
  });
}

/** 获得跟进次数排行榜 GET /admin-api/crm/statistics-rank/get-follow-count-rank */
export function getFollowCountRankQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowCountRankParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFollowCountRank(queryKey[1] as typeof options);
    },
    queryKey: ['getFollowCountRank', options],
  });
}

/** 获得跟进客户数排行榜 GET /admin-api/crm/statistics-rank/get-follow-customer-count-rank */
export function getFollowCustomerCountRankQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowCustomerCountRankParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getFollowCustomerCountRank(queryKey[1] as typeof options);
    },
    queryKey: ['getFollowCustomerCountRank', options],
  });
}

/** 获得产品销量排行榜 GET /admin-api/crm/statistics-rank/get-product-sales-rank */
export function getProductSalesRankQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductSalesRankParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProductSalesRank(queryKey[1] as typeof options);
    },
    queryKey: ['getProductSalesRank', options],
  });
}

/** 获得回款金额排行榜 GET /admin-api/crm/statistics-rank/get-receivable-price-rank */
export function getReceivablePriceRankQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getReceivablePriceRankParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getReceivablePriceRank(queryKey[1] as typeof options);
    },
    queryKey: ['getReceivablePriceRank', options],
  });
}
