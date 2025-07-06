/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建站内信模版 POST /admin-api/system/notify-template/create */
export async function createNotifyTemplate({
  body,
  options,
}: {
  body: API.NotifyTemplateSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/system/notify-template/create',
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

/** 删除站内信模版 DELETE /admin-api/system/notify-template/delete */
export async function deleteNotifyTemplate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteNotifyTemplateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/notify-template/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得站内信模版 GET /admin-api/system/notify-template/get */
export async function getNotifyTemplate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNotifyTemplateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultNotifyTemplateRespVO>(
    '/admin-api/system/notify-template/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得站内信模版分页 GET /admin-api/system/notify-template/page */
export async function getNotifyTemplatePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getNotifyTemplatePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultNotifyTemplateRespVO>(
    '/admin-api/system/notify-template/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 发送站内信 POST /admin-api/system/notify-template/send-notify */
export async function sendNotify({
  body,
  options,
}: {
  body: API.NotifyTemplateSendReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/system/notify-template/send-notify',
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

/** 更新站内信模版 PUT /admin-api/system/notify-template/update */
export async function updateNotifyTemplate({
  body,
  options,
}: {
  body: API.NotifyTemplateSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/notify-template/update',
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
