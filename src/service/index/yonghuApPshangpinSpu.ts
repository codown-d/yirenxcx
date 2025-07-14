/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得商品 SPU 明细 GET /app-api/product/spu/get-detail */
export async function getSpuDetail({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSpuDetailParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppProductSpuDetailRespVO>(
    '/app-api/product/spu/get-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商品 SPU 列表 GET /app-api/product/spu/list-by-ids */
export async function getSpuList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSpuListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppProductSpuRespVO>(
    '/app-api/product/spu/list-by-ids',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得商品 SPU 分页 GET /app-api/product/spu/page */
export async function getSpuPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSpuPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppProductSpuRespVO>(
    '/app-api/product/spu/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
