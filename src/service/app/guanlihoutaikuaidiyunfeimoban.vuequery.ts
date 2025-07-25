/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaikuaidiyunfeimoban';
import * as API from './types';

/** 创建快递运费模板 POST /admin-api/trade/delivery/express-template/create */
export function useCreateDeliveryExpressTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createDeliveryExpressTemplate,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除快递运费模板 DELETE /admin-api/trade/delivery/express-template/delete */
export function useDeleteDeliveryExpressTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteDeliveryExpressTemplate,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得快递运费模板 GET /admin-api/trade/delivery/express-template/get */
export function getDeliveryExpressTemplateQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryExpressTemplateParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDeliveryExpressTemplate(queryKey[1] as typeof options);
    },
    queryKey: ['getDeliveryExpressTemplate', options],
  });
}

/** 获得快递运费模板列表 GET /admin-api/trade/delivery/express-template/list */
export function getDeliveryExpressTemplateListQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryExpressTemplateListParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDeliveryExpressTemplateList(queryKey[1] as typeof options);
    },
    queryKey: ['getDeliveryExpressTemplateList', options],
  });
}

/** 获取快递模版精简信息列表 主要用于前端的下拉选项 GET /admin-api/trade/delivery/express-template/list-all-simple */
export function getSimpleTemplateListQueryOptions(options: {
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSimpleTemplateList(queryKey[1] as typeof options);
    },
    queryKey: ['getSimpleTemplateList', options],
  });
}

/** 获得快递运费模板分页 GET /admin-api/trade/delivery/express-template/page */
export function getDeliveryExpressTemplatePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryExpressTemplatePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getDeliveryExpressTemplatePage(queryKey[1] as typeof options);
    },
    queryKey: ['getDeliveryExpressTemplatePage', options],
  });
}

/** 更新快递运费模板 PUT /admin-api/trade/delivery/express-template/update */
export function useUpdateDeliveryExpressTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateDeliveryExpressTemplate,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
