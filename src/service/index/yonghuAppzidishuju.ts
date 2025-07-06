/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 根据字典类型查询字典数据信息 GET /app-api/system/dict-data/type */
export async function getDictDataListByType({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDictDataListByTypeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppDictDataRespVO>(
    '/app-api/system/dict-data/type',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
