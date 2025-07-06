/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建Banner POST /admin-api/yirenzhipin/banner/create */
export async function createBanner({
  body,
  options,
}: {
  body: API.BannerCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/yirenzhipin/banner/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除Banner DELETE /admin-api/yirenzhipin/banner/delete */
export async function deleteBanner({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteBannerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/banner/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 导出Banner Excel GET /admin-api/yirenzhipin/banner/export-excel */
export async function exportBannerExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportBannerExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/yirenzhipin/banner/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得Banner GET /admin-api/yirenzhipin/banner/get */
export async function getBanner({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBannerParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBannerRespVO>(
    '/admin-api/yirenzhipin/banner/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得Banner列表 GET /admin-api/yirenzhipin/banner/list */
export async function getBannerList1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBannerList1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListBannerRespVO>(
    '/admin-api/yirenzhipin/banner/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得Banner分页 GET /admin-api/yirenzhipin/banner/page */
export async function getBannerPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBannerPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBannerRespVO>(
    '/admin-api/yirenzhipin/banner/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新Banner PUT /admin-api/yirenzhipin/banner/update */
export async function updateBanner({
  body,
  options,
}: {
  body: API.BannerUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/yirenzhipin/banner/update',
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
