/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建砍价助力 给拼团记录砍一刀 POST /app-api/promotion/bargain-help/create */
export async function createBargainHelp({
  body,
  options,
}: {
  body: API.AppBargainHelpCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultInteger>(
    '/app-api/promotion/bargain-help/create',
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

/** 获得砍价助力列表 GET /app-api/promotion/bargain-help/list */
export async function getBargainHelpList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainHelpListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppBargainHelpRespVO>(
    '/app-api/promotion/bargain-help/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
