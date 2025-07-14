/* eslint-disable */
// @ts-ignore

export type addBrowseCount1Params = {
  /** 文章编号 */
  id: number;
};

export type addBrowseCountParams = {
  /** Banner 编号 */
  id: number;
};

export type Address = {
  /** 编号 */
  id: number;
  /** 收件人名称 */
  name: string;
  /** 手机号 */
  mobile: string;
  /** 地区编号 */
  areaId: number;
  /** 地区名字 */
  areaName: string;
  /** 详细地址 */
  detailAddress: string;
  /** 是否默认收件地址 */
  defaultStatus: boolean;
};

export type AddressRespVO = {
  /** 收件人名称 */
  name: string;
  /** 手机号 */
  mobile: string;
  /** 地区编码 */
  areaId: number;
  /** 收件详细地址 */
  detailAddress: string;
  /** 是否默认 */
  defaultStatus: boolean;
  /** 收件地址编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type AfterSaleDetailRespVO = {
  /** 售后流水号 */
  no: string;
  /** 售后状态 */
  status: number;
  /** 售后类型 */
  type: number;
  /** 售后方式 */
  way: number;
  /** 用户编号 */
  userId: number;
  /** 申请原因 */
  applyReason: string;
  /** 补充描述 */
  applyDescription?: string;
  /** 补充凭证图片 */
  applyPicUrls?: string[];
  /** 订单编号 */
  orderId: number;
  /** 订单流水号 */
  orderNo: string;
  /** 订单项编号 */
  orderItemId: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SPU 名称 */
  spuName: string;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 商品图片 */
  picUrl?: string;
  /** 购买数量 */
  count: number;
  /** 审批时间 */
  auditTime?: string;
  /** 审批人 */
  auditUserId?: number;
  /** 审批备注 */
  auditReason?: string;
  /** 退款金额，单位：分 */
  refundPrice: number;
  /** 支付退款编号 */
  payRefundId?: number;
  /** 退款时间 */
  refundTime?: string;
  /** 退货物流公司编号 */
  logisticsId?: number;
  /** 退货物流单号 */
  logisticsNo?: string;
  /** 退货时间 */
  deliveryTime?: string;
  /** 收货时间 */
  receiveTime?: string;
  /** 收货备注 */
  receiveReason?: string;
  /** 售后编号 */
  id: number;
  order?: TradeOrderBaseVO;
  orderItem?: OrderItem;
  user?: MemberUserRespVO;
  logs?: AfterSaleLogRespVO[];
};

export type AfterSaleDisagreeReqVO = {
  /** 售后编号 */
  id: number;
  /** 审批备注 */
  auditReason: string;
};

export type AfterSaleLogRespVO = {
  /** 编号 */
  id: number;
  /** 用户编号 */
  userId: number;
  /** 用户类型 */
  userType: number;
  /** 售后编号 */
  afterSaleId: number;
  /** 售后状态（之前） */
  beforeStatus?: number;
  /** 售后状态（之后） */
  afterStatus: number;
  /** 操作明细 */
  content: string;
  /** 创建时间 */
  createTime: string;
};

