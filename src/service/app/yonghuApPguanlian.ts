/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建关联 POST /app-api/yirenzhipin/app/guan-lian/create */
export async function createGuanLian({
  body,
  options,
}: {
  body: API.AppYrzpGuanLianCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/app-api/yirenzhipin/app/guan-lian/create',
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

/** 获取关联 GET /app-api/yirenzhipin/app/guan-lian/get */
export async function getGuanZhuJobSeeker({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getGuanZhuJobSeekerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListYrzpGuanLianDO>(
    '/app-api/yirenzhipin/app/guan-lian/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 取消 PUT /app-api/yirenzhipin/app/guan-lian/update */
export async function update({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.updateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResult>(
    '/app-api/yirenzhipin/app/guan-lian/update',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
