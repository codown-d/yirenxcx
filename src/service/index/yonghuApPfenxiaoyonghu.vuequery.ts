/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuApPfenxiaoyonghu';
import * as API from './types';

/** 获得商品的分销金额 GET /app-api/trade/brokerage-record/get-product-brokerage-price */
export function getProductBrokeragePriceQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductBrokeragePriceParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getProductBrokeragePrice(queryKey[1] as typeof options);
    },
    queryKey: ['getProductBrokeragePrice', options],
  });
}

/** 获得分销记录分页 GET /app-api/trade/brokerage-record/page */
export function getBrokerageRecordPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrokerageRecordPage(queryKey[1] as typeof options);
    },
    queryKey: ['getBrokerageRecordPage', options],
  });
}

/** 绑定推广员 PUT /app-api/trade/brokerage-user/bind */
export function useBindBrokerageUserMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.bindBrokerageUser,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得下级分销统计分页 GET /app-api/trade/brokerage-user/child-summary-page */
export function getBrokerageUserChildSummaryPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageUserChildSummaryPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrokerageUserChildSummaryPage(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getBrokerageUserChildSummaryPage', options],
  });
}

/** 获得个人分销信息 GET /app-api/trade/brokerage-user/get */
export function getBrokerageUserQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrokerageUser(queryKey[1] as typeof options);
    },
    queryKey: ['getBrokerageUser', options],
  });
}

/** 获得分销用户排行（基于佣金） GET /app-api/trade/brokerage-user/get-rank-by-price */
export function getRankByPriceQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getRankByPriceParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getRankByPrice(queryKey[1] as typeof options);
    },
    queryKey: ['getRankByPrice', options],
  });
}

/** 获得个人分销统计 GET /app-api/trade/brokerage-user/get-summary */
export function getBrokerageUserSummaryQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrokerageUserSummary(queryKey[1] as typeof options);
    },
    queryKey: ['getBrokerageUserSummary', options],
  });
}

/** 获得分销用户排行分页（基于佣金） GET /app-api/trade/brokerage-user/rank-page-by-price */
export function getBrokerageUserChildSummaryPageByPriceQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageUserChildSummaryPageByPriceParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrokerageUserChildSummaryPageByPrice(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getBrokerageUserChildSummaryPageByPrice', options],
  });
}

/** 获得分销用户排行分页（基于用户量） GET /app-api/trade/brokerage-user/rank-page-by-user-count */
export function getBrokerageUserRankPageByUserCountQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageUserRankPageByUserCountParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrokerageUserRankPageByUserCount(
        queryKey[1] as typeof options
      );
    },
    queryKey: ['getBrokerageUserRankPageByUserCount', options],
  });
}
