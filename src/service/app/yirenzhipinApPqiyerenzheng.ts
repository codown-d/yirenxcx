/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 发送消息 POST /app-api/yirenzhipin/qiye/renzheng */
export async function renzheng({
  body,
  options,
}: {
  body: API.QiYeRenZhengReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/yirenzhipin/qiye/renzheng',
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
