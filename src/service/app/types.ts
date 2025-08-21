/* eslint-disable */
// @ts-ignore

export type AppMemberUserSetNumVO = {
  /** userId */
  userId: number;
  /** 简历浏览 */
  jianLiLiuLan?: string;
  /** 获得关注 */
  guanZhu?: string;
  /** 投递简历 */
  touDiJianLi?: string;
  /** 面试邀请 */
  mianShiYaoQing?: string;
  /** 企业浏览 */
  qiYeLiuLan?: string;
  /** 职位浏览 */
  zhiWeiLiuLan?: string;
  /** 收到简历 */
  shouDaoJianLi?: string;
  /** 面试安排 */
  mianShiAnPai?: string;
};

export type AppYrzpGuanLianCreateReqVO = {
  /** 关注求职者id */
  guanZhuJobSeekerId?: number;
  /** 收藏求职者id */
  shouCangJobSeekerId?: number;
  /** 收藏职位id */
  shouCangJobId?: number;
  /** 关注职位id */
  guanZhuJobId?: number;
  /** 点赞帖子id */
  tieZiId?: number;
  /** 点赞评论id */
  pingLunId?: number;
};

export type AppYrzpZuJiCreateReqVO = {
  /** 职位id */
  jobId?: number;
  /** 求职者id */
  skeerId?: number;
};

export type AppYrzpZuJiRespVO = {
  /** 编号 */
  id: number;
  /** 会员id */
  userId?: number;
  /** 职位id */
  jobId?: number;
  /** 求职者id */
  skeerId?: number;
  /** 创建时间 */
  createTime?: string;
};

export type CommonResult = {
  code?: number;
  data?: Record<string, unknown>;
  msg?: string;
};

export type CommonResultBoolean = {
  code?: number;
  data?: boolean;
  msg?: string;
};

export type CommonResultInteger = {
  code?: number;
  data?: number;
  msg?: string;
};

export type CommonResultListAppYrzpZuJiRespVO = {
  code?: number;
  data?: AppYrzpZuJiRespVO[];
  msg?: string;
};

export type CommonResultListUserTypeRespVO = {
  code?: number;
  data?: UserTypeRespVO[];
  msg?: string;
};

export type CommonResultListYrzpGuanLianDO = {
  code?: number;
  data?: YrzpGuanLianDO[];
  msg?: string;
};

export type CommonResultListYRZPJobCategoryRespVO = {
  code?: number;
  data?: YRZPJobCategoryRespVO[];
  msg?: string;
};

export type CommonResultListYRZPJobDO = {
  code?: number;
  data?: YRZPJobDO[];
  msg?: string;
};

export type CommonResultListYRZPJobSeekerDO = {
  code?: number;
  data?: YRZPJobSeekerDO[];
  msg?: string;
};

export type CommonResultListYRZPLiJiTouDiRespVO = {
  code?: number;
  data?: YRZPLiJiTouDiRespVO[];
  msg?: string;
};

export type CommonResultListYRZPMessageSessionRespAppVO = {
  code?: number;
  data?: YRZPMessageSessionRespAppVO[];
  msg?: string;
};

export type CommonResultListYRZPWeiGuiRespAppVO = {
  code?: number;
  data?: YRZPWeiGuiRespAppVO[];
  msg?: string;
};

export type CommonResultListYrzpZuJiDO = {
  code?: number;
  data?: YrzpZuJiDO[];
  msg?: string;
};

export type CommonResultLong = {
  code?: number;
  data?: number;
  msg?: string;
};

export type CommonResultMapStringObject = {
  code?: number;
  data?: Record<string, unknown>;
  msg?: string;
};

