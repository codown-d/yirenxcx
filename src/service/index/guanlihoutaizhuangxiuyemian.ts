/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建装修页面 POST /admin-api/promotion/diy-page/create */
export async function createDiyPage({
  body,
  options,
}: {
  body: API.DiyPageCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/promotion/diy-page/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除装修页面 DELETE /admin-api/promotion/diy-page/delete */
export async function deleteDiyPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDiyPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/diy-page/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得装修页面 GET /admin-api/promotion/diy-page/get */
export async function getDiyPage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyPage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDiyPageRespVO>(
    '/admin-api/promotion/diy-page/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得装修页面属性 GET /admin-api/promotion/diy-page/get-property */
export async function getDiyPageProperty({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyPagePropertyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDiyPagePropertyRespVO>(
    '/admin-api/promotion/diy-page/get-property',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得装修页面列表 GET /admin-api/promotion/diy-page/list */
export async function getDiyPageList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyPageListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDiyPageRespVO>(
    '/admin-api/promotion/diy-page/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得装修页面分页 GET /admin-api/promotion/diy-page/page */
export async function getDiyPagePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyPagePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultDiyPageRespVO>(
    '/admin-api/promotion/diy-page/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新装修页面 PUT /admin-api/promotion/diy-page/update */
export async function updateDiyPage({
  body,
  options,
}: {
  body: API.DiyPageUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/diy-page/update',
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

/** 更新装修页面属性 PUT /admin-api/promotion/diy-page/update-property */
export async function updateDiyPageProperty({
  body,
  options,
}: {
  body: API.DiyPagePropertyUpdateRequestVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/diy-page/update-property',
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
