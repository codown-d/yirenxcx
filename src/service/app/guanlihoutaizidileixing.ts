/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建字典类型 POST /admin-api/system/dict-type/create */
export async function createDictType({
  body,
  options,
}: {
  body: API.DictTypeSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/system/dict-type/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除字典类型 DELETE /admin-api/system/dict-type/delete */
export async function deleteDictType({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDictTypeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/dict-type/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 导出数据类型 GET /admin-api/system/dict-type/export */
export async function export2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.export2Params;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/system/dict-type/export', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** /查询字典类型详细 GET /admin-api/system/dict-type/get */
export async function getDictType({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDictTypeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDictTypeRespVO>(
    '/admin-api/system/dict-type/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得全部字典类型列表 包括开启 + 禁用的字典类型，主要用于前端的下拉选项 GET /admin-api/system/dict-type/list-all-simple */
export async function getSimpleDictTypeList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDictTypeSimpleRespVO>(
    '/admin-api/system/dict-type/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得字典类型的分页列表 GET /admin-api/system/dict-type/page */
export async function pageDictTypes({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.pageDictTypesParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultDictTypeRespVO>(
    '/admin-api/system/dict-type/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得全部字典类型列表 包括开启 + 禁用的字典类型，主要用于前端的下拉选项 GET /admin-api/system/dict-type/simple-list */
export async function getSimpleDictTypeList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDictTypeSimpleRespVO>(
    '/admin-api/system/dict-type/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 修改字典类型 PUT /admin-api/system/dict-type/update */
export async function updateDictType({
  body,
  options,
}: {
  body: API.DictTypeSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/dict-type/update',
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
