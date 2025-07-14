/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './yonghuAppyouhuijuan';
import * as API from './types';

/** 获得优惠劵 GET /app-api/promotion/coupon/get */
export function getCouponQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCoupon(queryKey[1] as typeof options);
    },
    queryKey: ['getCoupon', options],
  });
}

/** 获得未使用的优惠劵数量 GET /app-api/promotion/coupon/get-unused-count */
export function getUnusedCouponCountQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getUnusedCouponCount(queryKey[1] as typeof options);
    },
    queryKey: ['getUnusedCouponCount', options],
  });
}

/** 我的优惠劵列表 GET /app-api/promotion/coupon/page */
export function getCouponPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCouponPage(queryKey[1] as typeof options);
    },
    queryKey: ['getCouponPage', options],
  });
}

/** 领取优惠劵 POST /app-api/promotion/coupon/take */
export function useTakeCouponMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.takeCoupon,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
