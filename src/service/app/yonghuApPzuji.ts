/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建足迹 POST /app-api/yirenzhipin/app/zu-ji/create */
export async function createZuJi({
  body,
  options,
}: {
  body: API.AppYrzpZuJiCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultInteger>(
    '/app-api/yirenzhipin/app/zu-ji/create',
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

/** 获得职位足迹 GET /app-api/yirenzhipin/app/zu-ji/get-by-job */
export async function getZuJiByJob({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListYrzpZuJiDO>(
    '/app-api/yirenzhipin/app/zu-ji/get-by-job',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得求职者足迹 GET /app-api/yirenzhipin/app/zu-ji/get-by-skeer */
export async function getZuJiBySkeer({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getZuJiBySkeerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListYrzpZuJiDO>(
    '/app-api/yirenzhipin/app/zu-ji/get-by-skeer',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得足迹列表 GET /app-api/yirenzhipin/app/zu-ji/list */
export async function getZuJiList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppYrzpZuJiRespVO>(
    '/app-api/yirenzhipin/app/zu-ji/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得足迹分页 GET /app-api/yirenzhipin/app/zu-ji/page */
export async function getZuJiPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getZuJiPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppYrzpZuJiRespVO>(
    '/app-api/yirenzhipin/app/zu-ji/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
