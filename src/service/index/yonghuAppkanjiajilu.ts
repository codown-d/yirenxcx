/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 创建砍价记录 参与砍价活动 POST /app-api/promotion/bargain-record/create */
export async function createBargainRecord({
  body,
  options,
}: {
  body: API.AppBargainRecordCreateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/app-api/promotion/bargain-record/create',
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

/** 获得砍价记录的明细 GET /app-api/promotion/bargain-record/get-detail */
export async function getBargainRecordDetail({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainRecordDetailParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppBargainRecordDetailRespVO>(
    '/app-api/promotion/bargain-record/get-detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得砍价记录的概要信息 用于小程序首页 GET /app-api/promotion/bargain-record/get-summary */
export async function getBargainRecordSummary({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppBargainRecordSummaryRespVO>(
    '/app-api/promotion/bargain-record/get-summary',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 获得砍价记录的分页 GET /app-api/promotion/bargain-record/page */
export async function getBargainRecordPage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBargainRecordPageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppBargainRecordRespVO>(
    '/app-api/promotion/bargain-record/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
