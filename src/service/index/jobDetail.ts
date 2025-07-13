/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

// 职位详情相关类型定义
export interface JobDetailResponse {
  code: number
  data: JobDetail
  msg: string
}

export interface JobDetail {
  id: string
  title: string
  salary: string
  experience: string
  education: string
  workTime: string
  requirements: string
  benefits: string[]
  description: string
  jobIncludes: string[]
  workSchedule: string[]
  company: CompanyInfo
  upcomingProjects: Project[]
  similarJobs: SimilarJob[]
  publishTime: string
  viewCount: number
  applyCount: number
  status: 'active' | 'closed' | 'paused'
}

export interface CompanyInfo {
  id: string
  name: string
  scale: string
  logo: string
  industry: string
  location: string
  description?: string
  website?: string
}

export interface Project {
  id: string
  title: string
  date: string
  location: string
  image: string
  description?: string
  status: 'upcoming' | 'ongoing' | 'completed'
}

export interface SimilarJob {
  id: string
  title: string
  salary: string
  company: string
  location?: string
  publishTime?: string
}

export interface JobApplicationRequest {
  jobId: string
  resumeId?: string
  coverLetter?: string
  expectedSalary?: string
  availableTime?: string
}

export interface JobApplicationResponse {
  code: number
  data: {
    applicationId: string
    status: 'submitted' | 'reviewing' | 'accepted' | 'rejected'
    submitTime: string
  }
  msg: string
}

export interface JobFavoriteRequest {
  jobId: string
  action: 'add' | 'remove'
}

export interface JobFavoriteResponse {
  code: number
  data: {
    success: boolean
    favoriteCount: number
  }
  msg: string
}

export interface JobViewRequest {
  jobId: string
  viewSource?: 'list' | 'search' | 'recommendation' | 'share'
}

export interface JobViewResponse {
  code: number
  data: {
    success: boolean
    viewCount: number
  }
  msg: string
}

export interface CompanyDetailResponse {
  code: number
  data: {
    id: string
    name: string
    scale: string
    logo: string
    industry: string
    location: string
    description: string
    website: string
    establishedYear: number
    jobCount: number
    benefits: string[]
    photos: string[]
    culture: string
  }
  msg: string
}

/** 获取职位详情 GET /app-api/job/detail */
export async function getJobDetail({
  params,
  options,
}: {
  params: {
    jobId: string;
  };
  options?: CustomRequestOptions;
}): Promise<JobDetailResponse> {
  return request<JobDetailResponse>('/app-api/job/detail', {
    method: 'GET',
    params,
    ...(options || {}),
  });
}

/** 申请职位 POST /app-api/job/apply */
export async function applyJob({
  body,
  options,
}: {
  body: JobApplicationRequest;
  options?: CustomRequestOptions;
}): Promise<JobApplicationResponse> {
  return request<JobApplicationResponse>('/app-api/job/apply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 收藏/取消收藏职位 POST /app-api/job/favorite */
export async function toggleJobFavorite({
  body,
  options,
}: {
  body: JobFavoriteRequest;
  options?: CustomRequestOptions;
}): Promise<JobFavoriteResponse> {
  return request<JobFavoriteResponse>('/app-api/job/favorite', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 记录职位浏览 POST /app-api/job/view */
export async function recordJobView({
  body,
  options,
}: {
  body: JobViewRequest;
  options?: CustomRequestOptions;
}): Promise<JobViewResponse> {
  return request<JobViewResponse>('/app-api/job/view', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取相似职位 GET /app-api/job/similar */
export async function getSimilarJobs({
  params,
  options,
}: {
  params: {
    jobId: string;
    limit?: number;
  };
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: SimilarJob[];
    msg: string;
  }>('/app-api/job/similar', {
    method: 'GET',
    params,
    ...(options || {}),
  });
}

/** 获取公司详情 GET /app-api/company/detail */
export async function getCompanyDetail({
  params,
  options,
}: {
  params: {
    companyId: string;
  };
  options?: CustomRequestOptions;
}): Promise<CompanyDetailResponse> {
  return request<CompanyDetailResponse>('/app-api/company/detail', {
    method: 'GET',
    params,
    ...(options || {}),
  });
}

/** 获取公司职位列表 GET /app-api/company/jobs */
export async function getCompanyJobs({
  params,
  options,
}: {
  params: {
    companyId: string;
    page?: number;
    size?: number;
    status?: 'active' | 'all';
  };
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: {
      jobs: SimilarJob[];
      total: number;
      page: number;
      size: number;
    };
    msg: string;
  }>('/app-api/company/jobs', {
    method: 'GET',
    params,
    ...(options || {}),
  });
}

/** 举报职位 POST /app-api/job/report */
export async function reportJob({
  body,
  options,
}: {
  body: {
    jobId: string;
    reason: string;
    description?: string;
  };
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: {
      success: boolean;
      reportId: string;
    };
    msg: string;
  }>('/app-api/job/report', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分享职位 POST /app-api/job/share */
export async function shareJob({
  body,
  options,
}: {
  body: {
    jobId: string;
    platform: 'wechat' | 'weibo' | 'qq' | 'link';
  };
  options?: CustomRequestOptions;
}) {
  return request<{
    code: number;
    data: {
      success: boolean;
      shareUrl: string;
      shareCount: number;
    };
    msg: string;
  }>('/app-api/job/share', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
