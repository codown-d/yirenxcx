/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取充值金额 GET /admin-api/statistics/pay/summary */
export async function getWalletRechargePrice({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPaySummaryRespVO>(
    '/admin-api/statistics/pay/summary',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
