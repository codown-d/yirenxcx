/* eslint-disable */
// @ts-ignore
import request from '@/utils/request'
import { CustomRequestOptions } from '@/interceptors/request'

// 论坛相关类型定义
export interface ForumPostListResponse {
  code: number
  data: {
    posts: ForumPost[]
    total: number
    page: number
    size: number
    hasMore: boolean
  }
  msg: string
}

export interface ForumPost {
  id: string
  author: {
    id: string
    name: string
    title: string
    avatar: string
    level: number
    isVerified: boolean
  }
  content: string
  images: string[]
  topics: string[]
  publishTime: string
  likeCount: number
  commentCount: number
  shareCount: number
  viewCount: number
  isLiked: boolean
  isCollected: boolean
  status: 'published' | 'draft' | 'deleted'
  type: 'text' | 'image' | 'video' | 'link'
}

export interface ForumTopicResponse {
  code: number
  data: ForumTopic[]
  msg: string
}

export interface ForumTopic {
  id: string
  name: string
  description: string
  count: number
  isHot: boolean
  isFollowed: boolean
  icon?: string
  color?: string
}

export interface ForumPostDetailResponse {
  code: number
  data: {
    post: ForumPost
    comments: ForumComment[]
    relatedPosts: ForumPost[]
  }
  msg: string
}

export interface ForumComment {
  id: string
  author: {
    id: string
    name: string
    avatar: string
    level: number
  }
  content: string
  images?: string[]
  publishTime: string
  likeCount: number
  replyCount: number
  isLiked: boolean
  parentId?: string
  replies?: ForumComment[]
}

export interface PublishPostRequest {
  content: string
  images?: string[]
  topics?: string[]
  type: 'text' | 'image' | 'video' | 'link'
  linkUrl?: string
  location?: string
  isAnonymous?: boolean
}

export interface PublishPostResponse {
  code: number
  data: {
    postId: string
    status: 'published' | 'reviewing'
  }
  msg: string
}

export interface ToggleLikeRequest {
  postId: string
  action: 'like' | 'unlike'
}

export interface ToggleLikeResponse {
  code: number
  data: {
    success: boolean
    likeCount: number
    isLiked: boolean
  }
  msg: string
}

export interface SharePostRequest {
  postId: string
  platform: 'wechat' | 'weibo' | 'qq' | 'link'
  message?: string
}

export interface SharePostResponse {
  code: number
  data: {
    success: boolean
    shareUrl: string
    shareCount: number
  }
  msg: string
}

export interface ForumCategoryResponse {
  code: number
  data: ForumCategory[]
  msg: string
}

export interface ForumCategory {
  id: string
  name: string
  value: string
  icon?: string
  postCount: number
  isDefault: boolean
}

/** 获取论坛帖子列表 GET /app-api/forum/posts */
export async function getForumPosts({
  params,
  options,
}: {
  params: {
    category?: string
    topicId?: string
    page?: number
    size?: number
    sortBy?: 'hot' | 'latest' | 'like'
    authorId?: string
  }
  options?: CustomRequestOptions
}): Promise<ForumPostListResponse> {
  return request<ForumPostListResponse>('/app-api/forum/posts', {
    method: 'GET',
    params,
    ...(options || {}),
  })
}

/** 获取帖子详情 GET /app-api/forum/post/detail */
export async function getForumPostDetail({
  params,
  options,
}: {
  params: {
    postId: string
  }
  options?: CustomRequestOptions
}): Promise<ForumPostDetailResponse> {
  return request<ForumPostDetailResponse>('/app-api/forum/post/detail', {
    method: 'GET',
    params,
    ...(options || {}),
  })
}

