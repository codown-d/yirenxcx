/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 删除绘画 DELETE /admin-api/ai/image/delete */
export async function deleteImage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteImageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/image/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除【我的】绘画记录 DELETE /admin-api/ai/image/delete-my */
export async function deleteImageMy({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteImageMyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/image/delete-my', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 生成图片 POST /admin-api/ai/image/draw */
export async function drawImage({
  body,
  options,
}: {
  body: API.AiImageDrawReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>('/admin-api/ai/image/draw', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取【我的】绘图记录 GET /admin-api/ai/image/get-my */
export async function getImageMy({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getImageMyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultAiImageRespVO>('/admin-api/ai/image/get-my', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 【Midjourney】Action 操作（二次生成图片） 例如说：放大、缩小、U1、U2 等 POST /admin-api/ai/image/midjourney/action */
export async function midjourneyAction({
  body,
  options,
}: {
  body: API.AiMidjourneyActionReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/ai/image/midjourney/action',
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

/** 【Midjourney】生成图片 POST /admin-api/ai/image/midjourney/imagine */
export async function midjourneyImagine({
  body,
  options,
}: {
  body: API.AiMidjourneyImagineReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultLong>(
    '/admin-api/ai/image/midjourney/imagine',
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

/** 【Midjourney】通知图片进展 由 Midjourney Proxy 回调 POST /admin-api/ai/image/midjourney/notify */
export async function midjourneyNotify({
  body,
  options,
}: {
  body: API.Notify;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/ai/image/midjourney/notify',
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

/** 获取【我的】绘图记录列表 GET /admin-api/ai/image/my-list-by-ids */
export async function getImageListMyByIds({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getImageListMyByIdsParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListAiImageRespVO>(
    '/admin-api/ai/image/my-list-by-ids',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取【我的】绘图分页 GET /admin-api/ai/image/my-page */
export async function getImagePageMy({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getImagePageMyParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiImageRespVO>(
    '/admin-api/ai/image/my-page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得绘画分页 GET /admin-api/ai/image/page */
export async function getImagePage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getImagePageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiImageRespVO>(
    '/admin-api/ai/image/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取公开的绘图分页 GET /admin-api/ai/image/public-page */
export async function getImagePagePublic({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getImagePagePublicParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPageResultAiImageRespVO>(
    '/admin-api/ai/image/public-page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 更新绘画 PUT /admin-api/ai/image/update */
export async function updateImage({
  body,
  options,
}: {
  body: API.AiImageUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/ai/image/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
