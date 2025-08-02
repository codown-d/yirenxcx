/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建立即投递 POST /admin-api/yirenzhipin/li-ji-tou-di/create */
export async function createLiJiTouDi1({
  body,
  options,
}: {
  body: API.YRZPLiJiTouDiCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/yirenzhipin/li-ji-tou-di/create',
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

/** 删除立即投递 DELETE /admin-api/yirenzhipin/li-ji-tou-di/delete */
export async function deleteLiJiTouDi1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteLiJiTouDi1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/li-ji-tou-di/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 批量删除立即投递 DELETE /admin-api/yirenzhipin/li-ji-tou-di/delete-batch */
export async function deleteLiJiTouDis({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteLiJiTouDisParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/li-ji-tou-di/delete-batch',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得立即投递 GET /admin-api/yirenzhipin/li-ji-tou-di/get */
export async function getLiJiTouDi1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLiJiTouDi1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPLiJiTouDiRespVO>(
    '/admin-api/yirenzhipin/li-ji-tou-di/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得立即投递列表 GET /admin-api/yirenzhipin/li-ji-tou-di/list */
export async function getLiJiTouDiList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLiJiTouDiListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListYRZPLiJiTouDiRespVO>(
    '/admin-api/yirenzhipin/li-ji-tou-di/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得立即投递分页 GET /admin-api/yirenzhipin/li-ji-tou-di/page */
export async function getLiJiTouDiPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLiJiTouDiPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPLiJiTouDiRespVO>(
    '/admin-api/yirenzhipin/li-ji-tou-di/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新立即投递 PUT /admin-api/yirenzhipin/li-ji-tou-di/update */
export async function updateLiJiTouDi({
  body,
  options,
}: {
  body: API.YRZPLiJiTouDiUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/li-ji-tou-di/update',
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
