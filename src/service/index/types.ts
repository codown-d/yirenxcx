/* eslint-disable */
// @ts-ignore

export type addBrowseCountParams = {
  /** Banner编号 */
  id: number;
};

export type ApiAccessLogRespVO = {
  /** 日志主键 */
  id: number;
  /** 链路追踪编号 */
  traceId: string;
  /** 用户编号 */
  userId: number;
  /** 用户类型，参见 UserTypeEnum 枚举 */
  userType: number;
  /** 应用名 */
  applicationName: string;
  /** 请求方法名 */
  requestMethod: string;
  /** 请求地址 */
  requestUrl: string;
  /** 请求参数 */
  requestParams?: string;
  /** 响应结果 */
  responseBody?: string;
  /** 用户 IP */
  userIp: string;
  /** 浏览器 UA */
  userAgent: string;
  /** 操作模块 */
  operateModule: string;
  /** 操作名 */
  operateName: string;
  /** 操作分类 */
  operateType: number;
  /** 开始请求时间 */
  beginTime: string;
  /** 结束请求时间 */
  endTime: string;
  /** 执行时长 */
  duration: number;
  /** 结果码 */
  resultCode: number;
  /** 结果提示 */
  resultMsg?: string;
  /** 创建时间 */
  createTime: string;
};

export type ApiErrorLogRespVO = {
  /** 编号 */
  id: number;
  /** 链路追踪编号 */
  traceId: string;
  /** 用户编号 */
  userId: number;
  /** 用户类型 */
  userType: number;
  /** 应用名 */
  applicationName: string;
  /** 请求方法名 */
  requestMethod: string;
  /** 请求地址 */
  requestUrl: string;
  /** 请求参数 */
  requestParams: string;
  /** 用户 IP */
  userIp: string;
  /** 浏览器 UA */
  userAgent: string;
  /** 异常发生时间 */
  exceptionTime: string;
  /** 异常名 */
  exceptionName: string;
  /** 异常导致的消息 */
  exceptionMessage: string;
  /** 异常导致的根消息 */
  exceptionRootCauseMessage: string;
  /** 异常的栈轨迹 */
  exceptionStackTrace: string;
  /** 异常发生的类全名 */
  exceptionClassName: string;
  /** 异常发生的类文件 */
  exceptionFileName: string;
  /** 异常发生的方法名 */
  exceptionMethodName: string;
  /** 异常发生的方法所在行 */
  exceptionLineNumber: number;
  /** 处理状态 */
  processStatus: number;
  /** 处理时间 */
  processTime: string;
  /** 处理用户编号 */
  processUserId?: number;
  /** 创建时间 */
  createTime: string;
};

export type AppAreaNodeRespVO = {
  /** 编号 */
  id: number;
  /** 名字 */
  name: string;
};

export type AppBannerRespVO = {
  /** 编号 */
  id: number;
  /** 标题 */
  title: string;
  /** 跳转链接 */
  url?: string;
  /** 图片链接 */
  picUrl: string;
  /** Banner类型 */
  type: number;
};

export type AppDictDataRespVO = {
  /** 字典数据编号 */
  id: number;
  /** 字典标签 */
  label: string;
  /** 字典值 */
  value: string;
  /** 字典类型 */
  dictType: string;
};

export type approveOrDenyParams = {
  /** 响应类型 */
  response_type: string;
  /** 客户端编号 */
  client_id: string;
  /** 授权范围 */
  scope?: string;
  /** 重定向 URI */
  redirect_uri: string;
  /** 用户是否接受 */
  auto_approve: boolean;
  state?: string;
};

export type AreaNodeRespVO = {
  /** 编号 */
  id: number;
  /** 名字 */
  name: string;
};

export type AuthLoginReqVO = {
  /** 验证码，验证码开启时，需要传递 */
  captchaVerification: string;
  /** 账号 */
  username: string;
  /** 密码 */
  password: string;
  /** 社交平台的类型，参见 SocialTypeEnum 枚举值 */
  socialType: number;
  /** 授权码 */
  socialCode: string;
  /** state */
  socialState: string;
  socialCodeValid?: boolean;
};

export type AuthLoginRespVO = {
  /** 用户编号 */
  userId: number;
  /** 访问令牌 */
  accessToken: string;
  /** 刷新令牌 */
  refreshToken: string;
  /** 过期时间 */
  expiresTime: string;
};

export type authorizeParams = {
  /** 客户端编号 */
  clientId: string;
};

export type AuthPermissionInfoRespVO = {
  /** 用户信息 */
  user: UserVO;
  /** 角色标识数组 */
  roles: string[];
  /** 操作权限数组 */
  permissions: string[];
  /** 菜单树 */
  menus: MenuVO[];
};

export type AuthRegisterReqVO = {
  /** 验证码，验证码开启时，需要传递 */
  captchaVerification: string;
  /** 用户账号 */
  username: string;
  /** 用户昵称 */
  nickname: string;
  /** 密码 */
  password: string;
};

export type AuthResetPasswordReqVO = {
  /** 密码 */
  password: string;
  /** 手机号 */
  mobile: string;
  /** 手机短信验证码 */
  code: string;
};

export type AuthSmsLoginReqVO = {
  /** 手机号 */
  mobile: string;
  /** 短信验证码 */
  code: string;
};

export type AuthSmsSendReqVO = {
  /** 验证码，验证码开启时，需要传递 */
  captchaVerification: string;
  /** 手机号 */
  mobile: string;
  /** 短信场景 */
  scene: number;
};

export type AuthSocialLoginReqVO = {
  /** 社交平台的类型，参见 UserSocialTypeEnum 枚举值 */
  type: number;
  /** 授权码 */
  code: string;
  /** state */
  state: string;
};

export type BannerCreateReqVO = {
  /** 标题 */
  title: string;
  /** 跳转链接 */
  url?: string;
  /** 图片链接 */
  picUrl: string;
  /** 排序 */
  sort: number;
  /** Banner类型 */
  type: number;
  /** 状态 */
  status: number;
  /** 备注 */
  remark?: string;
};

export type BannerRespVO = {
  /** 标题 */
  title: string;
  /** 跳转链接 */
  url?: string;
  /** 图片链接 */
  picUrl: string;
  /** 排序 */
  sort: number;
  /** Banner类型 */
  type: number;
  /** 状态 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type BannerUpdateReqVO = {
  /** 标题 */
  title: string;
  /** 跳转链接 */
  url?: string;
  /** 图片链接 */
  picUrl: string;
  /** 排序 */
  sort: number;
  /** Banner类型 */
  type: number;
  /** 状态 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 编号 */
  id: number;
};

export type CaptchaVO = {
  captchaId?: string;
  projectCode?: string;
  captchaType?: string;
  captchaOriginalPath?: string;
  captchaFontType?: string;
  captchaFontSize?: number;
  secretKey?: string;
  originalImageBase64?: string;
  point?: PointVO;
  jigsawImageBase64?: string;
  wordList?: string[];
  pointList?: { x?: number; y?: number }[];
  pointJson?: string;
  token?: string;
  result?: boolean;
  captchaVerification?: string;
  clientUid?: string;
  ts?: number;
  browserInfo?: string;
};

export type checkTokenParams = {
  /** 访问令牌 */
  token: string;
};

export type Client = {
  /** 应用名 */
  name: string;
  /** 应用图标 */
  logo: string;
};

export type CodegenColumnRespVO = {
  /** 编号 */
  id: number;
  /** 表编号 */
  tableId: number;
  /** 字段名 */
  columnName: string;
  /** 字段类型 */
  dataType: string;
  /** 字段描述 */
  columnComment: string;
  /** 是否允许为空 */
  nullable: boolean;
  /** 是否主键 */
  primaryKey: boolean;
  /** 排序 */
  ordinalPosition: number;
  /** Java 属性类型 */
  javaType: string;
  /** Java 属性名 */
  javaField: string;
  /** 字典类型 */
  dictType?: string;
  /** 数据示例 */
  example?: string;
  /** 是否为 Create 创建操作的字段 */
  createOperation: boolean;
  /** 是否为 Update 更新操作的字段 */
  updateOperation: boolean;
  /** 是否为 List 查询操作的字段 */
  listOperation: boolean;
  /** List 查询操作的条件类型，参见 CodegenColumnListConditionEnum 枚举 */
  listOperationCondition: string;
  /** 是否为 List 查询操作的返回字段 */
  listOperationResult: boolean;
  /** 显示类型 */
  htmlType: string;
  /** 创建时间 */
  createTime: string;
};

export type CodegenColumnSaveReqVO = {
  /** 编号 */
  id: number;
  /** 表编号 */
  tableId: number;
  /** 字段名 */
  columnName: string;
  /** 字段类型 */
  dataType: string;
  /** 字段描述 */
  columnComment: string;
  /** 是否允许为空 */
  nullable: boolean;
  /** 是否主键 */
  primaryKey: boolean;
  /** 排序 */
  ordinalPosition: number;
  /** Java 属性类型 */
  javaType: string;
  /** Java 属性名 */
  javaField: string;
  /** 字典类型 */
  dictType?: string;
  /** 数据示例 */
  example?: string;
  /** 是否为 Create 创建操作的字段 */
  createOperation: boolean;
  /** 是否为 Update 更新操作的字段 */
  updateOperation: boolean;
  /** 是否为 List 查询操作的字段 */
  listOperation: boolean;
  /** List 查询操作的条件类型，参见 CodegenColumnListConditionEnum 枚举 */
  listOperationCondition: string;
  /** 是否为 List 查询操作的返回字段 */
  listOperationResult: boolean;
  /** 显示类型 */
  htmlType: string;
};

export type CodegenCreateListReqVO = {
  /** 数据源配置的编号 */
  dataSourceConfigId: number;
  /** 表名数组 */
  tableNames: string[];
};

export type CodegenDetailRespVO = {
  /** 表定义 */
  table?: CodegenTableRespVO;
  /** 字段定义 */
  columns?: CodegenColumnRespVO[];
};

export type CodegenPreviewRespVO = {
  /** 文件路径 */
  filePath: string;
  /** 代码 */
  code: string;
};

export type CodegenTableRespVO = {
  /** 编号 */
  id: number;
  /** 生成场景，参见 CodegenSceneEnum 枚举 */
  scene: number;
  /** 表名称 */
  tableName: string;
  /** 表描述 */
  tableComment: string;
  /** 备注 */
  remark?: string;
  /** 模块名 */
  moduleName: string;
  /** 业务名 */
  businessName: string;
  /** 类名称 */
  className: string;
  /** 类描述 */
  classComment: string;
  /** 作者 */
  author: string;
  /** 模板类型，参见 CodegenTemplateTypeEnum 枚举 */
  templateType: number;
  /** 前端类型，参见 CodegenFrontTypeEnum 枚举 */
  frontType: number;
  /** 父菜单编号 */
  parentMenuId?: number;
  /** 主表的编号 */
  masterTableId?: number;
  /** 子表关联主表的字段编号 */
  subJoinColumnId?: number;
  /** 主表与子表是否一对多 */
  subJoinMany?: boolean;
  /** 树表的父字段编号 */
  treeParentColumnId?: number;
  /** 树表的名字字段编号 */
  treeNameColumnId?: number;
  /** 主键编号 */
  dataSourceConfigId: number;
  /** 创建时间 */
  createTime: string;
  /** 更新时间 */
  updateTime: string;
};

export type CodegenTableSaveReqVO = {
  /** 编号 */
  id: number;
  /** 生成场景，参见 CodegenSceneEnum 枚举 */
  scene: number;
  /** 表名称 */
  tableName: string;
  /** 表描述 */
  tableComment: string;
  /** 备注 */
  remark?: string;
  /** 模块名 */
  moduleName: string;
  /** 业务名 */
  businessName: string;
  /** 类名称 */
  className: string;
  /** 类描述 */
  classComment: string;
  /** 作者 */
  author: string;
  /** 模板类型，参见 CodegenTemplateTypeEnum 枚举 */
  templateType: number;
  /** 前端类型，参见 CodegenFrontTypeEnum 枚举 */
  frontType: number;
  /** 父菜单编号 */
  parentMenuId?: number;
  /** 主表的编号 */
  masterTableId?: number;
  /** 子表关联主表的字段编号 */
  subJoinColumnId?: number;
  /** 主表与子表是否一对多 */
  subJoinMany?: boolean;
  /** 树表的父字段编号 */
  treeParentColumnId?: number;
  /** 树表的名字字段编号 */
  treeNameColumnId?: number;
};

export type CodegenUpdateReqVO = {
  table: CodegenTableSaveReqVO;
  columns: CodegenColumnSaveReqVO[];
};

export type CommandStat = {
  /** Redis 命令 */
  command: string;
  /** 调用次数 */
  calls: number;
  /** 消耗 CPU 秒数 */
  usec: number;
};

export type CommonResultAuthLoginRespVO = {
  code?: number;
  data?: AuthLoginRespVO;
  msg?: string;
};

export type CommonResultAuthPermissionInfoRespVO = {
  code?: number;
  data?: AuthPermissionInfoRespVO;
  msg?: string;
};

export type CommonResultBannerRespVO = {
  code?: number;
  data?: BannerRespVO;
  msg?: string;
};

export type CommonResultBoolean = {
  code?: number;
  data?: boolean;
  msg?: string;
};

export type CommonResultCodegenDetailRespVO = {
  code?: number;
  data?: CodegenDetailRespVO;
  msg?: string;
};

export type CommonResultConfigRespVO = {
  code?: number;
  data?: ConfigRespVO;
  msg?: string;
};

export type CommonResultDataSourceConfigRespVO = {
  code?: number;
  data?: DataSourceConfigRespVO;
  msg?: string;
};

export type CommonResultDemo01ContactRespVO = {
  code?: number;
  data?: Demo01ContactRespVO;
  msg?: string;
};

export type CommonResultDemo02CategoryRespVO = {
  code?: number;
  data?: Demo02CategoryRespVO;
  msg?: string;
};

export type CommonResultDemo03CourseDO = {
  code?: number;
  data?: Demo03CourseDO;
  msg?: string;
};

export type CommonResultDemo03GradeDO = {
  code?: number;
  data?: Demo03GradeDO;
  msg?: string;
};

