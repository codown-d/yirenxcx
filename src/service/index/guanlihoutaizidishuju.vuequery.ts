/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaizidishuju';
import * as API from './types';

/** 新增字典数据 POST /admin-api/system/dict-data/create */
export function useCreateDictDataMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDictData,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除字典数据 DELETE /admin-api/system/dict-data/delete */
export function useDeleteDictDataMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDictData,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出字典数据 GET /admin-api/system/dict-data/export */
export function export3QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.export3Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.export3(queryKey[1] as typeof options);
    },
    queryKey: ['export3', options],
  });
}

/** /查询字典数据详细 GET /admin-api/system/dict-data/get */
export function getDictDataQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDictDataParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDictData(queryKey[1] as typeof options);
    },
    queryKey: ['getDictData', options],
  });
}

/** 获得全部字典数据列表 一般用于管理后台缓存字典数据在本地 GET /admin-api/system/dict-data/list-all-simple */
export function getSimpleDictDataListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleDictDataList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleDictDataList', options],
  });
}

/** /获得字典类型的分页列表 GET /admin-api/system/dict-data/page */
export function getDictTypePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDictTypePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDictTypePage(queryKey[1] as typeof options);
    },
    queryKey: ['getDictTypePage', options],
  });
}

/** 获得全部字典数据列表 一般用于管理后台缓存字典数据在本地 GET /admin-api/system/dict-data/simple-list */
export function getSimpleDictDataList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleDictDataList1(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleDictDataList1', options],
  });
}

/** 修改字典数据 PUT /admin-api/system/dict-data/update */
export function useUpdateDictDataMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDictData,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
