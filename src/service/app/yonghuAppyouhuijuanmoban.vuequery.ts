/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppyouhuijuanmoban';
import * as API from './types';

/** 获得优惠劵模版 GET /app-api/promotion/coupon-template/get */
export function getCouponTemplateQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplateParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCouponTemplate(queryKey[1] as typeof options);
    },
    queryKey: ['getCouponTemplate', options],
  });
}

/** 获得优惠劵模版列表 GET /app-api/promotion/coupon-template/list */
export function getCouponTemplateListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplateListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCouponTemplateList(queryKey[1] as typeof options);
    },
    queryKey: ['getCouponTemplateList', options],
  });
}

/** 获得优惠劵模版列表 GET /app-api/promotion/coupon-template/list-by-ids */
export function getCouponTemplateList1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplateList1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCouponTemplateList1(queryKey[1] as typeof options);
    },
    queryKey: ['getCouponTemplateList1', options],
  });
}

/** 获得优惠劵模版分页 GET /app-api/promotion/coupon-template/page */
export function getCouponTemplatePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplatePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCouponTemplatePage(queryKey[1] as typeof options);
    },
    queryKey: ['getCouponTemplatePage', options],
  });
}