export type CommonResultDemo03StudentRespVO = {
  code?: number;
  data?: Demo03StudentRespVO;
  msg?: string;
};

export type CommonResultDeptRespVO = {
  code?: number;
  data?: DeptRespVO;
  msg?: string;
};

export type CommonResultDictDataRespVO = {
  code?: number;
  data?: DictDataRespVO;
  msg?: string;
};

export type CommonResultDictTypeRespVO = {
  code?: number;
  data?: DictTypeRespVO;
  msg?: string;
};

export type CommonResultFileConfigRespVO = {
  code?: number;
  data?: FileConfigRespVO;
  msg?: string;
};

export type CommonResultFilePresignedUrlRespVO = {
  code?: number;
  data?: FilePresignedUrlRespVO;
  msg?: string;
};

export type CommonResultJobLogRespVO = {
  code?: number;
  data?: JobLogRespVO;
  msg?: string;
};

export type CommonResultJobRespVO = {
  code?: number;
  data?: JobRespVO;
  msg?: string;
};

export type CommonResultListAppAreaNodeRespVO = {
  code?: number;
  data?: AppAreaNodeRespVO[];
  msg?: string;
};

export type CommonResultListAppBannerRespVO = {
  code?: number;
  data?: AppBannerRespVO[];
  msg?: string;
};

export type CommonResultListAppDictDataRespVO = {
  code?: number;
  data?: AppDictDataRespVO[];
  msg?: string;
};

export type CommonResultListAreaNodeRespVO = {
  code?: number;
  data?: AreaNodeRespVO[];
  msg?: string;
};

export type CommonResultListBannerRespVO = {
  code?: number;
  data?: BannerRespVO[];
  msg?: string;
};

export type CommonResultListCodegenPreviewRespVO = {
  code?: number;
  data?: CodegenPreviewRespVO[];
  msg?: string;
};

export type CommonResultListCodegenTableRespVO = {
  code?: number;
  data?: CodegenTableRespVO[];
  msg?: string;
};

export type CommonResultListDatabaseTableRespVO = {
  code?: number;
  data?: DatabaseTableRespVO[];
  msg?: string;
};

export type CommonResultListDataSourceConfigRespVO = {
  code?: number;
  data?: DataSourceConfigRespVO[];
  msg?: string;
};

export type CommonResultListDemo02CategoryRespVO = {
  code?: number;
  data?: Demo02CategoryRespVO[];
  msg?: string;
};

export type CommonResultListDemo03CourseDO = {
  code?: number;
  data?: Demo03CourseDO[];
  msg?: string;
};

export type CommonResultListDeptRespVO = {
  code?: number;
  data?: DeptRespVO[];
  msg?: string;
};

export type CommonResultListDeptSimpleRespVO = {
  code?: number;
  data?: DeptSimpleRespVO[];
  msg?: string;
};

export type CommonResultListDictDataSimpleRespVO = {
  code?: number;
  data?: DictDataSimpleRespVO[];
  msg?: string;
};

export type CommonResultListDictTypeSimpleRespVO = {
  code?: number;
  data?: DictTypeSimpleRespVO[];
  msg?: string;
};

export type CommonResultListLocalDateTime = {
  code?: number;
  data?: string[];
  msg?: string;
};

export type CommonResultListLong = {
  code?: number;
  data?: number[];
  msg?: string;
};

export type CommonResultListMailAccountSimpleRespVO = {
  code?: number;
  data?: MailAccountSimpleRespVO[];
  msg?: string;
};

export type CommonResultListMailTemplateSimpleRespVO = {
  code?: number;
  data?: MailTemplateSimpleRespVO[];
  msg?: string;
};

export type CommonResultListMenuRespVO = {
  code?: number;
  data?: MenuRespVO[];
  msg?: string;
};

export type CommonResultListMenuSimpleRespVO = {
  code?: number;
  data?: MenuSimpleRespVO[];
  msg?: string;
};

export type CommonResultListNotifyMessageRespVO = {
  code?: number;
  data?: NotifyMessageRespVO[];
  msg?: string;
};

export type CommonResultListPostSimpleRespVO = {
  code?: number;
  data?: PostSimpleRespVO[];
  msg?: string;
};

export type CommonResultListRoleRespVO = {
  code?: number;
  data?: RoleRespVO[];
  msg?: string;
};

export type CommonResultListSmsChannelSimpleRespVO = {
  code?: number;
  data?: SmsChannelSimpleRespVO[];
  msg?: string;
};

export type CommonResultListSocialUserRespVO = {
  code?: number;
  data?: SocialUserRespVO[];
  msg?: string;
};

export type CommonResultListTenantPackageSimpleRespVO = {
  code?: number;
  data?: TenantPackageSimpleRespVO[];
  msg?: string;
};

export type CommonResultListTenantRespVO = {
  code?: number;
  data?: TenantRespVO[];
  msg?: string;
};

export type CommonResultListUserSimpleRespVO = {
  code?: number;
  data?: UserSimpleRespVO[];
  msg?: string;
};

export type CommonResultListUserTypeRespVO = {
  code?: number;
  data?: UserTypeRespVO[];
  msg?: string;
};

export type CommonResultListYRZPJobCategoryRespVO = {
  code?: number;
  data?: YRZPJobCategoryRespVO[];
  msg?: string;
};

export type CommonResultLong = {
  code?: number;
  data?: number;
  msg?: string;
};

export type CommonResultMailAccountRespVO = {
  code?: number;
  data?: MailAccountRespVO;
  msg?: string;
};

export type CommonResultMailLogRespVO = {
  code?: number;
  data?: MailLogRespVO;
  msg?: string;
};

export type CommonResultMailTemplateRespVO = {
  code?: number;
  data?: MailTemplateRespVO;
  msg?: string;
};

export type CommonResultMenuRespVO = {
  code?: number;
  data?: MenuRespVO;
  msg?: string;
};

export type CommonResultNoticeRespVO = {
  code?: number;
  data?: NoticeRespVO;
  msg?: string;
};

export type CommonResultNotifyMessageRespVO = {
  code?: number;
  data?: NotifyMessageRespVO;
  msg?: string;
};

export type CommonResultNotifyTemplateRespVO = {
  code?: number;
  data?: NotifyTemplateRespVO;
  msg?: string;
};

export type CommonResultOAuth2ClientRespVO = {
  code?: number;
  data?: OAuth2ClientRespVO;
  msg?: string;
};

export type CommonResultOAuth2OpenAccessTokenRespVO = {
  code?: number;
  data?: OAuth2OpenAccessTokenRespVO;
  msg?: string;
};

export type CommonResultOAuth2OpenAuthorizeInfoRespVO = {
  code?: number;
  data?: OAuth2OpenAuthorizeInfoRespVO;
  msg?: string;
};

export type CommonResultOAuth2OpenCheckTokenRespVO = {
  code?: number;
  data?: OAuth2OpenCheckTokenRespVO;
  msg?: string;
};

export type CommonResultOAuth2UserInfoRespVO = {
  code?: number;
  data?: OAuth2UserInfoRespVO;
  msg?: string;
};

export type CommonResultPageResultApiAccessLogRespVO = {
  code?: number;
  data?: PageResultApiAccessLogRespVO;
  msg?: string;
};

export type CommonResultPageResultApiErrorLogRespVO = {
  code?: number;
  data?: PageResultApiErrorLogRespVO;
  msg?: string;
};

export type CommonResultPageResultBannerRespVO = {
  code?: number;
  data?: PageResultBannerRespVO;
  msg?: string;
};

export type CommonResultPageResultCodegenTableRespVO = {
  code?: number;
  data?: PageResultCodegenTableRespVO;
  msg?: string;
};

export type CommonResultPageResultConfigRespVO = {
  code?: number;
  data?: PageResultConfigRespVO;
  msg?: string;
};

export type CommonResultPageResultDemo01ContactRespVO = {
  code?: number;
  data?: PageResultDemo01ContactRespVO;
  msg?: string;
};

export type CommonResultPageResultDemo03CourseDO = {
  code?: number;
  data?: PageResultDemo03CourseDO;
  msg?: string;
};

export type CommonResultPageResultDemo03GradeDO = {
  code?: number;
  data?: PageResultDemo03GradeDO;
  msg?: string;
};

export type CommonResultPageResultDemo03StudentRespVO = {
  code?: number;
  data?: PageResultDemo03StudentRespVO;
  msg?: string;
};

export type CommonResultPageResultDictDataRespVO = {
  code?: number;
  data?: PageResultDictDataRespVO;
  msg?: string;
};

export type CommonResultPageResultDictTypeRespVO = {
  code?: number;
  data?: PageResultDictTypeRespVO;
  msg?: string;
};

export type CommonResultPageResultFileConfigRespVO = {
  code?: number;
  data?: PageResultFileConfigRespVO;
  msg?: string;
};

export type CommonResultPageResultFileRespVO = {
  code?: number;
  data?: PageResultFileRespVO;
  msg?: string;
};

export type CommonResultPageResultJobLogRespVO = {
  code?: number;
  data?: PageResultJobLogRespVO;
  msg?: string;
};

export type CommonResultPageResultJobRespVO = {
  code?: number;
  data?: PageResultJobRespVO;
  msg?: string;
};

export type CommonResultPageResultLoginLogRespVO = {
  code?: number;
  data?: PageResultLoginLogRespVO;
  msg?: string;
};

export type CommonResultPageResultMailAccountRespVO = {
  code?: number;
  data?: PageResultMailAccountRespVO;
  msg?: string;
};

export type CommonResultPageResultMailLogRespVO = {
  code?: number;
  data?: PageResultMailLogRespVO;
  msg?: string;
};

export type CommonResultPageResultMailTemplateRespVO = {
  code?: number;
  data?: PageResultMailTemplateRespVO;
  msg?: string;
};

export type CommonResultPageResultNoticeRespVO = {
  code?: number;
  data?: PageResultNoticeRespVO;
  msg?: string;
};

export type CommonResultPageResultNotifyMessageRespVO = {
  code?: number;
  data?: PageResultNotifyMessageRespVO;
  msg?: string;
};

export type CommonResultPageResultNotifyTemplateRespVO = {
  code?: number;
  data?: PageResultNotifyTemplateRespVO;
  msg?: string;
};

export type CommonResultPageResultOAuth2AccessTokenRespVO = {
  code?: number;
  data?: PageResultOAuth2AccessTokenRespVO;
  msg?: string;
};

export type CommonResultPageResultOAuth2ClientRespVO = {
  code?: number;
  data?: PageResultOAuth2ClientRespVO;
  msg?: string;
};

export type CommonResultPageResultOperateLogRespVO = {
  code?: number;
  data?: PageResultOperateLogRespVO;
  msg?: string;
};

export type CommonResultPageResultPostRespVO = {
  code?: number;
  data?: PageResultPostRespVO;
  msg?: string;
};

export type CommonResultPageResultRoleRespVO = {
  code?: number;
  data?: PageResultRoleRespVO;
  msg?: string;
};

export type CommonResultPageResultSmsChannelRespVO = {
  code?: number;
  data?: PageResultSmsChannelRespVO;
  msg?: string;
};

export type CommonResultPageResultSmsLogRespVO = {
  code?: number;
  data?: PageResultSmsLogRespVO;
  msg?: string;
};

export type CommonResultPageResultSmsTemplateRespVO = {
  code?: number;
  data?: PageResultSmsTemplateRespVO;
  msg?: string;
};

export type CommonResultPageResultSocialClientRespVO = {
  code?: number;
  data?: PageResultSocialClientRespVO;
  msg?: string;
};

export type CommonResultPageResultSocialUserRespVO = {
  code?: number;
  data?: PageResultSocialUserRespVO;
  msg?: string;
};

export type CommonResultPageResultTenantPackageRespVO = {
  code?: number;
  data?: PageResultTenantPackageRespVO;
  msg?: string;
};

export type CommonResultPageResultTenantRespVO = {
  code?: number;
  data?: PageResultTenantRespVO;
  msg?: string;
};

export type CommonResultPageResultUserRespVO = {
  code?: number;
  data?: PageResultUserRespVO;
  msg?: string;
};

export type CommonResultPageResultUserTypeRespVO = {
  code?: number;
  data?: PageResultUserTypeRespVO;
  msg?: string;
};

export type CommonResultPageResultYRZPForumCommentRespAppVO = {
  code?: number;
  data?: PageResultYRZPForumCommentRespAppVO;
  msg?: string;
};

export type CommonResultPageResultYRZPForumCommentRespVO = {
  code?: number;
  data?: PageResultYRZPForumCommentRespVO;
  msg?: string;
};

export type CommonResultPageResultYRZPForumPostRespAppVO = {
  code?: number;
  data?: PageResultYRZPForumPostRespAppVO;
  msg?: string;
};

export type CommonResultPageResultYRZPForumPostRespVO = {
  code?: number;
  data?: PageResultYRZPForumPostRespVO;
  msg?: string;
};

export type CommonResultPageResultYRZPJobApplicationRespVO = {
  code?: number;
  data?: PageResultYRZPJobApplicationRespVO;
  msg?: string;
};

export type CommonResultPageResultYRZPJobCategoryRespVO = {
  code?: number;
  data?: PageResultYRZPJobCategoryRespVO;
  msg?: string;
};

export type CommonResultPageResultYRZPJobRespVO = {
  code?: number;
  data?: PageResultYRZPJobRespVO;
  msg?: string;
};

export type CommonResultPageResultYRZPJobSeekerRespVO = {
  code?: number;
  data?: PageResultYRZPJobSeekerRespVO;
  msg?: string;
};

export type CommonResultPageResultYRZPMessageRespAppVO = {
  code?: number;
  data?: PageResultYRZPMessageRespAppVO;
  msg?: string;
};

export type CommonResultPageResultYRZPMessageRespVO = {
  code?: number;
  data?: PageResultYRZPMessageRespVO;
  msg?: string;
};

export type CommonResultPostRespVO = {
  code?: number;
  data?: PostRespVO;
  msg?: string;
};

export type CommonResultRedisMonitorRespVO = {
  code?: number;
  data?: RedisMonitorRespVO;
  msg?: string;
};

export type CommonResultRoleRespVO = {
  code?: number;
  data?: RoleRespVO;
  msg?: string;
};

export type CommonResultSetLong = {
  code?: number;
  data?: number[];
  msg?: string;
};

