/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建跟进记录 POST /admin-api/crm/follow-up-record/create */
export async function createFollowUpRecord({
  body,
  options,
}: {
  body: API.CrmFollowUpRecordSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/crm/follow-up-record/create',
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

/** 删除跟进记录 DELETE /admin-api/crm/follow-up-record/delete */
export async function deleteFollowUpRecord({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteFollowUpRecordParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/crm/follow-up-record/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得跟进记录 GET /admin-api/crm/follow-up-record/get */
export async function getFollowUpRecord({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowUpRecordParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCrmFollowUpRecordRespVO>(
    '/admin-api/crm/follow-up-record/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得跟进记录分页 GET /admin-api/crm/follow-up-record/page */
export async function getFollowUpRecordPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFollowUpRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultCrmFollowUpRecordRespVO>(
    '/admin-api/crm/follow-up-record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
