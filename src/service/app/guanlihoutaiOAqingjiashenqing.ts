/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建请求申请 POST /admin-api/bpm/oa/leave/create */
export async function createLeave({
  body,
  options,
}: {
  body: API.BpmOALeaveCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/bpm/oa/leave/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获得请假申请 GET /admin-api/bpm/oa/leave/get */
export async function getLeave({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLeaveParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBpmOALeaveRespVO>(
    '/admin-api/bpm/oa/leave/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得请假申请分页 GET /admin-api/bpm/oa/leave/page */
export async function getLeavePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLeavePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBpmOALeaveRespVO>(
    '/admin-api/bpm/oa/leave/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
