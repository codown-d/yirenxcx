/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiduanxinmoban';
import * as API from './types';

/** 创建短信模板 POST /admin-api/system/sms-template/create */
export function useCreateSmsTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.createSmsTemplate,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 删除短信模板 DELETE /admin-api/system/sms-template/delete */
export function useDeleteSmsTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.deleteSmsTemplate,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 导出短信模板 Excel GET /admin-api/system/sms-template/export-excel */
export function exportSmsTemplateExcelQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportSmsTemplateExcelParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.exportSmsTemplateExcel(queryKey[1] as typeof options);
    },
    queryKey: ['exportSmsTemplateExcel', options],
  });
}

/** 获得短信模板 GET /admin-api/system/sms-template/get */
export function getSmsTemplateQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSmsTemplateParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSmsTemplate(queryKey[1] as typeof options);
    },
    queryKey: ['getSmsTemplate', options],
  });
}

/** 获得短信模板分页 GET /admin-api/system/sms-template/page */
export function getSmsTemplatePageQueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSmsTemplatePageParams;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getSmsTemplatePage(queryKey[1] as typeof options);
    },
    queryKey: ['getSmsTemplatePage', options],
  });
}

/** 发送短信 POST /admin-api/system/sms-template/send-sms */
export function useSendSmsMutation(options?: {
  onSuccess?: (value?: API.CommonResultLong) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.sendSms,
    onSuccess(data: API.CommonResultLong) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新短信模板 PUT /admin-api/system/sms-template/update */
export function useUpdateSmsTemplateMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateSmsTemplate,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
