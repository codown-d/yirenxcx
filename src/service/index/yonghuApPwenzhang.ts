/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 增加文章浏览量 PUT /app-api/promotion/article/add-browse-count */
export async function addBrowseCount1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.addBrowseCount1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/app-api/promotion/article/add-browse-count',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情 GET /app-api/promotion/article/get */
export async function getArticle1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticle1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppArticleRespVO>(
    '/app-api/promotion/article/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情 PUT /app-api/promotion/article/get */
export async function getArticle3({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticle3Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppArticleRespVO>(
    '/app-api/promotion/article/get',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情 POST /app-api/promotion/article/get */
export async function getArticle2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticle2Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppArticleRespVO>(
    '/app-api/promotion/article/get',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情 DELETE /app-api/promotion/article/get */
export async function getArticle4({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticle4Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppArticleRespVO>(
    '/app-api/promotion/article/get',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情 PATCH /app-api/promotion/article/get */
export async function getArticle5({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticle5Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAppArticleRespVO>(
    '/app-api/promotion/article/get',
    {
      method: 'PATCH',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情列表 GET /app-api/promotion/article/list */
export async function getArticleList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticleListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppArticleRespVO>(
    '/app-api/promotion/article/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情列表 PUT /app-api/promotion/article/list */
export async function getArticleList2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticleList2Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppArticleRespVO>(
    '/app-api/promotion/article/list',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情列表 POST /app-api/promotion/article/list */
export async function getArticleList1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticleList1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppArticleRespVO>(
    '/app-api/promotion/article/list',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情列表 DELETE /app-api/promotion/article/list */
export async function getArticleList3({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticleList3Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppArticleRespVO>(
    '/app-api/promotion/article/list',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情列表 PATCH /app-api/promotion/article/list */
export async function getArticleList4({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticleList4Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAppArticleRespVO>(
    '/app-api/promotion/article/list',
    {
      method: 'PATCH',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情分页 GET /app-api/promotion/article/page */
export async function getArticlePage1({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticlePage1Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppArticleRespVO>(
    '/app-api/promotion/article/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情分页 PUT /app-api/promotion/article/page */
export async function getArticlePage3({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticlePage3Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppArticleRespVO>(
    '/app-api/promotion/article/page',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情分页 POST /app-api/promotion/article/page */
export async function getArticlePage2({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticlePage2Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppArticleRespVO>(
    '/app-api/promotion/article/page',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情分页 DELETE /app-api/promotion/article/page */
export async function getArticlePage4({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticlePage4Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppArticleRespVO>(
    '/app-api/promotion/article/page',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得文章详情分页 PATCH /app-api/promotion/article/page */
export async function getArticlePage5({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getArticlePage5Params;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAppArticleRespVO>(
    '/app-api/promotion/article/page',
    {
      method: 'PATCH',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