export type CommonResultSmsChannelRespVO = {
  code?: number;
  data?: SmsChannelRespVO;
  msg?: string;
};

export type CommonResultSmsTemplateRespVO = {
  code?: number;
  data?: SmsTemplateRespVO;
  msg?: string;
};

export type CommonResultSocialClientRespVO = {
  code?: number;
  data?: SocialClientRespVO;
  msg?: string;
};

export type CommonResultSocialUserRespVO = {
  code?: number;
  data?: SocialUserRespVO;
  msg?: string;
};

export type CommonResultString = {
  code?: number;
  data?: string;
  msg?: string;
};

export type CommonResultTenantPackageRespVO = {
  code?: number;
  data?: TenantPackageRespVO;
  msg?: string;
};

export type CommonResultTenantRespVO = {
  code?: number;
  data?: TenantRespVO;
  msg?: string;
};

export type CommonResultUserImportRespVO = {
  code?: number;
  data?: UserImportRespVO;
  msg?: string;
};

export type CommonResultUserProfileRespVO = {
  code?: number;
  data?: UserProfileRespVO;
  msg?: string;
};

export type CommonResultUserRespVO = {
  code?: number;
  data?: UserRespVO;
  msg?: string;
};

export type CommonResultUserTypeRespVO = {
  code?: number;
  data?: UserTypeRespVO;
  msg?: string;
};

export type CommonResultYRZPForumCommentRespVO = {
  code?: number;
  data?: YRZPForumCommentRespVO;
  msg?: string;
};

export type CommonResultYRZPForumPostRespAppVO = {
  code?: number;
  data?: YRZPForumPostRespAppVO;
  msg?: string;
};

export type CommonResultYRZPForumPostRespVO = {
  code?: number;
  data?: YRZPForumPostRespVO;
  msg?: string;
};

export type CommonResultYRZPJobApplicationRespVO = {
  code?: number;
  data?: YRZPJobApplicationRespVO;
  msg?: string;
};

export type CommonResultYRZPJobCategoryRespVO = {
  code?: number;
  data?: YRZPJobCategoryRespVO;
  msg?: string;
};

export type CommonResultYRZPJobRespVO = {
  code?: number;
  data?: YRZPJobRespVO;
  msg?: string;
};

export type CommonResultYRZPJobSeekerRespVO = {
  code?: number;
  data?: YRZPJobSeekerRespVO;
  msg?: string;
};

export type CommonResultYRZPMessageRespVO = {
  code?: number;
  data?: YRZPMessageRespVO;
  msg?: string;
};

export type ConfigRespVO = {
  /** 参数配置序号 */
  id: number;
  /** 参数分类 */
  category: string;
  /** 参数名称 */
  name: string;
  /** 参数键名 */
  key: string;
  /** 参数键值 */
  value: string;
  /** 参数类型，参见 SysConfigTypeEnum 枚举 */
  type: number;
  /** 是否可见 */
  visible: boolean;
  /** 备注 */
  remark?: string;
  /** 创建时间 */
  createTime: string;
};

export type ConfigSaveReqVO = {
  /** 参数配置序号 */
  id?: number;
  /** 参数分组 */
  category: string;
  /** 参数名称 */
  name: string;
  /** 参数键名 */
  key: string;
  /** 参数键值 */
  value: string;
  /** 是否可见 */
  visible: boolean;
  /** 备注 */
  remark?: string;
};

export type DatabaseTableRespVO = {
  /** 表名称 */
  name: string;
  /** 表描述 */
  comment: string;
};

export type DataSourceConfigRespVO = {
  /** 主键编号 */
  id: number;
  /** 数据源名称 */
  name: string;
  /** 数据源连接 */
  url: string;
  /** 用户名 */
  username: string;
  /** 创建时间 */
  createTime: string;
};

export type DataSourceConfigSaveReqVO = {
  /** 主键编号 */
  id?: number;
  /** 数据源名称 */
  name: string;
  /** 数据源连接 */
  url: string;
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
};

export type deleteAccessTokenParams = {
  /** 访问令牌 */
  accessToken: string;
};

export type deleteBannerParams = {
  /** 编号 */
  id: number;
};

export type deleteCodegenParams = {
  /** 表编号 */
  tableId: number;
};

export type deleteConfigParams = {
  /** 编号 */
  id: number;
};

export type deleteDataSourceConfigParams = {
  /** 编号 */
  id: number;
};

export type deleteDemo01ContactParams = {
  /** 编号 */
  id: number;
};

export type deleteDemo02CategoryParams = {
  /** 编号 */
  id: number;
};

export type deleteDemo03CourseParams = {
  /** 编号 */
  id: number;
};

export type deleteDemo03GradeParams = {
  /** 编号 */
  id: number;
};

export type deleteDemo03StudentParams = {
  /** 编号 */
  id: number;
};

export type deleteDeptParams = {
  /** 编号 */
  id: number;
};

export type deleteDictDataParams = {
  /** 编号 */
  id: number;
};

export type deleteDictTypeParams = {
  /** 编号 */
  id: number;
};

export type deleteFileConfigParams = {
  /** 编号 */
  id: number;
};

export type deleteFileParams = {
  /** 编号 */
  id: number;
};

export type deleteForumComment1Params = {
  /** 编号 */
  id: number;
};

export type deleteForumCommentParams = {
  /** 编号 */
  id: number;
};

export type deleteForumPost1Params = {
  /** 编号 */
  id: number;
};

export type deleteForumPostParams = {
  /** 编号 */
  id: number;
};

export type deleteJob1Params = {
  /** 编号 */
  id: number;
};

export type deleteJobApplicationParams = {
  /** 编号 */
  id: number;
};

export type deleteJobCategoryParams = {
  /** 编号 */
  id: number;
};

export type deleteJobParams = {
  /** 编号 */
  id: number;
};

export type deleteJobSeekerParams = {
  /** 编号 */
  id: number;
};

export type deleteMailAccountParams = {
  /** 编号 */
  id: number;
};

export type deleteMailTemplateParams = {
  /** 编号 */
  id: number;
};

export type deleteMenuParams = {
  /** 菜单编号 */
  id: number;
};

export type deleteMessageParams = {
  /** 编号 */
  id: number;
};

export type deleteNoticeParams = {
  /** 编号 */
  id: number;
};

export type deleteNotifyTemplateParams = {
  /** 编号 */
  id: number;
};

export type deleteOAuth2ClientParams = {
  /** 编号 */
  id: number;
};

export type deletePostParams = {
  id: number;
};

export type deleteRoleParams = {
  /** 角色编号 */
  id: number;
};

export type deleteSmsChannelParams = {
  /** 编号 */
  id: number;
};

export type deleteSmsTemplateParams = {
  /** 编号 */
  id: number;
};

export type deleteSocialClientParams = {
  /** 编号 */
  id: number;
};

export type deleteTenantPackageParams = {
  /** 编号 */
  id: number;
};

export type deleteTenantParams = {
  /** 编号 */
  id: number;
};

export type deleteUserParams = {
  /** 编号 */
  id: number;
};

export type deleteUserTypeParams = {
  /** 编号 */
  id: number;
};

export type Demo01ContactRespVO = {
  /** 编号 */
  id: number;
  /** 名字 */
  name: string;
  /** 性别 */
  sex: number;
  /** 出生年 */
  birthday: string;
  /** 简介 */
  description: string;
  /** 头像 */
  avatar?: string;
  /** 创建时间 */
  createTime: string;
};

export type Demo01ContactSaveReqVO = {
  /** 编号 */
  id: number;
  /** 名字 */
  name: string;
  /** 性别 */
  sex: number;
  /** 出生年 */
  birthday: string;
  /** 简介 */
  description: string;
  /** 头像 */
  avatar?: string;
};

export type Demo02CategoryRespVO = {
  /** 编号 */
  id: number;
  /** 名字 */
  name: string;
  /** 父级编号 */
  parentId: number;
  /** 创建时间 */
  createTime: string;
};

export type Demo02CategorySaveReqVO = {
  /** 编号 */
  id: number;
  /** 名字 */
  name: string;
  /** 父级编号 */
  parentId: number;
};

export type Demo03CourseDO = {
  createTime?: string;
  updateTime?: string;
  creator?: string;
  updater?: string;
  deleted?: boolean;
  id?: number;
  studentId?: number;
  name?: string;
  score?: number;
};

export type Demo03GradeDO = {
  createTime?: string;
  updateTime?: string;
  creator?: string;
  updater?: string;
  deleted?: boolean;
  id?: number;
  studentId?: number;
  name?: string;
  teacher?: string;
};

export type Demo03StudentRespVO = {
  /** 编号 */
  id: number;
  /** 名字 */
  name: string;
  /** 性别 */
  sex: number;
  /** 出生日期 */
  birthday: string;
  /** 简介 */
  description: string;
  /** 创建时间 */
  createTime: string;
};

export type Demo03StudentSaveReqVO = {
  /** 编号 */
  id: number;
  /** 名字 */
  name: string;
  /** 性别 */
  sex: number;
  /** 出生日期 */
  birthday: string;
  /** 简介 */
  description: string;
  demo03Courses?: Demo03CourseDO[];
  demo03Grade?: Demo03GradeDO;
};

export type Dept = {
  /** 部门编号 */
  id: number;
  /** 部门名称 */
  name: string;
};

export type DeptRespVO = {
  /** 部门编号 */
  id?: number;
  /** 部门名称 */
  name: string;
  /** 父部门 ID */
  parentId?: number;
  /** 显示顺序 */
  sort: number;
  /** 负责人的用户编号 */
  leaderUserId?: number;
  /** 联系电话 */
  phone?: string;
  /** 邮箱 */
  email?: string;
  /** 状态,见 CommonStatusEnum 枚举 */
  status: number;
  /** 创建时间 */
  createTime: string;
};

export type DeptSaveReqVO = {
  /** 部门编号 */
  id?: number;
  /** 部门名称 */
  name: string;
  /** 父部门 ID */
  parentId?: number;
  /** 显示顺序 */
  sort: number;
  /** 负责人的用户编号 */
  leaderUserId?: number;
  /** 联系电话 */
  phone?: string;
  /** 邮箱 */
  email?: string;
  /** 状态,见 CommonStatusEnum 枚举 */
  status: number;
};

export type DeptSimpleRespVO = {
  /** 部门编号 */
  id: number;
  /** 部门名称 */
  name: string;
  /** 父部门 ID */
  parentId: number;
};

export type DictDataRespVO = {
  /** 字典数据编号 */
  id: number;
  /** 显示顺序 */
  sort: number;
  /** 字典标签 */
  label: string;
  /** 字典值 */
  value: string;
  /** 字典类型 */
  dictType: string;
  /** 状态,见 CommonStatusEnum 枚举 */
  status: number;
  /** 颜色类型,default、primary、success、info、warning、danger */
  colorType?: string;
  /** css 样式 */
  cssClass?: string;
  /** 备注 */
  remark?: string;
  /** 创建时间 */
  createTime: string;
};

export type DictDataSaveReqVO = {
  /** 字典数据编号 */
  id?: number;
  /** 显示顺序 */
  sort: number;
  /** 字典标签 */
  label: string;
  /** 字典值 */
  value: string;
  /** 字典类型 */
  dictType: string;
  /** 状态,见 CommonStatusEnum 枚举 */
  status: number;
  /** 颜色类型,default、primary、success、info、warning、danger */
  colorType?: string;
  /** css 样式 */
  cssClass?: string;
  /** 备注 */
  remark?: string;
};

export type DictDataSimpleRespVO = {
  /** 字典类型 */
  dictType: string;
  /** 字典键值 */
  value: string;
  /** 字典标签 */
  label: string;
  /** 颜色类型，default、primary、success、info、warning、danger */
  colorType?: string;
  /** css 样式 */
  cssClass?: string;
};

export type DictTypeRespVO = {
  /** 字典类型编号 */
  id: number;
  /** 字典名称 */
  name: string;
  /** 字典类型 */
  type: string;
  /** 状态，参见 CommonStatusEnum 枚举类 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 创建时间 */
  createTime: string;
};

export type DictTypeSaveReqVO = {
  /** 字典类型编号 */
  id?: number;
  /** 字典名称 */
  name: string;
  /** 字典类型 */
  type: string;
  /** 状态，参见 CommonStatusEnum 枚举类 */
  status: number;
  /** 备注 */
  remark?: string;
};

export type DictTypeSimpleRespVO = {
  /** 字典类型编号 */
  id: number;
  /** 字典类型名称 */
  name: string;
  /** 字典类型 */
  type: string;
};

export type downloadCodegenParams = {
  /** 表编号 */
  tableId: number;
};

