/* eslint-disable */
// @ts-ignore
import { queryOptions, useMutation } from '@tanstack/vue-query';
import type { DefaultError } from '@tanstack/vue-query';
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as apis from './guanlihoutaiyongjintixian';
import * as API from './types';

/** 通过申请 PUT /admin-api/trade/brokerage-withdraw/approve */
export function useApproveBrokerageWithdrawMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.approveBrokerageWithdraw,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 获得佣金提现 GET /admin-api/trade/brokerage-withdraw/get */
export function getBrokerageWithdraw1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageWithdraw1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrokerageWithdraw1(queryKey[1] as typeof options);
    },
    queryKey: ['getBrokerageWithdraw1', options],
  });
}

/** 获得佣金提现分页 GET /admin-api/trade/brokerage-withdraw/page */
export function getBrokerageWithdrawPage1QueryOptions(options: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getBrokerageWithdrawPage1Params;
  options?: CustomRequestOptions;
}) {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      return apis.getBrokerageWithdrawPage1(queryKey[1] as typeof options);
    },
    queryKey: ['getBrokerageWithdrawPage1', options],
  });
}

/** 驳回申请 PUT /admin-api/trade/brokerage-withdraw/reject */
export function useRejectBrokerageWithdrawMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.rejectBrokerageWithdraw,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}

/** 更新佣金提现的转账结果 POST /admin-api/trade/brokerage-withdraw/update-transferred */
export function useUpdateBrokerageWithdrawTransferredMutation(options?: {
  onSuccess?: (value?: API.CommonResultBoolean) => void;
  onError?: (error?: DefaultError) => void;
}) {
  const { onSuccess, onError } = options || {};

  const response = useMutation({
    mutationFn: apis.updateBrokerageWithdrawTransferred,
    onSuccess(data: API.CommonResultBoolean) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return response;
}