export type CommonResultPageResultAppYrzpZuJiRespVO = {
  code?: number;
  data?: PageResultAppYrzpZuJiRespVO;
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

export type CommonResultPageResultYRZPForumPostDO = {
  code?: number;
  data?: PageResultYRZPForumPostDO;
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

export type CommonResultPageResultYRZPJobDO = {
  code?: number;
  data?: PageResultYRZPJobDO;
  msg?: string;
};

export type CommonResultPageResultYRZPJobRespVO = {
  code?: number;
  data?: PageResultYRZPJobRespVO;
  msg?: string;
};

export type CommonResultPageResultYRZPJobSeekerDO = {
  code?: number;
  data?: PageResultYRZPJobSeekerDO;
  msg?: string;
};

export type CommonResultPageResultYRZPJobSeekerRespVO = {
  code?: number;
  data?: PageResultYRZPJobSeekerRespVO;
  msg?: string;
};

export type CommonResultPageResultYRZPLiJiTouDiRespVO = {
  code?: number;
  data?: PageResultYRZPLiJiTouDiRespVO;
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

export type CommonResultPageResultYRZPWeiGuiRespAppVO = {
  code?: number;
  data?: PageResultYRZPWeiGuiRespAppVO;
  msg?: string;
};

export type CommonResultPageResultYRZPWeiGuiRespVO = {
  code?: number;
  data?: PageResultYRZPWeiGuiRespVO;
  msg?: string;
};

export type CommonResultString = {
  code?: number;
  data?: string;
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

export type CommonResultYRZPForumPostDO = {
  code?: number;
  data?: YRZPForumPostDO;
  msg?: string;
};

export type CommonResultYRZPForumPostRespVO = {
  code?: number;
  data?: YRZPForumPostRespVO;
  msg?: string;
};

export type CommonResultYrzpGuanLianRespVO = {
  code?: number;
  data?: YrzpGuanLianRespVO;
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

export type CommonResultYRZPJobSeekerDO = {
  code?: number;
  data?: YRZPJobSeekerDO;
  msg?: string;
};

export type CommonResultYRZPJobSeekerRespVO = {
  code?: number;
  data?: YRZPJobSeekerRespVO;
  msg?: string;
};

export type CommonResultYRZPLiJiTouDiRespVO = {
  code?: number;
  data?: YRZPLiJiTouDiRespVO;
  msg?: string;
};

export type CommonResultYRZPMessageRespVO = {
  code?: number;
  data?: YRZPMessageRespVO;
  msg?: string;
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

export type deleteGuanLianParams = {
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

export type deleteJobSeeker1Params = {
  /** 编号 */
  id: number;
};

export type deleteJobSeekerParams = {
  /** 编号 */
  id: number;
};

export type deleteLiJiTouDi1Params = {
  /** 编号 */
  id: number;
};

export type deleteLiJiTouDiParams = {
  /** 编号 */
  id: number;
};

export type deleteLiJiTouDisParams = {
  /** 编号集合 */
  ids: number[];
};

export type deleteMessageParams = {
  /** 编号 */
  id: number;
};

export type deleteUserType1Params = {
  /** 编号 */
  id: number;
};

export type deleteUserTypeParams = {
  /** 编号 */
  id: number;
};

export type deleteWeiGuiParams = {
  /** 编号 */
  id: number;
};

export type exportUserTypeExcel1Params = {
  /** 用户编号 */
  userId?: number;
  /** 用户类型 */
  userType?: number;
  /** 企业浏览 */
  qiYeLiuLan?: number;
  /** 职位浏览 */
  zhiWeiLiuLan?: number;
  /** 收到简历 */
  shouDaoJianLi?: number;
  /** 面试安排 */
  mianShiAnPai?: number;
  /** 简历浏览 */
  jianLiLiulan?: number;
  /** 投递简历 */
  touDiJianLi?: number;
  /** 面试邀请 */
  mianShiYaoQing?: number;
  /** 创建时间 */
  createTime?: string[];
};

export type exportUserTypeExcelParams = {
  /** 用户编号 */
  userId?: number;
  /** 用户类型 */
  userType?: number;
  /** 企业浏览 */
  qiYeLiuLan?: number;
  /** 职位浏览 */
  zhiWeiLiuLan?: number;
  /** 收到简历 */
  shouDaoJianLi?: number;
  /** 面试安排 */
  mianShiAnPai?: number;
  /** 简历浏览 */
  jianLiLiulan?: number;
  /** 投递简历 */
  touDiJianLi?: number;
  /** 面试邀请 */
  mianShiYaoQing?: number;
  /** 创建时间 */
  createTime?: string[];
};

export type genUserSigParams = {
  userId: string;
};

export type GerenrenzhengReqVO = {
  /** 姓名 */
  name: string;
  /** 身份证号 */
  idNum: string;
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
  /** 第几个列表 */
  type?: string;
  /** 话题 */
  tags?: string;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getForumPostParams = {
  /** 编号 */
  id: number;
};

export type getGuanLianParams = {
  /** 编号 */
  id: number;
};

export type getGuanZhuJobSeekerParams = {
  /** 查询的字段  */
  field: string;
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

export type getJobPage1Params = {
  /** 职位类别编号 */
  categoryId?: number;
  /** 关键词 */
  keyword?: string;
  /** 职位类型 */
  jobType?: string;
  /** 职位领域 */
  jobDomain?: string;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getJobPage2Params = {
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

export type getJobPageParams = {
  str: string;
  userId: number;
  userType: string;
  jobId?: number;
  seekerId?: number;
};

export type getJobParams = {
  ids: number[];
};

export type getJobSeeker1Params = {
  /** 编号 */
  id: number;
};

export type getJobSeekerByUserIdParams = {
  userIds: number[];
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
  /** 个人优势 */
  advantage?: string;
  /** 工作经验(年) */
  experience?: string;
  /** 状态 */
  status?: number;
  /** 是否认证 */
  isCertified?: boolean;
  /** 创建时间 */
  createTime?: string[];
  /** 求职标题 */
  title?: string;
  /** 职位类型 */
  jobType?: string;
  /** 职位领域 */
  jobDomain?: string;
  /** 职位领域 */
  jobSpecific?: string;
  /** 位置 */
  location?: string;
  /** 薪资范围-最低 */
  salaryMin: number;
  /** 薪资范围-最高 */
  salaryMax: number;
  /** 工作性质 */
  workType?: string;
  /** 到岗时间 */
  comeToTime?: string;
  /** 其他选项 */
  other?: string;
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
  /** 职位类型 */
  jobType?: string;
  /** 职位领域 */
  jobDomain?: string;
  /** 职位领域 */
  jobSpecific?: string;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getJobSeekerParams = {
  /** 编号 */
  id: number;
};

export type getLiJiTouDi1Params = {
  /** 编号 */
  id: number;
};

export type getLiJiTouDiListParams = {
  /** 编号列表 */
  ids: number[];
};

export type getLiJiTouDiPage1Params = {
  /** 投递人员信息 */
  fromUserId?: number;
  /** 主动沟通职位id */
  fromJobId?: number;
  /** 主动沟通的求职者信息id */
  fromSeekerId?: number;
  /** 沟通职位id */
  toJobId?: number;
  /** 沟通求职者id */
  toSeekerId?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getLiJiTouDiPageParams = {
  /** 投递人员信息 */
  fromUserId?: number;
  /** 主动沟通职位id */
  fromJobId?: number;
  /** 主动沟通的求职者信息id */
  fromSeekerId?: number;
  /** 沟通职位id */
  toJobId?: number;
  /** 沟通求职者id */
  toSeekerId?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getLiJiTouDiParams = {
  /** 编号 */
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

export type getResultParams = {
  eidToken: string;
};

export type getUserType1Params = {
  /** 编号 */
  id: number;
};

export type getUserTypeList1Params = {
  /** 编号列表 */
  ids: number[];
};

export type getUserTypeListParams = {
  /** 编号列表 */
  ids: number[];
};

export type getUserTypePage1Params = {
  /** 用户编号 */
  userId?: number;
  /** 用户类型 */
  userType?: number;
  /** 企业浏览 */
  qiYeLiuLan?: number;
  /** 职位浏览 */
  zhiWeiLiuLan?: number;
  /** 收到简历 */
  shouDaoJianLi?: number;
  /** 面试安排 */
  mianShiAnPai?: number;
  /** 简历浏览 */
  jianLiLiulan?: number;
  /** 投递简历 */
  touDiJianLi?: number;
  /** 面试邀请 */
  mianShiYaoQing?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getUserTypePageParams = {
  /** 用户编号 */
  userId?: number;
  /** 用户类型 */
  userType?: number;
  /** 企业浏览 */
  qiYeLiuLan?: number;
  /** 职位浏览 */
  zhiWeiLiuLan?: number;
  /** 收到简历 */
  shouDaoJianLi?: number;
  /** 面试安排 */
  mianShiAnPai?: number;
  /** 简历浏览 */
  jianLiLiulan?: number;
  /** 投递简历 */
  touDiJianLi?: number;
  /** 面试邀请 */
  mianShiYaoQing?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getUserTypeParams = {
  userId: number;
  /** 编号 */
  id: unknown;
};

export type getWeiGuiListByJobIdParams = {
  /** 岗位编号 */
  jobId: number;
};

export type getWeiGuiListBySeekerIdParams = {
  /** 求职者编号 */
  seekerId: number;
};

export type getWeiGuiPage1Params = {
  /** 敏感词 */
  minGanCi?: string;
  /** 岗位违规 */
  jobId?: number;
  /** 求职者违规 */
  seekerId?: number;
  /** 创建时间 */
  createTime?: string[];
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getWeiGuiPageParams = {
  /** 敏感词 */
  minGanCi?: string;
  /** 岗位违规 */
  jobId?: number;
  /** 求职者违规 */
  seekerId?: number;
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type getWeiGuiParams = {
  /** 职位编号 */
  jobId: number;
  /** 求职编号 */
  seekerId: number;
  /** 用户编号 */
  userId: unknown;
};

export type getZuJiBySkeerParams = {
  skeerId: number;
};

export type getZuJiPageParams = {
  /** 页码，从 1 开始 */
  pageNo: number;
  /** 每页条数，最大值为 100 */
  pageSize: number;
};

export type likeForumCommentParams = {
  /** 编号 */
  id: number;
};

export type markMessageAsReadParams = {
  /** 编号 */
  id: number;
};

export type PageResultAppYrzpZuJiRespVO = {
  /** 数据 */
  list: AppYrzpZuJiRespVO[];
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

export type PageResultYRZPForumPostDO = {
  /** 数据 */
  list: YRZPForumPostDO[];
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

export type PageResultYRZPJobDO = {
  /** 数据 */
  list: YRZPJobDO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPJobRespVO = {
  /** 数据 */
  list: YRZPJobRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPJobSeekerDO = {
  /** 数据 */
  list: YRZPJobSeekerDO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPJobSeekerRespVO = {
  /** 数据 */
  list: YRZPJobSeekerRespVO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPLiJiTouDiRespVO = {
  /** 数据 */
  list: YRZPLiJiTouDiRespVO[];
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

export type PageResultYRZPWeiGuiRespAppVO = {
  /** 数据 */
  list: YRZPWeiGuiRespAppVO[];
  /** 总量 */
  total: number;
};

export type PageResultYRZPWeiGuiRespVO = {
  /** 数据 */
  list: YRZPWeiGuiRespVO[];
  /** 总量 */
  total: number;
};

export type QiYeRenZhengReqVO = {
  licenseNo?: string;
  entName?: string;
  legalPersonName?: string;
  legalPersonCertNo?: string;
};

export type updateJobApplicationStatusParams = {
  id: number;
  status: number;
};

export type updateParams = {
  guanZhuId: number;
  field: string;
};

export type updateUserTypeParams = {
  columnType: string;
};

export type UserTypeCreateReqVO = {
  /** 用户编号 */
  userId: number;
  /** 用户类型（1：求职者；2：招聘者） */
  userType: number;
  /** 企业浏览 */
  qiYeLiuLan?: number;
  /** 职位浏览 */
  zhiWeiLiuLan?: number;
  /** 收到简历 */
  shouDaoJianLi?: number;
  /** 面试安排 */
  mianShiAnPai?: number;
  /** 简历浏览 */
  jianLiLiulan?: number;
  /** 投递简历 */
  touDiJianLi?: number;
  /** 面试邀请 */
  mianShiYaoQing?: number;
};

export type UserTypeRespVO = {
  /** 用户编号 */
  userId: number;
  /** 用户类型（1：求职者；2：招聘者） */
  userType: number;
  /** 企业浏览 */
  qiYeLiuLan?: number;
  /** 职位浏览 */
  zhiWeiLiuLan?: number;
  /** 收到简历 */
  shouDaoJianLi?: number;
  /** 面试安排 */
  mianShiAnPai?: number;
  /** 简历浏览 */
  jianLiLiulan?: number;
  /** 投递简历 */
  touDiJianLi?: number;
  /** 面试邀请 */
  mianShiYaoQing?: number;
  /** 主键 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type UserTypeUpdateReqVO = {
  /** 用户编号 */
  userId: number;
  /** 用户类型（1：求职者；2：招聘者） */
  userType: number;
  /** 企业浏览 */
  qiYeLiuLan?: number;
  /** 职位浏览 */
  zhiWeiLiuLan?: number;
  /** 收到简历 */
  shouDaoJianLi?: number;
  /** 面试安排 */
  mianShiAnPai?: number;
  /** 简历浏览 */
  jianLiLiulan?: number;
  /** 投递简历 */
  touDiJianLi?: number;
  /** 面试邀请 */
  mianShiYaoQing?: number;
  /** 主键 */
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
  info?: string;
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
  /** 用户id */
  userId?: number;
  /** 帖子分类 */
  category?: string;
  /** 心情状态 */
  moodStatus?: string;
  /** 话题标签 */
  tags?: string;
  /** 上传图片 */
  images?: string;
  /** 上传视频 */
  video?: string;
  /** 位置信息 */
  location?: string;
  /** 位置信息 */
  locationCode?: string;
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

export type YRZPForumPostDO = {
  createTime?: string;
  updateTime?: string;
  creator?: string;
  updater?: string;
  deleted?: boolean;
  id?: number;
  userId?: number;
  title?: string;
  content?: string;
  tags?: string;
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
  shares?: number;
  status?: number;
  images?: string;
  video?: string;
  location?: string;
  locationCode?: string;
  info?: string;
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

export type YrzpGuanLianCreateReqVO = {
  /** 会员id */
  userId?: number;
  /** 关注求职者id */
  guanZhuJobSeekerId?: number;
  /** 收藏求职者id */
  shouCangJobSeekerId?: number;
  /** 收藏职位id */
  shouCangJobId?: number;
  /** 关注职位id */
  guanZhuJobId?: number;
};

export type YrzpGuanLianDO = {
  createTime?: string;
  updateTime?: string;
  creator?: string;
  updater?: string;
  deleted?: boolean;
  userId?: number;
  guanZhuJobSeekerId?: number;
  shouCangJobSeekerId?: number;
  shouCangJobId?: number;
  guanZhuJobId?: number;
  tieZiId?: number;
  pingLunId?: number;
};

export type YrzpGuanLianRespVO = {
  /** 会员id */
  userId?: number;
  /** 关注求职者id */
  guanZhuJobSeekerId?: number;
  /** 收藏求职者id */
  shouCangJobSeekerId?: number;
  /** 收藏职位id */
  shouCangJobId?: number;
  /** 关注职位id */
  guanZhuJobId?: number;
  /** 编号 */
  id: number;
  /** 创建时间 */
  createTime?: string;
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
  /** 公司名称 */
  companyName?: string;
  /** 公司简介 */
  companyInfo?: string;
  /** 职位分类编号 */
  categoryId: number;
  /** 职位名称 */
  title: string;
  /** 职位描述 */
  description: string;
  /** 职位类型 */
  jobType?: string;
  /** 职位领域 */
  jobDomain?: string;
  /** 工作地点 */
  location: string;
  /** 工作地点编码 */
  locationCode: string;
  /** 演出类型 */
  performanceType?: string;
  /** 职位领域 */
  performanceDomain?: string;
  /** 薪资范围-最低 */
  salaryMin: number;
  /** 薪资范围-最高 */
  salaryMax: number;
  /** 工作性质 */
  workType?: string;
  /** 经验要求(年) */
  experienceRequirement?: string;
  /** 学历要求 */
  educationRequirementName?: string;
  /** 学历要求 */
  educationRequirement?: string;
  /** 招聘人数 */
  headcount: number;
  /** 职位福利 */
  benefits?: string;
  /** 状态 */
  status: string;
  /** 具体要求 */
  requirementDetails?: string;
  /** 到岗时间 */
  comeToTime?: string;
  /** 宣传图片 */
  advertiseImages?: string;
  /** 宣传视频 */
  advertiseVideos?: string;
  /** 联系方式 */
  phone?: string;
  /** 其他选项 */
  other?: string;
};

export type YRZPJobDO = {
  createTime?: string;
  updateTime?: string;
  creator?: string;
  updater?: string;
  deleted?: boolean;
  id?: number;
  employerId?: number;
  companyId?: number;
  companyName?: string;
  companyInfo?: string;
  categoryId?: number;
  title?: string;
  description?: string;
  jobType?: string;
  jobDomain?: string;
  performanceType?: string;
  performanceDomain?: string;
  city?: string;
  address?: string;
  location?: string;
  locationCode?: string;
  phone?: string;
  salary?: string;
  salaryMin?: number;
  salaryMax?: number;
  workType?: string;
  experienceRequirement?: string;
  educationRequirement?: string;
  headcount?: number;
  benefits?: string;
  requirementDetails?: string;
  comeToTime?: string;
  advertiseImages?: string;
  advertiseVideos?: string;
  views?: number;
  status?: number;
  contactName?: string;
  contactMobile?: string;
  contactEmail?: string;
  other?: string;
  info?: string;
};

export type YRZPJobRespVO = {
  /** 招聘者编号 */
  employerId: number;
  /** 公司编号 */
  companyId: number;
  /** 公司名称 */
  companyName?: string;
  /** 公司简介 */
  companyInfo?: string;
  /** 职位分类编号 */
  categoryId: number;
  /** 职位名称 */
  title: string;
  /** 职位描述 */
  description: string;
  /** 职位类型 */
  jobType?: string;
  /** 职位领域 */
  jobDomain?: string;
  /** 工作地点 */
  location: string;
  /** 工作地点编码 */
  locationCode: string;
  /** 演出类型 */
  performanceType?: string;
  /** 职位领域 */
  performanceDomain?: string;
  /** 薪资范围-最低 */
  salaryMin: number;
  /** 薪资范围-最高 */
  salaryMax: number;
  /** 工作性质 */
  workType?: string;
  /** 经验要求(年) */
  experienceRequirement?: string;
  /** 学历要求 */
  educationRequirementName?: string;
  /** 学历要求 */
  educationRequirement?: string;
  /** 招聘人数 */
  headcount: number;
  /** 职位福利 */
  benefits?: string;
  /** 状态 */
  status: string;
  /** 具体要求 */
  requirementDetails?: string;
  /** 到岗时间 */
  comeToTime?: string;
  /** 宣传图片 */
  advertiseImages?: string;
  /** 宣传视频 */
  advertiseVideos?: string;
  /** 联系方式 */
  phone?: string;
  /** 其他选项 */
  other?: string;
  /** 主键 */
  id: number;
  /** 创建时间 */
  createTime: string;
  /** 更新时间 */
  updateTime: string;
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
  /** 个人优势 */
  advantage?: string;
  /** 工作经验(年) */
  experience?: string;
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
  status?: string;
  /** 是否认证 */
  isCertified?: boolean;
  /** 联系电话 */
  contactMobile: string;
  /** 个人简介 */
  description?: string;
  /** 求职标题 */
  title?: string;
  /** 职位类型 */
  jobType?: string;
  /** 职位领域 */
  jobDomain?: string;
  /** 职位领域 */
  jobSpecific?: string;
  /** 位置 */
  location?: string;
  /** 位置编码 */
  locationCode?: string;
  /** 薪资范围-最低 */
  salaryMin?: number;
  /** 薪资范围-最高 */
  salaryMax?: number;
  /** 工作性质 */
  workType?: string;
  /** 到岗时间 */
  comeToTime?: string;
  /** 其他选项 */
  other?: string;
};

export type YRZPJobSeekerDO = {
  createTime?: string;
  updateTime?: string;
  creator?: string;
  updater?: string;
  deleted?: boolean;
  id?: number;
  userId?: number;
  realName?: string;
  gender?: number;
  age?: number;
  category?: string;
  specialty?: string;
  experience?: string;
  height?: number;
  weight?: number;
  education?: string;
  school?: string;
  certificate?: string;
  award?: string;
  status?: number;
  isCertified?: boolean;
  contactMobile?: string;
  description?: string;
  advantage?: string;
  title?: string;
  jobType?: string;
  jobDomain?: string;
  jobSpecific?: string;
  location?: string;
  locationCode?: string;
  salaryMin?: number;
  salaryMax?: number;
  workType?: string;
  comeToTime?: string;
  other?: string;
  info?: string;
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
  /** 个人优势 */
  advantage?: string;
  /** 工作经验(年) */
  experience?: string;
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
  status?: string;
  /** 是否认证 */
  isCertified?: boolean;
  /** 联系电话 */
  contactMobile: string;
  /** 个人简介 */
  description?: string;
  /** 求职标题 */
  title?: string;
  /** 职位类型 */
  jobType?: string;
  /** 职位领域 */
  jobDomain?: string;
  /** 职位领域 */
  jobSpecific?: string;
  /** 位置 */
  location?: string;
  /** 位置编码 */
  locationCode?: string;
  /** 薪资范围-最低 */
  salaryMin?: number;
  /** 薪资范围-最高 */
  salaryMax?: number;
  /** 工作性质 */
  workType?: string;
  /** 到岗时间 */
  comeToTime?: string;
  /** 其他选项 */
  other?: string;
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
  /** 个人优势 */
  advantage?: string;
  /** 工作经验(年) */
  experience?: string;
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
  status?: string;
  /** 是否认证 */
  isCertified?: boolean;
  /** 联系电话 */
  contactMobile: string;
  /** 个人简介 */
  description?: string;
  /** 求职标题 */
  title?: string;
  /** 职位类型 */
  jobType?: string;
  /** 职位领域 */
  jobDomain?: string;
  /** 职位领域 */
  jobSpecific?: string;
  /** 位置 */
  location?: string;
  /** 位置编码 */
  locationCode?: string;
  /** 薪资范围-最低 */
  salaryMin?: number;
  /** 薪资范围-最高 */
  salaryMax?: number;
  /** 工作性质 */
  workType?: string;
  /** 到岗时间 */
  comeToTime?: string;
  /** 其他选项 */
  other?: string;
  /** 主键 */
  id: number;
};

export type YRZPJobUpdateReqVO = {
  /** 招聘者编号 */
  employerId: number;
  /** 公司编号 */
  companyId: number;
  /** 公司名称 */
  companyName?: string;
  /** 公司简介 */
  companyInfo?: string;
  /** 职位分类编号 */
  categoryId: number;
  /** 职位名称 */
  title: string;
  /** 职位描述 */
  description: string;
  /** 职位类型 */
  jobType?: string;
  /** 职位领域 */
  jobDomain?: string;
  /** 工作地点 */
  location: string;
  /** 工作地点编码 */
  locationCode: string;
  /** 演出类型 */
  performanceType?: string;
  /** 职位领域 */
  performanceDomain?: string;
  /** 薪资范围-最低 */
  salaryMin: number;
  /** 薪资范围-最高 */
  salaryMax: number;
  /** 工作性质 */
  workType?: string;
  /** 经验要求(年) */
  experienceRequirement?: string;
  /** 学历要求 */
  educationRequirementName?: string;
  /** 学历要求 */
  educationRequirement?: string;
  /** 招聘人数 */
  headcount: number;
  /** 职位福利 */
  benefits?: string;
  /** 状态 */
  status: string;
  /** 具体要求 */
  requirementDetails?: string;
  /** 到岗时间 */
  comeToTime?: string;
  /** 宣传图片 */
  advertiseImages?: string;
  /** 宣传视频 */
  advertiseVideos?: string;
  /** 联系方式 */
  phone?: string;
  /** 其他选项 */
  other?: string;
  /** 主键 */
  id: number;
  /** 职位浏览量 */
  views?: number;
};

export type YRZPLiJiTouDiCreateReqVO = {
  /** 投递人员信息 */
  fromUserId: number;
  /** 主动沟通职位id */
  fromJobId: number;
  /** 主动沟通的求职者信息id */
  fromSeekerId: number;
  /** 沟通职位id */
  toJobId: number;
  /** 沟通求职者id */
  toSeekerId: number;
};

export type YRZPLiJiTouDiRespVO = {
  /** 投递人员信息 */
  fromUserId: number;
  /** 主动沟通职位id */
  fromJobId: number;
  /** 主动沟通的求职者信息id */
  fromSeekerId: number;
  /** 沟通职位id */
  toJobId: number;
  /** 沟通求职者id */
  toSeekerId: number;
  /** 主键 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type YRZPLiJiTouDiUpdateReqVO = {
  /** 投递人员信息 */
  fromUserId: number;
  /** 主动沟通职位id */
  fromJobId: number;
  /** 主动沟通的求职者信息id */
  fromSeekerId: number;
  /** 沟通职位id */
  toJobId: number;
  /** 沟通求职者id */
  toSeekerId: number;
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
  /** 接收者用户编号 */
  toUserId: number;
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

export type YRZPMessageSessionRespAppVO = {
  /** 会话用户编号 */
  userId: number;
  /** 会话用户昵称 */
  nickname: string;
  /** 会话用户头像 */
  avatar?: string;
  /** 最新消息内容 */
  lastContent?: string;
  /** 最后发送时间 */
  lastTime: string;
  /** 未读消息数量 */
  unreadCount: number;
  /** 在线状态 */
  online: boolean;
};

export type YRZPWeiGuiCreateReqVO = {
  /** 敏感词 */
  minGanCi: string;
  /** 当前登录用户id */
  userId?: number;
  /** 岗位违规 */
  jobId?: number;
  /** 求职者违规 */
  seekerId?: number;
};

export type YRZPWeiGuiRespAppVO = {
  /** 主键 */
  id: number;
  /** 当前登录用户id */
  userId?: number;
  /** 敏感词 */
  minGanCi: string;
  /** 岗位违规 */
  jobId?: number;
  /** 求职者违规 */
  seekerId?: number;
  /** 创建时间 */
  createTime: string;
};

export type YRZPWeiGuiRespVO = {
  /** 敏感词 */
  minGanCi: string;
  /** 当前登录用户id */
  userId?: number;
  /** 岗位违规 */
  jobId?: number;
  /** 求职者违规 */
  seekerId?: number;
  /** 主键 */
  id: number;
  /** 创建时间 */
  createTime: string;
};

export type YRZPWeiGuiUpdateReqVO = {
  /** 敏感词 */
  minGanCi: string;
  /** 当前登录用户id */
  userId?: number;
  /** 岗位违规 */
  jobId?: number;
  /** 求职者违规 */
  seekerId?: number;
  /** 主键 */
  id: number;
};

export type YrzpZuJiDO = {
  createTime?: string;
  updateTime?: string;
  creator?: string;
  updater?: string;
  deleted?: boolean;
  id?: number;
  userId?: number;
  jobId?: number;
  skeerId?: number;
};