export type export1Params = {
  /** 岗位编码，模糊匹配 */
  code?: string;
  /** 岗位名称，模糊匹配 */
  name?: string;
  /** 展示状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type export2Params = {
  /** 字典类型名称，模糊匹配 */
  name?: string;
  /** 字典类型，模糊匹配 */
  type?: string;
  /** 展示状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type export3Params = {
  /** 字典标签 */
  label?: string;
  /** 字典类型，模糊匹配 */
  dictType?: string;
  /** 展示状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportApiAccessLogExcelParams = {
  /** 用户编号 */
  userId?: number;
  /** 用户类型 */
  userType?: number;
  /** 应用名 */
  applicationName?: string;
  /** 请求地址，模糊匹配 */
  requestUrl?: string;
  /** 开始时间 */
  beginTime?: string[];
  /** 执行时长,大于等于，单位：毫秒 */
  duration?: number;
  /** 结果码 */
  resultCode?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportApiErrorLogExcelParams = {
  /** 用户编号 */
  userId?: number;
  /** 用户类型 */
  userType?: number;
  /** 应用名 */
  applicationName?: string;
  /** 请求地址 */
  requestUrl?: string;
  /** 异常发生时间 */
  exceptionTime?: string[];
  /** 处理状态 */
  processStatus?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportBannerExcelParams = {
  /** 标题 */
  title?: string;
  /** Banner类型 */
  type?: number;
  /** 状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
};

export type exportConfigParams = {
  /** 数据源名称，模糊匹配 */
  name?: string;
  /** 参数键名，模糊匹配 */
  key?: string;
  /** 参数类型，参见 SysConfigTypeEnum 枚举 */
  type?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportDemo01ContactExcelParams = {
  /** 名字 */
  name?: string;
  /** 性别 */
  sex?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportDemo02CategoryExcelParams = {
  /** 名字 */
  name?: string;
  /** 父级编号 */
  parentId?: number;
  /** 创建时间 */
  createTime?: string[];
};

export type exportDemo03StudentExcelParams = {
  /** 名字 */
  name?: string;
  /** 性别 */
  sex?: number;
  /** 简介 */
  description?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportJobExcelParams = {
  /** 任务名称，模糊匹配 */
  name?: string;
  /** 任务状态，参见 JobStatusEnum 枚举 */
  status?: number;
  /** 处理器的名字，模糊匹配 */
  handlerName?: string;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportJobLogExcelParams = {
  /** 任务编号 */
  jobId?: number;
  /** 处理器的名字，模糊匹配 */
  handlerName?: string;
  /** 开始执行时间 */
  beginTime?: string;
  /** 结束执行时间 */
  endTime?: string;
  /** 任务状态，参见 JobLogStatusEnum 枚举 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportLoginLogParams = {
  /** 用户 IP，模拟匹配 */
  userIp?: string;
  /** 用户账号，模拟匹配 */
  username?: string;
  /** 操作状态 */
  status?: boolean;
  /** 登录时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportOperateLogParams = {
  /** 用户编号 */
  userId?: number;
  /** 操作模块业务编号 */
  bizId?: number;
  /** 操作模块，模拟匹配 */
  type?: string;
  /** 操作名，模拟匹配 */
  subType?: string;
  /** 操作明细，模拟匹配 */
  action?: string;
  /** 开始时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportSmsLogExcelParams = {
  /** 短信渠道编号 */
  channelId?: number;
  /** 模板编号 */
  templateId?: number;
  /** 手机号 */
  mobile?: string;
  /** 发送状态，参见 SmsSendStatusEnum 枚举类 */
  sendStatus?: number;
  /** 发送时间 */
  sendTime?: string[];
  /** 接收状态，参见 SmsReceiveStatusEnum 枚举类 */
  receiveStatus?: number;
  /** 接收时间 */
  receiveTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportSmsTemplateExcelParams = {
  /** 短信签名 */
  type?: number;
  /** 开启状态 */
  status?: number;
  /** 模板编码，模糊匹配 */
  code?: string;
  /** 模板内容，模糊匹配 */
  content?: string;
  /** 短信 API 的模板编号，模糊匹配 */
  apiTemplateId?: string;
  /** 短信渠道编号 */
  channelId?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportTenantExcelParams = {
  /** 租户名 */
  name?: string;
  /** 联系人 */
  contactName?: string;
  /** 联系手机 */
  contactMobile?: string;
  /** 租户状态（0正常 1停用） */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportUserListParams = {
  /** 用户账号，模糊匹配 */
  username?: string;
  /** 手机号码，模糊匹配 */
  mobile?: string;
  /** 展示状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 部门编号，同时筛选子部门 */
  deptId?: number;
  /** 角色编号 */
  roleId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type exportUserTypeExcelParams = {
  /** 用户编号 */
  userId?: number;
  /** 用户类型 */
  userType?: number;
  /** 创建时间 */
  createTime?: string[];
};

export type exportUsingGETParams = {
  /** 角色名称，模糊匹配 */
  name?: string;
  /** 角色标识，模糊匹配 */
  code?: string;
  /** 展示状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type FileClientConfig = object;

export type FileConfigRespVO = {
  /** 编号 */
  id: number;
  /** 配置名 */
  name: string;
  /** 存储器，参见 FileStorageEnum 枚举类 */
  storage: number;
  /** 是否为主配置 */
  master: boolean;
  /** 存储配置 */
  config: FileClientConfig;
  /** 备注 */
  remark?: string;
  /** 创建时间 */
  createTime: string;
};

export type FileConfigSaveReqVO = {
  /** 编号 */
  id?: number;
  /** 配置名 */
  name: string;
  /** 存储器，参见 FileStorageEnum 枚举类 */
  storage: number;
  /** 存储配置,配置是动态参数，所以使用 Map 接收 */
  config: Record<string, unknown>;
  /** 备注 */
  remark?: string;
};

export type FileCreateReqVO = {
  /** 文件配置编号 */
  configId: number;
  /** 文件路径 */
  path: string;
  /** 原文件名 */
  name: string;
  /** 文件 URL */
  url: string;
  /** 文件 MIME 类型 */
  type?: string;
  /** 文件大小 */
  size: number;
};

export type FilePresignedUrlRespVO = {
  /** 配置编号 */
  configId: number;
  /** 文件上传 URL */
  uploadUrl: string;
  /** 文件访问 URL */
  url: string;
  /** 文件路径 */
  path: string;
};

export type FileRespVO = {
  /** 文件编号 */
  id: number;
  /** 配置编号 */
  configId: number;
  /** 文件路径 */
  path: string;
  /** 原文件名 */
  name: string;
  /** 文件 URL */
  url: string;
  /** 文件MIME类型 */
  type?: string;
  /** 文件大小 */
  size: number;
  /** 创建时间 */
  createTime: string;
};

export type getAccessTokenPageParams = {
  /** 用户编号 */
  userId: number;
  /** 用户类型，参见 UserTypeEnum 枚举 */
  userType: number;
  /** 客户端编号 */
  clientId: string;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getApiAccessLogPageParams = {
  /** 用户编号 */
  userId?: number;
  /** 用户类型 */
  userType?: number;
  /** 应用名 */
  applicationName?: string;
  /** 请求地址，模糊匹配 */
  requestUrl?: string;
  /** 开始时间 */
  beginTime?: string[];
  /** 执行时长,大于等于，单位：毫秒 */
  duration?: number;
  /** 结果码 */
  resultCode?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getApiErrorLogPageParams = {
  /** 用户编号 */
  userId?: number;
  /** 用户类型 */
  userType?: number;
  /** 应用名 */
  applicationName?: string;
  /** 请求地址 */
  requestUrl?: string;
  /** 异常发生时间 */
  exceptionTime?: string[];
  /** 处理状态 */
  processStatus?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getAreaByIpParams = {
  /** IP */
  ip: string;
};

export type getBannerList1Params = {
  /** 编号列表 */
  ids: number[];
};

export type getBannerListParams = {
  /** Banner位置 */
  position?: number;
};

export type getBannerPageParams = {
  /** 标题 */
  title?: string;
  /** Banner类型 */
  type?: number;
  /** 状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBannerParams = {
  /** 编号 */
  id: number;
};

export type getCodegenDetailParams = {
  /** 表编号 */
  tableId: number;
};

export type getCodegenTableListParams = {
  /** 数据源配置的编号 */
  dataSourceConfigId: number;
};

export type getCodegenTablePageParams = {
  /** 表名称，模糊匹配 */
  tableName?: string;
  /** 表描述，模糊匹配 */
  tableComment?: string;
  /** 实体，模糊匹配 */
  className?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getConfigKeyParams = {
  /** 参数键 */
  key: string;
};

export type getConfigPageParams = {
  /** 数据源名称，模糊匹配 */
  name?: string;
  /** 参数键名，模糊匹配 */
  key?: string;
  /** 参数类型，参见 SysConfigTypeEnum 枚举 */
  type?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getConfigParams = {
  /** 编号 */
  id: number;
};

export type getDatabaseTableListParams = {
  /** 数据源配置的编号 */
  dataSourceConfigId: number;
  /** 表名，模糊匹配 */
  name?: string;
  /** 描述，模糊匹配 */
  comment?: string;
};

export type getDataSourceConfigParams = {
  /** 编号 */
  id: number;
};

export type getDemo01ContactPageParams = {
  /** 名字 */
  name?: string;
  /** 性别 */
  sex?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getDemo01ContactParams = {
  /** 编号 */
  id: number;
};

export type getDemo02CategoryListParams = {
  /** 名字 */
  name?: string;
  /** 父级编号 */
  parentId?: number;
  /** 创建时间 */
  createTime?: string[];
};

export type getDemo02CategoryParams = {
  /** 编号 */
  id: number;
};

export type getDemo03CourseListByStudentIdParams = {
  /** 学生编号 */
  studentId: number;
};

export type getDemo03CoursePageParams = {
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
  /** 学生编号 */
  studentId: number;
};

export type getDemo03CourseParams = {
  /** 编号 */
  id: number;
};

export type getDemo03GradeByStudentIdParams = {
  /** 学生编号 */
  studentId: number;
};

export type getDemo03GradePageParams = {
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
  /** 学生编号 */
  studentId: number;
};

export type getDemo03GradeParams = {
  /** 编号 */
  id: number;
};

export type getDemo03StudentPageParams = {
  /** 名字 */
  name?: string;
  /** 性别 */
  sex?: number;
  /** 简介 */
  description?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getDemo03StudentParams = {
  /** 编号 */
  id: number;
};

export type getDeptListParams = {
  /** 部门名称，模糊匹配 */
  name?: string;
  /** 展示状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
};

export type getDeptParams = {
  /** 编号 */
  id: number;
};

export type getDictDataListByTypeParams = {
  /** 字典类型 */
  type: string;
};

export type getDictDataParams = {
  /** 编号 */
  id: number;
};

export type getDictTypePageParams = {
  /** 字典标签 */
  label?: string;
  /** 字典类型，模糊匹配 */
  dictType?: string;
  /** 展示状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getDictTypeParams = {
  /** 编号 */
  id: number;
};

export type getFileConfigPageParams = {
  /** 配置名 */
  name?: string;
  /** 存储器 */
  storage?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getFileConfigParams = {
  /** 编号 */
  id: number;
};

export type getFilePageParams = {
  /** 文件路径，模糊匹配 */
  path?: string;
  /** 文件类型，模糊匹配 */
  type?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getFilePresignedUrl1Params = {
  /** 文件名称 */
  name: string;
  /** 文件目录 */
  directory?: string;
};

export type getFilePresignedUrlParams = {
  /** 文件名称 */
  name: string;
  /** 文件目录 */
  directory?: string;
};

export type getForumCommentPage1Params = {
  /** 帖子编号 */
  postId?: number;
  /** 用户编号 */
  userId?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getForumCommentPageParams = {
  /** 帖子编号 */
  postId: number;
  /** 父评论编号 */
  parentId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getForumCommentParams = {
  /** 编号 */
  id: number;
};

export type getForumPost1Params = {
  /** 编号 */
  id: number;
};

export type getForumPostPage1Params = {
  /** 用户编号 */
  userId?: number;
  /** 标题 */
  title?: string;
  /** 状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getForumPostPageParams = {
  /** 用户编号 */
  userId?: number;
  /** 标题 */
  title?: string;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getForumPostParams = {
  /** 编号 */
  id: number;
};

export type getJob1Params = {
  /** 编号 */
  id: number;
};

export type getJobApplicationPageParams = {
  /** 职位编号 */
  jobId?: number;
  /** 求职者编号 */
  jobSeekerId?: number;
  /** 状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getJobApplicationParams = {
  /** 编号 */
  id: number;
};

export type getJobCategoryListByParentIdParams = {
  /** 父分类编号 */
  parentId?: number;
};

export type getJobCategoryPageParams = {
  /** 分类名称 */
  name?: string;
  /** 父分类编号 */
  parentId?: number;
  /** 状态 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getJobCategoryParams = {
  /** 编号 */
  id: number;
};

export type getJobLogPageParams = {
  /** 任务编号 */
  jobId?: number;
  /** 处理器的名字，模糊匹配 */
  handlerName?: string;
  /** 开始执行时间 */
  beginTime?: string;
  /** 结束执行时间 */
  endTime?: string;
  /** 任务状态，参见 JobLogStatusEnum 枚举 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getJobLogParams = {
  /** 编号 */
  id: number;
};

export type getJobNextTimesParams = {
  /** 编号 */
  id: number;
  /** 数量 */
  count?: number;
};

export type getJobPage1Params = {
  /** 任务名称，模糊匹配 */
  name?: string;
  /** 任务状态，参见 JobStatusEnum 枚举 */
  status?: number;
  /** 处理器的名字，模糊匹配 */
  handlerName?: string;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getJobPageParams = {
  /** 职位标题 */
  title?: string;
  /** 公司编号 */
  companyId?: number;
  /** 职位分类编号 */
  categoryId?: number;
  /** 工作类型 */
  jobType?: number;
  /** 状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getJobParams = {
  /** 编号 */
  id: number;
};

export type getJobSeekerByUserIdParams = {
  /** 用户编号 */
  userId: number;
};

export type getJobSeekerPageParams = {
  /** 用户编号 */
  userId?: number;
  /** 真实姓名 */
  realName?: string;
  /** 专业类别 */
  category?: string;
  /** 专业 */
  specialty?: string;
  /** 状态 */
  status?: number;
  /** 是否认证 */
  isCertified?: boolean;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getJobSeekerParams = {
  /** 编号 */
  id: number;
};

export type getLoginLogPageParams = {
  /** 用户 IP，模拟匹配 */
  userIp?: string;
  /** 用户账号，模拟匹配 */
  username?: string;
  /** 操作状态 */
  status?: boolean;
  /** 登录时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getMailAccountPageParams = {
  /** 邮箱 */
  mail: string;
  /** 用户名 */
  username: string;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getMailAccountParams = {
  /** 编号 */
  id: number;
};

export type getMailLogPageParams = {
  /** 用户编号 */
  userId?: number;
  /** 用户类型，参见 UserTypeEnum 枚举 */
  userType?: number;
  /** 接收邮箱地址，模糊匹配 */
  toMail?: string;
  /** 邮箱账号编号 */
  accountId?: number;
  /** 模板编号 */
  templateId?: number;
  /** 发送状态，参见 MailSendStatusEnum 枚举 */
  sendStatus?: number;
  /** 发送时间 */
  sendTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getMailTemplate1Params = {
  /** 编号 */
  id: number;
};

export type getMailTemplatePageParams = {
  /** 状态，参见 CommonStatusEnum 枚举 */
  status?: number;
  /** 标识，模糊匹配 */
  code?: string;
  /** 名称，模糊匹配 */
  name?: string;
  /** 账号编号 */
  accountId?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getMailTemplateParams = {
  /** 编号 */
  id: number;
};

export type getMenuListParams = {
  /** 菜单名称，模糊匹配 */
  name?: string;
  /** 展示状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
};

export type getMenuParams = {
  id: number;
};

export type getMessagePage1Params = {
  /** 发送者用户编号 */
  fromUserId?: number;
  /** 接收者用户编号 */
  toUserId?: number;
  /** 消息类型 */
  type?: number;
  /** 是否已读 */
  isRead?: boolean;
  /** 关联业务类型 */
  businessType?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getMessagePageParams = {
  /** 发送者用户编号 */
  fromUserId?: number;
  /** 消息类型 */
  type?: number;
  /** 是否已读 */
  isRead?: boolean;
  /** 关联业务类型 */
  businessType?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getMessageParams = {
  /** 编号 */
  id: number;
};

export type getMyMyNotifyMessagePageParams = {
  /** 是否已读 */
  readStatus?: boolean;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getNoticePageParams = {
  /** 通知公告名称，模糊匹配 */
  title?: string;
  /** 展示状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getNoticeParams = {
  /** 编号 */
  id: number;
};

export type getNotifyMessagePageParams = {
  /** 用户编号 */
  userId?: number;
  /** 用户类型 */
  userType?: number;
  /** 模板编码 */
  templateCode?: string;
  /** 模版类型 */
  templateType?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getNotifyMessageParams = {
  /** 编号 */
  id: number;
};

export type getNotifyTemplatePageParams = {
  /** 模版编码 */
  code?: string;
  /** 模版名称 */
  name?: string;
  /** 状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getNotifyTemplateParams = {
  /** 编号 */
  id: number;
};

export type getOAuth2ClientPageParams = {
  /** 应用名，模糊匹配 */
  name?: string;
  /** 状态，参见 CommonStatusEnum 枚举 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getOAuth2ClientParams = {
  /** 编号 */
  id: number;
};

export type getPostPageParams = {
  /** 岗位编码，模糊匹配 */
  code?: string;
  /** 岗位名称，模糊匹配 */
  name?: string;
  /** 展示状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getPostParams = {
  /** 岗位编号 */
  id: number;
};

export type getRoleMenuListParams = {
  /** 角色编号 */
  roleId: number;
};

export type getRolePageParams = {
  /** 角色名称，模糊匹配 */
  name?: string;
  /** 角色标识，模糊匹配 */
  code?: string;
  /** 展示状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getRoleParams = {
  id: number;
};

export type getSmsChannelPageParams = {
  /** 任务状态 */
  status?: number;
  /** 短信签名，模糊匹配 */
  signature?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getSmsChannelParams = {
  /** 编号 */
  id: number;
};

export type getSmsLogPageParams = {
  /** 短信渠道编号 */
  channelId?: number;
  /** 模板编号 */
  templateId?: number;
  /** 手机号 */
  mobile?: string;
  /** 发送状态，参见 SmsSendStatusEnum 枚举类 */
  sendStatus?: number;
  /** 发送时间 */
  sendTime?: string[];
  /** 接收状态，参见 SmsReceiveStatusEnum 枚举类 */
  receiveStatus?: number;
  /** 接收时间 */
  receiveTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getSmsTemplatePageParams = {
  /** 短信签名 */
  type?: number;
  /** 开启状态 */
  status?: number;
  /** 模板编码，模糊匹配 */
  code?: string;
  /** 模板内容，模糊匹配 */
  content?: string;
  /** 短信 API 的模板编号，模糊匹配 */
  apiTemplateId?: string;
  /** 短信渠道编号 */
  channelId?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getSmsTemplateParams = {
  /** 编号 */
  id: number;
};

export type getSocialClientPageParams = {
  /** 应用名 */
  name?: string;
  /** 社交平台的类型 */
  socialType?: number;
  /** 用户类型 */
  userType?: number;
  /** 客户端编号 */
  clientId?: string;
  /** 状态 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getSocialClientParams = {
  /** 编号 */
  id: number;
};

export type getSocialUserPageParams = {
  /** 社交平台的类型 */
  type?: number;
  /** 用户昵称 */
  nickname?: string;
  /** 社交 openid */
  openid?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getSocialUserParams = {
  /** 编号 */
  id: number;
};

export type getTenantByWebsiteParams = {
  /** 域名 */
  website: string;
};

export type getTenantIdByNameParams = {
  /** 租户名 */
  name: string;
};

export type getTenantPackagePageParams = {
  /** 套餐名 */
  name?: string;
  /** 状态 */
  status?: number;
  /** 备注 */
  remark?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getTenantPackageParams = {
  /** 编号 */
  id: number;
};

export type getTenantPageParams = {
  /** 租户名 */
  name?: string;
  /** 联系人 */
  contactName?: string;
  /** 联系手机 */
  contactMobile?: string;
  /** 租户状态（0正常 1停用） */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getTenantParams = {
  /** 编号 */
  id: number;
};

export type getUnreadNotifyMessageListParams = {
  /** 10 */
  size?: number;
};

export type getUserPageParams = {
  /** 用户账号，模糊匹配 */
  username?: string;
  /** 手机号码，模糊匹配 */
  mobile?: string;
  /** 展示状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 部门编号，同时筛选子部门 */
  deptId?: number;
  /** 角色编号 */
  roleId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getUserParams = {
  /** 编号 */
  id: number;
};

export type getUserTypeListParams = {
  /** 编号列表 */
  ids: number[];
};

export type getUserTypePageParams = {
  /** 用户编号 */
  userId?: number;
  /** 用户类型 */
  userType?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getUserTypeParams = {
  /** 编号 */
  id: number;
};

export type importExcelParams = {
  /** 是否支持更新，默认为 false */
  updateSupport?: boolean;
  /** Excel 文件 */
  file: unknown;
};

export type JobLogRespVO = {
  /** 日志编号 */
  id: number;
  /** 任务编号 */
  jobId: number;
  /** 处理器的名字 */
  handlerName: string;
  /** 处理器的参数 */
  handlerParam?: string;
  /** 第几次执行 */
  executeIndex: number;
  /** 开始执行时间 */
  beginTime: string;
  /** 结束执行时间 */
  endTime?: string;
  /** 执行时长 */
  duration?: number;
  /** 任务状态，参见 JobLogStatusEnum 枚举 */
  status: number;
  /** 结果数据 */
  result?: string;
  /** 创建时间 */
  createTime: string;
};

export type JobRespVO = {
  /** 任务编号 */
  id: number;
  /** 任务名称 */
  name: string;
  /** 任务状态 */
  status: number;
  /** 处理器的名字 */
  handlerName: string;
  /** 处理器的参数 */
  handlerParam?: string;
  /** CRON 表达式 */
  cronExpression: string;
  /** 重试次数 */
  retryCount: number;
  /** 重试间隔 */
  retryInterval: number;
  /** 监控超时时间 */
  monitorTimeout?: number;
  /** 创建时间 */
  createTime: string;
};

export type JobSaveReqVO = {
  /** 任务编号 */
  id?: number;
  /** 任务名称 */
  name: string;
  /** 处理器的名字 */
  handlerName: string;
  /** 处理器的参数 */
  handlerParam?: string;
  /** CRON 表达式 */
  cronExpression: string;
  /** 重试次数 */
  retryCount: number;
  /** 重试间隔 */
  retryInterval: number;
  /** 监控超时时间 */
  monitorTimeout?: number;
};

export type KeyValueStringBoolean = {
  key?: string;
  value?: boolean;
};

export type likeForumCommentParams = {
  /** 编号 */
  id: number;
};

export type likeForumPostParams = {
  /** 编号 */
  id: number;
};

export type listAdminRolesParams = {
  /** 用户编号 */
  userId: number;
};

export type LoginLogRespVO = {
  /** 日志编号 */
  id: number;
  /** 日志类型，参见 LoginLogTypeEnum 枚举类 */
  logType: number;
  /** 用户编号 */
  userId?: number;
  /** 用户类型，参见 UserTypeEnum 枚举 */
  userType: number;
  /** 链路追踪编号 */
  traceId?: string;
  /** 用户账号 */
  username: string;
  /** 登录结果，参见 LoginResultEnum 枚举类 */
  result: number;
  /** 用户 IP */
  userIp: string;
  /** 浏览器 UserAgent */
  userAgent?: string;
  /** 登录时间 */
  createTime: string;
};

export type MailAccountRespVO = {
  /** 编号 */
  id: number;
  /** 邮箱 */
  mail: string;
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
  /** SMTP 服务器域名 */
  host: string;
  /** SMTP 服务器端口 */
  port: number;
  /** 是否开启 ssl */
  sslEnable: boolean;
  /** 是否开启 starttls */
  starttlsEnable: boolean;
  /** 创建时间 */
  createTime: string;
};

export type MailAccountSaveReqVO = {
  /** 编号 */
  id?: number;
  /** 邮箱 */
  mail: string;
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
  /** SMTP 服务器域名 */
  host: string;
  /** SMTP 服务器端口 */
  port: number;
  /** 是否开启 ssl */
  sslEnable: boolean;
  /** 是否开启 starttls */
  starttlsEnable: boolean;
};

export type MailAccountSimpleRespVO = {
  /** 邮箱编号 */
  id: number;
  /** 邮箱 */
  mail: string;
};

export type MailLogRespVO = {
  /** 编号 */
  id: number;
  /** 用户编号 */
  userId?: number;
  /** 用户类型，参见 UserTypeEnum 枚举 */
  userType?: string;
  /** 接收邮箱地址 */
  toMail: string;
  /** 邮箱账号编号 */
  accountId: number;
  /** 发送邮箱地址 */
  fromMail: string;
  /** 模板编号 */
  templateId: number;
  /** 模板编码 */
  templateCode: string;
  /** 模版发送人名称 */
  templateNickname?: string;
  /** 邮件标题 */
  templateTitle: string;
  /** 邮件内容 */
  templateContent: string;
  /** 邮件参数 */
  templateParams: Record<string, unknown>;
  /** 发送状态，参见 MailSendStatusEnum 枚举 */
  sendStatus: string;
  /** 发送时间 */
  sendTime?: string;
  /** 发送返回的消息 ID */
  sendMessageId?: string;
  /** 发送异常 */
  sendException?: string;
  /** 创建时间 */
  createTime: string;
};

export type MailTemplateRespVO = {
  /** 编号 */
  id: number;
  /** 模版名称 */
  name: string;
  /** 模版编号 */
  code: string;
  /** 发送的邮箱账号编号 */
  accountId: number;
  /** 发送人名称 */
  nickname?: string;
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 参数数组 */
  params?: string[];
  /** 状态，参见 CommonStatusEnum 枚举 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 创建时间 */
  createTime: string;
};

export type MailTemplateSaveReqVO = {
  /** 编号 */
  id?: number;
  /** 模版名称 */
  name: string;
  /** 模版编号 */
  code: string;
  /** 发送的邮箱账号编号 */
  accountId: number;
  /** 发送人名称 */
  nickname?: string;
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 状态，参见 CommonStatusEnum 枚举 */
  status: number;
  /** 备注 */
  remark?: string;
};

export type MailTemplateSendReqVO = {
  /** 接收邮箱 */
  mail: string;
  /** 模板编码 */
  templateCode: string;
  /** 模板参数 */
  templateParams?: Record<string, unknown>;
};

export type MailTemplateSimpleRespVO = {
  /** 模版编号 */
  id: number;
  /** 模版名字 */
  name: string;
};

export type markMessageAsReadParams = {
  /** 编号 */
  id: number;
};

export type MenuRespVO = {
  /** 菜单编号 */
  id: number;
  /** 菜单名称 */
  name: string;
  /** 权限标识,仅菜单类型为按钮时，才需要传递 */
  permission?: string;
  /** 类型，参见 MenuTypeEnum 枚举类 */
  type: number;
  /** 显示顺序 */
  sort: number;
  /** 父菜单 ID */
  parentId: number;
  /** 路由地址,仅菜单类型为菜单或者目录时，才需要传 */
  path?: string;
  /** 菜单图标,仅菜单类型为菜单或者目录时，才需要传 */
  icon?: string;
  /** 组件路径,仅菜单类型为菜单时，才需要传 */
  component?: string;
  /** 组件名 */
  componentName?: string;
  /** 状态,见 CommonStatusEnum 枚举 */
  status: number;
  /** 是否可见 */
  visible?: boolean;
  /** 是否缓存 */
  keepAlive?: boolean;
  /** 是否总是显示 */
  alwaysShow?: boolean;
  /** 创建时间 */
  createTime: string;
};

export type MenuSaveVO = {
  /** 菜单编号 */
  id?: number;
  /** 菜单名称 */
  name: string;
  /** 权限标识,仅菜单类型为按钮时，才需要传递 */
  permission?: string;
  /** 类型，参见 MenuTypeEnum 枚举类 */
  type: number;
  /** 显示顺序 */
  sort: number;
  /** 父菜单 ID */
  parentId: number;
  /** 路由地址,仅菜单类型为菜单或者目录时，才需要传 */
  path?: string;
  /** 菜单图标,仅菜单类型为菜单或者目录时，才需要传 */
  icon?: string;
  /** 组件路径,仅菜单类型为菜单时，才需要传 */
  component?: string;
  /** 组件名 */
  componentName?: string;
  /** 状态,见 CommonStatusEnum 枚举 */
  status: number;
  /** 是否可见 */
  visible?: boolean;
  /** 是否缓存 */
  keepAlive?: boolean;
  /** 是否总是显示 */
  alwaysShow?: boolean;
};

export type MenuSimpleRespVO = {
  /** 菜单编号 */
  id: number;
  /** 菜单名称 */
  name: string;
  /** 父菜单 ID */
  parentId: number;
  /** 类型，参见 MenuTypeEnum 枚举类 */
  type: number;
};

export type MenuVO = {
  /** 菜单名称 */
  id: number;
  /** 父菜单 ID */
  parentId: number;
  /** 菜单名称 */
  name: string;
  /** 路由地址,仅菜单类型为菜单或者目录时，才需要传 */
  path?: string;
  /** 组件路径,仅菜单类型为菜单时，才需要传 */
  component?: string;
  /** 组件名 */
  componentName?: string;
  /** 菜单图标,仅菜单类型为菜单或者目录时，才需要传 */
  icon?: string;
  /** 是否可见 */
  visible: boolean;
  /** 是否缓存 */
  keepAlive: boolean;
  /** 是否总是显示 */
  alwaysShow?: boolean;
};

export type NoticeRespVO = {
  /** 通知公告序号 */
  id: number;
  /** 公告标题 */
  title: string;
  /** 公告类型 */
  type: number;
  /** 公告内容 */
  content: string;
  /** 状态，参见 CommonStatusEnum 枚举类 */
  status: number;
  /** 创建时间 */
  createTime: string;
};

export type NoticeSaveReqVO = {
  /** 岗位公告编号 */
  id?: number;
  /** 公告标题 */
  title: string;
  /** 公告类型 */
  type: number;
  /** 公告内容 */
  content: string;
  /** 状态，参见 CommonStatusEnum 枚举类 */
  status: number;
};

export type NotifyMessageRespVO = {
  /** ID */
  id: number;
  /** 用户编号 */
  userId: number;
  /** 用户类型，参见 UserTypeEnum 枚举 */
  userType: string;
  /** 模版编号 */
  templateId: number;
  /** 模板编码 */
  templateCode: string;
  /** 模版发送人名称 */
  templateNickname: string;
  /** 模版内容 */
  templateContent: string;
  /** 模版类型 */
  templateType: number;
  /** 模版参数 */
  templateParams: Record<string, unknown>;
  /** 是否已读 */
  readStatus: boolean;
  /** 阅读时间 */
  readTime?: string;
  /** 创建时间 */
  createTime: string;
};

export type NotifyTemplateRespVO = {
  /** ID */
  id: number;
  /** 模版名称 */
  name: string;
  /** 模版编码 */
  code: string;
  /** 模版类型，对应 system_notify_template_type 字典 */
  type: number;
  /** 发送人名称 */
  nickname: string;
  /** 模版内容 */
  content: string;
  /** 参数数组 */
  params?: string[];
  /** 状态，参见 CommonStatusEnum 枚举 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 创建时间 */
  createTime: string;
};

export type NotifyTemplateSaveReqVO = {
  /** ID */
  id?: number;
  /** 模版名称 */
  name: string;
  /** 模版编码 */
  code: string;
  /** 模版类型，对应 system_notify_template_type 字典 */
  type: number;
  /** 发送人名称 */
  nickname: string;
  /** 模版内容 */
  content: string;
  /** 状态，参见 CommonStatusEnum 枚举 */
  status: number;
  /** 备注 */
  remark?: string;
};

export type NotifyTemplateSendReqVO = {
  /** 用户id */
  userId: number;
  /** 用户类型 */
  userType: number;
  /** 模板编码 */
  templateCode: string;
  /** 模板参数 */
  templateParams?: Record<string, unknown>;
};

export type OAuth2AccessTokenRespVO = {
  /** 编号 */
  id: number;
  /** 访问令牌 */
  accessToken: string;
  /** 刷新令牌 */
  refreshToken: string;
  /** 用户编号 */
  userId: number;
  /** 用户类型，参见 UserTypeEnum 枚举 */
  userType: number;
  /** 客户端编号 */
  clientId: string;
  /** 创建时间 */
  createTime: string;
  /** 过期时间 */
  expiresTime: string;
};

export type OAuth2ClientRespVO = {
  /** 编号 */
  id: number;
  /** 客户端编号 */
  clientId: string;
  /** 客户端密钥 */
  secret: string;
  /** 应用名 */
  name: string;
  /** 应用图标 */
  logo: string;
  /** 应用描述 */
  description?: string;
  /** 状态，参见 CommonStatusEnum 枚举 */
  status: number;
  /** 访问令牌的有效期 */
  accessTokenValiditySeconds: number;
  /** 刷新令牌的有效期 */
  refreshTokenValiditySeconds: number;
  /** 可重定向的 URI 地址 */
  redirectUris: string[];
  /** 授权类型，参见 OAuth2GrantTypeEnum 枚举 */
  authorizedGrantTypes: string[];
  /** 授权范围 */
  scopes?: string[];
  /** 自动通过的授权范围 */
  autoApproveScopes?: string[];
  /** 权限 */
  authorities?: string[];
  /** 资源 */
  resourceIds?: string[];
  /** 附加信息 */
  additionalInformation?: string;
  /** 创建时间 */
  createTime: string;
};

export type OAuth2ClientSaveReqVO = {
  /** 编号 */
  id?: number;
  /** 客户端编号 */
  clientId: string;
  /** 客户端密钥 */
  secret: string;
  /** 应用名 */
  name: string;
  /** 应用图标 */
  logo: string;
  /** 应用描述 */
  description?: string;
  /** 状态，参见 CommonStatusEnum 枚举 */
  status: number;
  /** 访问令牌的有效期 */
  accessTokenValiditySeconds: number;
  /** 刷新令牌的有效期 */
  refreshTokenValiditySeconds: number;
  /** 可重定向的 URI 地址 */
  redirectUris: string[];
  /** 授权类型，参见 OAuth2GrantTypeEnum 枚举 */
  authorizedGrantTypes: string[];
  /** 授权范围 */
  scopes?: string[];
  /** 自动通过的授权范围 */
  autoApproveScopes?: string[];
  /** 权限 */
  authorities?: string[];
  /** 资源 */
  resourceIds?: string[];
  /** 附加信息 */
  additionalInformation?: string;
  additionalInformationJson?: boolean;
};

export type OAuth2OpenAccessTokenRespVO = {
  /** 授权范围,如果多个授权范围，使用空格分隔 */
  scope?: string;
  /** 访问令牌 */
  access_token: string;
  /** 刷新令牌 */
  refresh_token: string;
  /** 令牌类型 */
  token_type: string;
  /** 过期时间,单位：秒 */
  expires_in: number;
};

export type OAuth2OpenAuthorizeInfoRespVO = {
  client?: Client;
  /** scope 的选中信息,使用 List 保证有序性，Key 是 scope，Value 为是否选中 */
  scopes: KeyValueStringBoolean[];
};

export type OAuth2OpenCheckTokenRespVO = {
  /** 授权范围 */
  scopes: string[];
  /** 过期时间，时间戳 / 1000，即单位：秒 */
  exp: number;
  /** 用户编号 */
  user_id: number;
  /** 用户类型，参见 UserTypeEnum 枚举 */
  user_type: number;
  /** 租户编号 */
  tenant_id: number;
  /** 客户端编号 */
  client_id: string;
  /** 访问令牌 */
  access_token: string;
};

export type OAuth2UserInfoRespVO = {
  /** 用户编号 */
  id: number;
  /** 用户账号 */
  username: string;
  /** 用户昵称 */
  nickname: string;
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  mobile?: string;
  /** 用户性别，参见 SexEnum 枚举类 */
  sex?: number;
  /** 用户头像 */
  avatar?: string;
  dept?: Dept;
  posts?: Post[];
};

export type OAuth2UserUpdateReqVO = {
  /** 用户昵称 */
  nickname: string;
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  mobile?: string;
  /** 用户性别，参见 SexEnum 枚举类 */
  sex?: number;
};

export type OperateLogRespVO = {
  /** 日志编号 */
  id: number;
  /** 链路追踪编号 */
  traceId: string;
  /** 用户编号 */
  userId: number;
  /** 用户昵称 */
  userName: string;
  /** 操作模块类型 */
  type: string;
  /** 操作名 */
  subType: string;
  /** 操作模块业务编号 */
  bizId: number;
  /** 操作明细 */
  action?: string;
  /** 拓展字段 */
  extra?: string;
  /** 请求方法名 */
  requestMethod: string;
  /** 请求地址 */
  requestUrl: string;
  /** 用户 IP */
  userIp: string;
  /** 浏览器 UserAgent */
  userAgent: string;
  /** 创建时间 */
  createTime: string;
  transMap?: Record<string, unknown>;
};

export type pageDictTypesParams = {
  /** 字典类型名称，模糊匹配 */
  name?: string;
  /** 字典类型，模糊匹配 */
  type?: string;
  /** 展示状态，参见 CommonStatusEnum 枚举类 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type pageOperateLogParams = {
  /** 用户编号 */
  userId?: number;
  /** 操作模块业务编号 */
  bizId?: number;
  /** 操作模块，模拟匹配 */
  type?: string;
  /** 操作名，模拟匹配 */
  subType?: string;
  /** 操作明细，模拟匹配 */
  action?: string;
  /** 开始时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type PageResultApiAccessLogRespVO = {
  /** 数据 */
  list: ApiAccessLogRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultApiErrorLogRespVO = {
  /** 数据 */
  list: ApiErrorLogRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultBannerRespVO = {
  /** 数据 */
  list: BannerRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultCodegenTableRespVO = {
  /** 数据 */
  list: CodegenTableRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultConfigRespVO = {
  /** 数据 */
  list: ConfigRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultDemo01ContactRespVO = {
  /** 数据 */
  list: Demo01ContactRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultDemo03CourseDO = {
  /** 数据 */
  list: Demo03CourseDO[];
  /** 总量 */
  total: number;
};

export type PageResultDemo03GradeDO = {
  /** 数据 */
  list: Demo03GradeDO[];
  /** 总量 */
  total: number;
};

export type PageResultDemo03StudentRespVO = {
  /** 数据 */
  list: Demo03StudentRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultDictDataRespVO = {
  /** 数据 */
  list: DictDataRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultDictTypeRespVO = {
  /** 数据 */
  list: DictTypeRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultFileConfigRespVO = {
  /** 数据 */
  list: FileConfigRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultFileRespVO = {
  /** 数据 */
  list: FileRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultJobLogRespVO = {
  /** 数据 */
  list: JobLogRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultJobRespVO = {
  /** 数据 */
  list: JobRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultLoginLogRespVO = {
  /** 数据 */
  list: LoginLogRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultMailAccountRespVO = {
  /** 数据 */
  list: MailAccountRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultMailLogRespVO = {
  /** 数据 */
  list: MailLogRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultMailTemplateRespVO = {
  /** 数据 */
  list: MailTemplateRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultNoticeRespVO = {
  /** 数据 */
  list: NoticeRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultNotifyMessageRespVO = {
  /** 数据 */
  list: NotifyMessageRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultNotifyTemplateRespVO = {
  /** 数据 */
  list: NotifyTemplateRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultOAuth2AccessTokenRespVO = {
  /** 数据 */
  list: OAuth2AccessTokenRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultOAuth2ClientRespVO = {
  /** 数据 */
  list: OAuth2ClientRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultOperateLogRespVO = {
  /** 数据 */
  list: OperateLogRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultPostRespVO = {
  /** 数据 */
  list: PostRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultRoleRespVO = {
  /** 数据 */
  list: RoleRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultSmsChannelRespVO = {
  /** 数据 */
  list: SmsChannelRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultSmsLogRespVO = {
  /** 数据 */
  list: SmsLogRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultSmsTemplateRespVO = {
  /** 数据 */
  list: SmsTemplateRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultSocialClientRespVO = {
  /** 数据 */
  list: SocialClientRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultSocialUserRespVO = {
  /** 数据 */
  list: SocialUserRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultTenantPackageRespVO = {
  /** 数据 */
  list: TenantPackageRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultTenantRespVO = {
  /** 数据 */
  list: TenantRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultUserRespVO = {
  /** 数据 */
  list: UserRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultUserTypeRespVO = {
  /** 数据 */
  list: UserTypeRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPForumCommentRespAppVO = {
  /** 数据 */
  list: YRZPForumCommentRespAppVO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPForumCommentRespVO = {
  /** 数据 */
  list: YRZPForumCommentRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPForumPostRespAppVO = {
  /** 数据 */
  list: YRZPForumPostRespAppVO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPForumPostRespVO = {
  /** 数据 */
  list: YRZPForumPostRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPJobApplicationRespVO = {
  /** 数据 */
  list: YRZPJobApplicationRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPJobCategoryRespVO = {
  /** 数据 */
  list: YRZPJobCategoryRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPJobRespVO = {
  /** 数据 */
  list: YRZPJobRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPJobSeekerRespVO = {
  /** 数据 */
  list: YRZPJobSeekerRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPMessageRespAppVO = {
  /** 数据 */
  list: YRZPMessageRespAppVO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPMessageRespVO = {
  /** 数据 */
  list: YRZPMessageRespVO[];
  /** 总量 */
  total: number;
};

export type PermissionAssignRoleDataScopeReqVO = {
  /** 角色编号 */
  roleId: number;
  /** 数据范围，参见 DataScopeEnum 枚举类 */
  dataScope: number;
  /** 部门编号列表，只有范围类型为 DEPT_CUSTOM 时，该字段才需要 */
  dataScopeDeptIds?: number[];
};

export type PermissionAssignRoleMenuReqVO = {
  /** 角色编号 */
  roleId: number;
  /** 菜单编号列表 */
  menuIds?: number[];
};

export type PermissionAssignUserRoleReqVO = {
  /** 用户编号 */
  userId: number;
  /** 角色编号列表 */
  roleIds?: number[];
};

export type PointVO = {
  secretKey?: string;
  x?: number;
  y?: number;
};

export type Post = {
  /** 岗位编号 */
  id: number;
  /** 岗位名称 */
  name: string;
};

export type postAccessTokenParams = {
  /** 授权类型 */
  grant_type: string;
  /** 授权范围 */
  code?: string;
  /** 重定向 URI */
  redirect_uri?: string;
  /** 状态 */
  state?: string;
  username?: string;
  password?: string;
  scope?: string;
  refresh_token?: string;
};

export type PostRespVO = {
  /** 岗位序号 */
  id: number;
  /** 岗位名称 */
  name: string;
  /** 岗位编码 */
  code: string;
  /** 显示顺序 */
  sort: number;
  /** 状态，参见 CommonStatusEnum 枚举类 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 创建时间 */
  createTime: string;
};

export type PostSaveReqVO = {
  /** 岗位编号 */
  id?: number;
  /** 岗位名称 */
  name: string;
  /** 岗位编码 */
  code: string;
  /** 显示顺序 */
  sort: number;
  /** 状态 */
  status: number;
  /** 备注 */
  remark?: string;
};

export type PostSimpleRespVO = {
  /** 岗位序号 */
  id: number;
  /** 岗位名称 */
  name: string;
};

export type previewCodegenParams = {
  /** 表编号 */
  tableId: number;
};

export type pushParams = {
  /** 编号 */
  id: number;
};

export type RedisMonitorRespVO = {
  /** Redis info 指令结果,具体字段，查看 Redis 文档 */
  info: Record<string, unknown>;
  /** Redis key 数量 */
  dbSize: number;
  /** CommandStat 数组 */
  commandStats: CommandStat[];
};

export type refreshTokenParams = {
  /** 刷新令牌 */
  refreshToken: string;
};

export enum RepCodeEnumEnum {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  EXCEPTION = 'EXCEPTION',
  BLANK_ERROR = 'BLANK_ERROR',
  NULL_ERROR = 'NULL_ERROR',
  NOT_NULL_ERROR = 'NOT_NULL_ERROR',
  NOT_EXIST_ERROR = 'NOT_EXIST_ERROR',
  EXIST_ERROR = 'EXIST_ERROR',
  PARAM_TYPE_ERROR = 'PARAM_TYPE_ERROR',
  PARAM_FORMAT_ERROR = 'PARAM_FORMAT_ERROR',
  API_CAPTCHA_INVALID = 'API_CAPTCHA_INVALID',
  API_CAPTCHA_COORDINATE_ERROR = 'API_CAPTCHA_COORDINATE_ERROR',
  API_CAPTCHA_ERROR = 'API_CAPTCHA_ERROR',
  API_CAPTCHA_BASEMAP_NULL = 'API_CAPTCHA_BASEMAP_NULL',
  API_REQ_LIMIT_GET_ERROR = 'API_REQ_LIMIT_GET_ERROR',
  API_REQ_INVALID = 'API_REQ_INVALID',
  API_REQ_LOCK_GET_ERROR = 'API_REQ_LOCK_GET_ERROR',
  API_REQ_LIMIT_CHECK_ERROR = 'API_REQ_LIMIT_CHECK_ERROR',
  API_REQ_LIMIT_VERIFY_ERROR = 'API_REQ_LIMIT_VERIFY_ERROR',
}

export type IRepCodeEnumEnum = keyof typeof RepCodeEnumEnum;

export type ResponseModel = {
  repCode?: string;
  repMsg?: string;
  repData?: Record<string, unknown>;
  success?: boolean;
  repCodeEnum?:
    | 'SUCCESS'
    | 'ERROR'
    | 'EXCEPTION'
    | 'BLANK_ERROR'
    | 'NULL_ERROR'
    | 'NOT_NULL_ERROR'
    | 'NOT_EXIST_ERROR'
    | 'EXIST_ERROR'
    | 'PARAM_TYPE_ERROR'
    | 'PARAM_FORMAT_ERROR'
    | 'API_CAPTCHA_INVALID'
    | 'API_CAPTCHA_COORDINATE_ERROR'
    | 'API_CAPTCHA_ERROR'
    | 'API_CAPTCHA_BASEMAP_NULL'
    | 'API_REQ_LIMIT_GET_ERROR'
    | 'API_REQ_INVALID'
    | 'API_REQ_LOCK_GET_ERROR'
    | 'API_REQ_LIMIT_CHECK_ERROR'
    | 'API_REQ_LIMIT_VERIFY_ERROR';
};

export type revokeTokenParams = {
  /** 访问令牌 */
  token: string;
};

export type RoleRespVO = {
  /** 角色编号 */
  id: number;
  /** 角色名称 */
  name: string;
  /** 角色标志 */
  code: string;
  /** 显示顺序 */
  sort: number;
  /** 状态，参见 CommonStatusEnum 枚举类 */
  status: number;
  /** 角色类型，参见 RoleTypeEnum 枚举类 */
  type: number;
  /** 备注 */
  remark?: string;
  /** 数据范围，参见 DataScopeEnum 枚举类 */
  dataScope: number;
  /** 数据范围(指定部门数组) */
  dataScopeDeptIds?: number[];
  /** 创建时间 */
  createTime: string;
};

export type RoleSaveReqVO = {
  /** 角色编号 */
  id?: number;
  /** 角色名称 */
  name: string;
  /** 角色标志 */
  code: string;
  /** 显示顺序 */
  sort: number;
  /** 状态 */
  status: number;
  /** 备注 */
  remark?: string;
};

export type RoleSimpleRespVO = {
  /** 角色编号 */
  id: number;
  /** 角色名称 */
  name: string;
};

export type SmsChannelRespVO = {
  /** 编号 */
  id: number;
  /** 短信签名 */
  signature: string;
  /** 渠道编码，参见 SmsChannelEnum 枚举类 */
  code: string;
  /** 启用状态 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 短信 API 的账号 */
  apiKey: string;
  /** 短信 API 的密钥 */
  apiSecret?: string;
  /** 短信发送回调 URL */
  callbackUrl?: string;
  /** 创建时间 */
  createTime: string;
};

export type SmsChannelSaveReqVO = {
  /** 编号 */
  id?: number;
  /** 短信签名 */
  signature: string;
  /** 渠道编码，参见 SmsChannelEnum 枚举类 */
  code: string;
  /** 启用状态 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 短信 API 的账号 */
  apiKey: string;
  /** 短信 API 的密钥 */
  apiSecret?: string;
  /** 短信发送回调 URL */
  callbackUrl?: string;
};

export type SmsChannelSimpleRespVO = {
  /** 编号 */
  id: number;
  /** 短信签名 */
  signature: string;
  /** 渠道编码，参见 SmsChannelEnum 枚举类 */
  code: string;
};

export type SmsLogRespVO = {
  /** 编号 */
  id: number;
  /** 短信渠道编号 */
  channelId: number;
  /** 短信渠道编码 */
  channelCode: string;
  /** 模板编号 */
  templateId: number;
  /** 模板编码 */
  templateCode: string;
  /** 短信类型 */
  templateType: number;
  /** 短信内容 */
  templateContent: string;
  /** 短信参数 */
  templateParams: Record<string, unknown>;
  /** 短信 API 的模板编号 */
  apiTemplateId: string;
  /** 手机号 */
  mobile: string;
  /** 用户编号 */
  userId?: number;
  /** 用户类型 */
  userType?: number;
  /** 发送状态 */
  sendStatus: number;
  /** 发送时间 */
  sendTime?: string;
  /** 短信 API 发送结果的编码 */
  apiSendCode?: string;
  /** 短信 API 发送失败的提示 */
  apiSendMsg?: string;
  /** 短信 API 发送返回的唯一请求 ID */
  apiRequestId?: string;
  /** 短信 API 发送返回的序号 */
  apiSerialNo?: string;
  /** 接收状态 */
  receiveStatus: number;
  /** 接收时间 */
  receiveTime?: string;
  /** API 接收结果的编码 */
  apiReceiveCode?: string;
  /** API 接收结果的说明 */
  apiReceiveMsg?: string;
  /** 创建时间 */
  createTime: string;
};

export type SmsTemplateRespVO = {
  /** 编号 */
  id: number;
  /** 短信类型，参见 SmsTemplateTypeEnum 枚举类 */
  type: number;
  /** 开启状态，参见 CommonStatusEnum 枚举类 */
  status: number;
  /** 模板编码 */
  code: string;
  /** 模板名称 */
  name: string;
  /** 模板内容 */
  content: string;
  /** 参数数组 */
  params?: string[];
  /** 备注 */
  remark?: string;
  /** 短信 API 的模板编号 */
  apiTemplateId: string;
  /** 短信渠道编号 */
  channelId: number;
  /** 短信渠道编码 */
  channelCode: string;
  /** 创建时间 */
  createTime: string;
};

export type SmsTemplateSaveReqVO = {
  /** 编号 */
  id?: number;
  /** 短信类型，参见 SmsTemplateTypeEnum 枚举类 */
  type: number;
  /** 开启状态，参见 CommonStatusEnum 枚举类 */
  status: number;
  /** 模板编码 */
  code: string;
  /** 模板名称 */
  name: string;
  /** 模板内容 */
  content: string;
  /** 备注 */
  remark?: string;
  /** 短信 API 的模板编号 */
  apiTemplateId: string;
  /** 短信渠道编号 */
  channelId: number;
};

export type SmsTemplateSendReqVO = {
  /** 手机号 */
  mobile: string;
  /** 模板编码 */
  templateCode: string;
  /** 模板参数 */
  templateParams?: Record<string, unknown>;
};

export type SocialClientRespVO = {
  /** 编号 */
  id: number;
  /** 应用名 */
  name: string;
  /** 社交平台的类型 */
  socialType: number;
  /** 用户类型 */
  userType: number;
  /** 客户端编号 */
  clientId: string;
  /** 客户端密钥 */
  clientSecret: string;
  /** 授权方的网页应用编号 */
  agentId: string;
  /** 状态 */
  status: number;
  /** 创建时间 */
  createTime: string;
};

export type SocialClientSaveReqVO = {
  /** 编号 */
  id?: number;
  /** 应用名 */
  name: string;
  /** 社交平台的类型 */
  socialType: number;
  /** 用户类型 */
  userType: number;
  /** 客户端编号 */
  clientId: string;
  /** 客户端密钥 */
  clientSecret: string;
  /** 授权方的网页应用编号 */
  agentId: string;
  /** 状态 */
  status: number;
};

export type socialLoginParams = {
  /** 社交类型 */
  type: number;
  /** 回调路径 */
  redirectUri: string;
};

export type SocialUserBindReqVO = {
  /** 社交平台的类型，参见 UserSocialTypeEnum 枚举值 */
  type: number;
  /** 授权码 */
  code: string;
  /** state */
  state: string;
};

export type SocialUserRespVO = {
  /** 主键(自增策略) */
  id: number;
  /** 社交平台的类型 */
  type: number;
  /** 社交 openid */
  openid: string;
  /** 社交 token */
  token: string;
  /** 原始 Token 数据，一般是 JSON 格式 */
  rawTokenInfo: string;
  /** 用户昵称 */
  nickname: string;
  /** 用户头像 */
  avatar?: string;
  /** 原始用户数据，一般是 JSON 格式 */
  rawUserInfo: string;
  /** 最后一次的认证 code */
  code: string;
  /** 最后一次的认证 state */
  state: string;
  /** 创建时间 */
  createTime: string;
  /** 更新时间 */
  updateTime: string;
};

export type SocialUserUnbindReqVO = {
  /** 社交平台的类型，参见 UserSocialTypeEnum 枚举值 */
  type: number;
  /** 社交用户的 openid */
  openid: string;
};

export type SocialWxaSubscribeMessageSendReqDTO = {
  userId: number;
  userType: number;
  templateTitle: string;
  page?: string;
  messages?: Record<string, unknown>;
};

export type syncCodegenFromDBParams = {
  /** 表编号 */
  tableId: number;
};

export type TenantPackageRespVO = {
  /** 套餐编号 */
  id: number;
  /** 套餐名 */
  name: string;
  /** 状态，参见 CommonStatusEnum 枚举 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 关联的菜单编号 */
  menuIds: number[];
  /** 创建时间 */
  createTime: string;
};

export type TenantPackageSaveReqVO = {
  /** 套餐编号 */
  id?: number;
  /** 套餐名 */
  name: string;
  /** 状态，参见 CommonStatusEnum 枚举 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 关联的菜单编号 */
  menuIds: number[];
};

export type TenantPackageSimpleRespVO = {
  /** 套餐编号 */
  id: number;
  /** 套餐名 */
  name: string;
};

export type TenantRespVO = {
  /** 租户编号 */
  id: number;
  /** 租户名 */
  name: string;
  /** 联系人 */
  contactName: string;
  /** 联系手机 */
  contactMobile?: string;
  /** 租户状态 */
  status: number;
  /** 绑定域名 */
  website?: string;
  /** 租户套餐编号 */
  packageId: number;
  /** 过期时间 */
  expireTime: string;
  /** 账号数量 */
  accountCount: number;
  /** 创建时间 */
  createTime: string;
};

export type TenantSaveReqVO = {
  /** 租户编号 */
  id?: number;
  /** 租户名 */
  name: string;
  /** 联系人 */
  contactName: string;
  /** 联系手机 */
  contactMobile?: string;
  /** 租户状态 */
  status: number;
  /** 绑定域名 */
  website?: string;
  /** 租户套餐编号 */
  packageId: number;
  /** 过期时间 */
  expireTime: string;
  /** 账号数量 */
  accountCount: number;
  /** 用户账号 */
  username: string;
  /** 密码 */
  password: string;
};

export type testFileConfigParams = {
  id: number;
};

export type triggerJobParams = {
  /** 编号 */
  id: number;
};

export type updateApiErrorLogProcessParams = {
  /** 编号 */
  id: number;
  /** 处理状态 */
  processStatus: number;
};

export type updateFileConfigMasterParams = {
  id: number;
};

export type updateJobApplicationStatusParams = {
  id: number;
  status: number;
};

export type updateJobStatusParams = {
  /** 编号 */
  id: number;
  /** 状态 */
  status: number;
};

export type updateNotifyMessageReadParams = {
  /** 编号列表 */
  ids: number[];
};

export type uploadFile1Params = {
  /** 文件目录 */
  directory?: string;
};

export type uploadFileParams = {
  /** 文件目录 */
  directory?: string;
};

export type UserImportRespVO = {
  /** 创建成功的用户名数组 */
  createUsernames: string[];
  /** 更新成功的用户名数组 */
  updateUsernames: string[];
  /** 导入失败的用户集合，key 为用户名，value 为失败原因 */
  failureUsernames: Record<string, unknown>;
};

export type UserProfileRespVO = {
  /** 用户编号 */
  id: number;
  /** 用户账号 */
  username: string;
  /** 用户昵称 */
  nickname: string;
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  mobile?: string;
  /** 用户性别，参见 SexEnum 枚举类 */
  sex?: number;
  /** 用户头像 */
  avatar?: string;
  /** 最后登录 IP */
  loginIp: string;
  /** 最后登录时间 */
  loginDate: string;
  /** 创建时间 */
  createTime: string;
  roles?: RoleSimpleRespVO[];
  dept?: DeptSimpleRespVO;
  posts?: PostSimpleRespVO[];
};

export type UserProfileUpdatePasswordReqVO = {
  /** 旧密码 */
  oldPassword: string;
  /** 新密码 */
  newPassword: string;
};

export type UserProfileUpdateReqVO = {
  /** 用户昵称 */
  nickname?: string;
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  mobile?: string;
  /** 用户性别，参见 SexEnum 枚举类 */
  sex?: number;
  /** 角色头像 */
  avatar?: string;
};

export type UserRespVO = {
  /** 用户编号 */
  id: number;
  /** 用户账号 */
  username: string;
  /** 用户昵称 */
  nickname: string;
  /** 备注 */
  remark?: string;
  /** 部门ID */
  deptId?: number;
  /** 部门名称 */
  deptName?: string;
  /** 岗位编号数组 */
  postIds?: number[];
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  mobile?: string;
  /** 用户性别，参见 SexEnum 枚举类 */
  sex?: number;
  /** 用户头像 */
  avatar?: string;
  /** 状态，参见 CommonStatusEnum 枚举类 */
  status: number;
  /** 最后登录 IP */
  loginIp: string;
  /** 最后登录时间 */
  loginDate: string;
  /** 创建时间 */
  createTime: string;
};

export type UserSaveReqVO = {
  /** 用户编号 */
  id?: number;
  /** 用户账号 */
  username: string;
  /** 用户昵称 */
  nickname: string;
  /** 备注 */
  remark?: string;
  /** 部门编号 */
  deptId?: number;
  /** 岗位编号数组 */
  postIds?: number[];
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  mobile?: string;
  /** 用户性别，参见 SexEnum 枚举类 */
  sex?: number;
  /** 用户头像 */
  avatar?: string;
  /** 密码 */
  password: string;
};

export type UserSimpleRespVO = {
  /** 用户编号 */
  id: number;
  /** 用户昵称 */
  nickname: string;
  /** 部门ID */
  deptId?: number;
  /** 部门名称 */
  deptName?: string;
};

export type UserTypeCreateReqVO = {
  /** 用户编号 */
  userId: number;
  /** 用户类型 */
  userType: number;
};

export type UserTypeRespVO = {
  /** 用户编号 */
  userId: number;
  /** 用户类型 */
  userType: number;
  /** 主键 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type UserTypeUpdateReqVO = {
  /** 用户编号 */
  userId: number;
  /** 用户类型 */
  userType: number;
  /** 主键 */
  id: number;
};

export type UserUpdatePasswordReqVO = {
  /** 用户编号 */
  id: number;
  /** 密码 */
  password: string;
};

export type UserUpdateStatusReqVO = {
  /** 用户编号 */
  id: number;
  /** 状态，见 CommonStatusEnum 枚举 */
  status: number;
};

export type UserVO = {
  /** 用户编号 */
  id: number;
  /** 用户昵称 */
  nickname: string;
  /** 用户头像 */
  avatar: string;
  /** 部门编号 */
  deptId: number;
  /** 用户账号 */
  username: string;
  /** 用户邮箱 */
  email?: string;
};

export type YRZPForumCommentCreateAppReqVO = {
  /** 帖子编号 */
  postId: number;
  /** 评论内容 */
  content: string;
  /** 父评论编号 */
  parentId?: number;
  /** 回复评论编号 */
  replyId?: number;
  /** 回复用户编号 */
  replyUserId?: number;
};

export type YRZPForumCommentCreateReqVO = {
  /** 帖子编号 */
  postId: number;
  /** 用户编号 */
  userId: number;
  /** 评论内容 */
  content: string;
  /** 父评论编号 */
  parentId?: number;
  /** 回复评论编号 */
  replyId?: number;
  /** 回复用户编号 */
  replyUserId?: number;
};

export type YRZPForumCommentRespAppVO = {
  /** 评论编号 */
  id: number;
  /** 帖子编号 */
  postId: number;
  /** 用户编号 */
  userId: number;
  /** 用户昵称 */
  userNickname?: string;
  /** 用户头像 */
  userAvatar?: string;
  /** 评论内容 */
  content: string;
  /** 点赞量 */
  likeCount: number;
  /** 父评论编号 */
  parentId?: number;
  /** 回复评论编号 */
  replyId?: number;
  /** 回复用户编号 */
  replyUserId?: number;
  /** 回复用户昵称 */
  replyUserNickname?: string;
  /** 创建时间 */
  createTime: string;
};

export type YRZPForumCommentRespVO = {
  /** 评论编号 */
  id: number;
  /** 帖子编号 */
  postId: number;
  /** 用户编号 */
  userId: number;
  /** 评论内容 */
  content: string;
  /** 点赞量 */
  likeCount: number;
  /** 父评论编号 */
  parentId?: number;
  /** 回复评论编号 */
  replyId?: number;
  /** 回复用户编号 */
  replyUserId?: number;
  /** 创建时间 */
  createTime: string;
};

export type YRZPForumPostCreateAppReqVO = {
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
};

export type YRZPForumPostCreateReqVO = {
  /** 用户编号 */
  userId: number;
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 状态 */
  status: number;
};

export type YRZPForumPostRespAppVO = {
  /** 帖子编号 */
  id: number;
  /** 用户编号 */
  userId: number;
  /** 用户昵称 */
  userNickname?: string;
  /** 用户头像 */
  userAvatar?: string;
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 浏览量 */
  viewCount: number;
  /** 点赞量 */
  likeCount: number;
  /** 评论量 */
  commentCount: number;
  /** 创建时间 */
  createTime: string;
};

export type YRZPForumPostRespVO = {
  /** 帖子编号 */
  id: number;
  /** 用户编号 */
  userId: number;
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 浏览量 */
  viewCount: number;
  /** 点赞量 */
  likeCount: number;
  /** 评论量 */
  commentCount: number;
  /** 状态 */
  status: number;
  /** 创建时间 */
  createTime: string;
};

export type YRZPForumPostUpdateReqVO = {
  /** 用户编号 */
  userId: number;
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 状态 */
  status: number;
  /** 帖子编号 */
  id: number;
};

export type YRZPJobApplicationCreateReqVO = {
  /** 求职者编号 */
  jobSeekerId: number;
  /** 职位编号 */
  jobId: number;
  /** 求职简历 */
  resume?: string;
  /** 求职信 */
  coverLetter?: string;
  /** 状态 */
  status: number;
};

export type YRZPJobApplicationRespVO = {
  /** 求职者编号 */
  jobSeekerId: number;
  /** 职位编号 */
  jobId: number;
  /** 求职简历 */
  resume?: string;
  /** 求职信 */
  coverLetter?: string;
  /** 状态 */
  status: number;
  /** 主键 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 更新时间 */
  updateTime: string;
  /** 求职者姓名 */
  jobSeekerName?: string;
  /** 职位名称 */
  jobName?: string;
  /** 公司名称 */
  companyName?: string;
};

export type YRZPJobApplicationUpdateReqVO = {
  /** 求职者编号 */
  jobSeekerId: number;
  /** 职位编号 */
  jobId: number;
  /** 求职简历 */
  resume?: string;
  /** 求职信 */
  coverLetter?: string;
  /** 状态 */
  status: number;
  /** 主键 */
  id: number;
};

export type YRZPJobCategoryCreateReqVO = {
  /** 分类名称 */
  name: string;
  /** 父分类编号 */
  parentId: number;
  /** 显示顺序 */
  sort: number;
  /** 状态 */
  status: number;
};

export type YRZPJobCategoryRespVO = {
  /** 分类名称 */
  name: string;
  /** 父分类编号 */
  parentId: number;
  /** 显示顺序 */
  sort: number;
  /** 状态 */
  status: number;
  /** 分类编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type YRZPJobCategoryUpdateReqVO = {
  /** 分类名称 */
  name: string;
  /** 父分类编号 */
  parentId: number;
  /** 显示顺序 */
  sort: number;
  /** 状态 */
  status: number;
  /** 分类编号 */
  id: number;
};

export type YRZPJobCreateReqVO = {
  /** 招聘者编号 */
  employerId: number;
  /** 公司编号 */
  companyId: number;
  /** 职位分类编号 */
  categoryId: number;
  /** 职位名称 */
  name: string;
  /** 职位描述 */
  description: string;
  /** 工作地点 */
  location: string;
  /** 薪资范围-最低 */
  salaryMin: number;
  /** 薪资范围-最高 */
  salaryMax: number;
  /** 经验要求(年) */
  experienceRequirement?: number;
  /** 学历要求 */
  educationRequirement?: string;
  /** 招聘人数 */
  headcount: number;
  /** 职位福利 */
  benefits?: string;
  /** 状态 */
  status: number;
};

export type YRZPJobRespVO = {
  /** 招聘者编号 */
  employerId: number;
  /** 公司编号 */
  companyId: number;
  /** 职位分类编号 */
  categoryId: number;
  /** 职位名称 */
  name: string;
  /** 职位描述 */
  description: string;
  /** 工作地点 */
  location: string;
  /** 薪资范围-最低 */
  salaryMin: number;
  /** 薪资范围-最高 */
  salaryMax: number;
  /** 经验要求(年) */
  experienceRequirement?: number;
  /** 学历要求 */
  educationRequirement?: string;
  /** 招聘人数 */
  headcount: number;
  /** 职位福利 */
  benefits?: string;
  /** 状态 */
  status: number;
  /** 主键 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 更新时间 */
  updateTime: string;
  /** 公司名称 */
  companyName?: string;
  /** 职位分类名称 */
  categoryName?: string;
};

export type YRZPJobSeekerCreateReqVO = {
  /** 用户编号 */
  userId: number;
  /** 真实姓名 */
  realName: string;
  /** 性别 */
  gender: number;
  /** 年龄 */
  age: number;
  /** 专业类别 */
  category: string;
  /** 专业 */
  specialty: string;
  /** 工作经验(年) */
  experience: number;
  /** 身高(cm) */
  height?: number;
  /** 体重(kg) */
  weight?: number;
  /** 学历 */
  education?: string;
  /** 毕业院校 */
  school?: string;
  /** 获得证书 */
  certificate?: string;
  /** 获奖情况 */
  award?: string;
  /** 状态 */
  status: number;
  /** 是否认证 */
  isCertified?: boolean;
  /** 联系电话 */
  contactMobile: string;
  /** 个人简介 */
  description?: string;
};

export type YRZPJobSeekerRespVO = {
  /** 用户编号 */
  userId: number;
  /** 真实姓名 */
  realName: string;
  /** 性别 */
  gender: number;
  /** 年龄 */
  age: number;
  /** 专业类别 */
  category: string;
  /** 专业 */
  specialty: string;
  /** 工作经验(年) */
  experience: number;
  /** 身高(cm) */
  height?: number;
  /** 体重(kg) */
  weight?: number;
  /** 学历 */
  education?: string;
  /** 毕业院校 */
  school?: string;
  /** 获得证书 */
  certificate?: string;
  /** 获奖情况 */
  award?: string;
  /** 状态 */
  status: number;
  /** 是否认证 */
  isCertified?: boolean;
  /** 联系电话 */
  contactMobile: string;
  /** 个人简介 */
  description?: string;
  /** 主键 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type YRZPJobSeekerUpdateReqVO = {
  /** 用户编号 */
  userId: number;
  /** 真实姓名 */
  realName: string;
  /** 性别 */
  gender: number;
  /** 年龄 */
  age: number;
  /** 专业类别 */
  category: string;
  /** 专业 */
  specialty: string;
  /** 工作经验(年) */
  experience: number;
  /** 身高(cm) */
  height?: number;
  /** 体重(kg) */
  weight?: number;
  /** 学历 */
  education?: string;
  /** 毕业院校 */
  school?: string;
  /** 获得证书 */
  certificate?: string;
  /** 获奖情况 */
  award?: string;
  /** 状态 */
  status: number;
  /** 是否认证 */
  isCertified?: boolean;
  /** 联系电话 */
  contactMobile: string;
  /** 个人简介 */
  description?: string;
  /** 主键 */
  id: number;
};

export type YRZPJobUpdateReqVO = {
  /** 招聘者编号 */
  employerId: number;
  /** 公司编号 */
  companyId: number;
  /** 职位分类编号 */
  categoryId: number;
  /** 职位名称 */
  name: string;
  /** 职位描述 */
  description: string;
  /** 工作地点 */
  location: string;
  /** 薪资范围-最低 */
  salaryMin: number;
  /** 薪资范围-最高 */
  salaryMax: number;
  /** 经验要求(年) */
  experienceRequirement?: number;
  /** 学历要求 */
  educationRequirement?: string;
  /** 招聘人数 */
  headcount: number;
  /** 职位福利 */
  benefits?: string;
  /** 状态 */
  status: number;
  /** 主键 */
  id: number;
};

export type YRZPMessageCreateReqVO = {
  /** 发送者用户编号 */
  fromUserId: number;
  /** 接收者用户编号 */
  toUserId: number;
  /** 消息内容 */
  content: string;
  /** 消息类型 */
  type: number;
  /** 关联业务编号 */
  businessId?: number;
  /** 关联业务类型 */
  businessType?: number;
};

export type YRZPMessageRespAppVO = {
  /** 消息编号 */
  id: number;
  /** 发送者用户编号 */
  fromUserId: number;
  /** 发送者用户昵称 */
  fromUserNickname?: string;
  /** 发送者用户头像 */
  fromUserAvatar?: string;
  /** 消息内容 */
  content: string;
  /** 消息类型 */
  type: number;
  /** 是否已读 */
  isRead: boolean;
  /** 关联业务编号 */
  businessId?: number;
  /** 关联业务类型 */
  businessType?: number;
  /** 创建时间 */
  createTime: string;
};

export type YRZPMessageRespVO = {
  /** 消息编号 */
  id: number;
  /** 发送者用户编号 */
  fromUserId: number;
  /** 接收者用户编号 */
  toUserId: number;
  /** 消息内容 */
  content: string;
  /** 消息类型 */
  type: number;
  /** 是否已读 */
  isRead: boolean;
  /** 关联业务编号 */
  businessId?: number;
  /** 关联业务类型 */
  businessType?: number;
  /** 创建时间 */
  createTime: string;
};

export type YRZPMessageSendAppReqVO = {
  /** 接收者用户编号 */
  toUserId: number;
  /** 消息内容 */
  content: string;
  /** 消息类型 */
  type: number;
  /** 关联业务编号 */
  businessId?: number;
  /** 关联业务类型 */
  businessType?: number;
};
