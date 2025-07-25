/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获得抄送流程分页列表 GET /admin-api/bpm/process-instance/copy/page */
export async function getProcessInstanceCopyPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProcessInstanceCopyPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultBpmProcessInstanceCopyRespVO>(
    '/admin-api/bpm/process-instance/copy/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
