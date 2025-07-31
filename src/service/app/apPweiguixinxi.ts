/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得违规信息 GET /app-api/yirenzhipin/app-wei-gui/get */
export async function getWeiGui({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWeiGuiParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultYRZPWeiGuiRespAppVO>(
    '/app-api/yirenzhipin/app-wei-gui/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得岗位的违规信息列表 GET /app-api/yirenzhipin/app-wei-gui/list-by-job */
export async function getWeiGuiListByJobId({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWeiGuiListByJobIdParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListYRZPWeiGuiRespAppVO>(
    '/app-api/yirenzhipin/app-wei-gui/list-by-job',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得求职者的违规信息列表 GET /app-api/yirenzhipin/app-wei-gui/list-by-seeker */
export async function getWeiGuiListBySeekerId({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWeiGuiListBySeekerIdParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListYRZPWeiGuiRespAppVO>(
    '/app-api/yirenzhipin/app-wei-gui/list-by-seeker',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得违规信息分页 GET /app-api/yirenzhipin/app-wei-gui/page */
export async function getWeiGuiPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getWeiGuiPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultYRZPWeiGuiRespAppVO>(
    '/app-api/yirenzhipin/app-wei-gui/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
