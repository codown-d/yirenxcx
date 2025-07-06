/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

// 求职信息相关类型定义
export interface JobSeekingInfo {
  id?: string
  title: string
  description: string
  expectedSalary: string
  jobType: string
  availableTime: string
  workExperience: string
  education: string
  skills: string[]
  advantages: string[]
  contactInfo: string
  isPublic: boolean
  status?: 'draft' | 'published' | 'expired'
  createTime?: string
  updateTime?: string
  viewCount?: number
  favoriteCount?: number
}

export interface PublishJobSeekingRequest {
  title: string
  description: string
  expectedSalary: string
  jobType: string
  availableTime: string
  workExperience: string
  education: string
  skills: string[]
  advantages: string[]
  contactInfo: string
  isPublic: boolean
}

export interface PublishJobSeekingResponse {
  code: number
  data: {
    id: string
    jobSeekingInfo: JobSeekingInfo
  }
  msg: string
}

export interface JobSeekingListParams {
  page: number
  pageSize: number
  keyword?: string
  expectedSalary?: string
  jobType?: string
  workExperience?: string
  education?: string
  skills?: string[]
  sortBy?: 'createTime' | 'updateTime' | 'viewCount'
  sortOrder?: 'asc' | 'desc'
}

export interface JobSeekingListResponse {
  code: number
  data: {
    list: JobSeekingInfo[]
    total: number
    pages: number
    current: number
    size: number
  }
  msg: string
}

export interface UpdateJobSeekingRequest {
  id: string
  title?: string
  description?: string
  expectedSalary?: string
  jobType?: string
  availableTime?: string
  workExperience?: string
  education?: string
  skills?: string[]
  advantages?: string[]
  contactInfo?: string
  isPublic?: boolean
}

export interface JobSeekingStatsResponse {
  code: number
  data: {
    totalPublished: number
    totalViews: number
    totalFavorites: number
    recentViews: number
  }
  msg: string
}

export interface SkillOption {
  label: string
  value: string
  category?: string
}

export interface AdvantageOption {
  label: string
  value: string
  description?: string
}

/** 发布求职信息 POST /app-api/job-seeking/publish */
export async function publishJobSeeking({
  body,
  options,
}: {
  body: PublishJobSeekingRequest;
  options?: CustomRequestOptions;
}): Promise<PublishJobSeekingResponse> {
  return request<PublishJobSeekingResponse>('/app-api/job-seeking/publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取求职信息列表 GET /app-api/job-seeking/list */
export async function getJobSeekingList({
  params,
  options,
}: {
  params: JobSeekingListParams;
  options?: CustomRequestOptions;
}): Promise<JobSeekingListResponse> {
  return request<JobSeekingListResponse>('/app-api/job-seeking/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取求职信息详情 GET /app-api/job-seeking/detail */
export async function getJobSeekingDetail({
  params,
  options,
}: {
  params: { id: string };
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: JobSeekingInfo;
    msg: string;
  }>('/app-api/job-seeking/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新求职信息 PUT /app-api/job-seeking/update */
export async function updateJobSeeking({
  body,
  options,
}: {
  body: UpdateJobSeekingRequest;
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: JobSeekingInfo;
    msg: string;
  }>('/app-api/job-seeking/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除求职信息 DELETE /app-api/job-seeking/delete */
export async function deleteJobSeeking({
  params,
  options,
}: {
  params: { id: string };
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: boolean;
    msg: string;
  }>('/app-api/job-seeking/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取我的求职信息 GET /app-api/job-seeking/my-list */
export async function getMyJobSeekingList({
  params,
  options,
}: {
  params: {
    page: number;
    pageSize: number;
    status?: string;
  };
  options?: CustomRequestOptions;
}) {
  return request<JobSeekingListResponse>('/app-api/job-seeking/my-list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取求职统计信息 GET /app-api/job-seeking/stats */
export async function getJobSeekingStats({
  options,
}: {
  options?: CustomRequestOptions;
} = {}): Promise<JobSeekingStatsResponse> {
  return request<JobSeekingStatsResponse>('/app-api/job-seeking/stats', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取技能选项 GET /app-api/job-seeking/skills */
export async function getSkillOptions({
  options,
}: {
  options?: CustomRequestOptions;
} = {}) {
  return request<{
    code: number;
    data: SkillOption[];
    msg: string;
  }>('/app-api/job-seeking/skills', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取优势选项 GET /app-api/job-seeking/advantages */
export async function getAdvantageOptions({
  options,
}: {
  options?: CustomRequestOptions;
} = {}) {
  return request<{
    code: number;
    data: AdvantageOption[];
    msg: string;
  }>('/app-api/job-seeking/advantages', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 收藏求职信息 POST /app-api/job-seeking/favorite */
export async function favoriteJobSeeking({
  body,
  options,
}: {
  body: { jobSeekingId: string };
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: boolean;
    msg: string;
  }>('/app-api/job-seeking/favorite', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消收藏求职信息 DELETE /app-api/job-seeking/unfavorite */
export async function unfavoriteJobSeeking({
  params,
  options,
}: {
  params: { jobSeekingId: string };
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: boolean;
    msg: string;
  }>('/app-api/job-seeking/unfavorite', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存草稿 POST /app-api/job-seeking/draft */
export async function saveJobSeekingDraft({
  body,
  options,
}: {
  body: Partial<PublishJobSeekingRequest> & { id?: string };
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: { id: string };
    msg: string;
  }>('/app-api/job-seeking/draft', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
