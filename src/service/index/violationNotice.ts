/* eslint-disable */
// @ts-ignore
import request from '@/utils/request'
import { CustomRequestOptions } from '@/interceptors/request'

import * as API from './types'

// 违规记录相关类型定义
export interface ViolationTag {
  type: 'jobseeker' | 'employer' | 'verified' | 'other'
  label: string
}

export interface ViolationRecord {
  id: string
  userName: string
  tags: ViolationTag[]
  violationCode: string
  violationType: string
  description: string
  result: string
  reportTime: string
  correctionCount: number
  status: 'processed' | 'processing' | 'pending'
  createTime?: string
  updateTime?: string
}

export interface ViolationListParams {
  page: number
  pageSize: number
  keyword?: string
  filter?: string
  violationType?: string
  status?: string
  startTime?: string
  endTime?: string
}

export interface ViolationListResponse {
  code: number
  data: {
    list: ViolationRecord[]
    total: number
    pages: number
    current: number
    size: number
  }
  msg: string
}

export interface ViolationStatsResponse {
  code: number
  data: {
    total: number
    processed: number
    processing: number
    pending: number
    monthlyTotal: number
  }
  msg: string
}

export interface ReportRequest {
  targetUserId?: string
  targetType: 'user' | 'job' | 'post' | 'other'
  targetId?: string
  violationType: string
  description: string
  evidence?: string[]
  reporterContact?: string
}

export interface ReportResponse {
  code: number
  data: {
    reportId: string
    reportCode: string
  }
  msg: string
}

/** 获取违规记录列表 GET /app-api/violation/notice/list */
export async function getViolationList({
  params,
  options,
}: {
  params: ViolationListParams
  options?: CustomRequestOptions
}): Promise<ViolationListResponse> {
  return request<ViolationListResponse>('/app-api/violation/notice/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 获取违规统计信息 GET /app-api/violation/notice/stats */
export async function getViolationStats({
  options,
}: {
  options?: CustomRequestOptions
} = {}): Promise<ViolationStatsResponse> {
  return request<ViolationStatsResponse>('/app-api/violation/notice/stats', {
    method: 'GET',
    ...(options || {}),
  })
}

/** 获取违规记录详情 GET /app-api/violation/notice/detail */
export async function getViolationDetail({
  params,
  options,
}: {
  params: { id: string }
  options?: CustomRequestOptions
}) {
  return request<{
    code: number
    data: ViolationRecord
    msg: string
  }>('/app-api/violation/notice/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 提交举报 POST /app-api/violation/report/submit */
export async function submitReport({
  body,
  options,
}: {
  body: ReportRequest
  options?: CustomRequestOptions
}): Promise<ReportResponse> {
  return request<ReportResponse>('/app-api/violation/report/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 获取违规类型字典 GET /app-api/violation/types */
export async function getViolationTypes({
  options,
}: {
  options?: CustomRequestOptions
} = {}) {
  return request<{
    code: number
    data: Array<{
      value: string
      label: string
      description?: string
    }>
    msg: string
  }>('/app-api/violation/types', {
    method: 'GET',
    ...(options || {}),
  })
}

/** 获取举报历史 GET /app-api/violation/report/history */
export async function getReportHistory({
  params,
  options,
}: {
  params: {
    page: number
    pageSize: number
  }
  options?: CustomRequestOptions
}) {
  return request<{
    code: number
    data: {
      list: Array<{
        id: string
        reportCode: string
        targetType: string
        violationType: string
        description: string
        status: string
        createTime: string
        handleTime?: string
        handleResult?: string
      }>
      total: number
    }
    msg: string
  }>('/app-api/violation/report/history', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}