export type AfterSaleRespPageItemVO = {
  /** 售后流水号 */
  no: string;
  /** 售后状态 */
  status: number;
  /** 售后类型 */
  type: number;
  /** 售后方式 */
  way: number;
  /** 用户编号 */
  userId: number;
  /** 申请原因 */
  applyReason: string;
  /** 补充描述 */
  applyDescription?: string;
  /** 补充凭证图片 */
  applyPicUrls?: string[];
  /** 订单编号 */
  orderId: number;
  /** 订单流水号 */
  orderNo: string;
  /** 订单项编号 */
  orderItemId: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SPU 名称 */
  spuName: string;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 商品图片 */
  picUrl?: string;
  /** 购买数量 */
  count: number;
  /** 审批时间 */
  auditTime?: string;
  /** 审批人 */
  auditUserId?: number;
  /** 审批备注 */
  auditReason?: string;
  /** 退款金额，单位：分 */
  refundPrice: number;
  /** 支付退款编号 */
  payRefundId?: number;
  /** 退款时间 */
  refundTime?: string;
  /** 退货物流公司编号 */
  logisticsId?: number;
  /** 退货物流单号 */
  logisticsNo?: string;
  /** 退货时间 */
  deliveryTime?: string;
  /** 收货时间 */
  receiveTime?: string;
  /** 收货备注 */
  receiveReason?: string;
  /** 售后编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
  properties?: ProductPropertyValueDetailRespVO[];
  user?: MemberUserRespVO;
};

export type agreeAfterSaleParams = {
  /** 售后编号 */
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

export type AppActivityRespVO = {
  /** 活动编号 */
  id: number;
  /** 活动类型 */
  type: number;
  /** 活动名称 */
  name: string;
  /** spu 编号 */
  spuId: number;
  /** 活动开始时间 */
  startTime: string;
  /** 活动结束时间 */
  endTime: string;
};

export type AppAddressCreateReqVO = {
  /** 收件人名称 */
  name: string;
  /** 手机号 */
  mobile: string;
  /** 地区编号 */
  areaId: number;
  /** 收件详细地址 */
  detailAddress: string;
  /** 是否默认地址 */
  defaultStatus: boolean;
};

export type AppAddressRespVO = {
  /** 收件人名称 */
  name: string;
  /** 手机号 */
  mobile: string;
  /** 地区编号 */
  areaId: number;
  /** 收件详细地址 */
  detailAddress: string;
  /** 是否默认地址 */
  defaultStatus: boolean;
  /** 编号 */
  id: number;
  /** 地区名字 */
  areaName: string;
};

export type AppAddressUpdateReqVO = {
  /** 收件人名称 */
  name: string;
  /** 手机号 */
  mobile: string;
  /** 地区编号 */
  areaId: number;
  /** 收件详细地址 */
  detailAddress: string;
  /** 是否默认地址 */
  defaultStatus: boolean;
  /** 编号 */
  id: number;
};

export type AppAfterSaleCreateReqVO = {
  /** 订单项编号 */
  orderItemId: number;
  /** 售后方式 */
  way: number;
  /** 退款金额 */
  refundPrice: number;
  /** 申请原因 */
  applyReason: string;
  /** 补充描述 */
  applyDescription?: string;
  /** 补充凭证图片 */
  applyPicUrls?: string[];
};

export type AppAfterSaleDeliveryReqVO = {
  /** 售后编号 */
  id: number;
  /** 退货物流公司编号 */
  logisticsId: number;
  /** 退货物流单号 */
  logisticsNo: string;
};

export type AppAfterSaleLogRespVO = {
  /** 编号 */
  id: number;
  /** 操作明细 */
  content: string;
  /** 创建时间 */
  createTime: string;
};

export type AppAfterSaleRespVO = {
  /** 售后编号 */
  id: number;
  /** 售后流水号 */
  no: string;
  /** 售后状态 */
  status: number;
  /** 售后方式 */
  way: number;
  /** 售后类型 */
  type: number;
  /** 申请原因 */
  applyReason: string;
  /** 补充描述 */
  applyDescription: string;
  /** 补充凭证图片 */
  applyPicUrls: string[];
  /** 创建时间 */
  createTime: string;
  /** 更新时间 */
  updateTime: string;
  /** 交易订单编号 */
  orderId: number;
  /** 交易订单流水号 */
  orderNo: string;
  /** 交易订单项编号 */
  orderItemId: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SPU 名称 */
  spuName: string;
  /** 商品 SKU 编号 */
  skuId: number;
  properties?: AppProductPropertyValueDetailRespVO[];
  /** 商品图片 */
  picUrl: string;
  /** 退货商品数量 */
  count: number;
  auditReason?: string;
  /** 退款金额，单位：分 */
  refundPrice?: number;
  /** 退款时间 */
  refundTime?: string;
  /** 退货物流公司编号 */
  logisticsId?: number;
  /** 退货物流单号 */
  logisticsNo?: string;
  /** 退货时间 */
  deliveryTime?: string;
  /** 收货时间 */
  receiveTime?: string;
  /** 收货备注 */
  receiveReason?: string;
};

export type AppAreaNodeRespVO = {
  /** 编号 */
  id: number;
  /** 名字 */
  name: string;
};

export type AppArticleCategoryRespVO = {
  /** 分类编号 */
  id: number;
  /** 分类名称 */
  name: string;
  /** 分类图标 */
  picUrl: string;
};

export type AppArticleRespVO = {
  /** 文章编号 */
  id: number;
  /** 文章标题 */
  title: string;
  /** 文章作者 */
  author: string;
  /** 分类编号 */
  categoryId: number;
  /** 图文封面 */
  picUrl: string;
  /** 文章简介 */
  introduction: string;
  /** 文章内容 */
  content: string;
  /** 发布时间 */
  createTime: string;
  /** 浏览量 */
  browseCount: number;
  /** 关联的商品 SPU 编号 */
  spuId?: number;
};

export type AppAuthLoginReqVO = {
  /** 手机号 */
  mobile: string;
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

export type AppAuthLoginRespVO = {
  /** 用户编号 */
  userId: number;
  /** 访问令牌 */
  accessToken: string;
  /** 刷新令牌 */
  refreshToken: string;
  /** 过期时间 */
  expiresTime: string;
  /** 社交用户 openid */
  openid?: string;
};

export type AppAuthSmsLoginReqVO = {
  /** 手机号 */
  mobile: string;
  /** 手机验证码 */
  code: string;
  /** 社交平台的类型，参见 SocialTypeEnum 枚举值 */
  socialType: number;
  /** 授权码 */
  socialCode: string;
  /** state */
  socialState: string;
  socialCodeValid?: boolean;
};

export type AppAuthSmsSendReqVO = {
  /** 手机号 */
  mobile?: string;
  /** 发送场景,对应 SmsSceneEnum 枚举 */
  scene: number;
};

export type AppAuthSmsValidateReqVO = {
  /** 手机号 */
  mobile?: string;
  /** 发送场景,对应 SmsSceneEnum 枚举 */
  scene: number;
  /** 手机验证码 */
  code: string;
};

export type AppAuthSocialLoginReqVO = {
  /** 社交平台的类型，参见 SocialTypeEnum 枚举值 */
  type: number;
  /** 授权码 */
  code: string;
  /** state */
  state: string;
};

export type AppAuthWeixinMiniAppLoginReqVO = {
  /** 手机 code，小程序通过 wx.getPhoneNumber 方法获得 */
  phoneCode: string;
  /** 登录 code，小程序通过 wx.login 方法获得 */
  loginCode: string;
  /** state */
  state: string;
};

export type AppBannerRespVO = {
  /** 编号 */
  id: number;
  /** 标题 */
  title: string;
  /** 跳转链接 */
  url: string;
  /** 图片地址 */
  picUrl: string;
};

export type AppBargainActivityDetailRespVO = {
  /** 砍价活动编号 */
  id: number;
  /** 砍价活动名称 */
  name: string;
  /** 活动开始时间 */
  startTime: string;
  /** 活动结束时间 */
  endTime: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 商品价格，单位：分 */
  price: number;
  /** 商品描述 */
  description: string;
  /** 砍价库存 */
  stock: number;
  /** 商品图片 */
  picUrl: string;
  /** 商品市场价，单位：分 */
  marketPrice: number;
  /** 砍价起始价格，单位：分 */
  bargainFirstPrice: number;
  /** 砍价最低金额，单位：分 */
  bargainMinPrice: number;
  /** 砍价成功数量 */
  successUserCount: number;
};

export type AppBargainActivityRespVO = {
  /** 砍价活动编号 */
  id: number;
  /** 砍价活动名称 */
  name: string;
  /** 活动开始时间 */
  startTime: string;
  /** 活动结束时间 */
  endTime: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 砍价库存 */
  stock: number;
  /** 商品图片 */
  picUrl: string;
  /** 商品市场价，单位：分 */
  marketPrice: number;
  /** 砍价最低金额，单位：分 */
  bargainMinPrice: number;
};

export type AppBargainHelpCreateReqVO = {
  /** 砍价记录编号 */
  recordId: number;
};

export type AppBargainHelpRespVO = {
  /** 用户编号 */
  userId: number;
  /** 助力用户的昵称 */
  nickname: string;
  /** 助力用户的头像 */
  avatar: string;
  /** 助力用户的砍价金额 */
  reducePrice: number;
  /** 创建时间 */
  createTime: string;
};

export type AppBargainRecordCreateReqVO = {
  /** 砍价活动编号 */
  activityId: number;
};

export type AppBargainRecordDetailRespVO = {
  /** 砍价记录编号 */
  id: number;
  /** 用户编号 */
  userId: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 活动编号 */
  activityId: number;
  /** 砍价起始价格，单位：分 */
  bargainFirstPrice: number;
  /** 当前砍价，单位：分 */
  bargainPrice: number;
  /** 砍价记录状态 */
  status: number;
  /** 订单编号 */
  orderId?: number;
  /** 支付状态 */
  payStatus?: boolean;
  /** 支付订单编号 */
  payOrderId?: number;
  helpAction?: number;
};

export type AppBargainRecordRespVO = {
  /** 砍价记录编号 */
  id: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 活动编号 */
  activityId: number;
  /** 砍价记录状态 */
  status: number;
  /** 当前价格 */
  bargainPrice: number;
  /** 活动名称 */
  activityName: string;
  /** 活动结束时间 */
  endTime: string;
  /** 商品图片 */
  picUrl: string;
  /** 订单编号 */
  orderId?: number;
  /** 支付状态 */
  payStatus?: boolean;
  /** 支付订单编号 */
  payOrderId?: number;
};

export type AppBargainRecordSummaryRespVO = {
  /** 砍价用户数量 */
  successUserCount: number;
  /** 成功砍价的记录 */
  successList: Record[];
};

export type AppBrokerageProductPriceRespVO = {
  /** 是否开启 */
  enabled: boolean;
  /** 分销最小金额，单位：分 */
  brokerageMinPrice?: number;
  /** 分销最大金额，单位：分 */
  brokerageMaxPrice?: number;
};

export type AppBrokerageRecordRespVO = {
  /** 记录编号 */
  id: number;
  /** 业务编号 */
  bizId: string;
  /** 分销标题 */
  title: string;
  /** 分销金额，单位：分 */
  price: number;
  /** 状态 */
  status: number;
  /** 状态名 */
  statusName: string;
  /** 创建时间 */
  createTime: string;
  /** 完成时间 */
  finishTime: string;
};

export type AppBrokerageUserBindReqVO = {
  /** 推广员编号 */
  bindUserId: number;
};

export type AppBrokerageUserChildSummaryRespVO = {
  /** 用户编号 */
  id: number;
  /** 用户昵称 */
  nickname: string;
  /** 用户头像 */
  avatar: string;
  /** 佣金金额，单位：分 */
  brokeragePrice: number;
  /** 分销订单数量 */
  brokerageOrderCount: number;
  /** 分销用户数量 */
  brokerageUserCount: number;
  /** 绑定推广员的时间 */
  brokerageTime: string;
};

export type AppBrokerageUserMySummaryRespVO = {
  /** 昨天的佣金，单位：分 */
  yesterdayPrice: number;
  /** 提现的佣金，单位：分 */
  withdrawPrice: number;
  /** 可用的佣金，单位：分 */
  brokeragePrice: number;
  /** 冻结的佣金，单位：分 */
  frozenPrice: number;
  /** 分销用户数量（一级） */
  firstBrokerageUserCount: number;
  /** 分销用户数量（二级） */
  secondBrokerageUserCount: number;
};

export type AppBrokerageUserRankByPriceRespVO = {
  /** 用户编号 */
  id: number;
  /** 用户昵称 */
  nickname: string;
  /** 用户头像 */
  avatar: string;
  /** 佣金金额 */
  brokeragePrice: number;
};

export type AppBrokerageUserRankByUserCountRespVO = {
  /** 用户编号 */
  id: number;
  /** 用户昵称 */
  nickname: string;
  /** 用户头像 */
  avatar: string;
  /** 邀请用户数量 */
  brokerageUserCount: number;
};

export type AppBrokerageUserRespVO = {
  /** 是否有分销资格 */
  brokerageEnabled: boolean;
  /** 可用的佣金，单位：分 */
  brokeragePrice: number;
  /** 冻结的佣金，单位：分 */
  frozenPrice: number;
};

export type AppBrokerageWithdrawCreateReqVO = {
  /** 提现方式 */
  type: number;
  /** 提现金额，单位：分 */
  price: number;
  /** 提现账号 */
  userAccount: string;
  /** 提现姓名 */
  userName: string;
  /** 收款码的图片 */
  qrCodeUrl?: string;
  /** 提现银行 */
  bankName: string;
  /** 开户地址 */
  bankAddress?: string;
  /** 转账渠道 */
  transferChannelCode: string;
};

export type AppBrokerageWithdrawRespVO = {
  /** 提现编号 */
  id: number;
  /** 提现类型 */
  type: number;
  /** 提现类型名 */
  typeName: string;
  /** 提现状态 */
  status: number;
  /** 提现状态名 */
  statusName: string;
  /** 提现金额，单位：分 */
  price: number;
  /** 提现时间 */
  createTime: string;
  /** 转账单编号 */
  payTransferId?: number;
  /** 渠道 package 信息 */
  transferChannelPackageInfo?: string;
  /** 渠道商户号 */
  transferChannelMchId?: string;
};

export type AppCartAddReqVO = {
  /** 商品 SKU 编号 */
  skuId: number;
  /** 新增商品数量 */
  count: number;
};

export type AppCartListRespVO = {
  validList?: Cart[];
  invalidList?: Cart[];
};

export type AppCartResetReqVO = {
  /** 编号 */
  id: number;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 商品数量 */
  count: number;
};

export type AppCartUpdateCountReqVO = {
  /** 编号 */
  id: number;
  /** 商品数量 */
  count: number;
};

export type AppCartUpdateSelectedReqVO = {
  /** 编号列表 */
  ids: number[];
  /** 是否选中 */
  selected: boolean;
};

export type AppCategoryRespVO = {
  /** 分类编号 */
  id: number;
  /** 父分类编号 */
  parentId: number;
  /** 分类名称 */
  name: string;
  /** 分类图片 */
  picUrl: string;
};

export type AppCombinationActivityDetailRespVO = {
  /** 拼团活动编号 */
  id: number;
  /** 拼团活动名称 */
  name: string;
  /** 活动状态 */
  status: number;
  /** 活动开始时间 */
  startTime: string;
  /** 活动结束时间 */
  endTime: string;
  /** 拼团人数 */
  userSize: number;
  /** 成功的拼团数量 */
  successCount: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 总共限购数量 */
  totalLimitCount?: number;
  /** 单次限购数量 */
  singleLimitCount?: number;
  /** 商品信息数组 */
  products: Product[];
};

export type AppCombinationActivityRespVO = {
  /** 拼团活动编号 */
  id: number;
  /** 拼团活动名称 */
  name: string;
  /** 拼团人数 */
  userSize: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SPU 名字 */
  spuName: string;
  /** 商品图片 */
  picUrl: string;
  /** 商品市场价，单位：分 */
  marketPrice: number;
  /** 拼团金额，单位：分 */
  combinationPrice: number;
};

export type AppCombinationRecordDetailRespVO = {
  /** 团长的拼团记录 */
  headRecord: AppCombinationRecordRespVO;
  /** 成员的拼团记录 */
  memberRecords: AppCombinationRecordRespVO[];
  /** 当前用户参团记录对应的订单编号 */
  orderId: number;
};

export type AppCombinationRecordRespVO = {
  /** 拼团记录编号 */
  id: number;
  /** 拼团活动编号 */
  activityId: number;
  /** 用户昵称 */
  nickname: string;
  /** 用户头像 */
  avatar: string;
  /** 过期时间 */
  expireTime: string;
  /** 可参团人数 */
  userSize: number;
  /** 已参团人数 */
  userCount: number;
  /** 拼团状态 */
  status: number;
  /** 订单编号 */
  orderId: number;
  /** 商品名字 */
  spuName: string;
  /** 商品图片 */
  picUrl: string;
  /** 购买的商品数量 */
  count: number;
  /** 拼团金额，单位：分 */
  combinationPrice: number;
};

export type AppCombinationRecordSummaryRespVO = {
  /** 拼团用户数量 */
  userCount: number;
  /** 拼团用户头像列表 */
  avatars: string[];
};

export type AppCouponRespVO = {
  /** 优惠劵编号 */
  id: number;
  /** 优惠劵名 */
  name: string;
  /** 优惠劵状态 */
  status: number;
  /** 是否设置满多少金额可用 */
  usePrice: number;
  /** 商品范围 */
  productScope: number;
  /** 商品范围编号的数组 */
  productScopeValues: number[];
  /** 固定日期 - 生效开始时间 */
  validStartTime?: string;
  /** 固定日期 - 生效结束时间 */
  validEndTime?: string;
  /** 优惠类型 */
  discountType: number;
  /** 折扣百分比 */
  discountPercent?: number;
  /** 优惠金额 */
  discountPrice?: number;
  /** 折扣上限 */
  discountLimitPrice?: number;
};

export type AppCouponTakeReqVO = {
  /** 优惠劵模板编号 */
  templateId: number;
};

export type AppCouponTemplateRespVO = {
  /** 优惠劵模板编号 */
  id: number;
  /** 优惠劵名 */
  name: string;
  /** 优惠券说明 */
  description?: string;
  /** 发行总量 */
  totalCount: number;
  /** 每人限领个数 */
  takeLimitCount: number;
  /** 是否设置满多少金额可用 */
  usePrice: number;
  /** 商品范围 */
  productScope: number;
  /** 商品范围编号的数组 */
  productScopeValues: number[];
  /** 生效日期类型 */
  validityType: number;
  /** 固定日期 - 生效开始时间 */
  validStartTime?: string;
  /** 固定日期 - 生效结束时间 */
  validEndTime?: string;
  /** 领取日期 - 开始天数 */
  fixedStartTerm?: number;
  /** 领取日期 - 结束天数 */
  fixedEndTerm?: number;
  /** 优惠类型 */
  discountType: number;
  /** 折扣百分比 */
  discountPercent?: number;
  /** 优惠金额 */
  discountPrice?: number;
  /** 折扣上限 */
  discountLimitPrice?: number;
  /** 领取优惠券的数量 */
  takeCount: number;
  /** 是否可以领取 */
  canTake: boolean;
};

export type AppDeliveryExpressRespVO = {
  /** 编号 */
  id: number;
  /** 门店名称 */
  name: string;
};

export type AppDeliveryPickUpStoreRespVO = {
  /** 编号 */
  id: number;
  /** 门店名称 */
  name: string;
  /** 门店 logo */
  logo: string;
  /** 门店手机 */
  phone: string;
  /** 区域编号 */
  areaId: number;
  /** 地区名字 */
  areaName: string;
  /** 门店详细地址 */
  detailAddress: string;
  /** 营业开始时间 */
  openingTime: LocalTime;
  /** 营业结束时间 */
  closingTime: LocalTime;
  /** 纬度 */
  latitude: number;
  /** 经度 */
  longitude: number;
  /** 距离，单位：千米 */
  distance?: number;
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

export type AppDiyPagePropertyRespVO = {
  /** 装修页面编号 */
  id: number;
  /** 页面名称 */
  name: string;
  /** 页面属性 */
  property?: string;
};

export type AppDiyTemplatePropertyRespVO = {
  /** 装修模板编号 */
  id: number;
  /** 模板名称 */
  name: string;
  /** 模板属性 */
  property: string;
  /** 首页 */
  home: string;
  /** 我的 */
  user: string;
};

export type AppFavoriteReqVO = {
  /** 商品 SPU 编号 */
  spuId: number;
};

export type AppFavoriteRespVO = {
  /** 编号 */
  id: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SPU 名称 */
  spuName?: string;
  /** 商品封面图 */
  picUrl?: string;
  /** 商品单价 */
  price?: number;
};

export type AppKeFuMessageSendReqVO = {
  /** 消息类型 */
  contentType: number;
  /** 消息 */
  content: string;
};

export type AppMemberExperienceRecordRespVO = {
  /** 标题 */
  title: string;
  /** 经验 */
  experience: number;
  /** 描述 */
  description: string;
  /** 创建时间 */
  createTime: string;
};

export type AppMemberLevelRespVO = {
  /** 等级名称 */
  name: string;
  /** 等级 */
  level: number;
  /** 升级经验 */
  experience: number;
  /** 享受折扣 */
  discountPercent: number;
  /** 等级图标 */
  icon?: string;
  /** 等级背景图 */
  backgroundUrl?: string;
};

export type AppMemberPointRecordRespVO = {
  /** 自增主键 */
  id: number;
  /** 积分标题 */
  title: string;
  /** 积分描述 */
  description?: string;
  /** 积分 */
  point: number;
  /** 发生时间 */
  createTime: string;
};

export type AppMemberSignInConfigRespVO = {
  /** 签到第 x 天 */
  day: number;
  /** 奖励积分 */
  point: number;
};

export type AppMemberSignInRecordRespVO = {
  /** 第几天签到 */
  day: number;
  /** 签到的分数 */
  point: number;
  /** 签到的经验 */
  experience: number;
  /** 签到时间 */
  createTime: string;
};

export type AppMemberSignInRecordSummaryRespVO = {
  /** 总签到天数 */
  totalDay: number;
  /** 连续签到第 x 天 */
  continuousDay: number;
  /** 今天是否已签到 */
  todaySignIn: boolean;
};

export type AppMemberUserInfoRespVO = {
  /** 用户编号 */
  id: number;
  /** 用户昵称 */
  nickname: string;
  /** 用户头像 */
  avatar: string;
  /** 用户手机号 */
  mobile: string;
  /** 用户性别 */
  sex: number;
  /** 积分 */
  point: number;
  /** 经验值 */
  experience: number;
  /** 用户等级 */
  level?: Level;
  /** 是否成为推广员 */
  brokerageEnabled: boolean;
};

export type AppMemberUserResetPasswordReqVO = {
  /** 新密码 */
  password: string;
  /** 手机验证码 */
  code: string;
  /** 手机号 */
  mobile: string;
};

export type AppMemberUserUpdateMobileByWeixinReqVO = {
  /** 手机 code，小程序通过 wx.getPhoneNumber 方法获得 */
  code: string;
};

export type AppMemberUserUpdateMobileReqVO = {
  /** 手机验证码 */
  code: string;
  /** 手机号 */
  mobile: string;
  /** 原手机验证码 */
  oldCode?: string;
};

export type AppMemberUserUpdatePasswordReqVO = {
  /** 新密码 */
  password: string;
  /** 手机验证码 */
  code: string;
};

export type AppMemberUserUpdateReqVO = {
  /** 用户昵称 */
  nickname: string;
  /** 头像 */
  avatar: string;
  /** 性别 */
  sex: number;
};

export type AppOrderExpressTrackRespDTO = {
  /** 发生时间 */
  time: string;
  /** 快递状态 */
  content: string;
};

export type AppPayOrderSubmitReqVO = {
  /** 支付单编号 */
  id: number;
  /** 支付渠道 */
  channelCode: string;
  /** 支付渠道的额外参数，例如说，微信公众号需要传递 openid 参数 */
  channelExtras?: Record<string, unknown>;
  /** 展示模式 */
  displayMode?: string;
  /** 回跳地址 */
  returnUrl?: string;
};

export type AppPayOrderSubmitRespVO = {
  /** 支付状态 */
  status: number;
  /** 展示模式 */
  displayMode: string;
  /** 展示内容 */
  displayContent: string;
};

export type AppPayWalletPackageRespVO = {
  /** 编号 */
  id: number;
  /** 套餐名 */
  name: string;
  /** 支付金额 */
  payPrice: number;
  /** 赠送金额 */
  bonusPrice: number;
};

export type AppPayWalletRechargeCreateReqVO = {
  /** 支付金额 */
  payPrice?: number;
  /** 充值套餐编号 */
  packageId?: number;
  validPayPriceAndPackageId?: boolean;
};

export type AppPayWalletRechargeCreateRespVO = {
  /** 钱包充值编号 */
  id: number;
  /** 支付订单编号 */
  payOrderId: number;
};

export type AppPayWalletRechargeRespVO = {
  /** 编号 */
  id: number;
  /** 用户实际到账余额 */
  totalPrice: number;
  /** 实际支付金额 */
  payPrice: number;
  /** 钱包赠送金额 */
  bonusPrice: number;
  /** 支付成功的支付渠道 */
  payChannelCode: string;
  /** 支付渠道名 */
  payChannelName?: string;
  /** 支付订单编号 */
  payOrderId: number;
  /** 支付成功的外部订单号 */
  payOrderChannelOrderNo: string;
  /** 订单支付时间 */
  payTime: string;
  /** 退款状态 */
  refundStatus: number;
};

export type AppPayWalletRespVO = {
  /** 钱包余额，单位分 */
  balance: number;
  /** 累计支出，单位分 */
  totalExpense: number;
  /** 累计充值，单位分 */
  totalRecharge: number;
};

export type AppPayWalletTransactionRespVO = {
  /** 业务分类 */
  bizType: number;
  /** 交易金额，单位分 */
  price: number;
  /** 流水标题 */
  title: string;
  /** 交易时间 */
  createTime: string;
};

export type AppPayWalletTransactionSummaryRespVO = {
  /** 累计支出，单位分 */
  totalExpense: number;
  /** 累计收入，单位分 */
  totalIncome: number;
};

export type AppPointActivityDetailRespVO = {
  /** 积分商城活动编号 */
  id: number;
  /** 积分商城活动商品 */
  spuId: number;
  /** 活动状态 */
  status: number;
  /** 积分商城活动库存(剩余库存积分兑换时扣减) */
  stock: number;
  /** 积分商城活动总库存 */
  totalStock: number;
  /** 备注 */
  remark?: string;
  /** 商品信息数组 */
  products: Product[];
  /** 兑换积分 */
  point: number;
  /** 兑换金额，单位：分 */
  price: number;
};

export type AppPointActivityRespVO = {
  /** 积分商城活动编号 */
  id: number;
  /** 积分商城活动商品 */
  spuId: number;
  /** 活动状态 */
  status: number;
  /** 积分商城活动库存 */
  stock: number;
  /** 积分商城活动总库存 */
  totalStock: number;
  /** 商品名称 */
  spuName: string;
  /** 商品主图 */
  picUrl: string;
  /** 商品市场价，单位：分 */
  marketPrice: number;
  /** 兑换积分 */
  point: number;
  /** 兑换金额，单位：分 */
  price: number;
};

export type AppProductBrowseHistoryDeleteReqVO = {
  /** 商品 SPU 编号数组 */
  spuIds: number[];
};

export type AppProductBrowseHistoryRespVO = {
  /** 编号 */
  id: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SPU 名称 */
  spuName: string;
  /** 商品封面图 */
  picUrl: string;
  /** 商品单价 */
  price: number;
  /** 商品销量 */
  salesCount: number;
  /** 库存 */
  stock: number;
};

export type AppProductCommentRespVO = {
  /** 评价人的用户编号 */
  userId: number;
  /** 评价人名称 */
  userNickname: string;
  /** 评价人头像 */
  userAvatar: string;
  /** 订单项编号 */
  id: number;
  /** 是否匿名 */
  anonymous: boolean;
  /** 交易订单编号 */
  orderId: number;
  /** 交易订单项编号 */
  orderItemId: number;
  /** 商家是否回复 */
  replyStatus: boolean;
  /** 回复管理员编号 */
  replyUserId?: number;
  /** 商家回复内容 */
  replyContent?: string;
  /** 商家回复时间 */
  replyTime?: string;
  /** 追加评价内容 */
  additionalContent?: string;
  /** 追评评价图片地址数组，以逗号分隔最多上传 9 张 */
  additionalPicUrls?: string[];
  /** 追加评价时间 */
  additionalTime?: string;
  /** 创建时间 */
  createTime?: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SPU 名称 */
  spuName: string;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 商品 SKU 属性 */
  skuProperties: AppProductPropertyValueDetailRespVO[];
  /** 评分星级 1-5 分 */
  scores: number;
  /** 描述星级 1-5 分 */
  descriptionScores: number;
  /** 服务星级 1-5 分 */
  benefitScores: number;
  /** 评论内容 */
  content: string;
  /** 评论图片地址数组，以逗号分隔最多上传 9 张 */
  picUrls: string[];
};

export type AppProductPropertyValueDetailRespVO = {
  /** 属性的编号 */
  propertyId: number;
  /** 属性的名称 */
  propertyName: string;
  /** 属性值的编号 */
  valueId: number;
  /** 属性值的名称 */
  valueName: string;
};

export type AppProductSkuBaseRespVO = {
  /** 主键 */
  id: number;
  /** 图片地址 */
  picUrl?: string;
  /** 销售价格，单位：分 */
  price: number;
  /** 库存 */
  stock: number;
  properties?: AppProductPropertyValueDetailRespVO[];
};

export type AppProductSpuBaseRespVO = {
  /** 主键 */
  id: number;
  /** 商品 SPU 名字 */
  name: string;
  /** 商品主图地址 */
  picUrl?: string;
  /** 商品分类编号 */
  categoryId?: number;
  /** 商品库存 */
  stock: number;
  /** 商品状态 */
  status: number;
};

export type AppProductSpuDetailRespVO = {
  /** 商品 SPU 编号 */
  id: number;
  /** 商品名称 */
  name: string;
  /** 商品简介 */
  introduction: string;
  /** 商品详情 */
  description: string;
  /** 商品分类编号 */
  categoryId: number;
  /** 商品封面图 */
  picUrl: string;
  /** 商品轮播图 */
  sliderPicUrls: string[];
  /** 规格类型 */
  specType: boolean;
  /** 商品价格，单位使用：分 */
  price: number;
  /** 市场价，单位使用：分 */
  marketPrice: number;
  /** 库存 */
  stock: number;
  skus?: Sku[];
  /** 商品销量 */
  salesCount: number;
};

export type AppProductSpuRespVO = {
  /** 商品 SPU 编号 */
  id: number;
  /** 商品名称 */
  name: string;
  /** 商品简介 */
  introduction: string;
  /** 分类编号 */
  categoryId: number;
  /** 商品封面图 */
  picUrl: string;
  /** 商品轮播图 */
  sliderPicUrls: string[];
  /** 规格类型 */
  specType: boolean;
  /** 商品价格，单位使用：分 */
  price: number;
  /** 市场价，单位使用：分 */
  marketPrice: number;
  /** 库存 */
  stock: number;
  /** 商品销量 */
  salesCount: number;
  /** 配送方式数组 */
  deliveryTypes: number[];
};

export type AppRewardActivityRespVO = {
  /** 活动编号 */
  id: number;
  /** 活动状态 */
  status: number;
  /** 活动标题 */
  name: string;
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 条件类型 */
  conditionType: number;
  /** 商品范围 */
  productScope: number;
  /** 商品 SPU 编号的数组 */
  productScopeValues?: number[];
  /** 优惠规则的数组 */
  rules?: Rule[];
};

export type approveBrokerageWithdrawParams = {
  id: number;
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

export type AppSeckillActivityDetailRespVO = {
  /** 秒杀活动编号 */
  id: number;
  /** 秒杀活动名称 */
  name: string;
  /** 活动状态 */
  status: number;
  /** 活动开始时间 */
  startTime: string;
  /** 活动结束时间 */
  endTime: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 总共限购数量 */
  totalLimitCount?: number;
  /** 单次限购数量 */
  singleLimitCount?: number;
  /** 秒杀库存（剩余） */
  stock: number;
  /** 秒杀库存（总计） */
  totalStock: number;
  /** 商品信息数组 */
  products: Product[];
};

export type AppSeckillActivityNowRespVO = {
  /** 秒杀时间段 */
  config: AppSeckillConfigRespVO;
  /** 秒杀活动数组 */
  activities: AppSeckillActivityRespVO[];
};

export type AppSeckillActivityRespVO = {
  /** 秒杀活动编号 */
  id: number;
  /** 秒杀活动名称 */
  name: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SPU 名字 */
  spuName: string;
  /** 商品图片 */
  picUrl: string;
  /** 商品市场价，单位：分 */
  marketPrice: number;
  /** 秒杀活动状态 */
  status: number;
  /** 秒杀库存（剩余） */
  stock: number;
  /** 秒杀库存（总共） */
  totalStock: number;
  /** 秒杀金额，单位：分 */
  seckillPrice: number;
};

export type AppSeckillConfigRespVO = {
  /** 秒杀时间段编号 */
  id: number;
  /** 开始时间点 */
  startTime: string;
  /** 结束时间点 */
  endTime: string;
  /** 轮播图 */
  sliderPicUrls: string[];
};

export type AppSocialUserBindReqVO = {
  /** 社交平台的类型，参见 SocialTypeEnum 枚举值 */
  type: number;
  /** 授权码 */
  code: string;
  /** state */
  state: string;
};

export type AppSocialUserRespVO = {
  /** 社交用户的 openid */
  openid: string;
  /** 社交用户的昵称 */
  nickname: string;
  /** 社交用户的头像 */
  avatar: string;
};

export type AppSocialUserUnbindReqVO = {
  /** 社交平台的类型，参见 SocialTypeEnum 枚举值 */
  type: number;
  /** 社交用户的 openid */
  openid: string;
};

export type AppSocialWxaQrcodeReqVO = {
  /** 场景值 */
  scene: string;
  /** 页面路径 */
  path: string;
  /** 二维码宽度 */
  width: number;
  /** 是/否自动配置线条颜色 */
  autoColor: boolean;
  /** 是/否检查 page 是否存在 */
  checkPath: boolean;
  /** 是/否需要透明底色 */
  hyaline: boolean;
};

export type AppSocialWxaSubscribeTemplateRespVO = {
  /** 模版编号 */
  id: string;
  /** 模版标题 */
  title: string;
  /** 模版内容 */
  content: string;
  /** 模板内容示例 */
  example: string;
  /** 模版类型 */
  type: number;
};

export type AppTradeConfigRespVO = {
  /** 腾讯地图 KEY */
  tencentLbsKey: string;
  /** 是否开启自提 */
  deliveryPickUpEnabled: boolean;
  /** 售后的退款理由 */
  afterSaleRefundReasons: string[];
  /** 售后的退货理由 */
  afterSaleReturnReasons: string[];
  /** 分销海报地址数组 */
  brokeragePosterUrls: string[];
  /** 佣金冻结时间（天） */
  brokerageFrozenDays: number;
  /** 佣金提现最小金额，单位：分 */
  brokerageWithdrawMinPrice: number;
  /** 提现方式 */
  brokerageWithdrawTypes: number[];
};

export type AppTradeOrderCreateReqVO = {
  /** 商品项数组 */
  items: Item[];
  /** 优惠劵编号 */
  couponId?: number;
  /** 是否使用积分 */
  pointStatus: boolean;
  /** 配送方式 */
  deliveryType: number;
  /** 收件地址编号 */
  addressId?: number;
  /** 自提门店编号 */
  pickUpStoreId?: number;
  /** 收件人名称 */
  receiverName?: string;
  /** 收件人手机 */
  receiverMobile?: string;
  /** 秒杀活动编号 */
  seckillActivityId?: number;
  /** 拼团活动编号 */
  combinationActivityId?: number;
  /** 拼团团长编号 */
  combinationHeadId?: number;
  /** 砍价记录编号 */
  bargainRecordId?: number;
  /** 积分商城活动编号 */
  pointActivityId?: number;
  /** 备注 */
  remark?: string;
};

export type AppTradeOrderCreateRespVO = {
  /** 订单编号 */
  id: number;
  /** 支付订单编号 */
  payOrderId: number;
};

export type AppTradeOrderDetailRespVO = {
  /** 订单编号 */
  id: number;
  /** 订单流水号 */
  no: string;
  /** 订单类型 */
  type: number;
  /** 下单时间 */
  createTime: string;
  /** 用户备注 */
  userRemark: string;
  /** 订单状态 */
  status: number;
  /** 购买的商品数量 */
  productCount: number;
  /** 订单完成时间 */
  finishTime?: string;
  /** 订单取消时间 */
  cancelTime?: string;
  /** 是否评价 */
  commentStatus: boolean;
  /** 是否已支付 */
  payStatus: boolean;
  /** 支付订单编号 */
  payOrderId: number;
  /** 付款时间 */
  payTime?: string;
  /** 付款超时时间 */
  payExpireTime: string;
  /** 支付渠道 */
  payChannelCode?: string;
  /** 支付渠道名 */
  payChannelName?: string;
  /** 商品原价（总） */
  totalPrice: number;
  /** 订单优惠（总） */
  discountPrice: number;
  /** 运费金额 */
  deliveryPrice: number;
  /** 订单调价（总） */
  adjustPrice: number;
  /** 应付金额（总） */
  payPrice: number;
  /** 配送方式 */
  deliveryType: number;
  /** 发货物流公司编号 */
  logisticsId?: number;
  /** 发货物流名称 */
  logisticsName?: string;
  /** 发货物流单号 */
  logisticsNo?: string;
  /** 发货时间 */
  deliveryTime?: string;
  /** 收货时间 */
  receiveTime?: string;
  /** 收件人名称 */
  receiverName: string;
  /** 收件人手机 */
  receiverMobile: string;
  /** 收件人地区编号 */
  receiverAreaId: number;
  /** 收件人地区名字 */
  receiverAreaName: string;
  /** 收件人详细地址 */
  receiverDetailAddress: string;
  /** 自提门店编号 */
  pickUpStoreId?: number;
  /** 自提核销码 */
  pickUpVerifyCode?: string;
  /** 售后状态 */
  refundStatus?: number;
  /** 退款金额，单位：分 */
  refundPrice?: number;
  /** 优惠劵编号 */
  couponId?: number;
  /** 优惠劵减免金额 */
  couponPrice: number;
  /** 积分抵扣的金额 */
  pointPrice: number;
  /** VIP 减免金额 */
  vipPrice: number;
  /** 拼团记录编号 */
  combinationRecordId?: number;
  items?: AppTradeOrderItemRespVO[];
};

export type AppTradeOrderItemCommentCreateReqVO = {
  /** 是否匿名 */
  anonymous: boolean;
  /** 交易订单项编号 */
  orderItemId: number;
  /** 描述星级 1-5 分 */
  descriptionScores: number;
  /** 服务星级 1-5 分 */
  benefitScores: number;
  /** 评论内容 */
  content: string;
  /** 评论图片地址数组，以逗号分隔最多上传 9 张 */
  picUrls: string[];
};

export type AppTradeOrderItemRespVO = {
  /** 编号 */
  id: number;
  /** 订单编号 */
  orderId: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SPU 名称 */
  spuName: string;
  /** 商品 SKU 编号 */
  skuId: number;
  properties?: AppProductPropertyValueDetailRespVO[];
  /** 商品图片 */
  picUrl: string;
  /** 购买数量 */
  count: number;
  /** 是否评价 */
  commentStatus: boolean;
  /** 商品原价（单） */
  price: number;
  /** 应付金额（总），单位：分 */
  payPrice: number;
  /** 售后编号 */
  afterSaleId?: number;
  /** 售后状态 */
  afterSaleStatus: number;
};

export type AppTradeOrderPageItemRespVO = {
  /** 订单编号 */
  id: number;
  /** 订单流水号 */
  no: string;
  /** 订单类型 */
  type: number;
  /** 订单状态 */
  status: number;
  /** 购买的商品数量 */
  productCount: number;
  /** 是否评价 */
  commentStatus: boolean;
  /** 创建时间 */
  createTime: string;
  /** 支付订单编号 */
  payOrderId: number;
  /** 应付金额，单位：分 */
  payPrice: number;
  /** 配送方式 */
  deliveryType: number;
  items?: AppTradeOrderItemRespVO[];
  /** 拼团记录编号 */
  combinationRecordId?: number;
};

export type AppTradeOrderSettlementRespVO = {
  /** 交易类型 */
  type: number;
  /** 购物项数组 */
  items: Item[];
  /** 优惠劵数组 */
  coupons: Coupon[];
  /** 费用 */
  price: Price;
  /** 收件地址 */
  address: Address;
  /** 已使用的积分 */
  usePoint: number;
  /** 总积分 */
  totalPoint: number;
  promotions?: Promotion[];
};

export type AppTradeProductSettlementRespVO = {
  /** SPU 商品编号 */
  spuId: number;
  /** SKU 价格信息数组 */
  skus: Sku[];
  /** 满减送活动信息 */
  rewardActivity: RewardActivity;
};

export type AppYRZPJobRespVO = {
  /** 职位编号 */
  id: number;
  /** 职位名称 */
  name: string;
  /** 职位描述 */
  description: string;
  /** 薪资范围-最小值 */
  salaryMin: number;
  /** 薪资范围-最大值 */
  salaryMax: number;
  /** 工作地点 */
  workLocation: string;
  /** 职位类别编号 */
  categoryId: number;
  /** 职位类别名称 */
  categoryName: string;
  /** 发布时间 */
  createTime: string;
};

export type AppYRZPJobSeekerRespVO = {
  /** 求职者编号 */
  id: number;
  /** 求职者名称 */
  name: string;
  /** 求职者头像 */
  avatar: string;
  /** 求职者简介 */
  description: string;
  /** 期望薪资-最小值 */
  expectedSalaryMin: number;
  /** 期望薪资-最大值 */
  expectedSalaryMax: number;
  /** 期望工作地点 */
  expectedWorkLocation: string;
  /** 求职者类型编号 */
  typeId: number;
  /** 求职者类型名称 */
  typeName: string;
  /** 注册时间 */
  createTime: string;
};

export type AreaNodeRespVO = {
  /** 编号 */
  id: number;
  /** 名字 */
  name: string;
};

export type ArticleCategoryCreateReqVO = {
  /** 文章分类名称 */
  name: string;
  /** 图标地址 */
  picUrl: string;
  /** 状态 */
  status: number;
  /** 排序 */
  sort: number;
};

export type ArticleCategoryRespVO = {
  /** 文章分类名称 */
  name: string;
  /** 图标地址 */
  picUrl: string;
  /** 状态 */
  status: number;
  /** 排序 */
  sort: number;
  /** 文章分类编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type ArticleCategorySimpleRespVO = {
  /** 文章分类编号 */
  id: number;
  /** 文章分类名称 */
  name: string;
};

export type ArticleCategoryUpdateReqVO = {
  /** 文章分类名称 */
  name: string;
  /** 图标地址 */
  picUrl: string;
  /** 状态 */
  status: number;
  /** 排序 */
  sort: number;
  /** 文章分类编号 */
  id: number;
};

export type ArticleCreateReqVO = {
  /** 文章分类编号 */
  categoryId: number;
  /** 关联商品编号 */
  spuId: number;
  /** 文章标题 */
  title: string;
  /** 文章作者 */
  author: string;
  /** 文章封面图片地址 */
  picUrl: string;
  /** 文章简介 */
  introduction: string;
  /** 排序 */
  sort: number;
  /** 状态 */
  status: number;
  /** 是否热门(小程序) */
  recommendHot: boolean;
  /** 是否轮播图(小程序) */
  recommendBanner: boolean;
  /** 文章内容 */
  content: string;
};

export type ArticleRespVO = {
  /** 文章分类编号 */
  categoryId: number;
  /** 关联商品编号 */
  spuId: number;
  /** 文章标题 */
  title: string;
  /** 文章作者 */
  author: string;
  /** 文章封面图片地址 */
  picUrl: string;
  /** 文章简介 */
  introduction: string;
  /** 排序 */
  sort: number;
  /** 状态 */
  status: number;
  /** 是否热门(小程序) */
  recommendHot: boolean;
  /** 是否轮播图(小程序) */
  recommendBanner: boolean;
  /** 文章内容 */
  content: string;
  /** 文章编号 */
  id: number;
  /** 浏览量 */
  browseCount: number;
  /** 创建时间 */
  createTime: string;
};

export type ArticleUpdateReqVO = {
  /** 文章分类编号 */
  categoryId: number;
  /** 关联商品编号 */
  spuId: number;
  /** 文章标题 */
  title: string;
  /** 文章作者 */
  author: string;
  /** 文章封面图片地址 */
  picUrl: string;
  /** 文章简介 */
  introduction: string;
  /** 排序 */
  sort: number;
  /** 状态 */
  status: number;
  /** 是否热门(小程序) */
  recommendHot: boolean;
  /** 是否轮播图(小程序) */
  recommendBanner: boolean;
  /** 文章内容 */
  content: string;
  /** 文章编号 */
  id: number;
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
  url: string;
  /** 图片地址 */
  picUrl: string;
  /** position */
  position: number;
  /** 排序 */
  sort: number;
  /** 状态 */
  status: number;
  /** 备注 */
  memo?: string;
};

export type BannerRespVO = {
  /** 标题 */
  title: string;
  /** 跳转链接 */
  url: string;
  /** 图片地址 */
  picUrl: string;
  /** position */
  position: number;
  /** 排序 */
  sort: number;
  /** 状态 */
  status: number;
  /** 备注 */
  memo?: string;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type BannerUpdateReqVO = {
  /** 标题 */
  title: string;
  /** 跳转链接 */
  url: string;
  /** 图片地址 */
  picUrl: string;
  /** position */
  position: number;
  /** 排序 */
  sort: number;
  /** 状态 */
  status: number;
  /** 备注 */
  memo?: string;
  /** banner 编号 */
  id: number;
};

export type BargainActivityCreateReqVO = {
  /** 砍价活动名称 */
  name: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 skuId */
  skuId: number;
  /** 砍价起始价格 */
  bargainFirstPrice: number;
  /** 砍价底价 */
  bargainMinPrice: number;
  /** 活动库存 */
  stock: number;
  /** 总限购数量 */
  totalLimitCount: number;
  /** 活动开始时间 */
  startTime: string;
  /** 活动结束时间 */
  endTime: string;
  /** 最大助力次数 */
  helpMaxCount: number;
  /** 最大帮砍次数 */
  bargainCount: number;
  /** 用户每次砍价的最小金额 */
  randomMinPrice: number;
  /** 用户每次砍价的最大金额 */
  randomMaxPrice: number;
};

export type BargainActivityPageItemRespVO = {
  /** 砍价活动名称 */
  name: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 skuId */
  skuId: number;
  /** 砍价起始价格 */
  bargainFirstPrice: number;
  /** 砍价底价 */
  bargainMinPrice: number;
  /** 活动库存 */
  stock: number;
  /** 总限购数量 */
  totalLimitCount: number;
  /** 活动开始时间 */
  startTime: string;
  /** 活动结束时间 */
  endTime: string;
  /** 最大助力次数 */
  helpMaxCount: number;
  /** 最大帮砍次数 */
  bargainCount: number;
  /** 用户每次砍价的最小金额 */
  randomMinPrice: number;
  /** 用户每次砍价的最大金额 */
  randomMaxPrice: number;
  /** 活动编号 */
  id: number;
  /** 商品名称 */
  spuName: string;
  /** 商品主图 */
  picUrl: string;
  /** 活动状态 */
  status: number;
  /** 活动总库存 */
  totalStock: number;
  /** 创建时间 */
  createTime: string;
  /** 总砍价的用户数量 */
  recordUserCount: number;
  /** 成功砍价的用户数量 */
  recordSuccessUserCount: number;
  /** 帮助砍价的用户数量 */
  helpUserCount: number;
};

export type BargainActivityRespVO = {
  /** 砍价活动名称 */
  name: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 skuId */
  skuId: number;
  /** 砍价起始价格 */
  bargainFirstPrice: number;
  /** 砍价底价 */
  bargainMinPrice: number;
  /** 活动库存 */
  stock: number;
  /** 总限购数量 */
  totalLimitCount: number;
  /** 活动开始时间 */
  startTime: string;
  /** 活动结束时间 */
  endTime: string;
  /** 最大助力次数 */
  helpMaxCount: number;
  /** 最大帮砍次数 */
  bargainCount: number;
  /** 用户每次砍价的最小金额 */
  randomMinPrice: number;
  /** 用户每次砍价的最大金额 */
  randomMaxPrice: number;
  /** 活动编号 */
  id: number;
  /** 活动状态 */
  status: number;
  /** 创建时间 */
  createTime: string;
};

export type BargainActivityUpdateReqVO = {
  /** 砍价活动名称 */
  name: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 skuId */
  skuId: number;
  /** 砍价起始价格 */
  bargainFirstPrice: number;
  /** 砍价底价 */
  bargainMinPrice: number;
  /** 活动库存 */
  stock: number;
  /** 总限购数量 */
  totalLimitCount: number;
  /** 活动开始时间 */
  startTime: string;
  /** 活动结束时间 */
  endTime: string;
  /** 最大助力次数 */
  helpMaxCount: number;
  /** 最大帮砍次数 */
  bargainCount: number;
  /** 用户每次砍价的最小金额 */
  randomMinPrice: number;
  /** 用户每次砍价的最大金额 */
  randomMaxPrice: number;
  /** 活动编号 */
  id: number;
};

export type BargainHelpRespVO = {
  /** 用户编号 */
  userId: number;
  /** 砍价活动名称 */
  activityId: number;
  /** 砍价记录编号 */
  recordId: number;
  /** 减少砍价，单位：分 */
  reducePrice: number;
  /** 砍价助力编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 用户昵称 */
  nickname?: string;
  /** 用户头像 */
  avatar: string;
};

export type BargainRecordPageItemRespVO = {
  /** 砍价活动名称 */
  activityId: number;
  /** 用户编号 */
  userId: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 砍价起始价格，单位：分 */
  bargainFirstPrice: number;
  /** 当前砍价，单位：分 */
  bargainPrice: number;
  /** 砍价状态 */
  status: number;
  /** 订单编号 */
  orderId?: number;
  /** 结束时间 */
  endTime: string;
  /** 记录编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 帮砍次数 */
  helpCount: number;
  /** 用户昵称 */
  nickname?: string;
  /** 用户头像 */
  avatar: string;
  activity?: BargainActivityRespVO;
};

export type BrokerageRecordRespVO = {
  /** 用户编号 */
  userId: number;
  /** 业务编号 */
  bizId: string;
  /** 业务类型 */
  bizType: number;
  /** 标题 */
  title: string;
  /** 金额 */
  price: number;
  /** 当前总佣金 */
  totalPrice: number;
  /** 说明 */
  description: string;
  /** 状态 */
  status: number;
  /** 冻结时间（天） */
  frozenDays: number;
  /** 解冻时间 */
  unfreezeTime?: string;
  /** 来源用户等级 */
  sourceUserLevel?: number;
  /** 来源用户编号 */
  sourceUserId?: number;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 用户头像 */
  userAvatar?: string;
  /** 用户昵称 */
  userNickname?: string;
  /** 来源用户头像 */
  sourceUserAvatar?: string;
  /** 来源用户昵称 */
  sourceUserNickname?: string;
};

export type BrokerageUserClearBrokerageUserReqVO = {
  /** 用户编号 */
  id: number;
};

export type BrokerageUserCreateReqVO = {
  /** 分销用户编号 */
  userId: number;
  /** 推广员编号 */
  bindUserId: number;
};

export type BrokerageUserRespVO = {
  /** 推广员编号 */
  bindUserId: number;
  /** 推广员绑定时间 */
  bindUserTime?: string;
  /** 推广资格 */
  brokerageEnabled: boolean;
  /** 成为分销员时间 */
  brokerageTime?: string;
  /** 可用佣金 */
  price: number;
  /** 冻结佣金 */
  frozenPrice: number;
  /** 用户编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 用户头像 */
  avatar: string;
  /** 用户昵称 */
  nickname: string;
  /** 推广用户数量 */
  brokerageUserCount: number;
  /** 推广订单数量 */
  brokerageOrderCount: number;
  /** 推广订单金额 */
  brokerageOrderPrice: number;
  /** 已提现金额 */
  withdrawPrice: number;
  /** 已提现次数 */
  withdrawCount: number;
};

export type BrokerageUserUpdateBrokerageEnabledReqVO = {
  /** 用户编号 */
  id: number;
  /** 推广资格 */
  enabled: boolean;
};

export type BrokerageUserUpdateBrokerageUserReqVO = {
  /** 用户编号 */
  id: number;
  /** 推广员编号 */
  bindUserId: number;
};

export type BrokerageWithdrawRejectReqVO = {
  /** 编号 */
  id: number;
  /** 审核驳回原因 */
  auditReason: string;
};

export type BrokerageWithdrawRespVO = {
  /** 编号 */
  id: number;
  /** 用户编号 */
  userId: number;
  /** 用户昵称 */
  userNickname: string;
  /** 提现金额 */
  price: number;
  /** 提现手续费 */
  feePrice: number;
  /** 当前总佣金 */
  totalPrice: number;
  /** 提现类型 */
  type: number;
  /** 真实姓名 */
  userName?: string;
  /** 收款账号 */
  userAccount?: string;
  /** 银行名称 */
  bankName?: string;
  /** 开户地址 */
  bankAddress?: string;
  /** 收款码 */
  qrCodeUrl?: string;
  /** 状态 */
  status: number;
  /** 审核驳回原因 */
  auditReason?: string;
  /** 审核时间 */
  auditTime?: string;
  /** 备注 */
  remark?: string;
  /** 转账单编号 */
  payTransferId?: number;
  /** 转账错误提示 */
  transferErrorMsg?: string;
  /** 创建时间 */
  createTime: string;
};

export type cancelAfterSaleParams = {
  /** 售后编号 */
  id: number;
};

export type cancelOrderParams = {
  /** 交易订单编号 */
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

export type Cart = {
  /** 购物项的编号 */
  id: number;
  /** 商品数量 */
  count: number;
  /** 是否选中 */
  selected: boolean;
  spu?: AppProductSpuBaseRespVO;
  sku?: AppProductSkuBaseRespVO;
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

export type closeCombinationActivityParams = {
  /** 编号 */
  id: number;
};

export type closeRewardActivity1Params = {
  /** 编号 */
  id: number;
};

export type closeRewardActivityParams = {
  /** 编号 */
  id: number;
};

export type closeSeckillActivity1Params = {
  /** 编号 */
  id: number;
};

export type closeSeckillActivity2Params = {
  /** 编号 */
  id: number;
};

export type closeSeckillActivityParams = {
  /** 编号 */
  id: number;
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

export type CombinationActivityCreateReqVO = {
  /** 拼团名称 */
  name: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 总限购数量 */
  totalLimitCount: number;
  /** 单次限购数量 */
  singleLimitCount: number;
  /** 活动时间 */
  startTime: string;
  /** 活动时间 */
  endTime: string;
  /** 开团人数 */
  userSize: number;
  /** 虚拟成团 */
  virtualGroup: boolean;
  /** 限制时长（小时） */
  limitDuration: number;
  /** 拼团商品 */
  products: CombinationProductBaseVO[];
};

export type CombinationActivityPageItemRespVO = {
  /** 拼团名称 */
  name: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 总限购数量 */
  totalLimitCount: number;
  /** 单次限购数量 */
  singleLimitCount: number;
  /** 活动时间 */
  startTime: string;
  /** 活动时间 */
  endTime: string;
  /** 开团人数 */
  userSize: number;
  /** 虚拟成团 */
  virtualGroup: boolean;
  /** 限制时长（小时） */
  limitDuration: number;
  /** 活动编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 活动状态 */
  status: number;
  /** 拼团商品 */
  products: CombinationProductRespVO[];
  /** 商品名称 */
  spuName: string;
  /** 商品主图 */
  picUrl: string;
  /** 商品市场价，单位：分 */
  marketPrice: number;
  /** 开团组数 */
  groupCount: number;
  /** 成团组数 */
  groupSuccessCount: number;
  /** 购买次数 */
  recordCount: number;
};

export type CombinationActivityRespVO = {
  /** 拼团名称 */
  name: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 总限购数量 */
  totalLimitCount: number;
  /** 单次限购数量 */
  singleLimitCount: number;
  /** 活动时间 */
  startTime: string;
  /** 活动时间 */
  endTime: string;
  /** 开团人数 */
  userSize: number;
  /** 虚拟成团 */
  virtualGroup: boolean;
  /** 限制时长（小时） */
  limitDuration: number;
  /** 活动编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 拼团商品 */
  products: CombinationProductRespVO[];
  /** 商品 SPU 名字 */
  spuName: string;
  /** 商品图片 */
  picUrl: string;
  /** 商品市场价，单位：分 */
  marketPrice: number;
  /** 拼团金额，单位：分 */
  combinationPrice: number;
};

export type CombinationActivityUpdateReqVO = {
  /** 拼团名称 */
  name: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 总限购数量 */
  totalLimitCount: number;
  /** 单次限购数量 */
  singleLimitCount: number;
  /** 活动时间 */
  startTime: string;
  /** 活动时间 */
  endTime: string;
  /** 开团人数 */
  userSize: number;
  /** 虚拟成团 */
  virtualGroup: boolean;
  /** 限制时长（小时） */
  limitDuration: number;
  /** 活动编号 */
  id: number;
  /** 拼团商品 */
  products: CombinationProductBaseVO[];
};

export type CombinationProductBaseVO = {
  /** 商品 spuId */
  spuId: number;
  /** 商品 skuId */
  skuId: number;
  /** 拼团价格，单位分 */
  combinationPrice: number;
};

export type CombinationProductRespVO = {
  /** 商品 spuId */
  spuId: number;
  /** 商品 skuId */
  skuId: number;
  /** 拼团价格，单位分 */
  combinationPrice: number;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type CombinationRecordPageItemRespVO = {
  /** 拼团记录编号 */
  id: number;
  /** 拼团活动编号 */
  activityId: number;
  /** 团长编号 */
  headId: number;
  /** 用户编号 */
  userId: number;
  /** 用户昵称 */
  nickname?: string;
  /** 用户头像 */
  avatar: string;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 商品名字 */
  spuName: string;
  /** 商品图片 */
  picUrl: string;
  /** 过期时间 */
  expireTime: string;
  /** 可参团人数 */
  userSize: number;
  /** 已参团人数 */
  userCount: number;
  /** 拼团状态 */
  status: number;
  /** 是否虚拟成团 */
  virtualGroup: boolean;
  /** 开始时间 (订单付款后开始的时间) */
  startTime: string;
  /** 结束时间（成团时间/失败时间） */
  endTime: string;
  activity?: CombinationActivityRespVO;
};

export type CombinationRecordSummaryVO = {
  /** 所有拼团记录 */
  userCount: number;
  /** 成团记录 */
  successCount: number;
  /** 虚拟成团记录 */
  virtualGroupCount: number;
};

export type CommandStat = {
  /** Redis 命令 */
  command: string;
  /** 调用次数 */
  calls: number;
  /** 消耗 CPU 秒数 */
  usec: number;
};

export type CommonResultAfterSaleDetailRespVO = {
  code?: number;
  data?: AfterSaleDetailRespVO;
  msg?: string;
};

export type CommonResultAppAddressRespVO = {
  code?: number;
  data?: AppAddressRespVO;
  msg?: string;
};

export type CommonResultAppAfterSaleRespVO = {
  code?: number;
  data?: AppAfterSaleRespVO;
  msg?: string;
};

export type CommonResultAppArticleRespVO = {
  code?: number;
  data?: AppArticleRespVO;
  msg?: string;
};

export type CommonResultAppAuthLoginRespVO = {
  code?: number;
  data?: AppAuthLoginRespVO;
  msg?: string;
};

export type CommonResultAppBargainActivityDetailRespVO = {
  code?: number;
  data?: AppBargainActivityDetailRespVO;
  msg?: string;
};

export type CommonResultAppBargainRecordDetailRespVO = {
  code?: number;
  data?: AppBargainRecordDetailRespVO;
  msg?: string;
};

export type CommonResultAppBargainRecordSummaryRespVO = {
  code?: number;
  data?: AppBargainRecordSummaryRespVO;
  msg?: string;
};

export type CommonResultAppBrokerageProductPriceRespVO = {
  code?: number;
  data?: AppBrokerageProductPriceRespVO;
  msg?: string;
};

export type CommonResultAppBrokerageUserMySummaryRespVO = {
  code?: number;
  data?: AppBrokerageUserMySummaryRespVO;
  msg?: string;
};

export type CommonResultAppBrokerageUserRespVO = {
  code?: number;
  data?: AppBrokerageUserRespVO;
  msg?: string;
};

export type CommonResultAppBrokerageWithdrawRespVO = {
  code?: number;
  data?: AppBrokerageWithdrawRespVO;
  msg?: string;
};

export type CommonResultAppCartListRespVO = {
  code?: number;
  data?: AppCartListRespVO;
  msg?: string;
};

export type CommonResultAppCombinationActivityDetailRespVO = {
  code?: number;
  data?: AppCombinationActivityDetailRespVO;
  msg?: string;
};

export type CommonResultAppCombinationRecordDetailRespVO = {
  code?: number;
  data?: AppCombinationRecordDetailRespVO;
  msg?: string;
};

export type CommonResultAppCombinationRecordSummaryRespVO = {
  code?: number;
  data?: AppCombinationRecordSummaryRespVO;
  msg?: string;
};

export type CommonResultAppCouponRespVO = {
  code?: number;
  data?: AppCouponRespVO;
  msg?: string;
};

export type CommonResultAppCouponTemplateRespVO = {
  code?: number;
  data?: AppCouponTemplateRespVO;
  msg?: string;
};

export type CommonResultAppDeliveryPickUpStoreRespVO = {
  code?: number;
  data?: AppDeliveryPickUpStoreRespVO;
  msg?: string;
};

export type CommonResultAppDiyPagePropertyRespVO = {
  code?: number;
  data?: AppDiyPagePropertyRespVO;
  msg?: string;
};

export type CommonResultAppDiyTemplatePropertyRespVO = {
  code?: number;
  data?: AppDiyTemplatePropertyRespVO;
  msg?: string;
};

export type CommonResultAppMemberSignInRecordRespVO = {
  code?: number;
  data?: AppMemberSignInRecordRespVO;
  msg?: string;
};

export type CommonResultAppMemberSignInRecordSummaryRespVO = {
  code?: number;
  data?: AppMemberSignInRecordSummaryRespVO;
  msg?: string;
};

export type CommonResultAppMemberUserInfoRespVO = {
  code?: number;
  data?: AppMemberUserInfoRespVO;
  msg?: string;
};

export type CommonResultAppPayOrderSubmitRespVO = {
  code?: number;
  data?: AppPayOrderSubmitRespVO;
  msg?: string;
};

export type CommonResultAppPayWalletRechargeCreateRespVO = {
  code?: number;
  data?: AppPayWalletRechargeCreateRespVO;
  msg?: string;
};

export type CommonResultAppPayWalletRespVO = {
  code?: number;
  data?: AppPayWalletRespVO;
  msg?: string;
};

export type CommonResultAppPayWalletTransactionSummaryRespVO = {
  code?: number;
  data?: AppPayWalletTransactionSummaryRespVO;
  msg?: string;
};

export type CommonResultAppPointActivityDetailRespVO = {
  code?: number;
  data?: AppPointActivityDetailRespVO;
  msg?: string;
};

export type CommonResultAppProductSpuDetailRespVO = {
  code?: number;
  data?: AppProductSpuDetailRespVO;
  msg?: string;
};

export type CommonResultAppRewardActivityRespVO = {
  code?: number;
  data?: AppRewardActivityRespVO;
  msg?: string;
};

export type CommonResultAppSeckillActivityDetailRespVO = {
  code?: number;
  data?: AppSeckillActivityDetailRespVO;
  msg?: string;
};

export type CommonResultAppSeckillActivityNowRespVO = {
  code?: number;
  data?: AppSeckillActivityNowRespVO;
  msg?: string;
};

export type CommonResultAppSocialUserRespVO = {
  code?: number;
  data?: AppSocialUserRespVO;
  msg?: string;
};

export type CommonResultAppTradeConfigRespVO = {
  code?: number;
  data?: AppTradeConfigRespVO;
  msg?: string;
};

export type CommonResultAppTradeOrderCreateRespVO = {
  code?: number;
  data?: AppTradeOrderCreateRespVO;
  msg?: string;
};

export type CommonResultAppTradeOrderDetailRespVO = {
  code?: number;
  data?: AppTradeOrderDetailRespVO;
  msg?: string;
};

export type CommonResultAppTradeOrderItemRespVO = {
  code?: number;
  data?: AppTradeOrderItemRespVO;
  msg?: string;
};

export type CommonResultAppTradeOrderSettlementRespVO = {
  code?: number;
  data?: AppTradeOrderSettlementRespVO;
  msg?: string;
};

export type CommonResultArticleCategoryRespVO = {
  code?: number;
  data?: ArticleCategoryRespVO;
  msg?: string;
};

export type CommonResultArticleRespVO = {
  code?: number;
  data?: ArticleRespVO;
  msg?: string;
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

export type CommonResultBargainActivityRespVO = {
  code?: number;
  data?: BargainActivityRespVO;
  msg?: string;
};

export type CommonResultBoolean = {
  code?: number;
  data?: boolean;
  msg?: string;
};

export type CommonResultBrokerageRecordRespVO = {
  code?: number;
  data?: BrokerageRecordRespVO;
  msg?: string;
};

export type CommonResultBrokerageUserRespVO = {
  code?: number;
  data?: BrokerageUserRespVO;
  msg?: string;
};

export type CommonResultBrokerageWithdrawRespVO = {
  code?: number;
  data?: BrokerageWithdrawRespVO;
  msg?: string;
};

export type CommonResultCodegenDetailRespVO = {
  code?: number;
  data?: CodegenDetailRespVO;
  msg?: string;
};

export type CommonResultCombinationActivityRespVO = {
  code?: number;
  data?: CombinationActivityRespVO;
  msg?: string;
};

export type CommonResultCombinationRecordSummaryVO = {
  code?: number;
  data?: CombinationRecordSummaryVO;
  msg?: string;
};

export type CommonResultConfigRespVO = {
  code?: number;
  data?: ConfigRespVO;
  msg?: string;
};

export type CommonResultCouponTemplateRespVO = {
  code?: number;
  data?: CouponTemplateRespVO;
  msg?: string;
};

export type CommonResultDataComparisonRespVOMemberCountRespVO = {
  code?: number;
  data?: DataComparisonRespVOMemberCountRespVO;
  msg?: string;
};

export type CommonResultDataComparisonRespVOProductStatisticsRespVO = {
  code?: number;
  data?: DataComparisonRespVOProductStatisticsRespVO;
  msg?: string;
};

export type CommonResultDataComparisonRespVOTradeOrderSummaryRespVO = {
  code?: number;
  data?: DataComparisonRespVOTradeOrderSummaryRespVO;
  msg?: string;
};

export type CommonResultDataComparisonRespVOTradeSummaryRespVO = {
  code?: number;
  data?: DataComparisonRespVOTradeSummaryRespVO;
  msg?: string;
};

export type CommonResultDataComparisonRespVOTradeTrendSummaryRespVO = {
  code?: number;
  data?: DataComparisonRespVOTradeTrendSummaryRespVO;
  msg?: string;
};

export type CommonResultDataSourceConfigRespVO = {
  code?: number;
  data?: DataSourceConfigRespVO;
  msg?: string;
};

export type CommonResultDeliveryExpressRespVO = {
  code?: number;
  data?: DeliveryExpressRespVO;
  msg?: string;
};

export type CommonResultDeliveryExpressTemplateDetailRespVO = {
  code?: number;
  data?: DeliveryExpressTemplateDetailRespVO;
  msg?: string;
};

export type CommonResultDeliveryPickUpStoreRespVO = {
  code?: number;
  data?: DeliveryPickUpStoreRespVO;
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

export type CommonResultDiscountActivityRespVO = {
  code?: number;
  data?: DiscountActivityRespVO;
  msg?: string;
};

export type CommonResultDiyPagePropertyRespVO = {
  code?: number;
  data?: DiyPagePropertyRespVO;
  msg?: string;
};

export type CommonResultDiyPageRespVO = {
  code?: number;
  data?: DiyPageRespVO;
  msg?: string;
};

export type CommonResultDiyTemplatePropertyRespVO = {
  code?: number;
  data?: DiyTemplatePropertyRespVO;
  msg?: string;
};

export type CommonResultDiyTemplateRespVO = {
  code?: number;
  data?: DiyTemplateRespVO;
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

export type CommonResultInteger = {
  code?: number;
  data?: number;
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

export type CommonResultKeFuConversationRespVO = {
  code?: number;
  data?: KeFuConversationRespVO;
  msg?: string;
};

export type CommonResultListAddressRespVO = {
  code?: number;
  data?: AddressRespVO[];
  msg?: string;
};

export type CommonResultListAppActivityRespVO = {
  code?: number;
  data?: AppActivityRespVO[];
  msg?: string;
};

export type CommonResultListAppAddressRespVO = {
  code?: number;
  data?: AppAddressRespVO[];
  msg?: string;
};

export type CommonResultListAppAfterSaleLogRespVO = {
  code?: number;
  data?: AppAfterSaleLogRespVO[];
  msg?: string;
};

export type CommonResultListAppAreaNodeRespVO = {
  code?: number;
  data?: AppAreaNodeRespVO[];
  msg?: string;
};

export type CommonResultListAppArticleCategoryRespVO = {
  code?: number;
  data?: AppArticleCategoryRespVO[];
  msg?: string;
};

export type CommonResultListAppArticleRespVO = {
  code?: number;
  data?: AppArticleRespVO[];
  msg?: string;
};

export type CommonResultListAppBannerRespVO = {
  code?: number;
  data?: AppBannerRespVO[];
  msg?: string;
};

export type CommonResultListAppBargainActivityRespVO = {
  code?: number;
  data?: AppBargainActivityRespVO[];
  msg?: string;
};

export type CommonResultListAppBargainHelpRespVO = {
  code?: number;
  data?: AppBargainHelpRespVO[];
  msg?: string;
};

export type CommonResultListAppCategoryRespVO = {
  code?: number;
  data?: AppCategoryRespVO[];
  msg?: string;
};

export type CommonResultListAppCombinationActivityRespVO = {
  code?: number;
  data?: AppCombinationActivityRespVO[];
  msg?: string;
};

export type CommonResultListAppCombinationRecordRespVO = {
  code?: number;
  data?: AppCombinationRecordRespVO[];
  msg?: string;
};

export type CommonResultListAppCouponTemplateRespVO = {
  code?: number;
  data?: AppCouponTemplateRespVO[];
  msg?: string;
};

export type CommonResultListAppDeliveryExpressRespVO = {
  code?: number;
  data?: AppDeliveryExpressRespVO[];
  msg?: string;
};

export type CommonResultListAppDeliveryPickUpStoreRespVO = {
  code?: number;
  data?: AppDeliveryPickUpStoreRespVO[];
  msg?: string;
};

export type CommonResultListAppDictDataRespVO = {
  code?: number;
  data?: AppDictDataRespVO[];
  msg?: string;
};

export type CommonResultListAppMemberLevelRespVO = {
  code?: number;
  data?: AppMemberLevelRespVO[];
  msg?: string;
};

export type CommonResultListAppMemberSignInConfigRespVO = {
  code?: number;
  data?: AppMemberSignInConfigRespVO[];
  msg?: string;
};

export type CommonResultListAppOrderExpressTrackRespDTO = {
  code?: number;
  data?: AppOrderExpressTrackRespDTO[];
  msg?: string;
};

export type CommonResultListAppPayWalletPackageRespVO = {
  code?: number;
  data?: AppPayWalletPackageRespVO[];
  msg?: string;
};

export type CommonResultListAppPointActivityRespVO = {
  code?: number;
  data?: AppPointActivityRespVO[];
  msg?: string;
};

export type CommonResultListAppProductSpuRespVO = {
  code?: number;
  data?: AppProductSpuRespVO[];
  msg?: string;
};

export type CommonResultListAppSeckillActivityRespVO = {
  code?: number;
  data?: AppSeckillActivityRespVO[];
  msg?: string;
};

export type CommonResultListAppSeckillConfigRespVO = {
  code?: number;
  data?: AppSeckillConfigRespVO[];
  msg?: string;
};

export type CommonResultListAppSocialWxaSubscribeTemplateRespVO = {
  code?: number;
  data?: AppSocialWxaSubscribeTemplateRespVO[];
  msg?: string;
};

export type CommonResultListAppTradeProductSettlementRespVO = {
  code?: number;
  data?: AppTradeProductSettlementRespVO[];
  msg?: string;
};

export type CommonResultListAreaNodeRespVO = {
  code?: number;
  data?: AreaNodeRespVO[];
  msg?: string;
};

export type CommonResultListArticleCategorySimpleRespVO = {
  code?: number;
  data?: ArticleCategorySimpleRespVO[];
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

export type CommonResultListCombinationActivityRespVO = {
  code?: number;
  data?: CombinationActivityRespVO[];
  msg?: string;
};

export type CommonResultListCouponTemplateRespVO = {
  code?: number;
  data?: CouponTemplateRespVO[];
  msg?: string;
};

export type CommonResultListDatabaseTableRespVO = {
  code?: number;
  data?: DatabaseTableRespVO[];
  msg?: string;
};

export type CommonResultListDataComparisonRespVOTradeOrderTrendRespVO = {
  code?: number;
  data?: DataComparisonRespVOTradeOrderTrendRespVO[];
  msg?: string;
};

export type CommonResultListDataSourceConfigRespVO = {
  code?: number;
  data?: DataSourceConfigRespVO[];
  msg?: string;
};

export type CommonResultListDeliveryExpressSimpleRespVO = {
  code?: number;
  data?: DeliveryExpressSimpleRespVO[];
  msg?: string;
};

export type CommonResultListDeliveryExpressTemplateRespVO = {
  code?: number;
  data?: DeliveryExpressTemplateRespVO[];
  msg?: string;
};

export type CommonResultListDeliveryExpressTemplateSimpleRespVO = {
  code?: number;
  data?: DeliveryExpressTemplateSimpleRespVO[];
  msg?: string;
};

export type CommonResultListDeliveryPickUpStoreRespVO = {
  code?: number;
  data?: DeliveryPickUpStoreRespVO[];
  msg?: string;
};

export type CommonResultListDeliveryPickUpStoreSimpleRespVO = {
  code?: number;
  data?: DeliveryPickUpStoreSimpleRespVO[];
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

export type CommonResultListDiyPageRespVO = {
  code?: number;
  data?: DiyPageRespVO[];
  msg?: string;
};

export type CommonResultListKeFuConversationRespVO = {
  code?: number;
  data?: KeFuConversationRespVO[];
  msg?: string;
};

export type CommonResultListKeFuMessageRespVO = {
  code?: number;
  data?: KeFuMessageRespVO[];
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

export type CommonResultListMemberAreaStatisticsRespVO = {
  code?: number;
  data?: MemberAreaStatisticsRespVO[];
  msg?: string;
};

export type CommonResultListMemberGroupSimpleRespVO = {
  code?: number;
  data?: MemberGroupSimpleRespVO[];
  msg?: string;
};

export type CommonResultListMemberLevelRespVO = {
  code?: number;
  data?: MemberLevelRespVO[];
  msg?: string;
};

export type CommonResultListMemberLevelSimpleRespVO = {
  code?: number;
  data?: MemberLevelSimpleRespVO[];
  msg?: string;
};

export type CommonResultListMemberRegisterCountRespVO = {
  code?: number;
  data?: MemberRegisterCountRespVO[];
  msg?: string;
};

export type CommonResultListMemberSexStatisticsRespVO = {
  code?: number;
  data?: MemberSexStatisticsRespVO[];
  msg?: string;
};

export type CommonResultListMemberSignInConfigRespVO = {
  code?: number;
  data?: MemberSignInConfigRespVO[];
  msg?: string;
};

export type CommonResultListMemberTagRespVO = {
  code?: number;
  data?: MemberTagRespVO[];
  msg?: string;
};

export type CommonResultListMemberTerminalStatisticsRespVO = {
  code?: number;
  data?: MemberTerminalStatisticsRespVO[];
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

export type CommonResultListObject = {
  code?: number;
  data?: Record<string, unknown>[];
  msg?: string;
};

export type CommonResultListPayAppRespVO = {
  code?: number;
  data?: PayAppRespVO[];
  msg?: string;
};

export type CommonResultListPointActivityRespVO = {
  code?: number;
  data?: PointActivityRespVO[];
  msg?: string;
};

export type CommonResultListPostSimpleRespVO = {
  code?: number;
  data?: PostSimpleRespVO[];
  msg?: string;
};

export type CommonResultListProductBrandRespVO = {
  code?: number;
  data?: ProductBrandRespVO[];
  msg?: string;
};

export type CommonResultListProductBrandSimpleRespVO = {
  code?: number;
  data?: ProductBrandSimpleRespVO[];
  msg?: string;
};

export type CommonResultListProductCategoryRespVO = {
  code?: number;
  data?: ProductCategoryRespVO[];
  msg?: string;
};

export type CommonResultListProductPropertyRespVO = {
  code?: number;
  data?: ProductPropertyRespVO[];
  msg?: string;
};

export type CommonResultListProductPropertyValueRespVO = {
  code?: number;
  data?: ProductPropertyValueRespVO[];
  msg?: string;
};

export type CommonResultListProductSpuRespVO = {
  code?: number;
  data?: ProductSpuRespVO[];
  msg?: string;
};

export type CommonResultListProductSpuSimpleRespVO = {
  code?: number;
  data?: ProductSpuSimpleRespVO[];
  msg?: string;
};

export type CommonResultListProductStatisticsRespVO = {
  code?: number;
  data?: ProductStatisticsRespVO[];
  msg?: string;
};

export type CommonResultListRoleRespVO = {
  code?: number;
  data?: RoleRespVO[];
  msg?: string;
};

export type CommonResultListSeckillActivityRespVO = {
  code?: number;
  data?: SeckillActivityRespVO[];
  msg?: string;
};

export type CommonResultListSeckillConfigRespVO = {
  code?: number;
  data?: SeckillConfigRespVO[];
  msg?: string;
};

export type CommonResultListSeckillConfigSimpleRespVO = {
  code?: number;
  data?: SeckillConfigSimpleRespVO[];
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

export type CommonResultListTradeTrendSummaryRespVO = {
  code?: number;
  data?: TradeTrendSummaryRespVO[];
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

export type CommonResultMapIntegerLong = {
  code?: number;
  data?: Record<string, unknown>;
  msg?: string;
};

export type CommonResultMapStringLong = {
  code?: number;
  data?: Record<string, unknown>;
  msg?: string;
};

export type CommonResultMemberAnalyseRespVO = {
  code?: number;
  data?: MemberAnalyseRespVO;
  msg?: string;
};

export type CommonResultMemberConfigRespVO = {
  code?: number;
  data?: MemberConfigRespVO;
  msg?: string;
};

export type CommonResultMemberExperienceRecordRespVO = {
  code?: number;
  data?: MemberExperienceRecordRespVO;
  msg?: string;
};

export type CommonResultMemberGroupRespVO = {
  code?: number;
  data?: MemberGroupRespVO;
  msg?: string;
};

export type CommonResultMemberLevelRecordRespVO = {
  code?: number;
  data?: MemberLevelRecordRespVO;
  msg?: string;
};

export type CommonResultMemberLevelRespVO = {
  code?: number;
  data?: MemberLevelRespVO;
  msg?: string;
};

export type CommonResultMemberSignInConfigRespVO = {
  code?: number;
  data?: MemberSignInConfigRespVO;
  msg?: string;
};

export type CommonResultMemberSummaryRespVO = {
  code?: number;
  data?: MemberSummaryRespVO;
  msg?: string;
};

export type CommonResultMemberTagRespVO = {
  code?: number;
  data?: MemberTagRespVO;
  msg?: string;
};

export type CommonResultMemberUserRespVO = {
  code?: number;
  data?: MemberUserRespVO;
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

export type CommonResultPageResultAfterSaleRespPageItemVO = {
  code?: number;
  data?: PageResultAfterSaleRespPageItemVO;
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

export type CommonResultPageResultAppAfterSaleRespVO = {
  code?: number;
  data?: PageResultAppAfterSaleRespVO;
  msg?: string;
};

export type CommonResultPageResultAppArticleRespVO = {
  code?: number;
  data?: PageResultAppArticleRespVO;
  msg?: string;
};

export type CommonResultPageResultAppBargainActivityRespVO = {
  code?: number;
  data?: PageResultAppBargainActivityRespVO;
  msg?: string;
};

export type CommonResultPageResultAppBargainRecordRespVO = {
  code?: number;
  data?: PageResultAppBargainRecordRespVO;
  msg?: string;
};

export type CommonResultPageResultAppBrokerageRecordRespVO = {
  code?: number;
  data?: PageResultAppBrokerageRecordRespVO;
  msg?: string;
};

export type CommonResultPageResultAppBrokerageUserChildSummaryRespVO = {
  code?: number;
  data?: PageResultAppBrokerageUserChildSummaryRespVO;
  msg?: string;
};

export type CommonResultPageResultAppBrokerageUserRankByPriceRespVO = {
  code?: number;
  data?: PageResultAppBrokerageUserRankByPriceRespVO;
  msg?: string;
};

export type CommonResultPageResultAppBrokerageUserRankByUserCountRespVO = {
  code?: number;
  data?: PageResultAppBrokerageUserRankByUserCountRespVO;
  msg?: string;
};

export type CommonResultPageResultAppBrokerageWithdrawRespVO = {
  code?: number;
  data?: PageResultAppBrokerageWithdrawRespVO;
  msg?: string;
};

export type CommonResultPageResultAppCombinationActivityRespVO = {
  code?: number;
  data?: PageResultAppCombinationActivityRespVO;
  msg?: string;
};

export type CommonResultPageResultAppCombinationRecordRespVO = {
  code?: number;
  data?: PageResultAppCombinationRecordRespVO;
  msg?: string;
};

export type CommonResultPageResultAppCouponRespVO = {
  code?: number;
  data?: PageResultAppCouponRespVO;
  msg?: string;
};

export type CommonResultPageResultAppCouponTemplateRespVO = {
  code?: number;
  data?: PageResultAppCouponTemplateRespVO;
  msg?: string;
};

export type CommonResultPageResultAppFavoriteRespVO = {
  code?: number;
  data?: PageResultAppFavoriteRespVO;
  msg?: string;
};

export type CommonResultPageResultAppMemberExperienceRecordRespVO = {
  code?: number;
  data?: PageResultAppMemberExperienceRecordRespVO;
  msg?: string;
};

export type CommonResultPageResultAppMemberPointRecordRespVO = {
  code?: number;
  data?: PageResultAppMemberPointRecordRespVO;
  msg?: string;
};

export type CommonResultPageResultAppMemberSignInRecordRespVO = {
  code?: number;
  data?: PageResultAppMemberSignInRecordRespVO;
  msg?: string;
};

export type CommonResultPageResultAppPayWalletRechargeRespVO = {
  code?: number;
  data?: PageResultAppPayWalletRechargeRespVO;
  msg?: string;
};

export type CommonResultPageResultAppPayWalletTransactionRespVO = {
  code?: number;
  data?: PageResultAppPayWalletTransactionRespVO;
  msg?: string;
};

export type CommonResultPageResultAppPointActivityRespVO = {
  code?: number;
  data?: PageResultAppPointActivityRespVO;
  msg?: string;
};

export type CommonResultPageResultAppProductBrowseHistoryRespVO = {
  code?: number;
  data?: PageResultAppProductBrowseHistoryRespVO;
  msg?: string;
};

export type CommonResultPageResultAppProductCommentRespVO = {
  code?: number;
  data?: PageResultAppProductCommentRespVO;
  msg?: string;
};

export type CommonResultPageResultAppProductSpuRespVO = {
  code?: number;
  data?: PageResultAppProductSpuRespVO;
  msg?: string;
};

export type CommonResultPageResultAppSeckillActivityRespVO = {
  code?: number;
  data?: PageResultAppSeckillActivityRespVO;
  msg?: string;
};

export type CommonResultPageResultAppTradeOrderPageItemRespVO = {
  code?: number;
  data?: PageResultAppTradeOrderPageItemRespVO;
  msg?: string;
};

export type CommonResultPageResultAppYRZPJobRespVO = {
  code?: number;
  data?: PageResultAppYRZPJobRespVO;
  msg?: string;
};

export type CommonResultPageResultAppYRZPJobSeekerRespVO = {
  code?: number;
  data?: PageResultAppYRZPJobSeekerRespVO;
  msg?: string;
};

export type CommonResultPageResultArticleCategoryRespVO = {
  code?: number;
  data?: PageResultArticleCategoryRespVO;
  msg?: string;
};

export type CommonResultPageResultArticleRespVO = {
  code?: number;
  data?: PageResultArticleRespVO;
  msg?: string;
};

export type CommonResultPageResultBannerRespVO = {
  code?: number;
  data?: PageResultBannerRespVO;
  msg?: string;
};

export type CommonResultPageResultBargainActivityPageItemRespVO = {
  code?: number;
  data?: PageResultBargainActivityPageItemRespVO;
  msg?: string;
};

export type CommonResultPageResultBargainHelpRespVO = {
  code?: number;
  data?: PageResultBargainHelpRespVO;
  msg?: string;
};

export type CommonResultPageResultBargainRecordPageItemRespVO = {
  code?: number;
  data?: PageResultBargainRecordPageItemRespVO;
  msg?: string;
};

export type CommonResultPageResultBrokerageRecordRespVO = {
  code?: number;
  data?: PageResultBrokerageRecordRespVO;
  msg?: string;
};

export type CommonResultPageResultBrokerageUserRespVO = {
  code?: number;
  data?: PageResultBrokerageUserRespVO;
  msg?: string;
};

export type CommonResultPageResultBrokerageWithdrawRespVO = {
  code?: number;
  data?: PageResultBrokerageWithdrawRespVO;
  msg?: string;
};

export type CommonResultPageResultCodegenTableRespVO = {
  code?: number;
  data?: PageResultCodegenTableRespVO;
  msg?: string;
};

export type CommonResultPageResultCombinationActivityPageItemRespVO = {
  code?: number;
  data?: PageResultCombinationActivityPageItemRespVO;
  msg?: string;
};

export type CommonResultPageResultCombinationRecordPageItemRespVO = {
  code?: number;
  data?: PageResultCombinationRecordPageItemRespVO;
  msg?: string;
};

export type CommonResultPageResultConfigRespVO = {
  code?: number;
  data?: PageResultConfigRespVO;
  msg?: string;
};

export type CommonResultPageResultCouponPageItemRespVO = {
  code?: number;
  data?: PageResultCouponPageItemRespVO;
  msg?: string;
};

export type CommonResultPageResultCouponTemplateRespVO = {
  code?: number;
  data?: PageResultCouponTemplateRespVO;
  msg?: string;
};

export type CommonResultPageResultDeliveryExpressRespVO = {
  code?: number;
  data?: PageResultDeliveryExpressRespVO;
  msg?: string;
};

export type CommonResultPageResultDeliveryExpressTemplateRespVO = {
  code?: number;
  data?: PageResultDeliveryExpressTemplateRespVO;
  msg?: string;
};

export type CommonResultPageResultDeliveryPickUpStoreRespVO = {
  code?: number;
  data?: PageResultDeliveryPickUpStoreRespVO;
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

export type CommonResultPageResultDiscountActivityRespVO = {
  code?: number;
  data?: PageResultDiscountActivityRespVO;
  msg?: string;
};

export type CommonResultPageResultDiyPageRespVO = {
  code?: number;
  data?: PageResultDiyPageRespVO;
  msg?: string;
};

export type CommonResultPageResultDiyTemplateRespVO = {
  code?: number;
  data?: PageResultDiyTemplateRespVO;
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

export type CommonResultPageResultMemberExperienceRecordRespVO = {
  code?: number;
  data?: PageResultMemberExperienceRecordRespVO;
  msg?: string;
};

export type CommonResultPageResultMemberGroupRespVO = {
  code?: number;
  data?: PageResultMemberGroupRespVO;
  msg?: string;
};

export type CommonResultPageResultMemberLevelRecordRespVO = {
  code?: number;
  data?: PageResultMemberLevelRecordRespVO;
  msg?: string;
};

export type CommonResultPageResultMemberPointRecordRespVO = {
  code?: number;
  data?: PageResultMemberPointRecordRespVO;
  msg?: string;
};

export type CommonResultPageResultMemberSignInRecordRespVO = {
  code?: number;
  data?: PageResultMemberSignInRecordRespVO;
  msg?: string;
};

export type CommonResultPageResultMemberTagRespVO = {
  code?: number;
  data?: PageResultMemberTagRespVO;
  msg?: string;
};

export type CommonResultPageResultMemberUserRespVO = {
  code?: number;
  data?: PageResultMemberUserRespVO;
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

export type CommonResultPageResultPayAppPageItemRespVO = {
  code?: number;
  data?: PageResultPayAppPageItemRespVO;
  msg?: string;
};

export type CommonResultPageResultPayDemoOrderRespVO = {
  code?: number;
  data?: PageResultPayDemoOrderRespVO;
  msg?: string;
};

export type CommonResultPageResultPayDemoWithdrawRespVO = {
  code?: number;
  data?: PageResultPayDemoWithdrawRespVO;
  msg?: string;
};

export type CommonResultPageResultPayNotifyTaskRespVO = {
  code?: number;
  data?: PageResultPayNotifyTaskRespVO;
  msg?: string;
};

export type CommonResultPageResultPayOrderPageItemRespVO = {
  code?: number;
  data?: PageResultPayOrderPageItemRespVO;
  msg?: string;
};

export type CommonResultPageResultPayRefundPageItemRespVO = {
  code?: number;
  data?: PageResultPayRefundPageItemRespVO;
  msg?: string;
};

export type CommonResultPageResultPayTransferRespVO = {
  code?: number;
  data?: PageResultPayTransferRespVO;
  msg?: string;
};

export type CommonResultPageResultPayWalletRespVO = {
  code?: number;
  data?: PageResultPayWalletRespVO;
  msg?: string;
};

export type CommonResultPageResultPayWalletTransactionRespVO = {
  code?: number;
  data?: PageResultPayWalletTransactionRespVO;
  msg?: string;
};

export type CommonResultPageResultPointActivityRespVO = {
  code?: number;
  data?: PageResultPointActivityRespVO;
  msg?: string;
};

export type CommonResultPageResultPostRespVO = {
  code?: number;
  data?: PageResultPostRespVO;
  msg?: string;
};

export type CommonResultPageResultProductBrandRespVO = {
  code?: number;
  data?: PageResultProductBrandRespVO;
  msg?: string;
};

export type CommonResultPageResultProductBrowseHistoryRespVO = {
  code?: number;
  data?: PageResultProductBrowseHistoryRespVO;
  msg?: string;
};

export type CommonResultPageResultProductCommentRespVO = {
  code?: number;
  data?: PageResultProductCommentRespVO;
  msg?: string;
};

export type CommonResultPageResultProductFavoriteRespVO = {
  code?: number;
  data?: PageResultProductFavoriteRespVO;
  msg?: string;
};

export type CommonResultPageResultProductPropertyRespVO = {
  code?: number;
  data?: PageResultProductPropertyRespVO;
  msg?: string;
};

export type CommonResultPageResultProductPropertyValueRespVO = {
  code?: number;
  data?: PageResultProductPropertyValueRespVO;
  msg?: string;
};

export type CommonResultPageResultProductSpuRespVO = {
  code?: number;
  data?: PageResultProductSpuRespVO;
  msg?: string;
};

export type CommonResultPageResultProductStatisticsRespVO = {
  code?: number;
  data?: PageResultProductStatisticsRespVO;
  msg?: string;
};

export type CommonResultPageResultRewardActivityRespVO = {
  code?: number;
  data?: PageResultRewardActivityRespVO;
  msg?: string;
};

export type CommonResultPageResultRoleRespVO = {
  code?: number;
  data?: PageResultRoleRespVO;
  msg?: string;
};

export type CommonResultPageResultSeckillActivityRespVO = {
  code?: number;
  data?: PageResultSeckillActivityRespVO;
  msg?: string;
};

export type CommonResultPageResultSeckillConfigRespVO = {
  code?: number;
  data?: PageResultSeckillConfigRespVO;
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

export type CommonResultPageResultTradeOrderPageItemRespVO = {
  code?: number;
  data?: PageResultTradeOrderPageItemRespVO;
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

export type CommonResultPageResultWalletRechargePackageRespVO = {
  code?: number;
  data?: PageResultWalletRechargePackageRespVO;
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

export type CommonResultPayAppRespVO = {
  code?: number;
  data?: PayAppRespVO;
  msg?: string;
};

export type CommonResultPayChannelRespVO = {
  code?: number;
  data?: PayChannelRespVO;
  msg?: string;
};

export type CommonResultPayNotifyTaskDetailRespVO = {
  code?: number;
  data?: PayNotifyTaskDetailRespVO;
  msg?: string;
};

export type CommonResultPayOrderDetailsRespVO = {
  code?: number;
  data?: PayOrderDetailsRespVO;
  msg?: string;
};

export type CommonResultPayOrderRespVO = {
  code?: number;
  data?: PayOrderRespVO;
  msg?: string;
};

export type CommonResultPayOrderSubmitRespVO = {
  code?: number;
  data?: PayOrderSubmitRespVO;
  msg?: string;
};

export type CommonResultPayRefundDetailsRespVO = {
  code?: number;
  data?: PayRefundDetailsRespVO;
  msg?: string;
};

export type CommonResultPaySummaryRespVO = {
  code?: number;
  data?: PaySummaryRespVO;
  msg?: string;
};

export type CommonResultPayTransferRespVO = {
  code?: number;
  data?: PayTransferRespVO;
  msg?: string;
};

export type CommonResultPayWalletRespVO = {
  code?: number;
  data?: PayWalletRespVO;
  msg?: string;
};

export type CommonResultPointActivityRespVO = {
  code?: number;
  data?: PointActivityRespVO;
  msg?: string;
};

export type CommonResultPostRespVO = {
  code?: number;
  data?: PostRespVO;
  msg?: string;
};

export type CommonResultProductBrandRespVO = {
  code?: number;
  data?: ProductBrandRespVO;
  msg?: string;
};

export type CommonResultProductCategoryRespVO = {
  code?: number;
  data?: ProductCategoryRespVO;
  msg?: string;
};

export type CommonResultProductPropertyRespVO = {
  code?: number;
  data?: ProductPropertyRespVO;
  msg?: string;
};

export type CommonResultProductPropertyValueRespVO = {
  code?: number;
  data?: ProductPropertyValueRespVO;
  msg?: string;
};

export type CommonResultProductSpuRespVO = {
  code?: number;
  data?: ProductSpuRespVO;
  msg?: string;
};

export type CommonResultRedisMonitorRespVO = {
  code?: number;
  data?: RedisMonitorRespVO;
  msg?: string;
};

export type CommonResultRewardActivityRespVO = {
  code?: number;
  data?: RewardActivityRespVO;
  msg?: string;
};

export type CommonResultRoleRespVO = {
  code?: number;
  data?: RoleRespVO;
  msg?: string;
};

export type CommonResultSeckillActivityDetailRespVO = {
  code?: number;
  data?: SeckillActivityDetailRespVO;
  msg?: string;
};

export type CommonResultSeckillConfigRespVO = {
  code?: number;
  data?: SeckillConfigRespVO;
  msg?: string;
};

export type CommonResultSetLong = {
  code?: number;
  data?: number[];
  msg?: string;
};

export type CommonResultSetString = {
  code?: number;
  data?: string[];
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

export type CommonResultSocialWxJsapiSignatureRespDTO = {
  code?: number;
  data?: SocialWxJsapiSignatureRespDTO;
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

export type CommonResultTradeConfigRespVO = {
  code?: number;
  data?: TradeConfigRespVO;
  msg?: string;
};

export type CommonResultTradeOrderCountRespVO = {
  code?: number;
  data?: TradeOrderCountRespVO;
  msg?: string;
};

export type CommonResultTradeOrderDetailRespVO = {
  code?: number;
  data?: TradeOrderDetailRespVO;
  msg?: string;
};

export type CommonResultTradeOrderSummaryRespVO = {
  code?: number;
  data?: TradeOrderSummaryRespVO;
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

export type CommonResultWalletRechargePackageRespVO = {
  code?: number;
  data?: WalletRechargePackageRespVO;
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

export type Coupon = {
  /** 优惠劵编号 */
  id: number;
  /** 优惠劵名 */
  name: string;
  /** 是否设置满多少金额可用 */
  usePrice: number;
  /** 固定日期 - 生效开始时间 */
  validStartTime?: string;
  /** 固定日期 - 生效结束时间 */
  validEndTime?: string;
  /** 优惠类型 */
  discountType: number;
  /** 折扣百分比 */
  discountPercent?: number;
  /** 优惠金额 */
  discountPrice?: number;
  /** 折扣上限 */
  discountLimitPrice?: number;
  /** 是否可用 */
  match: boolean;
  /** 不可用原因 */
  mismatchReason?: string;
};

export type CouponPageItemRespVO = {
  /** 优惠劵模板编号 */
  templateId: number;
  /** 优惠劵名 */
  name: string;
  /** 优惠码状态 */
  status: number;
  /** 用户编号 */
  userId: number;
  /** 领取方式 */
  takeType: number;
  /** 是否设置满多少金额可用 */
  usePrice: number;
  /** 固定日期 - 生效开始时间 */
  validStartTime?: string;
  /** 固定日期 - 生效结束时间 */
  validEndTime?: string;
  /** 商品范围 */
  productScope: number;
  /** 商品范围编号的数组 */
  productScopeValues?: number[];
  /** 优惠类型 */
  discountType: number;
  /** 折扣百分比 */
  discountPercent?: number;
  /** 优惠金额 */
  discountPrice?: number;
  /** 折扣上限 */
  discountLimitPrice?: number;
  /** 使用订单号 */
  useOrderId?: number;
  /** 使用时间 */
  useTime?: string;
  /** 优惠劵编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 用户昵称 */
  nickname?: string;
};

export type CouponSendReqVO = {
  /** 优惠劵模板编号 */
  templateId: number;
  /** 用户编号列表 */
  userIds: number[];
};

export type CouponTemplateCreateReqVO = {
  /** 优惠劵名 */
  name: string;
  /** 优惠券说明 */
  description?: string;
  /** 发行总量 */
  totalCount: number;
  /** 每人限领个数 */
  takeLimitCount: number;
  /** 领取方式 */
  takeType: number;
  /** 是否设置满多少金额可用 */
  usePrice: number;
  /** 商品范围 */
  productScope: number;
  /** 商品范围编号的数组 */
  productScopeValues?: number[];
  /** 生效日期类型 */
  validityType: number;
  /** 固定日期 - 生效开始时间 */
  validStartTime?: string;
  /** 固定日期 - 生效结束时间 */
  validEndTime?: string;
  /** 领取日期 - 开始天数 */
  fixedStartTerm?: number;
  /** 领取日期 - 结束天数 */
  fixedEndTerm?: number;
  /** 优惠类型 */
  discountType: number;
  /** 折扣百分比 */
  discountPercent?: number;
  /** 优惠金额 */
  discountPrice?: number;
  /** 折扣上限 */
  discountLimitPrice?: number;
};

export type CouponTemplateRespVO = {
  /** 优惠劵名 */
  name: string;
  /** 优惠券说明 */
  description?: string;
  /** 发行总量 */
  totalCount: number;
  /** 每人限领个数 */
  takeLimitCount: number;
  /** 领取方式 */
  takeType: number;
  /** 是否设置满多少金额可用 */
  usePrice: number;
  /** 商品范围 */
  productScope: number;
  /** 商品范围编号的数组 */
  productScopeValues?: number[];
  /** 生效日期类型 */
  validityType: number;
  /** 固定日期 - 生效开始时间 */
  validStartTime?: string;
  /** 固定日期 - 生效结束时间 */
  validEndTime?: string;
  /** 领取日期 - 开始天数 */
  fixedStartTerm?: number;
  /** 领取日期 - 结束天数 */
  fixedEndTerm?: number;
  /** 优惠类型 */
  discountType: number;
  /** 折扣百分比 */
  discountPercent?: number;
  /** 优惠金额 */
  discountPrice?: number;
  /** 折扣上限 */
  discountLimitPrice?: number;
  /** 模板编号 */
  id: number;
  /** 状态 */
  status: number;
  /** 领取优惠券的数量 */
  takeCount: number;
  /** 使用优惠券的次数 */
  useCount: number;
  /** 创建时间 */
  createTime: string;
};

export type CouponTemplateUpdateReqVO = {
  /** 优惠劵名 */
  name: string;
  /** 优惠券说明 */
  description?: string;
  /** 发行总量 */
  totalCount: number;
  /** 每人限领个数 */
  takeLimitCount: number;
  /** 领取方式 */
  takeType: number;
  /** 是否设置满多少金额可用 */
  usePrice: number;
  /** 商品范围 */
  productScope: number;
  /** 商品范围编号的数组 */
  productScopeValues?: number[];
  /** 生效日期类型 */
  validityType: number;
  /** 固定日期 - 生效开始时间 */
  validStartTime?: string;
  /** 固定日期 - 生效结束时间 */
  validEndTime?: string;
  /** 领取日期 - 开始天数 */
  fixedStartTerm?: number;
  /** 领取日期 - 结束天数 */
  fixedEndTerm?: number;
  /** 优惠类型 */
  discountType: number;
  /** 折扣百分比 */
  discountPercent?: number;
  /** 优惠金额 */
  discountPrice?: number;
  /** 折扣上限 */
  discountLimitPrice?: number;
  /** 模板编号 */
  id: number;
};

export type CouponTemplateUpdateStatusReqVO = {
  /** 优惠劵模板编号 */
  id: number;
  /** 状态 */
  status: number;
};

export type createWeixinMpJsapiSignatureParams = {
  url: string;
};

export type DatabaseTableRespVO = {
  /** 表名称 */
  name: string;
  /** 表描述 */
  comment: string;
};

export type DataComparisonRespVOMemberAnalyseDataRespVO = {
  /** 当前数据 */
  value: MemberAnalyseDataRespVO;
  /** 参照数据 */
  reference: MemberAnalyseDataRespVO;
};

export type DataComparisonRespVOMemberCountRespVO = {
  /** 当前数据 */
  value: MemberCountRespVO;
  /** 参照数据 */
  reference: MemberCountRespVO;
};

export type DataComparisonRespVOProductStatisticsRespVO = {
  /** 当前数据 */
  value: ProductStatisticsRespVO;
  /** 参照数据 */
  reference: ProductStatisticsRespVO;
};

export type DataComparisonRespVOTradeOrderSummaryRespVO = {
  /** 当前数据 */
  value: TradeOrderSummaryRespVO;
  /** 参照数据 */
  reference: TradeOrderSummaryRespVO;
};

export type DataComparisonRespVOTradeOrderTrendRespVO = {
  /** 当前数据 */
  value: TradeOrderTrendRespVO;
  /** 参照数据 */
  reference: TradeOrderTrendRespVO;
};

export type DataComparisonRespVOTradeSummaryRespVO = {
  /** 当前数据 */
  value: TradeSummaryRespVO;
  /** 参照数据 */
  reference: TradeSummaryRespVO;
};

export type DataComparisonRespVOTradeTrendSummaryRespVO = {
  /** 当前数据 */
  value: TradeTrendSummaryRespVO;
  /** 参照数据 */
  reference: TradeTrendSummaryRespVO;
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

export type deleteAddressParams = {
  /** 编号 */
  id: number;
};

export type deleteAppParams = {
  /** 编号 */
  id: number;
};

export type deleteArticleCategoryParams = {
  /** 编号 */
  id: number;
};

export type deleteArticleParams = {
  /** 编号 */
  id: number;
};

export type deleteBannerParams = {
  /** 编号 */
  id: number;
};

export type deleteBargainActivityParams = {
  /** 编号 */
  id: number;
};

export type deleteBrandParams = {
  /** 编号 */
  id: number;
};

export type deleteCartParams = {
  /** 购物车商品编号 */
  ids: number[];
};

export type deleteCategoryParams = {
  /** 编号 */
  id: number;
};

export type deleteChannelParams = {
  /** 编号 */
  id: number;
};

export type deleteCodegenParams = {
  /** 表编号 */
  tableId: number;
};

export type deleteCombinationActivityParams = {
  /** 编号 */
  id: number;
};

export type deleteConfigParams = {
  /** 编号 */
  id: number;
};

export type deleteConversationParams = {
  /** 编号 */
  id: number;
};

export type deleteCouponParams = {
  /** 编号 */
  id: number;
};

export type deleteCouponTemplateParams = {
  /** 编号 */
  id: number;
};

export type deleteDataSourceConfigParams = {
  /** 编号 */
  id: number;
};

export type deleteDeliveryExpressParams = {
  /** 编号 */
  id: number;
};

export type deleteDeliveryExpressTemplateParams = {
  /** 编号 */
  id: number;
};

export type deleteDeliveryPickUpStoreParams = {
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

export type deleteDiscountActivityParams = {
  /** 编号 */
  id: number;
};

export type deleteDiyPageParams = {
  /** 编号 */
  id: number;
};

export type deleteDiyTemplateParams = {
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

export type deleteGroupParams = {
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

export type deleteLevelParams = {
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

export type deleteOrderParams = {
  /** 交易订单编号 */
  id: number;
};

export type deletePointActivityParams = {
  /** 编号 */
  id: number;
};

export type deletePostParams = {
  id: number;
};

export type deletePropertyParams = {
  /** 编号 */
  id: number;
};

export type deletePropertyValueParams = {
  /** 编号 */
  id: number;
};

export type deleteRewardActivityParams = {
  /** 编号 */
  id: number;
};

export type deleteRoleParams = {
  /** 角色编号 */
  id: number;
};

export type deleteSeckillActivityParams = {
  /** 编号 */
  id: number;
};

export type deleteSeckillConfigParams = {
  /** 编号 */
  id: number;
};

export type deleteSignInConfigParams = {
  /** 编号 */
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

export type deleteSpuParams = {
  /** 编号 */
  id: number;
};

export type deleteTagParams = {
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

export type deleteWalletRechargePackageParams = {
  /** 编号 */
  id: number;
};

export type DeliveryExpressCreateReqVO = {
  /** 快递公司编码 */
  code: string;
  /** 快递公司名称 */
  name: string;
  /** 快递公司logo */
  logo?: string;
  /** 排序 */
  sort: number;
  /** 状态 */
  status: number;
};

export type DeliveryExpressRespVO = {
  /** 快递公司编码 */
  code: string;
  /** 快递公司名称 */
  name: string;
  /** 快递公司logo */
  logo?: string;
  /** 排序 */
  sort: number;
  /** 状态 */
  status: number;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type DeliveryExpressSimpleRespVO = {
  /** 编号 */
  id: number;
  /** 快递公司名称 */
  name: string;
};

export type DeliveryExpressTemplateChargeBaseVO = {
  /** 区域编号列表 */
  areaIds: number[];
  /** 首件数量 */
  startCount: number;
  /** 起步价 */
  startPrice: number;
  /** 续件数量 */
  extraCount: number;
  /** 额外价 */
  extraPrice: number;
};

export type DeliveryExpressTemplateCreateReqVO = {
  /** 模板名称 */
  name: string;
  /** 配送计费方式 1:按件 2:按重量 3:按体积 */
  chargeMode: number;
  /** 排序 */
  sort: number;
  /** 区域运费列表 */
  charges?: DeliveryExpressTemplateChargeBaseVO[];
  /** 包邮区域列表 */
  frees?: DeliveryExpressTemplateFreeBaseVO[];
};

export type DeliveryExpressTemplateDetailRespVO = {
  /** 模板名称 */
  name: string;
  /** 配送计费方式 1:按件 2:按重量 3:按体积 */
  chargeMode: number;
  /** 排序 */
  sort: number;
  /** 编号 */
  id: number;
  /** 运费模板运费设置 */
  charges: DeliveryExpressTemplateChargeBaseVO[];
  /** 运费模板包邮区域 */
  frees: DeliveryExpressTemplateFreeBaseVO[];
};

export type DeliveryExpressTemplateFreeBaseVO = {
  /** 区域编号列表 */
  areaIds: number[];
  /** 包邮金额 */
  freePrice: number;
  /** 包邮件数 */
  freeCount: number;
};

export type DeliveryExpressTemplateRespVO = {
  /** 模板名称 */
  name: string;
  /** 配送计费方式 1:按件 2:按重量 3:按体积 */
  chargeMode: number;
  /** 排序 */
  sort: number;
  /** 编号，自增 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type DeliveryExpressTemplateSimpleRespVO = {
  /** 模版编号 */
  id: number;
  /** 模板名称 */
  name: string;
};

export type DeliveryExpressTemplateUpdateReqVO = {
  /** 模板名称 */
  name: string;
  /** 配送计费方式 1:按件 2:按重量 3:按体积 */
  chargeMode: number;
  /** 排序 */
  sort: number;
  /** 编号 */
  id: number;
  /** 区域运费列表 */
  charges?: DeliveryExpressTemplateChargeBaseVO[];
  /** 包邮区域列表 */
  frees?: DeliveryExpressTemplateFreeBaseVO[];
};

export type DeliveryExpressUpdateReqVO = {
  /** 快递公司编码 */
  code: string;
  /** 快递公司名称 */
  name: string;
  /** 快递公司logo */
  logo?: string;
  /** 排序 */
  sort: number;
  /** 状态 */
  status: number;
  /** 编号 */
  id: number;
};

export type DeliveryPickUpBindReqVO = {
  /** 编号 */
  id: number;
  /** 绑定用户编号组数 */
  verifyUserIds: number[];
};

export type DeliveryPickUpStoreCreateReqVO = {
  /** 门店名称 */
  name: string;
  /** 门店简介 */
  introduction?: string;
  /** 门店手机 */
  phone: string;
  /** 区域编号 */
  areaId: number;
  /** 门店详细地址 */
  detailAddress: string;
  /** 门店 logo */
  logo: string;
  /** 营业开始时间 */
  openingTime: LocalTime;
  /** 营业结束时间 */
  closingTime: LocalTime;
  /** 纬度 */
  latitude: number;
  /** 经度 */
  longitude: number;
  /** 门店状态 */
  status: number;
};

export type DeliveryPickUpStoreRespVO = {
  /** 门店名称 */
  name: string;
  /** 门店简介 */
  introduction?: string;
  /** 门店手机 */
  phone: string;
  /** 区域编号 */
  areaId: number;
  /** 门店详细地址 */
  detailAddress: string;
  /** 门店 logo */
  logo: string;
  /** 营业开始时间 */
  openingTime: LocalTime;
  /** 营业结束时间 */
  closingTime: LocalTime;
  /** 纬度 */
  latitude: number;
  /** 经度 */
  longitude: number;
  /** 门店状态 */
  status: number;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 核销用户数组 */
  verifyUsers: UserSimpleBaseVO[];
};

export type DeliveryPickUpStoreSimpleRespVO = {
  /** 编号 */
  id: number;
  /** 门店名称 */
  name: string;
  /** 门店手机 */
  phone: string;
  /** 区域编号 */
  areaId: number;
  /** 区域名称 */
  areaName: string;
  /** 门店详细地址 */
  detailAddress: string;
  /** 绑定用户编号组数 */
  verifyUserIds: number[];
};

export type DeliveryPickUpStoreUpdateReqVO = {
  /** 门店名称 */
  name: string;
  /** 门店简介 */
  introduction?: string;
  /** 门店手机 */
  phone: string;
  /** 区域编号 */
  areaId: number;
  /** 门店详细地址 */
  detailAddress: string;
  /** 门店 logo */
  logo: string;
  /** 营业开始时间 */
  openingTime: LocalTime;
  /** 营业结束时间 */
  closingTime: LocalTime;
  /** 纬度 */
  latitude: number;
  /** 经度 */
  longitude: number;
  /** 门店状态 */
  status: number;
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

export type DiscountActivityCreateReqVO = {
  /** 活动标题 */
  name: string;
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 备注 */
  remark?: string;
  products: Product[];
};

export type DiscountActivityRespVO = {
  /** 活动标题 */
  name: string;
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 备注 */
  remark?: string;
  /** 活动编号 */
  id: number;
  /** 活动状态 */
  status: number;
  /** 创建时间 */
  createTime: string;
  /** 限时折扣商品 */
  products: Product[];
};

export type DiscountActivityUpdateReqVO = {
  /** 活动标题 */
  name: string;
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 备注 */
  remark?: string;
  /** 活动编号 */
  id: number;
  products: Product[];
};

export type DiyPageCreateReqVO = {
  /** 装修模板编号 */
  templateId?: number;
  /** 页面名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 预览图 */
  previewPicUrls?: string[];
};

export type DiyPagePropertyRespVO = {
  /** 装修模板编号 */
  templateId?: number;
  /** 页面名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 预览图 */
  previewPicUrls?: string[];
  /** 装修页面编号 */
  id: number;
  /** 页面属性 */
  property?: string;
};

export type DiyPagePropertyUpdateRequestVO = {
  /** 装修页面编号 */
  id: number;
  /** 页面属性，JSON 格式 */
  property: string;
};

export type DiyPageRespVO = {
  /** 装修模板编号 */
  templateId?: number;
  /** 页面名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 预览图 */
  previewPicUrls?: string[];
  /** 装修页面编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type DiyPageUpdateReqVO = {
  /** 装修模板编号 */
  templateId?: number;
  /** 页面名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 预览图 */
  previewPicUrls?: string[];
  /** 装修页面编号 */
  id: number;
};

export type DiyTemplateCreateReqVO = {
  /** 模板名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 预览图 */
  previewPicUrls?: string[];
};

export type DiyTemplatePropertyRespVO = {
  /** 模板名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 预览图 */
  previewPicUrls?: string[];
  /** 装修模板编号 */
  id: number;
  /** 模板属性，JSON 格式 */
  property: string;
  /** 模板页面 */
  pages: DiyPagePropertyRespVO[];
};

export type DiyTemplatePropertyUpdateRequestVO = {
  /** 装修模板编号 */
  id: number;
  /** 模板属性，JSON 格式 */
  property: string;
};

export type DiyTemplateRespVO = {
  /** 模板名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 预览图 */
  previewPicUrls?: string[];
  /** 装修模板编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 是否使用 */
  used: boolean;
  /** 使用时间 */
  usedTime?: string;
};

export type DiyTemplateUpdateReqVO = {
  /** 模板名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 预览图 */
  previewPicUrls?: string[];
  /** 装修模板编号 */
  id: number;
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

export type exportDeliveryExpressExcelParams = {
  /** 快递公司编码 */
  code?: string;
  /** 快递公司名称 */
  name?: string;
  /** 状态（0正常 1停用） */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
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

export type exportOrderExcelParams = {
  /** 应用编号 */
  appId?: number;
  /** 渠道编码 */
  channelCode?: string;
  /** 商户订单编号 */
  merchantOrderId?: string;
  /** 渠道编号 */
  channelOrderNo?: string;
  /** 支付单号 */
  no?: string;
  /** 支付状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
};

export type exportProductStatisticsExcelParams = {
  /** 统计时间范围 */
  times?: string[];
};

export type exportRefundExcelParams = {
  /** 应用编号 */
  appId?: number;
  /** 渠道编码 */
  channelCode?: string;
  /** 商户支付单号 */
  merchantOrderId?: string;
  /** 商户退款单号 */
  merchantRefundId?: string;
  /** 渠道支付单号 */
  channelOrderNo?: string;
  /** 渠道退款单号 */
  channelRefundNo?: string;
  /** 退款状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
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

export type exportSpuListParams = {
  /** 商品名称 */
  name?: string;
  /** 前端请求的tab类型 */
  tabType: number;
  /** 商品分类编号 */
  categoryId?: number;
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

export type exportTradeStatisticsExcelParams = {
  /** 时间范围 */
  times?: string[];
};

export type exportTransferParams = {
  /** 转账单号 */
  no?: string;
  /** 应用编号 */
  appId?: number;
  /** 渠道编码 */
  channelCode?: string;
  /** 商户转账单编号 */
  merchantOrderId?: string;
  /** 转账状态 */
  status?: number;
  /** 收款人姓名 */
  userName?: string;
  /** 收款人账号 */
  userAccount?: string;
  /** 渠道转账单号 */
  channelTransferNo?: string;
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

export type getActivityListBySpuIdParams = {
  /** 商品编号 */
  spuId: number;
};

export type getAddressList1Params = {
  /** 用户编号 */
  userId: number;
};

export type getAddressParams = {
  /** 编号 */
  id: number;
};

export type getAfterSaleLogListParams = {
  /** 售后编号 */
  afterSaleId: number;
};

export type getAfterSalePage1Params = {
  /** 用户编号 */
  userId?: number;
  /** 售后流水号 */
  no?: string;
  /** 售后状态 */
  status?: number;
  /** 售后类型 */
  type?: number;
  /** 售后方式 */
  way?: number;
  /** 订单编号 */
  orderNo?: string;
  /** 商品 SPU 名称 */
  spuName?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getAfterSalePageParams = {
  /** 售后状态 */
  statuses?: number[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getAfterSaleParams = {
  /** 售后编号 */
  id: number;
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

export type getAppPageParams = {
  /** 应用名 */
  name?: string;
  /** 应用标识 */
  appKey?: string;
  /** 开启状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getAppParams = {
  /** 编号 */
  id: number;
};

export type getAreaByIpParams = {
  /** IP */
  ip: string;
};

export type getArticle1Params = {
  /** 文章编号 */
  id?: number;
  /** 文章标题 */
  title?: string;
};

export type getArticle2Params = {
  /** 文章编号 */
  id?: number;
  /** 文章标题 */
  title?: string;
};

export type getArticle3Params = {
  /** 文章编号 */
  id?: number;
  /** 文章标题 */
  title?: string;
};

export type getArticle4Params = {
  /** 文章编号 */
  id?: number;
  /** 文章标题 */
  title?: string;
};

export type getArticle5Params = {
  /** 文章编号 */
  id?: number;
  /** 文章标题 */
  title?: string;
};

export type getArticleCategoryPageParams = {
  /** 文章分类名称 */
  name?: string;
  /** 状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getArticleCategoryParams = {
  /** 编号 */
  id: number;
};

export type getArticleList1Params = {
  /** 是否热门 */
  recommendHot?: boolean;
  /** 是否轮播图 */
  recommendBanner?: boolean;
};

export type getArticleList2Params = {
  /** 是否热门 */
  recommendHot?: boolean;
  /** 是否轮播图 */
  recommendBanner?: boolean;
};

export type getArticleList3Params = {
  /** 是否热门 */
  recommendHot?: boolean;
  /** 是否轮播图 */
  recommendBanner?: boolean;
};

export type getArticleList4Params = {
  /** 是否热门 */
  recommendHot?: boolean;
  /** 是否轮播图 */
  recommendBanner?: boolean;
};

export type getArticleListParams = {
  /** 是否热门 */
  recommendHot?: boolean;
  /** 是否轮播图 */
  recommendBanner?: boolean;
};

export type getArticlePage1Params = {
  /** 分类编号 */
  categoryId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getArticlePage2Params = {
  /** 分类编号 */
  categoryId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getArticlePage3Params = {
  /** 分类编号 */
  categoryId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getArticlePage4Params = {
  /** 分类编号 */
  categoryId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getArticlePage5Params = {
  /** 分类编号 */
  categoryId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getArticlePageParams = {
  /** 文章分类编号 */
  categoryId?: number;
  /** 关联商品编号 */
  spuId?: number;
  /** 文章标题 */
  title?: string;
  /** 文章作者 */
  author?: string;
  /** 状态 */
  status?: number;
  /** 是否热门(小程序) */
  recommendHot?: boolean;
  /** 是否轮播图(小程序) */
  recommendBanner?: boolean;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getArticleParams = {
  /** 编号 */
  id: number;
};

export type getBannerListParams = {
  /** Banner position */
  position: number;
};

export type getBannerPageParams = {
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

export type getBannerParams = {
  /** 编号 */
  id: number;
};

export type getBargainActivityDetailParams = {
  /** 活动编号 */
  id: number;
};

export type getBargainActivityListParams = {
  /** 需要展示的数量 */
  count?: number;
};

export type getBargainActivityPage1Params = {
  /** 砍价名称 */
  name?: string;
  /** 活动状态 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBargainActivityPageParams = {
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBargainActivityParams = {
  /** 编号 */
  id: number;
};

export type getBargainHelpListParams = {
  /** 砍价记录编号 */
  recordId: number;
};

export type getBargainHelpPageParams = {
  /** 砍价记录编号 */
  recordId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBargainRecordDetailParams = {
  /** 砍价记录编号 */
  id?: number;
  /** 砍价活动编号 */
  activityId?: number;
};

export type getBargainRecordPage1Params = {
  /** 砍价状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBargainRecordPageParams = {
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBrandListParams = {
  /** 品牌名称 */
  name?: string;
};

export type getBrandPageParams = {
  /** 品牌名称 */
  name?: string;
  /** 状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBrandParams = {
  /** 编号 */
  id: number;
};

export type getBrokerageRecordPage1Params = {
  /** 用户编号 */
  userId?: number;
  /** 业务类型 */
  bizType?: number;
  /** 状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 用户类型 */
  sourceUserLevel?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBrokerageRecordPageParams = {
  /** 创建时间 */
  createTime?: string[];
  /** 业务类型 */
  bizType?: number;
  /** 状态 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBrokerageRecordParams = {
  /** 编号 */
  id: number;
};

export type getBrokerageUser1Params = {
  /** 编号 */
  id: number;
};

export type getBrokerageUserChildSummaryPageByPriceParams = {
  /** 开始 + 结束时间 */
  times: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBrokerageUserChildSummaryPageParams = {
  /** 用户昵称 */
  nickname?: string;
  'sortingField.field'?: string;
  'sortingField.order'?: string;
  /** 下级的级别 */
  level: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBrokerageUserPageParams = {
  /** 推广员编号 */
  bindUserId?: number;
  /** 推广资格 */
  brokerageEnabled?: boolean;
  /** 创建时间 */
  createTime?: string[];
  /** 用户等级 */
  level?: number;
  /** 绑定时间 */
  bindUserTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBrokerageUserRankPageByUserCountParams = {
  /** 开始 + 结束时间 */
  times: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBrokerageWithdraw1Params = {
  /** 编号 */
  id: number;
};

export type getBrokerageWithdrawPage1Params = {
  /** 用户编号 */
  userId?: number;
  /** 提现类型 */
  type?: number;
  /** 真实姓名 */
  userName?: string;
  /** 账号 */
  userAccount?: string;
  /** 银行名称 */
  bankName?: string;
  /** 状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBrokerageWithdrawPageParams = {
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBrokerageWithdrawParams = {
  /** 编号 */
  id: number;
};

export type getBrowseHistoryPage1Params = {
  /** 用户编号 */
  userId?: number;
  /** 用户是否删除 */
  userDeleted?: boolean;
  /** 商品 SPU 编号 */
  spuId?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 排序字段 */
  sortingFields?: SortingField[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getBrowseHistoryPageParams = {
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getByPickUpVerifyCodeParams = {
  /** 自提核销码 */
  pickUpVerifyCode: string;
};

export type getCategoryListParams = {
  /** 分类名称 */
  name?: string;
  /** 开启状态 */
  status?: number;
  /** 父分类编号 */
  parentId?: number;
  /** 父分类编号数组 */
  parentIds?: number[];
};

export type getCategoryParams = {
  /** 编号 */
  id: number;
};

export type getChannelParams = {
  /** 编号 */
  id: number;
  appId?: number;
  code?: string;
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

export type getCombinationActivityDetailParams = {
  /** 活动编号 */
  id: number;
};

export type getCombinationActivityListByIds1Params = {
  /** 活动编号数组 */
  ids: number[];
};

export type getCombinationActivityListByIds2Params = {
  /** 活动编号数组 */
  ids: number[];
};

export type getCombinationActivityListByIds3Params = {
  /** 活动编号数组 */
  ids: number[];
};

export type getCombinationActivityListByIdsParams = {
  /** 活动编号数组 */
  ids: number[];
};

export type getCombinationActivityPage1Params = {
  /** 拼团名称 */
  name?: string;
  /** 活动状态 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getCombinationActivityPageParams = {
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getCombinationActivityParams = {
  /** 编号 */
  id: number;
};

export type getCombinationRecordDetailParams = {
  /** 拼团记录编号 */
  id: number;
};

export type getCombinationRecordPage1Params = {
  /** 活动状态 */
  status?: number;
  /** 团长编号 */
  headId?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getCombinationRecordPageParams = {
  /** 拼团状态 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getCommentPage1Params = {
  /** 评价人名称 */
  userNickname?: string;
  /** 交易订单编号 */
  orderId?: number;
  /** 商品SPU编号 */
  spuId?: number;
  /** 商品SPU名称 */
  spuName?: string;
  /** 评分星级 1-5 分 */
  scores?: number;
  /** 商家是否回复 */
  replyStatus?: boolean;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getCommentPageParams = {
  /** 商品 SPU 编号 */
  spuId: number;
  /** app 评论页 tab 类型 (0 全部、1 好评、2 中评、3 差评) */
  type: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getConfig2Params = {
  /** 编号 */
  id: number;
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

export type getConversationParams = {
  /** 编号 */
  id: number;
};

export type getCouponPage1Params = {
  /** 优惠劵模板编号 */
  templateId?: number;
  /** 优惠码状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 用户昵称 */
  nickname?: string;
  /** 用户编号 */
  userIds?: number[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getCouponPageParams = {
  /** 优惠劵状态 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getCouponParams = {
  /** 优惠劵编号 */
  id: number;
};

export type getCouponTemplate1Params = {
  /** 编号 */
  id: number;
};

export type getCouponTemplateList1Params = {
  /** 优惠券模板编号列表 */
  ids?: number[];
};

export type getCouponTemplateList2Params = {
  /** 编号列表 */
  ids: number[];
};

export type getCouponTemplateListParams = {
  /** 商品 SPU 编号 */
  spuId?: number;
  /** 使用类型 */
  productScope?: number;
  /** 数量 */
  count: number;
};

export type getCouponTemplatePage1Params = {
  /** 优惠劵名 */
  name?: string;
  /** 状态 */
  status?: number;
  /** 优惠类型 */
  discountType?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 可以领取的类型 */
  canTakeTypes?: number[];
  /** 商品范围 */
  productScope?: number;
  /** 商品范围编号 */
  productScopeValue?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getCouponTemplatePageParams = {
  /** 商品范围 */
  productScope?: number;
  /** 商品标号 */
  spuId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getCouponTemplateParams = {
  /** 优惠券模板编号 */
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

export type getDeliveryExpressPageParams = {
  /** 快递公司编码 */
  code?: string;
  /** 快递公司名称 */
  name?: string;
  /** 状态（0正常 1停用） */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getDeliveryExpressParams = {
  /** 编号 */
  id: number;
};

export type getDeliveryExpressTemplateListParams = {
  /** 编号列表 */
  ids: number[];
};

export type getDeliveryExpressTemplatePageParams = {
  /** 模板名称 */
  name?: string;
  /** 配送计费方式 1:按件 2:按重量 3:按体积 */
  chargeMode?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getDeliveryExpressTemplateParams = {
  /** 编号 */
  id: number;
};

export type getDeliveryPickUpStoreList1Params = {
  /** 编号列表 */
  ids: number[];
};

export type getDeliveryPickUpStoreListParams = {
  /** 精度 */
  latitude?: number;
  /** 纬度 */
  longitude?: number;
};

export type getDeliveryPickUpStorePageParams = {
  /** 门店名称 */
  name?: string;
  /** 门店手机 */
  phone?: string;
  /** 区域编号 */
  areaId?: number;
  /** 门店状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getDeliveryPickUpStoreParams = {
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

export type getDemoOrderPageParams = {
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getDemoWithdrawPageParams = {
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
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

export type getDiscountActivityPageParams = {
  /** 活动标题 */
  name?: string;
  /** 活动状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getDiscountActivityParams = {
  /** 编号 */
  id: number;
};

export type getDiyPage1Params = {
  /** 编号 */
  id: number;
};

export type getDiyPageListParams = {
  /** 编号列表 */
  ids: number[];
};

export type getDiyPagePageParams = {
  /** 页面名称 */
  name?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getDiyPageParams = {
  /** 编号 */
  id: number;
};

export type getDiyPagePropertyParams = {
  /** 编号 */
  id: number;
};

export type getDiyTemplate1Params = {
  /** 编号 */
  id: number;
};

export type getDiyTemplatePageParams = {
  /** 模板名称 */
  name?: string;
  /** 是否使用 */
  used?: boolean;
  /** 使用时间 */
  usedTime?: string[];
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getDiyTemplateParams = {
  /** 编号 */
  id: number;
};

export type getDiyTemplatePropertyParams = {
  /** 编号 */
  id: number;
};

export type getEnableChannelCodeList1Params = {
  /** 应用编号 */
  appId: number;
};

export type getEnableChannelCodeListParams = {
  /** 应用编号 */
  appId: number;
};

export type getExperienceRecordPage1Params = {
  /** 用户编号 */
  userId?: number;
  /** 业务编号 */
  bizId?: string;
  /** 业务类型 */
  bizType?: number;
  /** 标题 */
  title?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getExperienceRecordPageParams = {
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getExperienceRecordParams = {
  /** 编号 */
  id: number;
};

export type getFavoritePage1Params = {
  /** 用户编号 */
  userId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getFavoritePageParams = {
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
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

export type getGroupPageParams = {
  /** 名称 */
  name?: string;
  /** 状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getGroupParams = {
  /** 编号 */
  id: number;
};

export type getHeadCombinationRecordListParams = {
  /** 拼团活动编号 */
  activityId?: number;
  /** 拼团状态 */
  status: number;
  /** 数量 */
  count?: number;
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

export type getJobPage2Params = {
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
  /** 职位类别编号 */
  categoryId?: number;
  /** 关键词 */
  keyword?: string;
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

export type getJobSeekerPage1Params = {
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

export type getJobSeekerPageParams = {
  /** 求职者类型编号 */
  typeId?: number;
  /** 关键词 */
  keyword?: string;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getJobSeekerParams = {
  /** 编号 */
  id: number;
};

export type getKefuMessageListParams = {
  /** 会话编号 */
  conversationId?: number;
  /** 发送时间 */
  createTime?: string;
  /** 每次查询条数，最大值为 100 */
  limit: number;
};

export type getKeFuMessageListParams = {
  /** 会话编号 */
  conversationId: number;
  /** 发送时间 */
  createTime?: string;
  /** 每次查询条数，最大值为 100 */
  limit: number;
};

export type getLevelList1Params = {
  /** 等级名称 */
  name?: string;
  /** 状态 */
  status?: number;
};

export type getLevelParams = {
  /** 编号 */
  id: number;
};

export type getLevelRecordPageParams = {
  /** 用户编号 */
  userId?: number;
  /** 等级编号 */
  levelId?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getLevelRecordParams = {
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

export type getMemberAnalyseParams = {
  /** 时间范围 */
  times?: string[];
};

export type getMemberRegisterCountListParams = {
  /** 时间范围 */
  times?: string[];
};

export type getMemberTagListParams = {
  /** 编号列表 */
  ids: number[];
};

export type getMemberTagParams = {
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

export type getNotifyTaskDetailParams = {
  /** 编号 */
  id: number;
};

export type getNotifyTaskPageParams = {
  /** 应用编号 */
  appId?: number;
  /** 通知类型 */
  type?: number;
  /** 数据编号 */
  dataId?: number;
  /** 通知状态 */
  status?: number;
  /** 商户订单编号 */
  merchantOrderId?: string;
  /** 商户退款编号 */
  merchantRefundId?: string;
  /** 商户转账编号 */
  merchantTransferId?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
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

export type getOrder1Params = {
  /** 编号 */
  id: number;
  /** 是否同步 */
  sync?: boolean;
};

export type getOrder2Params = {
  /** 编号 */
  id: number;
  /** 是否同步 */
  sync?: boolean;
};

export type getOrderCountTrendComparisonParams = {
  /** 日期范围类型 */
  type: number;
  /** 起始时间 */
  beginTime?: string;
  /** 截止时间 */
  endTime?: string;
};

export type getOrderDetail1Params = {
  /** 订单编号 */
  id: number;
};

export type getOrderDetail2Params = {
  /** 售后编号 */
  id: number;
};

export type getOrderDetail3Params = {
  /** 编号 */
  id: number;
};

export type getOrderDetailParams = {
  /** 交易订单编号 */
  id: number;
  /** 是否同步支付状态 */
  sync?: boolean;
};

export type getOrderExpressTrackList1Params = {
  /** 交易订单编号 */
  id: number;
};

export type getOrderExpressTrackListParams = {
  /** 交易订单编号 */
  id: number;
};

export type getOrderItemParams = {
  /** 交易订单项编号 */
  id: number;
};

export type getOrderPage1Params = {
  /** 订单号 */
  no?: string;
  /** 用户编号 */
  userId?: number;
  /** 用户昵称 */
  userNickname?: string;
  /** 用户手机号 */
  userMobile?: string;
  /** 配送方式 */
  deliveryType?: number;
  /** 发货物流公司编号 */
  logisticsId?: number;
  /** 自提门店编号 */
  pickUpStoreIds?: number[];
  /** 自提核销码 */
  pickUpVerifyCode?: string;
  /** 订单类型 */
  type?: number;
  /** 订单状态 */
  status?: number;
  /** 支付渠道 */
  payChannelCode?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 订单来源 */
  terminal?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getOrderPage2Params = {
  /** 应用编号 */
  appId?: number;
  /** 渠道编码 */
  channelCode?: string;
  /** 商户订单编号 */
  merchantOrderId?: string;
  /** 渠道编号 */
  channelOrderNo?: string;
  /** 支付单号 */
  no?: string;
  /** 支付状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getOrderPageParams = {
  /** 订单状态 */
  status?: number;
  /** 是否评价 */
  commentStatus?: boolean;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getOrderParams = {
  /** 门店编号 */
  id: number;
};

export type getOrderSummaryParams = {
  /** 订单号 */
  no?: string;
  /** 用户编号 */
  userId?: number;
  /** 用户昵称 */
  userNickname?: string;
  /** 用户手机号 */
  userMobile?: string;
  /** 配送方式 */
  deliveryType?: number;
  /** 发货物流公司编号 */
  logisticsId?: number;
  /** 自提门店编号 */
  pickUpStoreIds?: number[];
  /** 自提核销码 */
  pickUpVerifyCode?: string;
  /** 订单类型 */
  type?: number;
  /** 订单状态 */
  status?: number;
  /** 支付渠道 */
  payChannelCode?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 订单来源 */
  terminal?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getPointActivity1Params = {
  /** 编号 */
  id: number;
};

export type getPointActivityListByIdsParams = {
  /** 活动编号数组 */
  ids: number[];
};

export type getPointActivityPage1Params = {
  /** 活动状态 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getPointActivityPageParams = {
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getPointActivityParams = {
  /** 活动编号 */
  id: number;
};

export type getPointRecordPage1Params = {
  /** 用户昵称 */
  nickname?: string;
  /** 用户编号 */
  userId?: number;
  /** 业务类型 */
  bizType?: number;
  /** 积分标题 */
  title?: string;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getPointRecordPageParams = {
  /** 是否增加积分 */
  addStatus?: boolean;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
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

export type getProductBrokeragePriceParams = {
  spuId: number;
};

export type getProductCategoryList1Params = {
  /** 商品分类编号数组 */
  ids: number[];
};

export type getProductStatisticsAnalyseParams = {
  /** 统计时间范围 */
  times?: string[];
};

export type getProductStatisticsListParams = {
  /** 统计时间范围 */
  times?: string[];
};

export type getProductStatisticsRankPageParams = {
  /** 统计时间范围 */
  times?: string[];
  /** 排序字段 */
  sortingFields?: SortingField[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getPropertyPageParams = {
  /** 名称 */
  name?: string;
  /** 状态 */
  status: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getPropertyParams = {
  /** 编号 */
  id: number;
};

export type getPropertyValuePageParams = {
  /** 属性项的编号 */
  propertyId?: string;
  /** 名称 */
  name?: string;
  /** 状态 */
  status: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getPropertyValueParams = {
  /** 编号 */
  id: number;
};

export type getPropertyValueSimpleListParams = {
  /** 属性项编号 */
  propertyId: number;
};

export type getRankByPriceParams = {
  /** 时间段 */
  times: string[];
};

export type getRefundPageParams = {
  /** 应用编号 */
  appId?: number;
  /** 渠道编码 */
  channelCode?: string;
  /** 商户支付单号 */
  merchantOrderId?: string;
  /** 商户退款单号 */
  merchantRefundId?: string;
  /** 渠道支付单号 */
  channelOrderNo?: string;
  /** 渠道退款单号 */
  channelRefundNo?: string;
  /** 退款状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getRefundParams = {
  /** 编号 */
  id: number;
};

export type getRewardActivity1Params = {
  /** 编号 */
  id: number;
};

export type getRewardActivityPageParams = {
  /** 活动标题 */
  name?: string;
  /** 活动状态 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getRewardActivityParams = {
  /** 编号 */
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

export type getSeckillActivity1Params = {
  /** 编号 */
  id: number;
};

export type getSeckillActivityListByIdsParams = {
  /** 活动编号数组 */
  ids: number[];
};

export type getSeckillActivityPage1Params = {
  /** 秒杀时段名称 */
  name?: string;
  /** 状态 */
  status?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getSeckillActivityPage2Params = {
  /** 秒杀活动名称 */
  name?: string;
  /** 活动状态 */
  status?: number;
  /** 秒杀时段id */
  configId?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getSeckillActivityPageParams = {
  /** 秒杀配置编号 */
  configId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getSeckillActivityParams = {
  /** 活动编号 */
  id: number;
};

export type getSeckillConfigParams = {
  /** 编号 */
  id: number;
};

export type getSignInConfigParams = {
  /** 编号 */
  id: number;
};

export type getSignInRecordPageParams = {
  /** 签到用户 */
  nickname?: string;
  /** 第几天签到 */
  day?: number;
  /** 用户编号 */
  userId?: number;
  /** 签到时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getSignRecordPageParams = {
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
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

export type getSocialUser1Params = {
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
  /** 社交平台的类型，参见 SocialTypeEnum 枚举值 */
  type: number;
};

export type getSpuDetail1Params = {
  /** 编号 */
  id: number;
};

export type getSpuDetailParams = {
  /** 编号 */
  id: number;
};

export type getSpuList1Params = {
  /** spu 编号列表 */
  spuIds: number[];
};

export type getSpuListParams = {
  /** 编号列表 */
  ids: number[];
};

export type getSpuPage1Params = {
  /** 商品名称 */
  name?: string;
  /** 前端请求的tab类型 */
  tabType: number;
  /** 商品分类编号 */
  categoryId?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getSpuPageParams = {
  /** 商品 SPU 编号数组 */
  ids?: number[];
  /** 分类编号 */
  categoryId?: number;
  /** 分类编号数组 */
  categoryIds?: number[];
  /** 关键字 */
  keyword?: string;
  /** 排序字段 */
  sortField?: string;
  /** 排序方式 */
  sortAsc?: boolean;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getTagPageParams = {
  /** 标签名称 */
  name?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
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

export type getTradeStatisticsAnalyseParams = {
  /** 时间范围 */
  times?: string[];
};

export type getTradeStatisticsListParams = {
  /** 时间范围 */
  times?: string[];
};

export type getTransferPageParams = {
  /** 转账单号 */
  no?: string;
  /** 应用编号 */
  appId?: number;
  /** 渠道编码 */
  channelCode?: string;
  /** 商户转账单编号 */
  merchantOrderId?: string;
  /** 转账状态 */
  status?: number;
  /** 收款人姓名 */
  userName?: string;
  /** 收款人账号 */
  userAccount?: string;
  /** 渠道转账单号 */
  channelTransferNo?: string;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getTransferParams = {
  id: number;
};

export type getUnreadNotifyMessageListParams = {
  /** 10 */
  size?: number;
};

export type getUser1Params = {
  /** 编号 */
  id: number;
};

export type getUserPage1Params = {
  /** 手机号 */
  mobile?: string;
  /** 用户昵称 */
  nickname?: string;
  /** 最后登录时间 */
  loginDate?: string[];
  /** 创建时间 */
  createTime?: string[];
  /** 会员标签编号列表 */
  tagIds?: number[];
  /** 会员等级编号 */
  levelId?: number;
  /** 用户分组编号 */
  groupId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
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

export type getWalletPageParams = {
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

export type getWalletParams = {
  /** 用户编号 */
  userId: number;
};

export type getWalletRechargePackagePageParams = {
  /** 套餐名 */
  name?: string;
  /** 状态 */
  status?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getWalletRechargePackageParams = {
  /** 编号 */
  id: number;
};

export type getWalletRechargePageParams = {
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getWalletTransactionPage1Params = {
  /** 钱包编号 */
  walletId?: number;
  /** 用户编号 */
  userId?: number;
  /** 用户类型 */
  userType?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getWalletTransactionPageParams = {
  /** 类型 */
  type?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getWalletTransactionSummaryParams = {
  createTime: string[];
  /** 时间段 */
  times: unknown;
};

export type importExcelParams = {
  /** 是否支持更新，默认为 false */
  updateSupport?: boolean;
  /** Excel 文件 */
  file: unknown;
};

export type isFavoriteExistsParams = {
  /** 商品 SPU 编号 */
  spuId: number;
};

export type Item = {
  /** 商品 SKU 编号 */
  skuId: number;
  /** 购买数量 */
  count?: number;
  /** 购物车项的编号 */
  cartId?: number;
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

export type KeFuConversationRespVO = {
  /** 编号 */
  id: number;
  /** 会话所属用户 */
  userId: number;
  /** 会话所属用户头像 */
  userAvatar: string;
  /** 会话所属用户昵称 */
  userNickname: string;
  /** 最后聊天时间 */
  lastMessageTime: string;
  /** 最后聊天内容 */
  lastMessageContent: string;
  /** 最后发送的消息类型 */
  lastMessageContentType: number;
  /** 管理端置顶 */
  adminPinned: boolean;
  /** 用户是否可见 */
  userDeleted: boolean;
  /** 管理员是否可见 */
  adminDeleted: boolean;
  /** 管理员未读消息数 */
  adminUnreadMessageCount: number;
  /** 创建时间 */
  createTime: string;
};

export type KeFuConversationUpdatePinnedReqVO = {
  /** 编号 */
  id: number;
  /** 管理端置顶 */
  adminPinned: boolean;
};

export type KeFuMessageRespVO = {
  /** 编号 */
  id: number;
  /** 会话编号 */
  conversationId: number;
  /** 发送人编号 */
  senderId: number;
  /** 发送人头像 */
  senderAvatar: string;
  /** 发送人类型 */
  senderType: number;
  /** 接收人编号 */
  receiverId: number;
  /** 接收人类型 */
  receiverType: number;
  /** 消息类型 */
  contentType: number;
  /** 消息 */
  content: string;
  /** 是否已读 */
  readStatus: boolean;
  /** 创建时间 */
  createTime: string;
};

export type KeFuMessageSendReqVO = {
  /** 会话编号 */
  conversationId: number;
  /** 消息类型 */
  contentType: number;
  /** 消息 */
  content: string;
};

export type KeyValueStringBoolean = {
  key?: string;
  value?: boolean;
};

export type Level = {
  /** 等级编号 */
  id: number;
  /** 等级名称 */
  name: string;
  /** 等级 */
  level: number;
  /** 等级图标 */
  icon?: string;
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

export type LocalTime = {
  hour?: number;
  minute?: number;
  second?: number;
  nano?: number;
};

export type Log = {
  /** 日志编号 */
  id: number;
  /** 通知状态 */
  status: string;
  /** 当前通知次数 */
  notifyTimes: string;
  /** HTTP 响应结果 */
  response: string;
  /** 创建时间 */
  createTime: string;
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

export type MemberAnalyseDataRespVO = {
  /** 会员数量 */
  registerUserCount: number;
  /** 活跃用户数量 */
  visitUserCount: number;
  /** 充值会员数量 */
  rechargeUserCount: number;
};

export type MemberAnalyseRespVO = {
  /** 访客数量 */
  visitUserCount: number;
  /** 下单用户数量 */
  orderUserCount: number;
  /** 成交用户数量 */
  payUserCount: number;
  /** 客单价，单位：分 */
  atv: number;
  /** 对照数据 */
  comparison: DataComparisonRespVOMemberAnalyseDataRespVO;
};

export type MemberAreaStatisticsRespVO = {
  /** 省份编号 */
  areaId: number;
  /** 省份名称 */
  areaName: string;
  /** 会员数量 */
  userCount: number;
  /** 下单的会员数量 */
  orderCreateUserCount: number;
  /** 支付订单的会员数量 */
  orderPayUserCount: number;
  /** 订单支付金额，单位：分 */
  orderPayPrice: number;
};

export type MemberConfigRespVO = {
  /** 积分抵扣开关 */
  pointTradeDeductEnable: boolean;
  /** 积分抵扣，单位：分 */
  pointTradeDeductUnitPrice: number;
  /** 积分抵扣最大值 */
  pointTradeDeductMaxPrice: number;
  /** 1 元赠送多少分 */
  pointTradeGivePoint: number;
  /** 自增主键 */
  id: number;
};

export type MemberConfigSaveReqVO = {
  /** 积分抵扣开关 */
  pointTradeDeductEnable: boolean;
  /** 积分抵扣，单位：分 */
  pointTradeDeductUnitPrice: number;
  /** 积分抵扣最大值 */
  pointTradeDeductMaxPrice: number;
  /** 1 元赠送多少分 */
  pointTradeGivePoint: number;
};

export type MemberCountRespVO = {
  /** 用户访问量 */
  visitUserCount: number;
  /** 注册用户数量 */
  registerUserCount: number;
};

export type MemberExperienceRecordRespVO = {
  /** 用户编号 */
  userId: number;
  /** 业务编号 */
  bizId: string;
  /** 业务类型 */
  bizType: number;
  /** 标题 */
  title: string;
  /** 经验 */
  experience: number;
  /** 变更后的经验 */
  totalExperience: number;
  /** 描述 */
  description: string;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type MemberGroupCreateReqVO = {
  /** 名称 */
  name: string;
  /** 备注 */
  remark: string;
  /** 状态 */
  status: number;
};

export type MemberGroupRespVO = {
  /** 名称 */
  name: string;
  /** 备注 */
  remark: string;
  /** 状态 */
  status: number;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type MemberGroupSimpleRespVO = {
  /** 编号 */
  id?: number;
  /** 等级名称 */
  name?: string;
};

export type MemberGroupUpdateReqVO = {
  /** 名称 */
  name: string;
  /** 备注 */
  remark: string;
  /** 状态 */
  status: number;
  /** 编号 */
  id: number;
};

export type MemberLevelCreateReqVO = {
  /** 等级名称 */
  name: string;
  /** 升级经验 */
  experience: number;
  /** 等级 */
  level: number;
  /** 享受折扣 */
  discountPercent: number;
  /** 等级图标 */
  icon?: string;
  /** 等级背景图 */
  backgroundUrl?: string;
  /** 状态 */
  status: number;
};

export type MemberLevelRecordRespVO = {
  /** 用户编号 */
  userId: number;
  /** 等级编号 */
  levelId: number;
  /** 会员等级 */
  level: number;
  /** 享受折扣 */
  discountPercent: number;
  /** 升级经验 */
  experience: number;
  /** 会员此时的经验 */
  userExperience: number;
  /** 备注 */
  remark: string;
  /** 描述 */
  description: string;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type MemberLevelRespVO = {
  /** 等级名称 */
  name: string;
  /** 升级经验 */
  experience: number;
  /** 等级 */
  level: number;
  /** 享受折扣 */
  discountPercent: number;
  /** 等级图标 */
  icon?: string;
  /** 等级背景图 */
  backgroundUrl?: string;
  /** 状态 */
  status: number;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type MemberLevelSimpleRespVO = {
  /** 编号 */
  id?: number;
  /** 等级名称 */
  name?: string;
  /** 等级图标 */
  icon?: string;
};

export type MemberLevelUpdateReqVO = {
  /** 等级名称 */
  name: string;
  /** 升级经验 */
  experience: number;
  /** 等级 */
  level: number;
  /** 享受折扣 */
  discountPercent: number;
  /** 等级图标 */
  icon?: string;
  /** 等级背景图 */
  backgroundUrl?: string;
  /** 状态 */
  status: number;
  /** 编号 */
  id: number;
};

export type MemberPointRecordRespVO = {
  /** 自增主键 */
  id: number;
  /** 用户编号 */
  userId: number;
  /** 昵称 */
  nickname?: string;
  /** 业务编码 */
  bizId: string;
  /** 业务类型 */
  bizType: number;
  /** 积分标题 */
  title: string;
  /** 积分描述 */
  description?: string;
  /** 积分 */
  point: number;
  /** 变动后的积分 */
  totalPoint: number;
  /** 发生时间 */
  createTime: string;
};

export type MemberRegisterCountRespVO = {
  /** 日期 */
  date: string;
  /** 数量 */
  count: number;
};

export type MemberSexStatisticsRespVO = {
  /** 性别 */
  sex: number;
  /** 会员数量 */
  userCount: number;
};

export type MemberSignInConfigCreateReqVO = {
  /** 签到第 x 天 */
  day: number;
  /** 奖励积分 */
  point: number;
  /** 奖励经验 */
  experience: number;
  /** 状态 */
  status: number;
};

export type MemberSignInConfigRespVO = {
  /** 签到第 x 天 */
  day: number;
  /** 奖励积分 */
  point: number;
  /** 奖励经验 */
  experience: number;
  /** 状态 */
  status: number;
  /** 自增主键 */
  id: number;
  /** 创建时间 */
  createTime?: string;
};

export type MemberSignInConfigUpdateReqVO = {
  /** 签到第 x 天 */
  day: number;
  /** 奖励积分 */
  point: number;
  /** 奖励经验 */
  experience: number;
  /** 状态 */
  status: number;
  /** 规则自增主键 */
  id: number;
};

export type MemberSignInRecordRespVO = {
  /** 签到自增 id */
  id: number;
  /** 签到用户 */
  userId: number;
  /** 昵称 */
  nickname?: string;
  /** 第几天签到 */
  day: number;
  /** 签到的积分 */
  point: number;
  /** 签到时间 */
  createTime: string;
};

export type MemberSummaryRespVO = {
  /** 会员数量 */
  userCount: number;
  /** 充值会员数量 */
  rechargeUserCount: number;
  /** 充值金额，单位：分 */
  rechargePrice: number;
  /** 支出金额，单位：分 */
  expensePrice: number;
};

export type MemberTagCreateReqVO = {
  /** 标签名称 */
  name: string;
};

export type MemberTagRespVO = {
  /** 标签名称 */
  name: string;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type MemberTagUpdateReqVO = {
  /** 标签名称 */
  name: string;
  /** 编号 */
  id: number;
};

export type MemberTerminalStatisticsRespVO = {
  /** 终端 */
  terminal: number;
  /** 会员数量 */
  userCount: number;
};

export type MemberUserRespVO = {
  /** 用户 ID */
  id: number;
  /** 用户昵称 */
  nickname: string;
  /** 用户头像 */
  avatar?: string;
};

export type MemberUserUpdateLevelReqVO = {
  /** 用户编号 */
  id: number;
  /** 用户等级编号 */
  levelId?: number;
  /** 修改原因 */
  reason: string;
};

export type MemberUserUpdatePointReqVO = {
  /** 用户编号 */
  id: number;
  /** 变动积分，正数为增加，负数为减少 */
  point: number;
};

export type MemberUserUpdateReqVO = {
  /** 手机号 */
  mobile: string;
  /** 状态 */
  status: string;
  /** 用户昵称 */
  nickname: string;
  /** 头像 */
  avatar: string;
  /** 用户昵称 */
  name?: string;
  /** 用户性别 */
  sex?: number;
  /** 所在地编号 */
  areaId?: number;
  /** 所在地全程 */
  areaName?: string;
  /** 出生日期 */
  birthday?: string;
  /** 会员备注 */
  mark?: string;
  /** 会员标签 */
  tagIds?: number[];
  /** 会员等级编号 */
  levelId?: number;
  /** 用户分组编号 */
  groupId?: number;
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

export type notifyOrderParams = {
  channelId: number;
};

export type notifyRefundParams = {
  channelId: number;
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

export type notifyTransferParams = {
  channelId: number;
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

export type Order = {
  /** 商品标题 */
  subject: string;
};

export type OrderItem = {
  /** 编号 */
  id: number;
  /** 用户编号 */
  userId: number;
  /** 订单编号 */
  orderId: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SPU 名称 */
  spuName: string;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 商品图片 */
  picUrl: string;
  /** 购买数量 */
  count: number;
  /** 商品原价（单） */
  price: number;
  /** 商品优惠（总） */
  discountPrice: number;
  /** 商品实付金额（总） */
  payPrice: number;
  /** 子订单分摊金额（总） */
  orderPartPrice: number;
  /** 分摊后子订单实付金额（总） */
  orderDividePrice: number;
  /** 售后状态 */
  afterSaleStatus: number;
  properties?: ProductPropertyValueDetailRespVO[];
};

export type OrderLog = {
  /** 操作详情 */
  content: string;
  /** 创建时间 */
  createTime: string;
  /** 用户类型 */
  userType: number;
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

export type PageResultAfterSaleRespPageItemVO = {
  /** 数据 */
  list: AfterSaleRespPageItemVO[];
  /** 总量 */
  total: number;
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

export type PageResultAppAfterSaleRespVO = {
  /** 数据 */
  list: AppAfterSaleRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppArticleRespVO = {
  /** 数据 */
  list: AppArticleRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppBargainActivityRespVO = {
  /** 数据 */
  list: AppBargainActivityRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppBargainRecordRespVO = {
  /** 数据 */
  list: AppBargainRecordRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppBrokerageRecordRespVO = {
  /** 数据 */
  list: AppBrokerageRecordRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppBrokerageUserChildSummaryRespVO = {
  /** 数据 */
  list: AppBrokerageUserChildSummaryRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppBrokerageUserRankByPriceRespVO = {
  /** 数据 */
  list: AppBrokerageUserRankByPriceRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppBrokerageUserRankByUserCountRespVO = {
  /** 数据 */
  list: AppBrokerageUserRankByUserCountRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppBrokerageWithdrawRespVO = {
  /** 数据 */
  list: AppBrokerageWithdrawRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppCombinationActivityRespVO = {
  /** 数据 */
  list: AppCombinationActivityRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppCombinationRecordRespVO = {
  /** 数据 */
  list: AppCombinationRecordRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppCouponRespVO = {
  /** 数据 */
  list: AppCouponRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppCouponTemplateRespVO = {
  /** 数据 */
  list: AppCouponTemplateRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppFavoriteRespVO = {
  /** 数据 */
  list: AppFavoriteRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppMemberExperienceRecordRespVO = {
  /** 数据 */
  list: AppMemberExperienceRecordRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppMemberPointRecordRespVO = {
  /** 数据 */
  list: AppMemberPointRecordRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppMemberSignInRecordRespVO = {
  /** 数据 */
  list: AppMemberSignInRecordRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppPayWalletRechargeRespVO = {
  /** 数据 */
  list: AppPayWalletRechargeRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppPayWalletTransactionRespVO = {
  /** 数据 */
  list: AppPayWalletTransactionRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppPointActivityRespVO = {
  /** 数据 */
  list: AppPointActivityRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppProductBrowseHistoryRespVO = {
  /** 数据 */
  list: AppProductBrowseHistoryRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppProductCommentRespVO = {
  /** 数据 */
  list: AppProductCommentRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppProductSpuRespVO = {
  /** 数据 */
  list: AppProductSpuRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppSeckillActivityRespVO = {
  /** 数据 */
  list: AppSeckillActivityRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppTradeOrderPageItemRespVO = {
  /** 数据 */
  list: AppTradeOrderPageItemRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppYRZPJobRespVO = {
  /** 数据 */
  list: AppYRZPJobRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultAppYRZPJobSeekerRespVO = {
  /** 数据 */
  list: AppYRZPJobSeekerRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultArticleCategoryRespVO = {
  /** 数据 */
  list: ArticleCategoryRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultArticleRespVO = {
  /** 数据 */
  list: ArticleRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultBannerRespVO = {
  /** 数据 */
  list: BannerRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultBargainActivityPageItemRespVO = {
  /** 数据 */
  list: BargainActivityPageItemRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultBargainHelpRespVO = {
  /** 数据 */
  list: BargainHelpRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultBargainRecordPageItemRespVO = {
  /** 数据 */
  list: BargainRecordPageItemRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultBrokerageRecordRespVO = {
  /** 数据 */
  list: BrokerageRecordRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultBrokerageUserRespVO = {
  /** 数据 */
  list: BrokerageUserRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultBrokerageWithdrawRespVO = {
  /** 数据 */
  list: BrokerageWithdrawRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultCodegenTableRespVO = {
  /** 数据 */
  list: CodegenTableRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultCombinationActivityPageItemRespVO = {
  /** 数据 */
  list: CombinationActivityPageItemRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultCombinationRecordPageItemRespVO = {
  /** 数据 */
  list: CombinationRecordPageItemRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultConfigRespVO = {
  /** 数据 */
  list: ConfigRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultCouponPageItemRespVO = {
  /** 数据 */
  list: CouponPageItemRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultCouponTemplateRespVO = {
  /** 数据 */
  list: CouponTemplateRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultDeliveryExpressRespVO = {
  /** 数据 */
  list: DeliveryExpressRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultDeliveryExpressTemplateRespVO = {
  /** 数据 */
  list: DeliveryExpressTemplateRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultDeliveryPickUpStoreRespVO = {
  /** 数据 */
  list: DeliveryPickUpStoreRespVO[];
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

export type PageResultDiscountActivityRespVO = {
  /** 数据 */
  list: DiscountActivityRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultDiyPageRespVO = {
  /** 数据 */
  list: DiyPageRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultDiyTemplateRespVO = {
  /** 数据 */
  list: DiyTemplateRespVO[];
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

export type PageResultMemberExperienceRecordRespVO = {
  /** 数据 */
  list: MemberExperienceRecordRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultMemberGroupRespVO = {
  /** 数据 */
  list: MemberGroupRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultMemberLevelRecordRespVO = {
  /** 数据 */
  list: MemberLevelRecordRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultMemberPointRecordRespVO = {
  /** 数据 */
  list: MemberPointRecordRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultMemberSignInRecordRespVO = {
  /** 数据 */
  list: MemberSignInRecordRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultMemberTagRespVO = {
  /** 数据 */
  list: MemberTagRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultMemberUserRespVO = {
  /** 数据 */
  list: MemberUserRespVO[];
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

export type PageResultPayAppPageItemRespVO = {
  /** 数据 */
  list: PayAppPageItemRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultPayDemoOrderRespVO = {
  /** 数据 */
  list: PayDemoOrderRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultPayDemoWithdrawRespVO = {
  /** 数据 */
  list: PayDemoWithdrawRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultPayNotifyTaskRespVO = {
  /** 数据 */
  list: PayNotifyTaskRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultPayOrderPageItemRespVO = {
  /** 数据 */
  list: PayOrderPageItemRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultPayRefundPageItemRespVO = {
  /** 数据 */
  list: PayRefundPageItemRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultPayTransferRespVO = {
  /** 数据 */
  list: PayTransferRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultPayWalletRespVO = {
  /** 数据 */
  list: PayWalletRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultPayWalletTransactionRespVO = {
  /** 数据 */
  list: PayWalletTransactionRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultPointActivityRespVO = {
  /** 数据 */
  list: PointActivityRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultPostRespVO = {
  /** 数据 */
  list: PostRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultProductBrandRespVO = {
  /** 数据 */
  list: ProductBrandRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultProductBrowseHistoryRespVO = {
  /** 数据 */
  list: ProductBrowseHistoryRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultProductCommentRespVO = {
  /** 数据 */
  list: ProductCommentRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultProductFavoriteRespVO = {
  /** 数据 */
  list: ProductFavoriteRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultProductPropertyRespVO = {
  /** 数据 */
  list: ProductPropertyRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultProductPropertyValueRespVO = {
  /** 数据 */
  list: ProductPropertyValueRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultProductSpuRespVO = {
  /** 数据 */
  list: ProductSpuRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultProductStatisticsRespVO = {
  /** 数据 */
  list: ProductStatisticsRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultRewardActivityRespVO = {
  /** 数据 */
  list: RewardActivityRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultRoleRespVO = {
  /** 数据 */
  list: RoleRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultSeckillActivityRespVO = {
  /** 数据 */
  list: SeckillActivityRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultSeckillConfigRespVO = {
  /** 数据 */
  list: SeckillConfigRespVO[];
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

export type PageResultTradeOrderPageItemRespVO = {
  /** 数据 */
  list: TradeOrderPageItemRespVO[];
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

export type PageResultWalletRechargePackageRespVO = {
  /** 数据 */
  list: WalletRechargePackageRespVO[];
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

export type PayAppCreateReqVO = {
  /** 应用标识 */
  appKey: string;
  /** 应用名 */
  name: string;
  /** 开启状态 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 支付结果的回调地址 */
  orderNotifyUrl: string;
  /** 退款结果的回调地址 */
  refundNotifyUrl: string;
  /** 转账结果的回调地址 */
  transferNotifyUrl?: string;
};

export type PayAppPageItemRespVO = {
  /** 应用标识 */
  appKey: string;
  /** 应用名 */
  name: string;
  /** 开启状态 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 支付结果的回调地址 */
  orderNotifyUrl: string;
  /** 退款结果的回调地址 */
  refundNotifyUrl: string;
  /** 转账结果的回调地址 */
  transferNotifyUrl?: string;
  /** 应用编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 已配置的支付渠道编码 */
  channelCodes: string[];
};

export type PayAppRespVO = {
  /** 应用标识 */
  appKey: string;
  /** 应用名 */
  name: string;
  /** 开启状态 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 支付结果的回调地址 */
  orderNotifyUrl: string;
  /** 退款结果的回调地址 */
  refundNotifyUrl: string;
  /** 转账结果的回调地址 */
  transferNotifyUrl?: string;
  /** 应用编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type PayAppUpdateReqVO = {
  /** 应用标识 */
  appKey: string;
  /** 应用名 */
  name: string;
  /** 开启状态 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 支付结果的回调地址 */
  orderNotifyUrl: string;
  /** 退款结果的回调地址 */
  refundNotifyUrl: string;
  /** 转账结果的回调地址 */
  transferNotifyUrl?: string;
  /** 应用编号 */
  id: number;
};

export type PayAppUpdateStatusReqVO = {
  /** 应用编号 */
  id: number;
  /** 状态，见 SysCommonStatusEnum 枚举 */
  status: number;
};

export type PayChannelCreateReqVO = {
  /** 开启状态 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 渠道费率，单位：百分比 */
  feeRate: number;
  /** 应用编号 */
  appId: number;
  /** 渠道编码 */
  code: string;
  /** 渠道配置的 json 字符串 */
  config: string;
};

export type PayChannelRespVO = {
  /** 开启状态 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 渠道费率，单位：百分比 */
  feeRate: number;
  /** 应用编号 */
  appId: number;
  /** 商户编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 渠道编码 */
  code: string;
  /** 配置 */
  config: string;
};

export type PayChannelUpdateReqVO = {
  /** 开启状态 */
  status: number;
  /** 备注 */
  remark?: string;
  /** 渠道费率，单位：百分比 */
  feeRate: number;
  /** 应用编号 */
  appId: number;
  /** 商户编号 */
  id: number;
  /** 渠道配置的json字符串 */
  config: string;
};

export type PayDemoOrderCreateReqVO = {
  /** 商品编号 */
  spuId: number;
};

export type PayDemoOrderRespVO = {
  /** 订单编号 */
  id: number;
  /** 用户编号 */
  userId: number;
  /** 商品编号 */
  spuId: number;
  /** 商家备注 */
  spuName?: string;
  /** 价格，单位：分 */
  price: number;
  /** 是否已支付 */
  payStatus: boolean;
  /** 支付订单编号 */
  payOrderId?: number;
  /** 订单支付时间 */
  payTime?: string;
  /** 支付渠道 */
  payChannelCode?: string;
  /** 支付退款编号 */
  payRefundId?: number;
  /** 退款金额，单位：分 */
  refundPrice: number;
  /** 退款时间 */
  refundTime?: string;
  /** 创建时间 */
  createTime: string;
};

export type PayDemoWithdrawCreateReqVO = {
  /** 提现标题 */
  subject: string;
  /** 提现金额，单位：分 */
  price: number;
  /** 收款人账号 */
  userAccount: string;
  /** 收款人姓名 */
  userName?: string;
  /** 提现方式 */
  type: number;
  userNameValid?: boolean;
};

export type PayDemoWithdrawRespVO = {
  /** 转账单编号 */
  id: number;
  /** 提现标题 */
  subject: string;
  /** 提现金额，单位：分 */
  price: number;
  /** 收款人姓名 */
  userName?: string;
  /** 收款人账号 */
  userAccount?: string;
  /** 提现类型 */
  type: number;
  /** 提现状态 */
  status: number;
  /** 转账单编号 */
  payTransferId?: number;
  /** 转账渠道 */
  transferChannelCode?: string;
  /** 转账成功时间 */
  transferTime?: string;
  /** 转账失败原因 */
  transferErrorMsg?: string;
};

export type PayNotifyTaskDetailRespVO = {
  /** 任务编号 */
  id: number;
  /** 应用编号 */
  appId: number;
  /** 应用名称 */
  appName?: string;
  /** 通知类型 */
  type: string;
  /** 数据编号 */
  dataId: number;
  /** 商户订单编号 */
  merchantOrderId?: string;
  /** 商户退款编号 */
  merchantRefundId?: string;
  /** 商户转账编号 */
  merchantTransferId?: string;
  /** 通知状态 */
  status: string;
  /** 下一次通知时间 */
  nextNotifyTime: string;
  /** 最后一次执行时间 */
  lastExecuteTime: string;
  /** 当前通知次数 */
  notifyTimes: string;
  /** 最大可通知次数 */
  maxNotifyTimes: string;
  /** 创建时间 */
  createTime: string;
  /** 更新时间 */
  updateTime: string;
  /** 回调日志列表 */
  logs?: Log[];
};

export type PayNotifyTaskRespVO = {
  /** 任务编号 */
  id: number;
  /** 应用编号 */
  appId: number;
  /** 应用名称 */
  appName?: string;
  /** 通知类型 */
  type: string;
  /** 数据编号 */
  dataId: number;
  /** 商户订单编号 */
  merchantOrderId?: string;
  /** 商户退款编号 */
  merchantRefundId?: string;
  /** 商户转账编号 */
  merchantTransferId?: string;
  /** 通知状态 */
  status: string;
  /** 下一次通知时间 */
  nextNotifyTime: string;
  /** 最后一次执行时间 */
  lastExecuteTime: string;
  /** 当前通知次数 */
  notifyTimes: string;
  /** 最大可通知次数 */
  maxNotifyTimes: string;
  /** 创建时间 */
  createTime: string;
  /** 更新时间 */
  updateTime: string;
};

export type PayOrderDetailsRespVO = {
  /** 应用编号 */
  appId: number;
  /** 渠道编号 */
  channelId?: number;
  /** 渠道编码 */
  channelCode?: string;
  /** 商户订单编号 */
  merchantOrderId: string;
  /** 商品标题 */
  subject: string;
  /** 商品描述 */
  body: string;
  /** 异步通知地址 */
  notifyUrl: string;
  /** 支付金额，单位：分 */
  price: number;
  /** 渠道手续费，单位：百分比 */
  channelFeeRate?: number;
  /** 渠道手续金额，单位：分 */
  channelFeePrice?: number;
  /** 支付状态 */
  status: number;
  /** 用户 IP */
  userIp: string;
  /** 订单失效时间 */
  expireTime: string;
  /** 订单支付成功时间 */
  successTime?: string;
  /** 支付成功的订单拓展单编号 */
  extensionId?: number;
  /** 支付订单号 */
  no?: string;
  /** 退款总金额，单位：分 */
  refundPrice: number;
  /** 渠道用户编号 */
  channelUserId?: string;
  /** 渠道订单号 */
  channelOrderNo?: string;
  /** 支付订单编号 */
  id: number;
  /** 应用名称 */
  appName: string;
  /** 创建时间 */
  createTime: string;
  /** 更新时间 */
  updateTime: string;
  extension?: PayOrderExtension;
};

export type PayOrderExtension = {
  /** 支付订单号 */
  no: string;
  /** 支付异步通知的内容 */
  channelNotifyData?: string;
};

export type PayOrderNotifyReqDTO = {
  merchantOrderId: string;
  payOrderId: number;
};

export type PayOrderPageItemRespVO = {
  /** 应用编号 */
  appId: number;
  /** 渠道编号 */
  channelId?: number;
  /** 渠道编码 */
  channelCode?: string;
  /** 商户订单编号 */
  merchantOrderId: string;
  /** 商品标题 */
  subject: string;
  /** 商品描述 */
  body: string;
  /** 异步通知地址 */
  notifyUrl: string;
  /** 支付金额，单位：分 */
  price: number;
  /** 渠道手续费，单位：百分比 */
  channelFeeRate?: number;
  /** 渠道手续金额，单位：分 */
  channelFeePrice?: number;
  /** 支付状态 */
  status: number;
  /** 用户 IP */
  userIp: string;
  /** 订单失效时间 */
  expireTime: string;
  /** 订单支付成功时间 */
  successTime?: string;
  /** 支付成功的订单拓展单编号 */
  extensionId?: number;
  /** 支付订单号 */
  no?: string;
  /** 退款总金额，单位：分 */
  refundPrice: number;
  /** 渠道用户编号 */
  channelUserId?: string;
  /** 渠道订单号 */
  channelOrderNo?: string;
  /** 支付订单编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 应用名称 */
  appName?: string;
};

export type PayOrderRespVO = {
  /** 应用编号 */
  appId: number;
  /** 渠道编号 */
  channelId?: number;
  /** 渠道编码 */
  channelCode?: string;
  /** 商户订单编号 */
  merchantOrderId: string;
  /** 商品标题 */
  subject: string;
  /** 商品描述 */
  body: string;
  /** 异步通知地址 */
  notifyUrl: string;
  /** 支付金额，单位：分 */
  price: number;
  /** 渠道手续费，单位：百分比 */
  channelFeeRate?: number;
  /** 渠道手续金额，单位：分 */
  channelFeePrice?: number;
  /** 支付状态 */
  status: number;
  /** 用户 IP */
  userIp: string;
  /** 订单失效时间 */
  expireTime: string;
  /** 订单支付成功时间 */
  successTime?: string;
  /** 支付成功的订单拓展单编号 */
  extensionId?: number;
  /** 支付订单号 */
  no?: string;
  /** 退款总金额，单位：分 */
  refundPrice: number;
  /** 渠道用户编号 */
  channelUserId?: string;
  /** 渠道订单号 */
  channelOrderNo?: string;
  /** 支付订单编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type PayOrderSubmitReqVO = {
  /** 支付单编号 */
  id: number;
  /** 支付渠道 */
  channelCode: string;
  /** 支付渠道的额外参数，例如说，微信公众号需要传递 openid 参数 */
  channelExtras?: Record<string, unknown>;
  /** 展示模式 */
  displayMode?: string;
  /** 回跳地址 */
  returnUrl?: string;
};

export type PayOrderSubmitRespVO = {
  /** 支付状态 */
  status: number;
  /** 展示模式 */
  displayMode: string;
  /** 展示内容 */
  displayContent: string;
};

export type PayRefundDetailsRespVO = {
  /** 外部退款号 */
  no: string;
  /** 应用编号 */
  appId: number;
  /** 渠道编号 */
  channelId: number;
  /** 渠道编码 */
  channelCode: string;
  /** 订单编号 */
  orderId: number;
  /** 商户订单编号 */
  merchantOrderId: string;
  /** 商户退款订单号 */
  merchantRefundId: string;
  /** 异步通知地址 */
  notifyUrl: string;
  /** 退款状态 */
  status: number;
  /** 支付金额 */
  payPrice: number;
  /** 退款金额,单位分 */
  refundPrice: number;
  /** 退款原因 */
  reason: string;
  /** 用户 IP */
  userIp: string;
  /** 渠道订单号 */
  channelOrderNo: string;
  /** 渠道退款单号 */
  channelRefundNo?: string;
  /** 退款成功时间 */
  successTime?: string;
  /** 调用渠道的错误码 */
  channelErrorCode?: string;
  /** 调用渠道的错误提示 */
  channelErrorMsg?: string;
  /** 支付渠道的额外参数 */
  channelNotifyData?: string;
  /** 支付退款编号 */
  id: number;
  /** 应用名称 */
  appName: string;
  /** 支付订单 */
  order: Order;
  /** 创建时间 */
  createTime?: string;
  /** 更新时间 */
  updateTime?: string;
};

export type PayRefundNotifyReqDTO = {
  merchantOrderId: string;
  merchantRefundId: string;
  payRefundId: number;
};

export type PayRefundPageItemRespVO = {
  /** 外部退款号 */
  no: string;
  /** 应用编号 */
  appId: number;
  /** 渠道编号 */
  channelId: number;
  /** 渠道编码 */
  channelCode: string;
  /** 订单编号 */
  orderId: number;
  /** 商户订单编号 */
  merchantOrderId: string;
  /** 商户退款订单号 */
  merchantRefundId: string;
  /** 异步通知地址 */
  notifyUrl: string;
  /** 退款状态 */
  status: number;
  /** 支付金额 */
  payPrice: number;
  /** 退款金额,单位分 */
  refundPrice: number;
  /** 退款原因 */
  reason: string;
  /** 用户 IP */
  userIp: string;
  /** 渠道订单号 */
  channelOrderNo: string;
  /** 渠道退款单号 */
  channelRefundNo?: string;
  /** 退款成功时间 */
  successTime?: string;
  /** 调用渠道的错误码 */
  channelErrorCode?: string;
  /** 调用渠道的错误提示 */
  channelErrorMsg?: string;
  /** 支付渠道的额外参数 */
  channelNotifyData?: string;
  /** 支付订单编号 */
  id: number;
  /** 应用名称 */
  appName: string;
  /** 创建时间 */
  createTime: string;
};

export type PaySummaryRespVO = {
  /** 充值金额，单位分 */
  rechargePrice: number;
};

export type PayTransferNotifyReqDTO = {
  merchantTransferId: string;
  payTransferId: number;
};

export type PayTransferRespVO = {
  /** 编号 */
  id: number;
  /** 转账单号 */
  no: string;
  /** 应用编号 */
  appId: number;
  /** 应用名称 */
  appName: string;
  /** 转账渠道编号 */
  channelId: number;
  /** 转账渠道编码 */
  channelCode: string;
  /** 商户转账单编号 */
  merchantTransferId: string;
  /** 转账状态 */
  status: number;
  /** 转账成功时间 */
  successTime?: string;
  /** 转账金额 */
  price: number;
  /** 转账标题 */
  subject: string;
  /** 收款人姓名 */
  userName?: string;
  /** 收款人账号 */
  userAccount: string;
  /** 异步通知商户地址 */
  notifyUrl: string;
  /** 用户 IP */
  userIp: string;
  /** 渠道的额外参数 */
  channelExtras?: Record<string, unknown>;
  /** 渠道转账单号 */
  channelTransferNo?: string;
  /** 调用渠道的错误码 */
  channelErrorCode?: string;
  /** 调用渠道的错误提示 */
  channelErrorMsg?: string;
  /** 渠道的同步/异步通知的内容 */
  channelNotifyData?: string;
  /** 创建时间 */
  createTime: string;
};

export type PayWalletRespVO = {
  /** 用户编号 */
  userId: number;
  /** 用户类型 */
  userType: number;
  /** 余额，单位分 */
  balance: number;
  /** 累计支出，单位分 */
  totalExpense: number;
  /** 累计充值，单位分 */
  totalRecharge: number;
  /** 冻结金额，单位分 */
  freezePrice: number;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type PayWalletTransactionRespVO = {
  /** 编号 */
  id: number;
  /** 钱包编号 */
  walletId: number;
  /** 业务分类 */
  bizType: number;
  /** 交易金额，单位分 */
  price: number;
  /** 流水标题 */
  title: string;
  /** 交易后的余额，单位分 */
  balance: number;
  /** 交易时间 */
  createTime: string;
};

export type PayWalletUpdateBalanceReqVO = {
  /** 用户编号 */
  userId: number;
  /** 变动余额，正数为增加，负数为减少 */
  balance: number;
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

export type pickUpOrderByIdParams = {
  /** 交易订单编号 */
  id: number;
};

export type pickUpOrderByVerifyCodeParams = {
  /** 自提核销码 */
  pickUpVerifyCode: string;
};

export type PointActivityRespVO = {
  /** 积分商城活动编号 */
  id: number;
  /** 积分商城活动商品 */
  spuId: number;
  /** 活动状态 */
  status: number;
  /** 积分商城活动库存 */
  stock: number;
  /** 积分商城活动总库存 */
  totalStock: number;
  /** 备注 */
  remark?: string;
  /** 排序 */
  sort: number;
  /** 创建时间 */
  createTime: string;
  /** 积分商城商品 */
  products: PointProductRespVO[];
  /** 商品名称 */
  spuName: string;
  /** 商品主图 */
  picUrl: string;
  /** 商品市场价，单位：分 */
  marketPrice: number;
  /** 兑换积分 */
  point: number;
  /** 兑换金额，单位：分 */
  price: number;
};

export type PointActivitySaveReqVO = {
  /** 积分商城活动编号 */
  id: number;
  /** 积分商城活动商品 */
  spuId: number;
  /** 备注 */
  remark?: string;
  /** 排序 */
  sort: number;
  /** 积分商城商品 */
  products: PointProductSaveReqVO[];
};

export type PointProductRespVO = {
  /** 积分商城商品编号 */
  id: number;
  /** 积分商城活动编号 */
  activityId: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 可兑换数量 */
  count: number;
  /** 兑换积分 */
  point: number;
  /** 兑换金额，单位：分 */
  price: number;
  /** 积分商城商品库存 */
  stock: number;
  /** 积分商城商品状态 */
  activityStatus: number;
};

export type PointProductSaveReqVO = {
  /** 积分商城商品编号 */
  id: number;
  /** 积分商城活动 id */
  activityId: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 可兑换数量 */
  count: number;
  /** 兑换积分 */
  point: number;
  /** 兑换金额，单位：分 */
  price: number;
  /** 积分商城商品库存 */
  stock: number;
  /** 积分商城商品状态 */
  activityStatus: number;
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

export type Price = {
  /** 商品原价（总），单位：分 */
  totalPrice: number;
  /** 订单优惠（总），单位：分 */
  discountPrice: number;
  /** 运费金额，单位：分 */
  deliveryPrice: number;
  /** 优惠劵减免金额，单位：分 */
  couponPrice: number;
  /** 积分抵扣的金额，单位：分 */
  pointPrice: number;
  /** VIP 减免金额，单位：分 */
  vipPrice: number;
  /** 实际支付金额（总），单位：分 */
  payPrice: number;
};

export type Product = {
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 优惠类型 */
  discountType: number;
  /** 折扣百分比 */
  discountPercent?: number;
  /** 优惠金额 */
  discountPrice?: number;
};

export type ProductBrandCreateReqVO = {
  /** 品牌名称 */
  name: string;
  /** 品牌图片 */
  picUrl: string;
  /** 品牌排序 */
  sort: number;
  /** 品牌描述 */
  description?: string;
  /** 状态 */
  status: number;
};

export type ProductBrandRespVO = {
  /** 品牌名称 */
  name: string;
  /** 品牌图片 */
  picUrl: string;
  /** 品牌排序 */
  sort: number;
  /** 品牌描述 */
  description?: string;
  /** 状态 */
  status: number;
  /** 品牌编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type ProductBrandSimpleRespVO = {
  /** 品牌编号 */
  id: number;
  /** 品牌名称 */
  name: string;
};

export type ProductBrandUpdateReqVO = {
  /** 品牌名称 */
  name: string;
  /** 品牌图片 */
  picUrl: string;
  /** 品牌排序 */
  sort: number;
  /** 品牌描述 */
  description?: string;
  /** 状态 */
  status: number;
  /** 品牌编号 */
  id: number;
};

export type ProductBrowseHistoryRespVO = {
  /** 编号 */
  id: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SPU 名称 */
  spuName?: string;
  /** 商品封面图 */
  picUrl?: string;
  /** 商品单价 */
  price?: number;
  /** 商品销量 */
  salesCount?: number;
  /** 库存 */
  stock?: number;
};

export type ProductCategoryRespVO = {
  /** 分类编号 */
  id: number;
  /** 父分类编号 */
  parentId: number;
  /** 分类名称 */
  name: string;
  /** 移动端分类图 */
  picUrl: string;
  /** 分类排序 */
  sort: number;
  /** 开启状态 */
  status: number;
  /** 分类描述 */
  description?: string;
  /** 创建时间 */
  createTime: string;
};

export type ProductCategorySaveReqVO = {
  /** 分类编号 */
  id?: number;
  /** 父分类编号 */
  parentId: number;
  /** 分类名称 */
  name: string;
  /** 移动端分类图 */
  picUrl: string;
  /** 分类排序 */
  sort: number;
  /** 开启状态 */
  status: number;
  /** 分类描述 */
  description?: string;
};

export type ProductCommentCreateReqVO = {
  /** 评价人 */
  userId: number;
  /** 评价订单项 */
  orderItemId: number;
  /** 评价人名称 */
  userNickname: string;
  /** 评价人头像 */
  userAvatar: string;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 描述星级 1-5 分 */
  descriptionScores: number;
  /** 服务星级 1-5 分 */
  benefitScores: number;
  /** 评论内容 */
  content: string;
  /** 评论图片地址数组，以逗号分隔最多上传 9 张 */
  picUrls: string[];
};

export type ProductCommentReplyReqVO = {
  /** 评价编号 */
  id: number;
  /** 商家回复内容 */
  replyContent: string;
};

export type ProductCommentRespVO = {
  /** 订单项编号 */
  id: number;
  /** 评价人 */
  userId: number;
  /** 评价人名称 */
  userNickname: string;
  /** 评价人头像 */
  userAvatar: string;
  /** 是否匿名 */
  anonymous: boolean;
  /** 交易订单编号 */
  orderId: number;
  /** 评价订单项 */
  orderItemId: number;
  /** 商品 SPU 编号 */
  spuId: number;
  /** 商品 SKU 编号 */
  skuId: number;
  /** 商品 SPU 名称 */
  spuName: string;
  /** 商品 SKU 图片地址 */
  skuPicUrl?: string;
  /** 商品 SKU 规格值数组 */
  skuProperties?: Property[];
  /** 是否可见 */
  visible: boolean;
  /** 评分星级 1-5 分 */
  scores: number;
  /** 描述星级 1-5 分 */
  descriptionScores: number;
  /** 服务星级 1-5 分 */
  benefitScores: number;
  /** 评论内容 */
  content: string;
  /** 评论图片地址数组，以逗号分隔最多上传 9 张 */
  picUrls: string[];
  /** 商家是否回复 */
  replyStatus: boolean;
  /** 回复管理员编号 */
  replyUserId?: number;
  /** 商家回复内容 */
  replyContent?: string;
  /** 商家回复时间 */
  replyTime?: string;
  /** 创建时间 */
  createTime: string;
};

export type ProductCommentUpdateVisibleReqVO = {
  /** 评价编号 */
  id: number;
  /** 是否可见 */
  visible: boolean;
};

export type ProductFavoriteRespVO = {
  /** 商品 SPU 编号 */
  id: number;
  /** 商品名称 */
  name: string;
  /** 关键字 */
  keyword: string;
  /** 商品简介 */
  introduction: string;
  /** 商品详情 */
  description: string;
  /** 商品分类编号 */
  categoryId: number;
  /** 商品品牌编号 */
  brandId: number;
  /** 商品封面图 */
  picUrl: string;
  /** 商品轮播图 */
  sliderPicUrls: string[];
  /** 排序字段 */
  sort: number;
  /** 商品状态 */
  status: number;
  /** 商品创建时间 */
  createTime: string;
  /** 规格类型 */
  specType: boolean;
  /** 商品价格 */
  price: number;
  /** 市场价，单位使用：分 */
  marketPrice: number;
  /** 成本价，单位使用：分 */
  costPrice: number;
  /** 商品库存 */
  stock: number;
  /** SKU 数组 */
  skus?: ProductSkuRespVO[];
  /** 配送方式数组 */
  deliveryTypes: number[];
  /** 物流配置模板编号 */
  deliveryTemplateId: number;
  /** 赠送积分 */
  giveIntegral: number;
  /** 分销类型 */
  subCommissionType: boolean;
  /** 商品销量 */
  salesCount: number;
  /** 虚拟销量 */
  virtualSalesCount?: number;
  /** 浏览量 */
  browseCount: number;
  /** userId */
  userId: number;
  /** spuId */
  spuId: number;
};

export type ProductPropertyRespVO = {
  /** 编号 */
  id: number;
  /** 名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 创建时间 */
  createTime: string;
};

export type ProductPropertySaveReqVO = {
  /** 主键 */
  id?: number;
  /** 名称 */
  name: string;
  /** 备注 */
  remark?: string;
};

export type ProductPropertyValueDetailRespVO = {
  /** 属性的编号 */
  propertyId: number;
  /** 属性的名称 */
  propertyName: string;
  /** 属性值的编号 */
  valueId: number;
  /** 属性值的名称 */
  valueName: string;
};

export type ProductPropertyValueRespVO = {
  /** 主键 */
  id?: number;
  /** 属性项的编号 */
  propertyId: number;
  /** 名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 创建时间 */
  createTime?: string;
};

export type ProductPropertyValueSaveReqVO = {
  /** 主键 */
  id?: number;
  /** 属性项的编号 */
  propertyId: number;
  /** 名称 */
  name: string;
  /** 备注 */
  remark?: string;
};

export type ProductSkuRespVO = {
  /** 主键 */
  id: number;
  /** 商品 SKU 名字 */
  name: string;
  /** 销售价格，单位：分 */
  price: number;
  /** 市场价 */
  marketPrice?: number;
  /** 成本价 */
  costPrice?: number;
  /** 条形码 */
  barCode?: string;
  /** 图片地址 */
  picUrl: string;
  /** 库存 */
  stock: number;
  /** 商品重量,单位：kg 千克 */
  weight?: number;
  /** 商品体积,单位：m^3 平米 */
  volume?: number;
  /** 一级分销的佣金，单位：分 */
  firstBrokeragePrice?: number;
  /** 二级分销的佣金，单位：分 */
  secondBrokeragePrice?: number;
  /** 属性数组 */
  properties?: Property[];
};

export type ProductSkuSaveReqVO = {
  /** 商品 SKU 名字 */
  name: string;
  /** 销售价格，单位：分 */
  price: number;
  /** 市场价 */
  marketPrice?: number;
  /** 成本价 */
  costPrice?: number;
  /** 条形码 */
  barCode?: string;
  /** 图片地址 */
  picUrl: string;
  /** 库存 */
  stock: number;
  /** 商品重量,单位：kg 千克 */
  weight?: number;
  /** 商品体积,单位：m^3 平米 */
  volume?: number;
  /** 一级分销的佣金，单位：分 */
  firstBrokeragePrice?: number;
  /** 二级分销的佣金，单位：分 */
  secondBrokeragePrice?: number;
  /** 属性数组 */
  properties?: Property[];
};

export type ProductSpuRespVO = {
  /** 商品 SPU 编号 */
  id: number;
  /** 商品名称 */
  name: string;
  /** 关键字 */
  keyword: string;
  /** 商品简介 */
  introduction: string;
  /** 商品详情 */
  description: string;
  /** 商品分类编号 */
  categoryId: number;
  /** 商品品牌编号 */
  brandId: number;
  /** 商品封面图 */
  picUrl: string;
  /** 商品轮播图 */
  sliderPicUrls: string[];
  /** 排序字段 */
  sort: number;
  /** 商品状态 */
  status: number;
  /** 商品创建时间 */
  createTime: string;
  /** 规格类型 */
  specType: boolean;
  /** 商品价格 */
  price: number;
  /** 市场价，单位使用：分 */
  marketPrice: number;
  /** 成本价，单位使用：分 */
  costPrice: number;
  /** 商品库存 */
  stock: number;
  /** SKU 数组 */
  skus?: ProductSkuRespVO[];
  /** 配送方式数组 */
  deliveryTypes: number[];
  /** 物流配置模板编号 */
  deliveryTemplateId: number;
  /** 赠送积分 */
  giveIntegral: number;
  /** 分销类型 */
  subCommissionType: boolean;
  /** 商品销量 */
  salesCount: number;
  /** 虚拟销量 */
  virtualSalesCount?: number;
  /** 浏览量 */
  browseCount: number;
};

export type ProductSpuSaveReqVO = {
  /** 商品编号 */
  id?: number;
  /** 商品名称 */
  name: string;
  /** 关键字 */
  keyword: string;
  /** 商品简介 */
  introduction: string;
  /** 商品详情 */
  description: string;
  /** 商品分类编号 */
  categoryId: number;
  /** 商品品牌编号 */
  brandId: number;
  /** 商品封面图 */
  picUrl: string;
  /** 商品轮播图 */
  sliderPicUrls: string[];
  /** 排序字段 */
  sort: number;
  /** 规格类型 */
  specType: boolean;
  /** 配送方式数组 */
  deliveryTypes: number[];
  /** 物流配置模板编号 */
  deliveryTemplateId: number;
  /** 赠送积分 */
  giveIntegral: number;
  /** 分销类型 */
  subCommissionType: boolean;
  /** 虚拟销量 */
  virtualSalesCount?: number;
  /** 商品销量 */
  salesCount: number;
  /** 浏览量 */
  browseCount: number;
  /** SKU 数组 */
  skus?: ProductSkuSaveReqVO[];
};

export type ProductSpuSimpleRespVO = {
  /** 主键 */
  id: number;
  /** 商品名称 */
  name: string;
  /** 商品价格，单位使用：分 */
  price: number;
  /** 商品市场价，单位使用：分 */
  marketPrice: number;
  /** 商品成本价，单位使用：分 */
  costPrice: number;
  /** 商品库存 */
  stock: number;
  /** 商品销量 */
  salesCount: number;
  /** 商品虚拟销量 */
  virtualSalesCount: number;
  /** 商品浏览量 */
  browseCount: number;
};

export type ProductSpuUpdateStatusReqVO = {
  /** 商品编号 */
  id: number;
  /** 商品状态 */
  status: number;
};

export type ProductStatisticsRespVO = {
  /** 编号，主键自增 */
  id: number;
  /** 统计日期 */
  time: string;
  /** 商品SPU编号 */
  spuId: number;
  /** 商品名称 */
  name: string;
  /** 商品封面图 */
  picUrl: string;
  /** 浏览量 */
  browseCount: number;
  /** 访客量 */
  browseUserCount: number;
  /** 收藏数量 */
  favoriteCount: number;
  /** 加购数量 */
  cartCount: number;
  /** 下单件数 */
  orderCount: number;
  /** 支付件数 */
  orderPayCount: number;
  /** 支付金额，单位：分 */
  orderPayPrice: number;
  /** 退款件数 */
  afterSaleCount: number;
  /** 退款金额，单位：分 */
  afterSaleRefundPrice: number;
  /** 访客支付转化率（百分比） */
  browseConvertPercent: number;
};

export type Promotion = {
  id?: number;
  name?: string;
  type?: number;
  totalPrice?: number;
  discountPrice?: number;
  items?: PromotionItem[];
  match?: boolean;
  description?: string;
};

export type PromotionItem = {
  skuId?: number;
  totalPrice?: number;
  discountPrice?: number;
};

export type Property = {
  /** 属性编号 */
  propertyId?: number;
  /** 属性名字 */
  propertyName?: string;
  /** 属性值编号 */
  valueId?: number;
  /** 属性值名字 */
  valueName?: string;
};

export type pushParams = {
  /** 编号 */
  id: number;
};

export type receiveAfterSaleParams = {
  /** 售后编号 */
  id: number;
};

export type receiveOrderParams = {
  /** 交易订单编号 */
  id: number;
};

export type Record = {
  /** 用户昵称 */
  nickname: string;
  /** 用户头像 */
  avatar: string;
  /** 活动名称 */
  activityName: string;
};

export type RedisMonitorRespVO = {
  /** Redis info 指令结果,具体字段，查看 Redis 文档 */
  info: Record<string, unknown>;
  /** Redis key 数量 */
  dbSize: number;
  /** CommandStat 数组 */
  commandStats: CommandStat[];
};

export type refreshToken1Params = {
  /** 刷新令牌 */
  refreshToken: string;
};

export type refreshTokenParams = {
  /** 刷新令牌 */
  refreshToken: string;
};

export type refundAfterSaleParams = {
  /** 售后编号 */
  id: number;
};

export type refundDemoOrderParams = {
  /** 编号 */
  id: number;
};

export type refundWalletRechargeParams = {
  /** 编号 */
  id: number;
};

export type refuseAfterSaleParams = {
  /** 售后编号 */
  id: number;
  /** 收货备注 */
  refuseMemo: string;
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

export type RewardActivity = {
  /** 满减活动编号 */
  id: number;
  /** 条件类型 */
  conditionType: number;
  /** 优惠规则的数组 */
  rules: RewardActivityRule[];
};

export type RewardActivityCreateReqVO = {
  /** 活动标题 */
  name: string;
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 备注 */
  remark?: string;
  /** 条件类型 */
  conditionType: number;
  /** 商品范围 */
  productScope: number;
  /** 商品范围编号的数组 */
  productScopeValues?: number[];
  rules?: Rule[];
};

export type RewardActivityRespVO = {
  /** 活动标题 */
  name: string;
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 备注 */
  remark?: string;
  /** 条件类型 */
  conditionType: number;
  /** 商品范围 */
  productScope: number;
  /** 商品范围编号的数组 */
  productScopeValues?: number[];
  rules?: Rule[];
  /** 活动编号 */
  id: number;
  /** 活动状态 */
  status: number;
  /** 创建时间 */
  createTime: string;
};

export type RewardActivityRule = {
  /** 优惠门槛 */
  limit: number;
  /** 优惠价格 */
  discountPrice: number;
  /** 是否包邮 */
  freeDelivery: boolean;
  /** 赠送的积分 */
  point: number;
  /** 赠送的优惠劵编号的数组 */
  giveCouponTemplateCounts?: Record<string, unknown>;
};

export type RewardActivityUpdateReqVO = {
  /** 活动标题 */
  name: string;
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 备注 */
  remark?: string;
  /** 条件类型 */
  conditionType: number;
  /** 商品范围 */
  productScope: number;
  /** 商品范围编号的数组 */
  productScopeValues?: number[];
  rules?: Rule[];
  /** 活动编号 */
  id: number;
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

export type Rule = {
  /** 优惠门槛 */
  limit: number;
  /** 优惠价格 */
  discountPrice: number;
  /** 是否包邮 */
  freeDelivery: boolean;
  /** 赠送的积分 */
  point: number;
  /** 赠送的优惠劵编号的数组 */
  giveCouponTemplateCounts?: Record<string, unknown>;
};

export type SeckillActivityCreateReqVO = {
  /** 秒杀活动商品 id */
  spuId: number;
  /** 秒杀活动名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 活动开始时间 */
  startTime: string;
  /** 活动结束时间 */
  endTime: string;
  /** 排序 */
  sort: number;
  /** 秒杀时段 id */
  configIds: number[];
  /** 总限购数量 */
  totalLimitCount: number;
  /** 单次限够数量 */
  singleLimitCount: number;
  /** 秒杀商品 */
  products: SeckillProductBaseVO[];
};

export type SeckillActivityDetailRespVO = {
  /** 秒杀活动商品 id */
  spuId: number;
  /** 秒杀活动名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 活动开始时间 */
  startTime: string;
  /** 活动结束时间 */
  endTime: string;
  /** 排序 */
  sort: number;
  /** 秒杀时段 id */
  configIds: number[];
  /** 总限购数量 */
  totalLimitCount: number;
  /** 单次限够数量 */
  singleLimitCount: number;
  /** 秒杀活动id */
  id: number;
  /** 秒杀商品 */
  products: SeckillProductRespVO[];
};

export type SeckillActivityRespVO = {
  /** 秒杀活动商品 id */
  spuId: number;
  /** 秒杀活动名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 活动开始时间 */
  startTime: string;
  /** 活动结束时间 */
  endTime: string;
  /** 排序 */
  sort: number;
  /** 秒杀时段 id */
  configIds: number[];
  /** 总限购数量 */
  totalLimitCount: number;
  /** 单次限够数量 */
  singleLimitCount: number;
  /** 秒杀活动 id */
  id: number;
  /** 秒杀商品 */
  products: SeckillProductRespVO[];
  /** 活动状态 */
  status: number;
  /** 订单实付金额，单位：分 */
  totalPrice: number;
  /** 秒杀库存 */
  stock: number;
  /** 秒杀总库存 */
  totalStock: number;
  /** 新增订单数 */
  orderCount: number;
  /** 付款人数 */
  userCount: number;
  /** 创建时间 */
  createTime: string;
  /** 商品名称 */
  spuName: string;
  /** 商品主图 */
  picUrl: string;
  /** 商品市场价，单位：分 */
  marketPrice: number;
  /** 秒杀金额，单位：分 */
  seckillPrice: number;
};

export type SeckillActivityUpdateReqVO = {
  /** 秒杀活动商品 id */
  spuId: number;
  /** 秒杀活动名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 活动开始时间 */
  startTime: string;
  /** 活动结束时间 */
  endTime: string;
  /** 排序 */
  sort: number;
  /** 秒杀时段 id */
  configIds: number[];
  /** 总限购数量 */
  totalLimitCount: number;
  /** 单次限够数量 */
  singleLimitCount: number;
  /** 秒杀活动id */
  id: number;
  /** 秒杀商品 */
  products: SeckillProductBaseVO[];
};

export type SeckillConfigCreateReqVO = {
  /** 秒杀时段名称 */
  name: string;
  /** 开始时间点 */
  startTime: string;
  /** 结束时间点 */
  endTime: string;
  /** 秒杀轮播图 */
  sliderPicUrls: string[];
  /** 状态 */
  status: number;
};

export type SeckillConfigRespVO = {
  /** 秒杀时段名称 */
  name: string;
  /** 开始时间点 */
  startTime: string;
  /** 结束时间点 */
  endTime: string;
  /** 秒杀轮播图 */
  sliderPicUrls: string[];
  /** 状态 */
  status: number;
  /** 编号 */
  id: number;
  /** 秒杀活动数量 */
  seckillActivityCount: number;
  /** 创建时间 */
  createTime: string;
};

export type SeckillConfigSimpleRespVO = {
  /** 编号 */
  id: number;
  /** 秒杀时段名称 */
  name: string;
  /** 开始时间点 */
  startTime: string;
  /** 结束时间点 */
  endTime: string;
};

export type SeckillConfigUpdateReqVO = {
  /** 秒杀时段名称 */
  name: string;
  /** 开始时间点 */
  startTime: string;
  /** 结束时间点 */
  endTime: string;
  /** 秒杀轮播图 */
  sliderPicUrls: string[];
  /** 状态 */
  status: number;
  /** 编号 */
  id: number;
};

export type SeckillConfigUpdateStatusReqVo = {
  /** 时段配置编号 */
  id: number;
  /** 状态，见 CommonStatusEnum 枚举 */
  status: number;
};

export type SeckillProductBaseVO = {
  /** 商品sku_id */
  skuId: number;
  /** 秒杀金额，单位：分 */
  seckillPrice: number;
  /** 秒杀库存 */
  stock: number;
};

export type SeckillProductRespVO = {
  /** 商品sku_id */
  skuId: number;
  /** 秒杀金额，单位：分 */
  seckillPrice: number;
  /** 秒杀库存 */
  stock: number;
  /** 秒杀参与商品编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type settlementOrderParams = {
  /** 商品项数组 */
  items: Item[];
  /** 优惠劵编号 */
  couponId?: number;
  /** 是否使用积分 */
  pointStatus: boolean;
  /** 配送方式 */
  deliveryType: number;
  /** 收件地址编号 */
  addressId?: number;
  /** 自提门店编号 */
  pickUpStoreId?: number;
  /** 收件人名称 */
  receiverName?: string;
  /** 收件人手机 */
  receiverMobile?: string;
  /** 秒杀活动编号 */
  seckillActivityId?: number;
  /** 拼团活动编号 */
  combinationActivityId?: number;
  /** 拼团团长编号 */
  combinationHeadId?: number;
  /** 砍价记录编号 */
  bargainRecordId?: number;
  /** 积分商城活动编号 */
  pointActivityId?: number;
};

export type settlementProductParams = {
  /** 商品 SPU 编号数组 */
  spuIds: number[];
};

export type Sku = {
  /** 商品 SKU 编号 */
  id: number;
  /** 优惠后价格，单位：分 */
  promotionPrice: number;
  /** 营销类型 */
  promotionType: number;
  /** 营销编号 */
  promotionId: number;
  /** 活动结束时间 */
  promotionEndTime: string;
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

export type socialAuthRedirectParams = {
  /** 社交类型 */
  type: number;
  /** 回调路径 */
  redirectUri: string;
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

export type socialLogin1Params = {
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

export type SocialWxJsapiSignatureRespDTO = {
  appId?: string;
  nonceStr?: string;
  timestamp?: number;
  url?: string;
  signature?: string;
};

export type SortingField = {
  field?: string;
  order?: string;
};

export type syncCodegenFromDBParams = {
  /** 表编号 */
  tableId: number;
};

export type syncTransferParams = {
  /** 编号 */
  id: number;
};

export type takeCouponParams = {
  /** 优惠券模板编号 */
  templateId: unknown;
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

export type TradeConfigRespVO = {
  /** 售后的退款理由 */
  afterSaleRefundReasons: string[];
  /** 售后的退货理由 */
  afterSaleReturnReasons: string[];
  /** 是否启用全场包邮 */
  deliveryExpressFreeEnabled: boolean;
  /** 全场包邮的最小金额 */
  deliveryExpressFreePrice: number;
  /** 是否开启自提 */
  deliveryPickUpEnabled: boolean;
  /** 是否启用分佣 */
  brokerageEnabled: boolean;
  /** 分佣模式 */
  brokerageEnabledCondition: number;
  /** 分销关系绑定模式 */
  brokerageBindMode: number;
  /** 分销海报图地址数组 */
  brokeragePosterUrls: string[];
  /** 一级返佣比例 */
  brokerageFirstPercent: number;
  /** 二级返佣比例 */
  brokerageSecondPercent: number;
  /** 用户提现最低金额 */
  brokerageWithdrawMinPrice: number;
  /** 用户提现手续费百分比 */
  brokerageWithdrawFeePercent: number;
  /** 佣金冻结时间(天) */
  brokerageFrozenDays: number;
  /** 提现方式 */
  brokerageWithdrawTypes: number[];
  /** 自增主键 */
  id: number;
  /** 腾讯地图 KEY */
  tencentLbsKey: string;
};

export type TradeConfigSaveReqVO = {
  /** 售后的退款理由 */
  afterSaleRefundReasons: string[];
  /** 售后的退货理由 */
  afterSaleReturnReasons: string[];
  /** 是否启用全场包邮 */
  deliveryExpressFreeEnabled: boolean;
  /** 全场包邮的最小金额 */
  deliveryExpressFreePrice: number;
  /** 是否开启自提 */
  deliveryPickUpEnabled: boolean;
  /** 是否启用分佣 */
  brokerageEnabled: boolean;
  /** 分佣模式 */
  brokerageEnabledCondition: number;
  /** 分销关系绑定模式 */
  brokerageBindMode: number;
  /** 分销海报图地址数组 */
  brokeragePosterUrls: string[];
  /** 一级返佣比例 */
  brokerageFirstPercent: number;
  /** 二级返佣比例 */
  brokerageSecondPercent: number;
  /** 用户提现最低金额 */
  brokerageWithdrawMinPrice: number;
  /** 用户提现手续费百分比 */
  brokerageWithdrawFeePercent: number;
  /** 佣金冻结时间(天) */
  brokerageFrozenDays: number;
  /** 提现方式 */
  brokerageWithdrawTypes: number[];
};

export type TradeOrderBaseVO = {
  /** 订单编号 */
  id: number;
  /** 订单流水号 */
  no: string;
  /** 下单时间 */
  createTime: string;
  /** 订单类型 */
  type: number;
  /** 订单来源 */
  terminal: number;
  /** 用户编号 */
  userId: number;
  /** 用户 IP */
  userIp: string;
  /** 用户备注 */
  userRemark: string;
  /** 订单状态 */
  status: number;
  /** 购买的商品数量 */
  productCount: number;
  /** 订单完成时间 */
  finishTime?: string;
  /** 订单取消时间 */
  cancelTime?: string;
  /** 取消类型 */
  cancelType?: number;
  /** 商家备注 */
  remark?: string;
  /** 支付订单编号 */
  payOrderId: number;
  /** 是否已支付 */
  payStatus: boolean;
  /** 付款时间 */
  payTime?: string;
  /** 支付渠道 */
  payChannelCode: string;
  /** 商品原价（总） */
  totalPrice: number;
  /** 订单优惠（总） */
  discountPrice: number;
  /** 运费金额 */
  deliveryPrice: number;
  /** 订单调价（总） */
  adjustPrice: number;
  /** 应付金额（总） */
  payPrice: number;
  /** 配送方式 */
  deliveryType?: number;
  /** 自提门店 */
  pickUpStoreId?: number;
  /** 自提核销码 */
  pickUpVerifyCode?: number;
  /** 配送模板编号 */
  deliveryTemplateId?: number;
  /** 发货物流公司编号 */
  logisticsId?: number;
  /** 发货物流单号 */
  logisticsNo?: string;
  /** 发货时间 */
  deliveryTime?: string;
  /** 收货时间 */
  receiveTime?: string;
  /** 收件人名称 */
  receiverName: string;
  /** 收件人手机 */
  receiverMobile: string;
  /** 收件人地区编号 */
  receiverAreaId: number;
  /** 收件人详细地址 */
  receiverDetailAddress: string;
  /** 售后状态 */
  afterSaleStatus?: number;
  /** 退款金额 */
  refundPrice: number;
  /** 优惠劵编号 */
  couponId?: number;
  /** 优惠劵减免金额 */
  couponPrice: number;
  /** 积分抵扣的金额 */
  pointPrice: number;
  /** VIP 减免金额 */
  vipPrice: number;
  /** 推广人编号 */
  brokerageUserId?: number;
};

export type TradeOrderCountRespVO = {
  /** 待发货 */
  undelivered: number;
  /** 待核销 */
  pickUp: number;
  /** 退款中 */
  afterSaleApply: number;
  /** 提现待审核 */
  auditingWithdraw: number;
};

export type TradeOrderDeliveryReqVO = {
  /** 订单编号 */
  id: number;
  /** 发货物流公司编号 */
  logisticsId: number;
  /** 发货物流单号 */
  logisticsNo?: string;
};

export type TradeOrderDetailRespVO = {
  /** 订单编号 */
  id: number;
  /** 订单流水号 */
  no: string;
  /** 下单时间 */
  createTime: string;
  /** 订单类型 */
  type: number;
  /** 订单来源 */
  terminal: number;
  /** 用户编号 */
  userId: number;
  /** 用户 IP */
  userIp: string;
  /** 用户备注 */
  userRemark: string;
  /** 订单状态 */
  status: number;
  /** 购买的商品数量 */
  productCount: number;
  /** 订单完成时间 */
  finishTime?: string;
  /** 订单取消时间 */
  cancelTime?: string;
  /** 取消类型 */
  cancelType?: number;
  /** 商家备注 */
  remark?: string;
  /** 支付订单编号 */
  payOrderId: number;
  /** 是否已支付 */
  payStatus: boolean;
  /** 付款时间 */
  payTime?: string;
  /** 支付渠道 */
  payChannelCode: string;
  /** 商品原价（总） */
  totalPrice: number;
  /** 订单优惠（总） */
  discountPrice: number;
  /** 运费金额 */
  deliveryPrice: number;
  /** 订单调价（总） */
  adjustPrice: number;
  /** 应付金额（总） */
  payPrice: number;
  /** 配送方式 */
  deliveryType?: number;
  /** 自提门店 */
  pickUpStoreId?: number;
  /** 自提核销码 */
  pickUpVerifyCode?: number;
  /** 配送模板编号 */
  deliveryTemplateId?: number;
  /** 发货物流公司编号 */
  logisticsId?: number;
  /** 发货物流单号 */
  logisticsNo?: string;
  /** 发货时间 */
  deliveryTime?: string;
  /** 收货时间 */
  receiveTime?: string;
  /** 收件人名称 */
  receiverName: string;
  /** 收件人手机 */
  receiverMobile: string;
  /** 收件人地区编号 */
  receiverAreaId: number;
  /** 收件人详细地址 */
  receiverDetailAddress: string;
  /** 售后状态 */
  afterSaleStatus?: number;
  /** 退款金额 */
  refundPrice: number;
  /** 优惠劵编号 */
  couponId?: number;
  /** 优惠劵减免金额 */
  couponPrice: number;
  /** 积分抵扣的金额 */
  pointPrice: number;
  /** VIP 减免金额 */
  vipPrice: number;
  /** 推广人编号 */
  brokerageUserId?: number;
  items?: Item[];
  user?: MemberUserRespVO;
  brokerageUser?: MemberUserRespVO;
  logs?: OrderLog[];
  /** 收件人地区名字 */
  receiverAreaName: string;
};

export type TradeOrderPageItemRespVO = {
  /** 订单编号 */
  id: number;
  /** 订单流水号 */
  no: string;
  /** 下单时间 */
  createTime: string;
  /** 订单类型 */
  type: number;
  /** 订单来源 */
  terminal: number;
  /** 用户编号 */
  userId: number;
  /** 用户 IP */
  userIp: string;
  /** 用户备注 */
  userRemark: string;
  /** 订单状态 */
  status: number;
  /** 购买的商品数量 */
  productCount: number;
  /** 订单完成时间 */
  finishTime?: string;
  /** 订单取消时间 */
  cancelTime?: string;
  /** 取消类型 */
  cancelType?: number;
  /** 商家备注 */
  remark?: string;
  /** 支付订单编号 */
  payOrderId: number;
  /** 是否已支付 */
  payStatus: boolean;
  /** 付款时间 */
  payTime?: string;
  /** 支付渠道 */
  payChannelCode: string;
  /** 商品原价（总） */
  totalPrice: number;
  /** 订单优惠（总） */
  discountPrice: number;
  /** 运费金额 */
  deliveryPrice: number;
  /** 订单调价（总） */
  adjustPrice: number;
  /** 应付金额（总） */
  payPrice: number;
  /** 配送方式 */
  deliveryType?: number;
  /** 自提门店 */
  pickUpStoreId?: number;
  /** 自提核销码 */
  pickUpVerifyCode?: number;
  /** 配送模板编号 */
  deliveryTemplateId?: number;
  /** 发货物流公司编号 */
  logisticsId?: number;
  /** 发货物流单号 */
  logisticsNo?: string;
  /** 发货时间 */
  deliveryTime?: string;
  /** 收货时间 */
  receiveTime?: string;
  /** 收件人名称 */
  receiverName: string;
  /** 收件人手机 */
  receiverMobile: string;
  /** 收件人地区编号 */
  receiverAreaId: number;
  /** 收件人详细地址 */
  receiverDetailAddress: string;
  /** 售后状态 */
  afterSaleStatus?: number;
  /** 退款金额 */
  refundPrice: number;
  /** 优惠劵编号 */
  couponId?: number;
  /** 优惠劵减免金额 */
  couponPrice: number;
  /** 积分抵扣的金额 */
  pointPrice: number;
  /** VIP 减免金额 */
  vipPrice: number;
  /** 推广人编号 */
  brokerageUserId?: number;
  /** 收件人地区名字 */
  receiverAreaName: string;
  /** 订单项列表 */
  items: Item[];
  /** 用户信息 */
  user: MemberUserRespVO;
  /** 推广人信息 */
  brokerageUser?: MemberUserRespVO;
};

export type TradeOrderRemarkReqVO = {
  /** 订单编号 */
  id: number;
  /** 商家备注 */
  remark: string;
};

export type TradeOrderSummaryRespVO = {
  /** 订单数量 */
  orderCount: number;
  /** 订单金额 */
  orderPayPrice: number;
  /** 退款单数 */
  afterSaleCount: number;
  /** 退款金额 */
  afterSalePrice: number;
};

export type TradeOrderTrendRespVO = {
  /** 日期 */
  date: string;
  /** 订单数量 */
  orderPayCount: number;
  /** 订单支付金额 */
  orderPayPrice: number;
};

export type TradeOrderUpdateAddressReqVO = {
  /** 订单编号 */
  id: number;
  /** 收件人名称 */
  receiverName: string;
  /** 收件人手机 */
  receiverMobile: string;
  /** 收件人地区编号 */
  receiverAreaId: number;
  /** 收件人详细地址 */
  receiverDetailAddress: string;
};

export type TradeOrderUpdatePriceReqVO = {
  /** 订单编号 */
  id: number;
  /** 订单调价，单位：分。正数，加价；负数，减价 */
  adjustPrice: number;
};

export type TradeSummaryRespVO = {
  /** 昨日订单数量 */
  yesterdayOrderCount: number;
  /** 昨日支付金额 */
  yesterdayPayPrice: number;
  /** 本月订单数量 */
  monthOrderCount: number;
  /** 本月支付金额 */
  monthPayPrice: number;
};

export type TradeTrendSummaryRespVO = {
  /** 日期 */
  date: string;
  /** 营业额 */
  turnoverPrice: number;
  /** 订单支付金额 */
  orderPayPrice: number;
  /** 余额支付金额 */
  walletPayPrice: number;
  /** 订单退款金额 */
  afterSaleRefundPrice: number;
  /** 支付佣金金额 */
  brokerageSettlementPrice: number;
  /** 充值金额 */
  rechargePrice: number;
  /** 支出金额 */
  expensePrice: number;
};

export type transferDemoWithdrawParams = {
  /** 提现单编号 */
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

export type updateKefuMessageReadStatusParams = {
  /** 会话编号 */
  conversationId: number;
};

export type updateKeFuMessageReadStatusParams = {
  /** 会话编号 */
  conversationId: number;
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

export type useDiyTemplateParams = {
  id: number;
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

export type UserSimpleBaseVO = {
  /** 用户编号 */
  id: number;
  /** 用户昵称 */
  nickname: string;
  /** 用户头像 */
  avatar?: string;
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

export type WalletRechargePackageCreateReqVO = {
  /** 套餐名 */
  name: string;
  /** 支付金额 */
  payPrice: number;
  /** 赠送金额 */
  bonusPrice: number;
  /** 状态 */
  status: string;
};

export type WalletRechargePackageRespVO = {
  /** 套餐名 */
  name: string;
  /** 支付金额 */
  payPrice: number;
  /** 赠送金额 */
  bonusPrice: number;
  /** 状态 */
  status: string;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type WalletRechargePackageUpdateReqVO = {
  /** 套餐名 */
  name: string;
  /** 支付金额 */
  payPrice: number;
  /** 赠送金额 */
  bonusPrice: number;
  /** 状态 */
  status: string;
  /** 编号 */
  id: number;
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
