/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 新增字典数据 POST /admin-api/system/dict-data/create */
export async function createDictData({
  body,
  options,
}: {
  body: API.DictDataSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/system/dict-data/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除字典数据 DELETE /admin-api/system/dict-data/delete */
export async function deleteDictData({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDictDataParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/dict-data/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 导出字典数据 GET /admin-api/system/dict-data/export */
export async function export3({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.export3Params;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/system/dict-data/export', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** /查询字典数据详细 GET /admin-api/system/dict-data/get */
export async function getDictData({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDictDataParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDictDataRespVO>(
    '/admin-api/system/dict-data/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得全部字典数据列表 一般用于管理后台缓存字典数据在本地 GET /admin-api/system/dict-data/list-all-simple */
export async function getSimpleDictDataList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDictDataSimpleRespVO>(
    '/admin-api/system/dict-data/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** /获得字典类型的分页列表 GET /admin-api/system/dict-data/page */
export async function getDictTypePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDictTypePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultDictDataRespVO>(
    '/admin-api/system/dict-data/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得全部字典数据列表 一般用于管理后台缓存字典数据在本地 GET /admin-api/system/dict-data/simple-list */
export async function getSimpleDictDataList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDictDataSimpleRespVO>(
    '/admin-api/system/dict-data/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 修改字典数据 PUT /admin-api/system/dict-data/update */
export async function updateDictData({
  body,
  options,
}: {
  body: API.DictDataSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/dict-data/update',
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
