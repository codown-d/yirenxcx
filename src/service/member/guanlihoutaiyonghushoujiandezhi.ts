/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得用户收件地址列表 GET /admin-api/member/address/list */
export async function getAddressList1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAddressList1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAddressRespVO>(
    '/admin-api/member/address/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
