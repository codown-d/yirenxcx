/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiyouhuijuanmoban';
import * as API from './types';

/** 创建优惠劵模板 POST /admin-api/promotion/coupon-template/create */
export function useCreateCouponTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createCouponTemplate,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除优惠劵模板 DELETE /admin-api/promotion/coupon-template/delete */
export function useDeleteCouponTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteCouponTemplate,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得优惠劵模板 GET /admin-api/promotion/coupon-template/get */
export function getCouponTemplate1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplate1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCouponTemplate1(queryKey[1] as typeof options);
    },
    queryKey: ['getCouponTemplate1', options],
  });
}

/** 获得优惠劵模板列表 GET /admin-api/promotion/coupon-template/list */
export function getCouponTemplateList2QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplateList2Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCouponTemplateList2(queryKey[1] as typeof options);
    },
    queryKey: ['getCouponTemplateList2', options],
  });
}

/** 获得优惠劵模板分页 GET /admin-api/promotion/coupon-template/page */
export function getCouponTemplatePage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponTemplatePage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getCouponTemplatePage1(queryKey[1] as typeof options);
    },
    queryKey: ['getCouponTemplatePage1', options],
  });
}

/** 更新优惠劵模板 PUT /admin-api/promotion/coupon-template/update */
export function useUpdateCouponTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateCouponTemplate,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新优惠劵模板状态 PUT /admin-api/promotion/coupon-template/update-status */
export function useUpdateCouponTemplateStatusMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateCouponTemplateStatus,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
