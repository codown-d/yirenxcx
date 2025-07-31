/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建违规信息 POST /admin-api/yirenzhipin/wei-gui/create */
export async function createWeiGui({
  body,
  options,
}: {
  body: API.YRZPWeiGuiCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/yirenzhipin/wei-gui/create',
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

/** 删除违规信息 DELETE /admin-api/yirenzhipin/wei-gui/delete */
export async function deleteWeiGui({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteWeiGuiParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/wei-gui/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得违规信息 GET /admin-api/yirenzhipin/wei-gui/get */
export async function getWeiGui1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWeiGui1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPWeiGuiRespVO>(
    '/admin-api/yirenzhipin/wei-gui/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得违规信息分页 GET /admin-api/yirenzhipin/wei-gui/page */
export async function getWeiGuiPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWeiGuiPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPWeiGuiRespVO>(
    '/admin-api/yirenzhipin/wei-gui/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新违规信息 PUT /admin-api/yirenzhipin/wei-gui/update */
export async function updateWeiGui({
  body,
  options,
}: {
  body: API.YRZPWeiGuiUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/wei-gui/update',
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
