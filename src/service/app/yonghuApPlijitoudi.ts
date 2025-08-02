/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建立即投递 POST /app-api/yirenzhipin/app/li-ji-tou-di/create */
export async function createLiJiTouDi({
  body,
  options,
}: {
  body: API.YRZPLiJiTouDiCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/app-api/yirenzhipin/app/li-ji-tou-di/create',
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

/** 删除立即投递 DELETE /app-api/yirenzhipin/app/li-ji-tou-di/delete */
export async function deleteLiJiTouDi({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteLiJiTouDiParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/yirenzhipin/app/li-ji-tou-di/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得立即投递 GET /app-api/yirenzhipin/app/li-ji-tou-di/get */
export async function getLiJiTouDi({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLiJiTouDiParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPLiJiTouDiRespVO>(
    '/app-api/yirenzhipin/app/li-ji-tou-di/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得当前用户公司的立即投递列表 GET /app-api/yirenzhipin/app/li-ji-tou-di/list-by-job */
export async function getLiJiTouDiListByUser({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListYRZPLiJiTouDiRespVO>(
    '/app-api/yirenzhipin/app/li-ji-tou-di/list-by-job',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得求职者的立即投递列表 GET /app-api/yirenzhipin/app/li-ji-tou-di/list-by-seeker */
export async function getLiJiTouDiListBySeeker({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListYRZPLiJiTouDiRespVO>(
    '/app-api/yirenzhipin/app/li-ji-tou-di/list-by-seeker',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得立即投递分页 GET /app-api/yirenzhipin/app/li-ji-tou-di/page */
export async function getLiJiTouDiPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLiJiTouDiPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPLiJiTouDiRespVO>(
    '/app-api/yirenzhipin/app/li-ji-tou-di/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
