/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaizidileixing';
import * as API from './types';

/** 创建字典类型 POST /admin-api/system/dict-type/create */
export function useCreateDictTypeMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDictType,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除字典类型 DELETE /admin-api/system/dict-type/delete */
export function useDeleteDictTypeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDictType,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出数据类型 GET /admin-api/system/dict-type/export */
export function export2QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.export2Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.export2(queryKey[1] as typeof options);
    },
    queryKey: ['export2', options],
  });
}

/** /查询字典类型详细 GET /admin-api/system/dict-type/get */
export function getDictTypeQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDictTypeParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDictType(queryKey[1] as typeof options);
    },
    queryKey: ['getDictType', options],
  });
}

/** 获得全部字典类型列表 包括开启 + 禁用的字典类型，主要用于前端的下拉选项 GET /admin-api/system/dict-type/list-all-simple */
export function getSimpleDictTypeListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleDictTypeList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleDictTypeList', options],
  });
}

/** 获得字典类型的分页列表 GET /admin-api/system/dict-type/page */
export function pageDictTypesQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.pageDictTypesParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.pageDictTypes(queryKey[1] as typeof options);
    },
    queryKey: ['pageDictTypes', options],
  });
}

/** 获得全部字典类型列表 包括开启 + 禁用的字典类型，主要用于前端的下拉选项 GET /admin-api/system/dict-type/simple-list */
export function getSimpleDictTypeList1QueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleDictTypeList1(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleDictTypeList1', options],
  });
}

/** 修改字典类型 PUT /admin-api/system/dict-type/update */
export function useUpdateDictTypeMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDictType,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
