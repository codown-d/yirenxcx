/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建装修模板 POST /admin-api/promotion/diy-template/create */
export async function createDiyTemplate({
  body,
  options,
}: {
  body: API.DiyTemplateCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/promotion/diy-template/create',
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

/** 删除装修模板 DELETE /admin-api/promotion/diy-template/delete */
export async function deleteDiyTemplate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDiyTemplateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/diy-template/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得装修模板 GET /admin-api/promotion/diy-template/get */
export async function getDiyTemplate1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyTemplate1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDiyTemplateRespVO>(
    '/admin-api/promotion/diy-template/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得装修模板属性 GET /admin-api/promotion/diy-template/get-property */
export async function getDiyTemplateProperty({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyTemplatePropertyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDiyTemplatePropertyRespVO>(
    '/admin-api/promotion/diy-template/get-property',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得装修模板分页 GET /admin-api/promotion/diy-template/page */
export async function getDiyTemplatePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyTemplatePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultDiyTemplateRespVO>(
    '/admin-api/promotion/diy-template/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新装修模板 PUT /admin-api/promotion/diy-template/update */
export async function updateDiyTemplate({
  body,
  options,
}: {
  body: API.DiyTemplateUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/diy-template/update',
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

/** 更新装修模板属性 PUT /admin-api/promotion/diy-template/update-property */
export async function updateDiyTemplateProperty({
  body,
  options,
}: {
  body: API.DiyTemplatePropertyUpdateRequestVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/diy-template/update-property',
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

/** 使用装修模板 PUT /admin-api/promotion/diy-template/use */
export async function useDiyTemplate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.useDiyTemplateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/promotion/diy-template/use',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
