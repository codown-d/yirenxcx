/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取im通讯密钥 GET /app-api/yirenzhipin/im/genUserSig */
export async function genUserSig({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.genUserSigParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/app-api/yirenzhipin/im/genUserSig', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
