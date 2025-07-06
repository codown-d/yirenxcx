/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiBannerguanli';
import * as API from './types';

/** 创建Banner POST /admin-api/yirenzhipin/banner/create */
export function useCreateBannerMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createBanner,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除Banner DELETE /admin-api/yirenzhipin/banner/delete */
export function useDeleteBannerMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteBanner,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出Banner Excel GET /admin-api/yirenzhipin/banner/export-excel */
export function exportBannerExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportBannerExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportBannerExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportBannerExcel', options],
  });
}

/** 获得Banner GET /admin-api/yirenzhipin/banner/get */
export function getBannerQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBannerParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBanner(queryKey[1] as typeof options);
    },
    queryKey: ['getBanner', options],
  });
}

/** 获得Banner列表 GET /admin-api/yirenzhipin/banner/list */
export function getBannerList1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBannerList1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBannerList1(queryKey[1] as typeof options);
    },
    queryKey: ['getBannerList1', options],
  });
}

/** 获得Banner分页 GET /admin-api/yirenzhipin/banner/page */
export function getBannerPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBannerPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBannerPage(queryKey[1] as typeof options);
    },
    queryKey: ['getBannerPage', options],
  });
}

/** 更新Banner PUT /admin-api/yirenzhipin/banner/update */
export function useUpdateBannerMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateBanner,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
