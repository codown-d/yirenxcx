/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaikuaidigongsi';
import * as API from './types';

/** 创建快递公司 POST /admin-api/trade/delivery/express/create */
export function useCreateDeliveryExpressMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDeliveryExpress,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除快递公司 DELETE /admin-api/trade/delivery/express/delete */
export function useDeleteDeliveryExpressMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDeliveryExpress,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出快递公司 Excel GET /admin-api/trade/delivery/express/export-excel */
export function exportDeliveryExpressExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportDeliveryExpressExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportDeliveryExpressExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportDeliveryExpressExcel', options],
  });
}

/** 获得快递公司 GET /admin-api/trade/delivery/express/get */
export function getDeliveryExpressQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryExpressParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDeliveryExpress(queryKey[1] as typeof options);
    },
    queryKey: ['getDeliveryExpress', options],
  });
}

/** 获取快递公司精简信息列表 主要用于前端的下拉选项 GET /admin-api/trade/delivery/express/list-all-simple */
export function getSimpleDeliveryExpressListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleDeliveryExpressList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleDeliveryExpressList', options],
  });
}

/** 获得快递公司分页 GET /admin-api/trade/delivery/express/page */
export function getDeliveryExpressPageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryExpressPageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDeliveryExpressPage(queryKey[1] as typeof options);
    },
    queryKey: ['getDeliveryExpressPage', options],
  });
}

/** 更新快递公司 PUT /admin-api/trade/delivery/express/update */
export function useUpdateDeliveryExpressMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDeliveryExpress,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
