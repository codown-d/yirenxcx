/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

// 筛选相关类型定义
export interface LocationItem {
  id: string
  province: string
  city: string
  district?: string
  fullName: string
  level: number
  parentId?: string
}

export interface JobCategoryItem {
  id: string
  name: string
  code: string
  group: string
  parentId?: string
  level: number
  sort: number
}

export interface FilterOptions {
  locations?: string[]
  categories?: string[]
  salaryRange?: string
  jobType?: string
  benefits?: string[]
  workExperience?: string
  education?: string
  companySize?: string
  companyType?: string
}

export interface FilterRequest {
  page: number
  pageSize: number
  keyword?: string
  filters: FilterOptions
}

export interface FilterResponse<T> {
  code: number
  data: {
    list: T[]
    total: number
    pages: number
    current: number
    size: number
  }
  msg: string
}

export interface LocationListResponse {
  code: number
  data: LocationItem[]
  msg: string
}

export interface JobCategoryListResponse {
  code: number
  data: JobCategoryItem[]
  msg: string
}

export interface SalaryRangeOption {
  label: string
  value: string
  min?: number
  max?: number
}

export interface BenefitOption {
  label: string
  value: string
  description?: string
  icon?: string
}

export interface FilterOptionsResponse {
  code: number
  data: {
    salaryRanges: SalaryRangeOption[]
    jobTypes: { label: string; value: string }[]
    benefits: BenefitOption[]
    workExperiences: { label: string; value: string }[]
    educations: { label: string; value: string }[]
    companySizes: { label: string; value: string }[]
    companyTypes: { label: string; value: string }[]
  }
  msg: string
}

/** 获取地区列表 GET /app-api/filter/locations */
export async function getLocationList({
  params,
  options,
}: {
  params?: {
    parentId?: string
    level?: number
    keyword?: string
  }
  options?: CustomRequestOptions
} = {}): Promise<LocationListResponse> {
  return request<LocationListResponse>('/app-api/filter/locations', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 搜索地区 GET /app-api/filter/locations/search */
export async function searchLocations({
  params,
  options,
}: {
  params: {
    keyword: string
    limit?: number
  }
  options?: CustomRequestOptions
}): Promise<LocationListResponse> {
  return request<LocationListResponse>('/app-api/filter/locations/search', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 获取职业类别列表 GET /app-api/filter/job-categories */
export async function getJobCategoryList({
  params,
  options,
}: {
  params?: {
    parentId?: string
    group?: string
    level?: number
    keyword?: string
  }
  options?: CustomRequestOptions
} = {}): Promise<JobCategoryListResponse> {
  return request<JobCategoryListResponse>('/app-api/filter/job-categories', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 搜索职业类别 GET /app-api/filter/job-categories/search */
export async function searchJobCategories({
  params,
  options,
}: {
  params: {
    keyword: string
    limit?: number
  }
  options?: CustomRequestOptions
}): Promise<JobCategoryListResponse> {
  return request<JobCategoryListResponse>('/app-api/filter/job-categories/search', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 获取筛选选项 GET /app-api/filter/options */
export async function getFilterOptions({
  options,
}: {
  options?: CustomRequestOptions
} = {}): Promise<FilterOptionsResponse> {
  return request<FilterOptionsResponse>('/app-api/filter/options', {
    method: 'GET',
    ...(options || {}),
  })
}

/** 应用筛选条件搜索职位 POST /app-api/filter/jobs */
export async function filterJobs({
  body,
  options,
}: {
  body: FilterRequest
  options?: CustomRequestOptions
}) {
  return request<FilterResponse<any>>('/app-api/filter/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 应用筛选条件搜索求职者 POST /app-api/filter/job-seekers */
export async function filterJobSeekers({
  body,
  options,
}: {
  body: FilterRequest
  options?: CustomRequestOptions
}) {
  return request<FilterResponse<any>>('/app-api/filter/job-seekers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 保存筛选条件 POST /app-api/filter/save */
export async function saveFilterCondition({
  body,
  options,
}: {
  body: {
    name: string
    filters: FilterOptions
    type: 'job' | 'job-seeker'
  }
  options?: CustomRequestOptions
}) {
  return request<{
    code: number
    data: { id: string }
    msg: string
  }>('/app-api/filter/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 获取保存的筛选条件 GET /app-api/filter/saved */
export async function getSavedFilters({
  params,
  options,
}: {
  params?: {
    type?: 'job' | 'job-seeker'
  }
  options?: CustomRequestOptions
} = {}) {
  return request<{
    code: number
    data: Array<{
      id: string
      name: string
      filters: FilterOptions
      type: string
      createTime: string
    }>
    msg: string
  }>('/app-api/filter/saved', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 删除保存的筛选条件 DELETE /app-api/filter/saved */
export async function deleteSavedFilter({
  params,
  options,
}: {
  params: { id: string }
  options?: CustomRequestOptions
}) {
  return request<{
    code: number
    data: boolean
    msg: string
  }>('/app-api/filter/saved', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 获取热门搜索关键词 GET /app-api/filter/hot-keywords */
export async function getHotKeywords({
  params,
  options,
}: {
  params?: {
    type?: 'job' | 'job-seeker'
    limit?: number
  }
  options?: CustomRequestOptions
} = {}) {
  return request<{
    code: number
    data: Array<{
      keyword: string
      count: number
      trend: 'up' | 'down' | 'stable'
    }>
    msg: string
  }>('/app-api/filter/hot-keywords', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 获取筛选统计信息 GET /app-api/filter/stats */
export async function getFilterStats({
  body,
  options,
}: {
  body: FilterOptions
  options?: CustomRequestOptions
}) {
  return request<{
    code: number
    data: {
      totalJobs: number
      totalJobSeekers: number
      avgSalary: number
      topLocations: Array<{ name: string; count: number }>
      topCategories: Array<{ name: string; count: number }>
    }
    msg: string
  }>('/app-api/filter/stats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
