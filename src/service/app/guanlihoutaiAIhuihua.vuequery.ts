/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiAIhuihua';
import * as API from './types';

/** 删除绘画 DELETE /admin-api/ai/image/delete */
export function useDeleteImageMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteImage,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除【我的】绘画记录 DELETE /admin-api/ai/image/delete-my */
export function useDeleteImageMyMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteImageMy,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 生成图片 POST /admin-api/ai/image/draw */
export function useDrawImageMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.drawImage,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获取【我的】绘图记录 GET /admin-api/ai/image/get-my */
export function getImageMyQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getImageMyParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getImageMy(queryKey[1] as typeof options);
    },
    queryKey: ['getImageMy', options],
  });
}

/** 【Midjourney】Action 操作（二次生成图片） 例如说：放大、缩小、U1、U2 等 POST /admin-api/ai/image/midjourney/action */
export function useMidjourneyActionMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.midjourneyAction,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 【Midjourney】生成图片 POST /admin-api/ai/image/midjourney/imagine */
export function useMidjourneyImagineMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.midjourneyImagine,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 【Midjourney】通知图片进展 由 Midjourney Proxy 回调 POST /admin-api/ai/image/midjourney/notify */
export function useMidjourneyNotifyMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.midjourneyNotify,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获取【我的】绘图记录列表 GET /admin-api/ai/image/my-list-by-ids */
export function getImageListMyByIdsQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getImageListMyByIdsParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getImageListMyByIds(queryKey[1] as typeof options);
    },
    queryKey: ['getImageListMyByIds', options],
  });
}

/** 获取【我的】绘图分页 GET /admin-api/ai/image/my-page */
export function getImagePageMyQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getImagePageMyParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getImagePageMy(queryKey[1] as typeof options);
    },
    queryKey: ['getImagePageMy', options],
  });
}

/** 获得绘画分页 GET /admin-api/ai/image/page */
export function getImagePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getImagePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getImagePage(queryKey[1] as typeof options);
    },
    queryKey: ['getImagePage', options],
  });
}

/** 获取公开的绘图分页 GET /admin-api/ai/image/public-page */
export function getImagePagePublicQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getImagePagePublicParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getImagePagePublic(queryKey[1] as typeof options);
    },
    queryKey: ['getImagePagePublic', options],
  });
}

/** 更新绘画 PUT /admin-api/ai/image/update */
export function useUpdateImageMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateImage,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
