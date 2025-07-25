/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建 Banner POST /admin-api/promotion/banner/create */
export async function createBanner({
  body,
  options,
}: {
  body: API.BannerCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/promotion/banner/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 Banner DELETE /admin-api/promotion/banner/delete */
export async function deleteBanner({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteBannerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/banner/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得 Banner GET /admin-api/promotion/banner/get */
export async function getBanner({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBannerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBannerRespVO>(
    '/admin-api/promotion/banner/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得 Banner 分页 GET /admin-api/promotion/banner/page */
export async function getBannerPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBannerPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBannerRespVO>(
    '/admin-api/promotion/banner/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新 Banner PUT /admin-api/promotion/banner/update */
export async function updateBanner({
  body,
  options,
}: {
  body: API.BannerUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/banner/update',
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
