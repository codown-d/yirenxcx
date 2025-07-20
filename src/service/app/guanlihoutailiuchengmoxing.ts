/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 清理模型 DELETE /admin-api/bpm/model/clean */
export async function cleanModel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.cleanModelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/model/clean', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建模型 POST /admin-api/bpm/model/create */
export async function createModel({
  body,
  options,
}: {
  body: API.BpmModelSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/admin-api/bpm/model/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除模型 DELETE /admin-api/bpm/model/delete */
export async function deleteModel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deleteModelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/model/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 部署模型 POST /admin-api/bpm/model/deploy */
export async function deployModel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.deployModelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/model/deploy', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得模型 GET /admin-api/bpm/model/get */
export async function getModel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getModelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBpmModelRespVO>('/admin-api/bpm/model/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得模型分页 GET /admin-api/bpm/model/list */
export async function getModelList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getModelListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListBpmModelRespVO>(
    '/admin-api/bpm/model/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获得仿钉钉流程设计模型 GET /admin-api/bpm/model/simple/get */
export async function getSimpleModel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSimpleModelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBpmSimpleModelNodeVO>(
    '/admin-api/bpm/model/simple/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 保存仿钉钉流程设计模型 POST /admin-api/bpm/model/simple/update */
export async function updateSimpleModel({
  body,
  options,
}: {
  body: API.BpmSimpleModelUpdateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/bpm/model/simple/update',
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

/** 修改模型 PUT /admin-api/bpm/model/update */
export async function updateModel({
  body,
  options,
}: {
  body: API.BpmModelSaveReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/model/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改模型的 BPMN PUT /admin-api/bpm/model/update-bpmn */
export async function updateModelBpmn({
  body,
  options,
}: {
  body: API.BpmModeUpdateBpmnReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/model/update-bpmn', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量修改模型排序 PUT /admin-api/bpm/model/update-sort-batch */
export async function updateModelSortBatch({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.updateModelSortBatchParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>(
    '/admin-api/bpm/model/update-sort-batch',
    {
      method: 'PUT',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 修改模型的状态 实际更新的部署的流程定义的状态 PUT /admin-api/bpm/model/update-state */
export async function updateModelState({
  body,
  options,
}: {
  body: API.BpmModelUpdateStateReqVO;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/admin-api/bpm/model/update-state', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
