/* eslint-disable */
// @ts-ignore

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
  /** id */
  id: number;
  /** 用户昵称 */
  nickname: string;
  /** 头像 */
  avatar?: string;
  /** 公司logo */
  logo?: string;
  /** 性别 */
  sex: number;
  /** 手机号 */
  mobile?: string;
  /** 加密后的密码 */
  password?: string;
  /** 帐号状态 */
  status?: number;
  /** 注册 IP */
  registerIp?: string;
  /** 注册终端 */
  registerTerminal?: number;
  /** 最后登录IP */
  loginIp?: string;
  /** 最后登录时间 */
  loginDate?: string;
  /** 真实名字 */
  name?: string;
  /** 出生日期 */
  birthday?: string;
  /** 所在地 */
  areaId?: number;
  /** 用户备注 */
  mark?: string;
  /** 邮箱地址 */
  email?: string;
  /** 所在地区 */
  location?: string;
  /** 所在地区编码 */
  locationCode?: string;
  /** 年龄 */
  age?: number;
  /** 积分 */
  point?: number;
  /** 会员标签列表 */
  tagIds?: number[];
  /** 会员级别编号 */
  levelId?: number;
  /** 会员经验 */
  experience?: number;
  /** 用户分组编号 */
  groupId?: number;
  /** 专业特长 */
  teChang?: string;
  /** 毕业院校 */
  biYeYuanXiao?: string;
  /** 学历 */
  xueLi?: string;
  /** 个人简介 */
  jianJie?: string;
  /** 技能标签 */
  tags?: string;
  /** 获奖经历 */
  huoJiangJiLi?: string;
  /** 代表作 */
  daiBiaoZuo?: string;
  /** 个人简介图片 */
  jianJieImages?: string;
  /** 个人简介视频 */
  jianJieVideos?: string;
  /** 专业技能视频 */
  jiNengVideos?: string;
  /** 期望薪资 */
  qiWangXinZi?: string;
  /** 工作类型 */
  workType?: string;
  /** 公司名称 */
  companyName?: string;
  /** 工作级别 */
  workLavel?: string;
  /** 从事行业 */
  involved?: string;
  /** 人员规模 */
  personNumber?: string;
  /** 网络地址 */
  networkAddress?: string;
  /** 详细地址 */
  xiangXiAddress?: string;
  /** 成立时间 */
  chengLiTime?: string;
  /** 公司简介 */
  companyInfo?: string;
  /** 公司文化 */
  companyCulture?: string;
  /** 公司福利 */
  benefits?: string;
  /** 招聘信息 */
  recruitment?: string;
  /** 公司图片 */
  companyImages?: string;
  /** 公司视频 */
  companyVideos?: string;
  /** 企业是否已认证 */
  qiyeAttestation?: string;
  /** 个人是否已认证 */
  gerenAttestation?: string;
  /** 简历浏览 */
  jianLiLiuLan?: number;
  /** 获得关注 */
  guanZhu?: number;
  /** 投递简历 */
  touDiJianLi?: number;
  /** 面试邀请 */
  mianShiYaoQing?: number;
  /** 企业浏览 */
  qiYeLiuLan?: number;
  /** 职位浏览 */
  zhiWeiLiuLan?: number;
  /** 收到简历 */
  shouDaoJianLi?: number;
  /** 面试安排 */
  mianShiAnPai?: number;
  /** 工作经验 */
  gongZuoJingYan?: string;
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

export type CommonResultAppAddressRespVO = {
  code?: number;
  data?: AppAddressRespVO;
  msg?: string;
};

