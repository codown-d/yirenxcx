/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建动态表单 POST /admin-api/bpm/form/create */
export async function createForm({
  body,
  options,
}: {
  body: API.BpmFormSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/bpm/form/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除动态表单 DELETE /admin-api/bpm/form/delete */
export async function deleteForm({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteFormParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/form/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得动态表单 GET /admin-api/bpm/form/get */
export async function getForm({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFormParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBpmFormRespVO>('/admin-api/bpm/form/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得动态表单的精简列表 用于表单下拉框 GET /admin-api/bpm/form/list-all-simple */
export async function getFormSimpleList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListBpmFormRespVO>(
    '/admin-api/bpm/form/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得动态表单分页 GET /admin-api/bpm/form/page */
export async function getFormPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getFormPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBpmFormRespVO>(
    '/admin-api/bpm/form/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得动态表单的精简列表 用于表单下拉框 GET /admin-api/bpm/form/simple-list */
export async function getFormSimpleList1({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListBpmFormRespVO>(
    '/admin-api/bpm/form/simple-list',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 更新动态表单 PUT /admin-api/bpm/form/update */
export async function updateForm({
  body,
  options,
}: {
  body: API.BpmFormSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/form/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