/** 发布帖子 POST /app-api/forum/post/publish */
export async function publishForumPost({
  body,
  options,
}: {
  body: PublishPostRequest
  options?: CustomRequestOptions
}): Promise<PublishPostResponse> {
  return request<PublishPostResponse>('/app-api/forum/post/publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 点赞/取消点赞帖子 POST /app-api/forum/post/like */
export async function togglePostLike({
  body,
  options,
}: {
  body: ToggleLikeRequest
  options?: CustomRequestOptions
}): Promise<ToggleLikeResponse> {
  return request<ToggleLikeResponse>('/app-api/forum/post/like', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 分享帖子 POST /app-api/forum/post/share */
export async function shareForumPost({
  body,
  options,
}: {
  body: SharePostRequest
  options?: CustomRequestOptions
}): Promise<SharePostResponse> {
  return request<SharePostResponse>('/app-api/forum/post/share', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 获取热门话题 GET /app-api/forum/topics/hot */
export async function getHotTopics({
  params,
  options,
}: {
  params?: {
    limit?: number
    page?: number
    category?: string
  }
  options?: CustomRequestOptions
}): Promise<ForumTopicResponse> {
  return request<ForumTopicResponse>('/app-api/forum/topics/hot', {
    method: 'GET',
    params,
    ...(options || {}),
  })
}

/** 获取话题详情 GET /app-api/forum/topic/detail */
export async function getTopicDetail({
  params,
  options,
}: {
  params: {
    topicId: string
  }
  options?: CustomRequestOptions
}): Promise<{
  code: number
  data: {
    topic: ForumTopic & {
      participantCount: number
      postCount: number
      description: string
      createTime: string
      creator: {
        id: string
        name: string
        avatar: string
      }
      latestPosts: ForumPost[]
    }
  }
  msg: string
}> {
  return request('/app-api/forum/topic/detail', {
    method: 'GET',
    params,
    ...(options || {}),
  })
}

/** 搜索话题 GET /app-api/forum/topics/search */
export async function searchTopics({
  params,
  options,
}: {
  params: {
    keyword: string
    page?: number
    size?: number
  }
  options?: CustomRequestOptions
}): Promise<ForumTopicResponse> {
  return request<ForumTopicResponse>('/app-api/forum/topics/search', {
    method: 'GET',
    params,
    ...(options || {}),
  })
}

/** 创建话题 POST /app-api/forum/topic/create */
export async function createTopic({
  body,
  options,
}: {
  body: {
    name: string
    description: string
    icon?: string
    color?: string
    isPrivate?: boolean
  }
  options?: CustomRequestOptions
}): Promise<{
  code: number
  data: {
    topicId: string
    status: 'created' | 'reviewing'
  }
  msg: string
}> {
  return request('/app-api/forum/topic/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 获取用户参与的话题 GET /app-api/forum/topics/my */
export async function getMyTopics({
  params,
  options,
}: {
  params?: {
    type?: 'created' | 'followed' | 'participated'
    page?: number
    size?: number
  }
  options?: CustomRequestOptions
}): Promise<ForumTopicResponse> {
  return request<ForumTopicResponse>('/app-api/forum/topics/my', {
    method: 'GET',
    params,
    ...(options || {}),
  })
}

/** 获取论坛分类 GET /app-api/forum/categories */
export async function getForumCategories({
  options,
}: {
  options?: CustomRequestOptions
} = {}): Promise<ForumCategoryResponse> {
  return request<ForumCategoryResponse>('/app-api/forum/categories', {
    method: 'GET',
    ...(options || {}),
  })
}

/** 关注/取消关注话题 POST /app-api/forum/topic/follow */
export async function toggleTopicFollow({
  body,
  options,
}: {
  body: {
    topicId: string
    action: 'follow' | 'unfollow'
  }
  options?: CustomRequestOptions
}) {
  return request<{
    code: number
    data: {
      success: boolean
      isFollowed: boolean
      followCount: number
    }
    msg: string
  }>('/app-api/forum/topic/follow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 收藏/取消收藏帖子 POST /app-api/forum/post/collect */
export async function togglePostCollect({
  body,
  options,
}: {
  body: {
    postId: string
    action: 'collect' | 'uncollect'
  }
  options?: CustomRequestOptions
}) {
  return request<{
    code: number
    data: {
      success: boolean
      isCollected: boolean
      collectCount: number
    }
    msg: string
  }>('/app-api/forum/post/collect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 举报帖子 POST /app-api/forum/post/report */
export async function reportForumPost({
  body,
  options,
}: {
  body: {
    postId: string
    reason: string
    description?: string
  }
  options?: CustomRequestOptions
}) {
  return request<{
    code: number
    data: {
      success: boolean
      reportId: string
    }
    msg: string
  }>('/app-api/forum/post/report', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 删除帖子 DELETE /app-api/forum/post/delete */
export async function deleteForumPost({
  params,
  options,
}: {
  params: {
    postId: string
  }
  options?: CustomRequestOptions
}) {
  return request<{
    code: number
    data: {
      success: boolean
    }
    msg: string
  }>('/app-api/forum/post/delete', {
    method: 'DELETE',
    params,
    ...(options || {}),
  })
}
