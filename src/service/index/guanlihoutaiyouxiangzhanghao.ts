/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建邮箱账号 POST /admin-api/system/mail-account/create */
export async function createMailAccount({
  body,
  options,
}: {
  body: API.MailAccountSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/system/mail-account/create',
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

/** 删除邮箱账号 DELETE /admin-api/system/mail-account/delete */
export async function deleteMailAccount({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteMailAccountParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/mail-account/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得邮箱账号 GET /admin-api/system/mail-account/get */
export async function getMailAccount({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMailAccountParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMailAccountRespVO>(
    '/admin-api/system/mail-account/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得邮箱账号精简列表 GET /admin-api/system/mail-account/list-all-simple */
export async function getSimpleMailAccountList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMailAccountSimpleRespVO>(
    '/admin-api/system/mail-account/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得邮箱账号分页 GET /admin-api/system/mail-account/page */
export async function getMailAccountPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMailAccountPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultMailAccountRespVO>(
    '/admin-api/system/mail-account/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得邮箱账号精简列表 GET /admin-api/system/mail-account/simple-list */
export async function getSimpleMailAccountList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListMailAccountSimpleRespVO>(
    '/admin-api/system/mail-account/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 修改邮箱账号 PUT /admin-api/system/mail-account/update */
export async function updateMailAccount({
  body,
  options,
}: {
  body: API.MailAccountSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/mail-account/update',
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
