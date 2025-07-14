/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建商品 SPU POST /admin-api/product/spu/create */
export async function createProductSpu({
  body,
  options,
}: {
  body: API.ProductSpuSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/product/spu/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除商品 SPU DELETE /admin-api/product/spu/delete */
export async function deleteSpu({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteSpuParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/product/spu/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出商品 GET /admin-api/product/spu/export */
export async function exportSpuList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportSpuListParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/product/spu/export', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得商品 SPU 分页 tab count GET /admin-api/product/spu/get-count */
export async function getSpuCount({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultMapIntegerLong>(
    '/admin-api/product/spu/get-count',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得商品 SPU 明细 GET /admin-api/product/spu/get-detail */
export async function getSpuDetail1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSpuDetail1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultProductSpuRespVO>(
    '/admin-api/product/spu/get-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商品 SPU 详情列表 GET /admin-api/product/spu/list */
export async function getSpuList1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSpuList1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListProductSpuRespVO>(
    '/admin-api/product/spu/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商品 SPU 精简列表 GET /admin-api/product/spu/list-all-simple */
export async function getSpuSimpleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListProductSpuSimpleRespVO>(
    '/admin-api/product/spu/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得商品 SPU 分页 GET /admin-api/product/spu/page */
export async function getSpuPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSpuPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultProductSpuRespVO>(
    '/admin-api/product/spu/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新商品 SPU PUT /admin-api/product/spu/update */
export async function updateSpu({
  body,
  options,
}: {
  body: API.ProductSpuSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/product/spu/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新商品 SPU Status PUT /admin-api/product/spu/update-status */
export async function updateStatus({
  body,
  options,
}: {
  body: API.ProductSpuUpdateStatusReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/product/spu/update-status',
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
