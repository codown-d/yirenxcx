/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 增加 Banner 点击量 PUT /app-api/promotion/banner/add-browse-count */
export async function addBrowseCount({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.addBrowseCountParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/promotion/banner/add-browse-count',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得 banner 列表 GET /app-api/promotion/banner/list */
export async function getBannerList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBannerListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppBannerRespVO>(
    '/app-api/promotion/banner/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
