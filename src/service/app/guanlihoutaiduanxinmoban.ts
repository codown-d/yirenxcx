/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建短信模板 POST /admin-api/system/sms-template/create */
export async function createSmsTemplate({
  body,
  options,
}: {
  body: API.SmsTemplateSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/system/sms-template/create',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 删除短信模板 DELETE /admin-api/system/sms-template/delete */
export async function deleteSmsTemplate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteSmsTemplateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/sms-template/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 导出短信模板 Excel GET /admin-api/system/sms-template/export-excel */
export async function exportSmsTemplateExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportSmsTemplateExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/system/sms-template/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得短信模板 GET /admin-api/system/sms-template/get */
export async function getSmsTemplate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSmsTemplateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultSmsTemplateRespVO>(
    '/admin-api/system/sms-template/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得短信模板分页 GET /admin-api/system/sms-template/page */
export async function getSmsTemplatePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSmsTemplatePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultSmsTemplateRespVO>(
    '/admin-api/system/sms-template/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 发送短信 POST /admin-api/system/sms-template/send-sms */
export async function sendSms({
  body,
  options,
}: {
  body: API.SmsTemplateSendReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/system/sms-template/send-sms',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 更新短信模板 PUT /admin-api/system/sms-template/update */
export async function updateSmsTemplate({
  body,
  options,
}: {
  body: API.SmsTemplateSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/sms-template/update',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}
