/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建快递公司 POST /admin-api/trade/delivery/express/create */
export async function createDeliveryExpress({
  body,
  options,
}: {
  body: API.DeliveryExpressCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/trade/delivery/express/create',
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

/** 删除快递公司 DELETE /admin-api/trade/delivery/express/delete */
export async function deleteDeliveryExpress({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteDeliveryExpressParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/delivery/express/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 导出快递公司 Excel GET /admin-api/trade/delivery/express/export-excel */
export async function exportDeliveryExpressExcel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.exportDeliveryExpressExcelParams;
  options?: CustomRequestOptions;
}) {
  return request<unknown>('/admin-api/trade/delivery/express/export-excel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得快递公司 GET /admin-api/trade/delivery/express/get */
export async function getDeliveryExpress({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryExpressParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultDeliveryExpressRespVO>(
    '/admin-api/trade/delivery/express/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取快递公司精简信息列表 主要用于前端的下拉选项 GET /admin-api/trade/delivery/express/list-all-simple */
export async function getSimpleDeliveryExpressList({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListDeliveryExpressSimpleRespVO>(
    '/admin-api/trade/delivery/express/list-all-simple',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得快递公司分页 GET /admin-api/trade/delivery/express/page */
export async function getDeliveryExpressPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDeliveryExpressPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultDeliveryExpressRespVO>(
    '/admin-api/trade/delivery/express/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新快递公司 PUT /admin-api/trade/delivery/express/update */
export async function updateDeliveryExpress({
  body,
  options,
}: {
  body: API.DeliveryExpressUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/trade/delivery/express/update',
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
