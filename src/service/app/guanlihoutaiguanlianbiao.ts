/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建关联 POST /admin-api/yirenzhipin/guan-lian/create */
export async function createGuanLian1({
  body,
  options,
}: {
  body: API.YrzpGuanLianCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/yirenzhipin/guan-lian/create',
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

/** 删除关联 DELETE /admin-api/yirenzhipin/guan-lian/delete */
export async function deleteGuanLian({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteGuanLianParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/guan-lian/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得关联 GET /admin-api/yirenzhipin/guan-lian/get */
export async function getGuanLian({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getGuanLianParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYrzpGuanLianRespVO>(
    '/admin-api/yirenzhipin/guan-lian/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** echarts统计数据 GET /admin-api/yirenzhipin/guan-lian/list */
export async function getGuanLianList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMapStringObject>(
    '/admin-api/yirenzhipin/guan-lian/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
