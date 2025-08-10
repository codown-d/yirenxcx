/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取个人认证资源 POST /app-api/yirenzhipin/geren/getRequest/get */
export async function getRequest({
  body,
  options,
}: {
  body: API.GerenrenzhengReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>(
    '/app-api/yirenzhipin/geren/getRequest/get',
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

/** 获取个人认证结果 POST /app-api/yirenzhipin/geren/getResult/get */
export async function getResult({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getResultParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>(
    '/app-api/yirenzhipin/geren/getResult/get',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
