/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建秒杀时段 POST /admin-api/promotion/seckill-config/create */
export async function createSeckillConfig({
  body,
  options,
}: {
  body: API.SeckillConfigCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/promotion/seckill-config/create',
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

/** 删除秒杀时段 DELETE /admin-api/promotion/seckill-config/delete */
export async function deleteSeckillConfig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteSeckillConfigParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/seckill-config/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得秒杀时段 GET /admin-api/promotion/seckill-config/get */
export async function getSeckillConfig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillConfigParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultSeckillConfigRespVO>(
    '/admin-api/promotion/seckill-config/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得所有秒杀时段列表 GET /admin-api/promotion/seckill-config/list */
export async function getSeckillConfigList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListSeckillConfigRespVO>(
    '/admin-api/promotion/seckill-config/list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得秒杀时间段分页 GET /admin-api/promotion/seckill-config/page */
export async function getSeckillActivityPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSeckillActivityPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultSeckillConfigRespVO>(
    '/admin-api/promotion/seckill-config/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得所有开启状态的秒杀时段精简列表 主要用于前端的下拉选项 GET /admin-api/promotion/seckill-config/simple-list */
export async function getSeckillConfigSimpleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListSeckillConfigSimpleRespVO>(
    '/admin-api/promotion/seckill-config/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新秒杀时段 PUT /admin-api/promotion/seckill-config/update */
export async function updateSeckillConfig({
  body,
  options,
}: {
  body: API.SeckillConfigUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/seckill-config/update',
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

/** 修改时段配置状态 PUT /admin-api/promotion/seckill-config/update-status */
export async function updateSeckillConfigStatus({
  body,
  options,
}: {
  body: API.SeckillConfigUpdateStatusReqVo;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/seckill-config/update-status',
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
