/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建邮件模版 POST /admin-api/system/mail-template/create */
export async function createMailTemplate({
  body,
  options,
}: {
  body: API.MailTemplateSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/system/mail-template/create',
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

/** 删除邮件模版 DELETE /admin-api/system/mail-template/delete */
export async function deleteMailTemplate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteMailTemplateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/mail-template/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得邮件模版 GET /admin-api/system/mail-template/get */
export async function getMailTemplate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMailTemplateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMailTemplateRespVO>(
    '/admin-api/system/mail-template/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得邮件模版精简列表 GET /admin-api/system/mail-template/list-all-simple */
export async function getSimpleTemplateList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMailTemplateSimpleRespVO>(
    '/admin-api/system/mail-template/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得邮件模版分页 GET /admin-api/system/mail-template/page */
export async function getMailTemplatePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMailTemplatePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultMailTemplateRespVO>(
    '/admin-api/system/mail-template/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 发送短信 POST /admin-api/system/mail-template/send-mail */
export async function sendMail({
  body,
  options,
}: {
  body: API.MailTemplateSendReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/system/mail-template/send-mail',
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

/** 获得邮件模版精简列表 GET /admin-api/system/mail-template/simple-list */
export async function getSimpleTemplateList2({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMailTemplateSimpleRespVO>(
    '/admin-api/system/mail-template/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 修改邮件模版 PUT /admin-api/system/mail-template/update */
export async function updateMailTemplate({
  body,
  options,
}: {
  body: API.MailTemplateSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/mail-template/update',
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
