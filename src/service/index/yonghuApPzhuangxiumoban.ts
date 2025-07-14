/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得装修模板 GET /app-api/promotion/diy-template/get */
export async function getDiyTemplate({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDiyTemplateParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppDiyTemplatePropertyRespVO>(
    '/app-api/promotion/diy-template/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 使用中的装修模板 GET /app-api/promotion/diy-template/used */
export async function getUsedDiyTemplate({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppDiyTemplatePropertyRespVO>(
    '/app-api/promotion/diy-template/used',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
