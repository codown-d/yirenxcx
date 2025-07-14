/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 关闭秒杀活动 PUT /admin-api/promotion/seckill-activity/close */
export async function closeSeckillActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.closeSeckillActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/seckill-activity/close',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 创建秒杀活动 POST /admin-api/promotion/seckill-activity/create */
export async function createSeckillActivity({
  body,
  options,
}: {
  body: API.SeckillActivityCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/promotion/seckill-activity/create',
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

/** 删除秒杀活动 DELETE /admin-api/promotion/seckill-activity/delete */
export async function deleteSeckillActivity({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteSeckillActivityParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/seckill-activity/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得秒杀活动 GET /admin-api/promotion/seckill-activity/get */
export async function getSeckillActivity1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillActivity1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultSeckillActivityDetailRespVO>(
    '/admin-api/promotion/seckill-activity/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得秒杀活动列表，基于活动编号数组 GET /admin-api/promotion/seckill-activity/list-by-ids */
export async function getSeckillActivityListByIds({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillActivityListByIdsParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListSeckillActivityRespVO>(
    '/admin-api/promotion/seckill-activity/list-by-ids',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得秒杀活动分页 GET /admin-api/promotion/seckill-activity/page */
export async function getSeckillActivityPage2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillActivityPage2Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultSeckillActivityRespVO>(
    '/admin-api/promotion/seckill-activity/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新秒杀活动 PUT /admin-api/promotion/seckill-activity/update */
export async function updateSeckillActivity({
  body,
  options,
}: {
  body: API.SeckillActivityUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/seckill-activity/update',
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
