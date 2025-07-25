/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 删除访问令牌 DELETE /admin-api/system/oauth2-token/delete */
export async function deleteAccessToken({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteAccessTokenParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/system/oauth2-token/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得访问令牌分页 只返回有效期内的 GET /admin-api/system/oauth2-token/page */
export async function getAccessTokenPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAccessTokenPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultOAuth2AccessTokenRespVO>(
    '/admin-api/system/oauth2-token/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