export type CommonResultAppAuthLoginRespVO = {
  code?: number;
  data?: AppAuthLoginRespVO;
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

export type CommonResultAppSocialUserRespVO = {
  code?: number;
  data?: AppSocialUserRespVO;
  msg?: string;
};

export type CommonResultBoolean = {
  code?: number;
  data?: boolean;
  msg?: string;
};

export type CommonResultListAddressRespVO = {
  code?: number;
  data?: AddressRespVO[];
  msg?: string;
};

export type CommonResultListAppAddressRespVO = {
  code?: number;
  data?: AppAddressRespVO[];
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

export type CommonResultListAppSocialWxaSubscribeTemplateRespVO = {
  code?: number;
  data?: AppSocialWxaSubscribeTemplateRespVO[];
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

export type CommonResultListMemberUserDO = {
  code?: number;
  data?: MemberUserDO[];
  msg?: string;
};

export type CommonResultLong = {
  code?: number;
  data?: number;
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

export type CommonResultMemberTagRespVO = {
  code?: number;
  data?: MemberTagRespVO;
  msg?: string;
};

export type CommonResultMemberUserDO = {
  code?: number;
  data?: MemberUserDO;
  msg?: string;
};

export type CommonResultMemberUserRespVO = {
  code?: number;
  data?: MemberUserRespVO;
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

export type createWeixinMpJsapiSignatureParams = {
  url: string;
};

export type deleteAddressParams = {
  /** 编号 */
  id: number;
};

export type deleteGroupParams = {
  /** 编号 */
  id: number;
};

export type deleteLevelParams = {
  /** 编号 */
  id: number;
};

export type deleteSignInConfigParams = {
  /** 编号 */
  id: number;
};

export type deleteTagParams = {
  /** 编号 */
  id: number;
};

export type getAddressList1Params = {
  /** 用户编号 */
  userId: number;
};

export type getAddressParams = {
  /** 编号 */
  id: number;
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

export type getMemberTagListParams = {
  /** 编号列表 */
  ids: number[];
};

export type getMemberTagParams = {
  /** 编号 */
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

export type getSocialUserParams = {
  /** 社交平台的类型，参见 SocialTypeEnum 枚举值 */
  type: number;
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

export type getUserByIdsParams = {
  userIds: number[];
};

export type getUserPageParams = {
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

export type getUserParams = {
  /** 编号 */
  id: number;
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

export type MemberUserDO = {
  createTime?: string;
  updateTime?: string;
  creator?: string;
  updater?: string;
  deleted?: boolean;
  tenantId?: number;
  id?: number;
  mobile?: string;
  password?: string;
  status?: number;
  registerIp?: string;
  registerTerminal?: number;
  loginIp?: string;
  loginDate?: string;
  nickname?: string;
  avatar?: string;
  name?: string;
  sex?: number;
  birthday?: string;
  areaId?: number;
  mark?: string;
  email?: string;
  location?: string;
  locationCode?: string;
  age?: number;
  point?: number;
  tagIds?: number[];
  levelId?: number;
  experience?: number;
  groupId?: number;
  teChang?: string;
  biYeYuanXiao?: string;
  jianJie?: string;
  tags?: string;
  huoJiangJiLi?: string;
  daiBiaoZuo?: string;
  jianJieImages?: string;
  jianJieVideos?: string;
  jiNengVideos?: string;
  qiWangXinZi?: string;
  workType?: string;
  xueLi?: string;
  companyName?: string;
  workLavel?: string;
  involved?: string;
  personNumber?: string;
  networkAddress?: string;
  xiangXiAddress?: string;
  chengLiTime?: string;
  companyInfo?: string;
  companyCulture?: string;
  benefits?: string;
  recruitment?: string;
  companyImages?: string;
  companyVideos?: string;
  logo?: string;
  qiyeAttestation?: number;
  gerenAttestation?: number;
  jianLiLiuLan?: number;
  guanZhu?: number;
  touDiJianLi?: number;
  mianShiYaoQing?: number;
  qiYeLiuLan?: number;
  zhiWeiLiuLan?: number;
  shouDaoJianLi?: number;
  mianShiAnPai?: number;
  vipEndTime?: string;
  gongZuoJingYan?: string;
};

export type MemberUserRespVO = {
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
  /** 注册 IP */
  registerIp: string;
  /** 最后登录IP */
  loginIp: string;
  /** 最后登录时间 */
  loginDate: string;
  /** 创建时间 */
  createTime: string;
  /** 积分 */
  point: number;
  /** 总积分 */
  totalPoint: number;
  /** 会员标签 */
  tagNames?: string[];
  /** 会员等级 */
  levelName?: string;
  /** 用户分组 */
  groupName?: string;
  /** 用户经验值 */
  experience: number;
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

export type refreshTokenParams = {
  /** 刷新令牌 */
  refreshToken: string;
};

export type socialAuthRedirectParams = {
  /** 社交类型 */
  type: number;
  /** 回调路径 */
  redirectUri: string;
};

export type SocialWxJsapiSignatureRespDTO = {
  appId?: string;
  nonceStr?: string;
  timestamp?: number;
  url?: string;
  signature?: string;
};
