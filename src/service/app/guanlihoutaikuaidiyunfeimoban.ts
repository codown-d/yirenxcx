/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建快递运费模板 POST /admin-api/trade/delivery/express-template/create */
export async function createDeliveryExpressTemplate({
  body,
  options,
}: {
  body: API.DeliveryExpressTemplateCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/trade/delivery/express-template/create',
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

/** 删除快递运费模板 DELETE /admin-api/trade/delivery/express-template/delete */
export async function deleteDeliveryExpressTemplate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDeliveryExpressTemplateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/delivery/express-template/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得快递运费模板 GET /admin-api/trade/delivery/express-template/get */
export async function getDeliveryExpressTemplate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryExpressTemplateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDeliveryExpressTemplateDetailRespVO>(
    '/admin-api/trade/delivery/express-template/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得快递运费模板列表 GET /admin-api/trade/delivery/express-template/list */
export async function getDeliveryExpressTemplateList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryExpressTemplateListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDeliveryExpressTemplateRespVO>(
    '/admin-api/trade/delivery/express-template/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取快递模版精简信息列表 主要用于前端的下拉选项 GET /admin-api/trade/delivery/express-template/list-all-simple */
export async function getSimpleTemplateList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDeliveryExpressTemplateSimpleRespVO>(
    '/admin-api/trade/delivery/express-template/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得快递运费模板分页 GET /admin-api/trade/delivery/express-template/page */
export async function getDeliveryExpressTemplatePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryExpressTemplatePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultDeliveryExpressTemplateRespVO>(
    '/admin-api/trade/delivery/express-template/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新快递运费模板 PUT /admin-api/trade/delivery/express-template/update */
export async function updateDeliveryExpressTemplate({
  body,
  options,
}: {
  body: API.DeliveryExpressTemplateUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/delivery/express-template/update',
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
