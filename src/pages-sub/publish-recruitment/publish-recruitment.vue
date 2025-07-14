<route lang="json5">
{
  style: {
    navigationBarTitleText: '发布招聘信息',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-50">
    <!-- 自定义导航栏 -->
    <wd-navbar
      :bordered="false"
      left-arrow
      title="发布招聘信息"
      custom-class="font-bold"
      fixed
      safeAreaInsetTop
      @click-left="handleBack"
    >
      <template #right>
        <view class="flex items-center gap-3">
          <wd-icon name="more-horizontal" size="20px" @click="handleMore" />
          <wd-icon name="help" size="20px" @click="handleHelp" />
        </view>
      </template>
    </wd-navbar>

    <scroll-view
      :scroll-y="true"
      class="h-100vh"
      :style="{
        paddingTop: safeAreaInsets?.top + 44 + 'px',
        paddingBottom: '100px',
      }"
    >
      <!-- 职位信息 -->
      <view class="bg-white mx-3 mt-3 rounded-3 p-4">
        <view class="text-4 font-bold text-gray-800 mb-4 border-l-4 border-primary pl-3">
          职位信息
        </view>

        <!-- 职位名称 -->
        <view class="mb-4">
          <text class="text-3 text-gray-600 mb-2 block">职位名称</text>
          <wd-input v-model="jobInfo.title" placeholder="请输入职位名称" clearable />
        </view>

        <!-- 职位描述 -->
        <view class="mb-4">
          <text class="text-3 text-gray-600 mb-2 block">职位描述</text>
          <wd-textarea
            v-model="jobInfo.description"
            placeholder="请简要描述职位的主要职责、要求等，让求职者更好地了解这个职位"
            :maxlength="500"
            :show-word-limit="true"
            :auto-height="true"
            :min-height="80"
          />
        </view>

        <!-- 职位类别 -->
        <view class="mb-4">
          <text class="text-3 text-gray-600 mb-2 block">职位类别</text>
          <view class="flex items-center justify-between" @click="showJobCategoryPicker">
            <text class="text-4 text-gray-800">{{ jobInfo.category || '舞蹈' }}</text>
            <wd-icon name="arrow-right" size="14px" color="#999" />
          </view>
        </view>

        <!-- 工作性质 -->
        <view class="mb-4">
          <view class="flex items-center justify-between" @click="showJobTypePicker">
            <text class="text-3 text-gray-600">工作性质</text>
            <view class="flex items-center">
              <text class="text-4 text-gray-800">{{ jobInfo.type || '兼职' }}</text>
              <wd-icon name="arrow-right" size="14px" color="#999" class="ml-2" />
            </view>
          </view>
        </view>

        <!-- 截止时间 -->
        <view class="mb-4">
          <view class="flex items-center justify-between" @click="showDatePicker">
            <text class="text-3 text-gray-600">报名截止时间</text>
            <view class="flex items-center">
              <text class="text-4 text-gray-800">{{ jobInfo.deadline || '2025/12/23' }}</text>
              <wd-icon name="arrow-right" size="14px" color="#999" class="ml-2" />
            </view>
          </view>
        </view>
      </view>

      <!-- 薪资待遇 -->
      <view class="bg-white mx-3 mt-3 rounded-3 p-4">
        <view class="text-4 font-bold text-gray-800 mb-4 border-l-4 border-primary pl-3">
          薪资待遇
        </view>

        <!-- 薪资范围 -->
        <view class="mb-4">
          <view class="flex items-center justify-between" @click="showSalaryRangePicker">
            <text class="text-3 text-gray-600">薪资范围</text>
            <view class="flex items-center">
              <text class="text-4 text-gray-800">{{ salaryInfo.range || '5-10K' }}</text>
              <wd-icon name="arrow-right" size="14px" color="#999" class="ml-2" />
            </view>
          </view>
        </view>

        <!-- 工作地点 -->
        <view class="mb-4">
          <view class="flex items-center justify-between" @click="showLocationPicker">
            <text class="text-3 text-gray-600">工作地点</text>
            <view class="flex items-center">
              <text class="text-4 text-gray-800">{{ salaryInfo.location || '全国' }}</text>
              <wd-icon name="arrow-right" size="14px" color="#999" class="ml-2" />
            </view>
          </view>
        </view>

        <!-- 专业技能 -->
        <view class="mb-4">
          <text class="text-3 text-gray-600 mb-2 block">专业技能</text>
          <view class="flex flex-wrap gap-2">
            <wd-tag
              v-for="skill in salaryInfo.skills"
              :key="skill"
              type="primary"
              size="small"
              closable
              @close="removeSkill(skill)"
            >
              {{ skill }}
            </wd-tag>
            <wd-tag type="info" size="small" plain @click="showSkillPicker">+ 添加技能</wd-tag>
          </view>
        </view>
      </view>

      <!-- 任职要求 -->
      <view class="bg-white mx-3 mt-3 rounded-3 p-4">
        <view class="text-4 font-bold text-gray-800 mb-4 border-l-4 border-primary pl-3">
          任职要求
        </view>

        <!-- 招聘人数 -->
        <view class="mb-4">
          <view class="flex items-center justify-between">
            <text class="text-3 text-gray-600">招聘人数</text>
            <view class="flex items-center">
              <wd-input-number v-model="requirements.count" :min="1" :max="999" size="small" />
              <text class="text-3 text-gray-600 ml-2">人</text>
            </view>
          </view>
        </view>

        <!-- 工作经验 -->
        <view class="mb-4">
          <view class="flex items-center justify-between" @click="showExperiencePicker">
            <text class="text-3 text-gray-600">工作经验</text>
            <view class="flex items-center">
              <text class="text-4 text-gray-800">{{ requirements.experience || '应届生' }}</text>
              <wd-icon name="arrow-right" size="14px" color="#999" class="ml-2" />
            </view>
          </view>
        </view>

        <!-- 学历水平 -->
        <view class="mb-4">
          <view class="flex items-center justify-between" @click="showEducationPicker">
            <text class="text-3 text-gray-600">学历水平</text>
            <view class="flex items-center">
              <text class="text-4 text-gray-800">{{ requirements.education || '本科' }}</text>
              <wd-icon name="arrow-right" size="14px" color="#999" class="ml-2" />
            </view>
          </view>
        </view>

        <!-- 其他要求 -->
        <view class="mb-4">
          <text class="text-3 text-gray-600 mb-2 block">其他要求</text>
          <view class="flex flex-wrap gap-2">
            <wd-tag
              v-for="req in requirements.others"
              :key="req"
              type="success"
              size="small"
              closable
              @close="removeRequirement(req)"
            >
              {{ req }}
            </wd-tag>
          </view>
        </view>

        <!-- 专业技能要求 -->
        <view class="mb-4">
          <text class="text-3 text-gray-600 mb-2 block">专业技能要求</text>
          <view class="flex flex-wrap gap-2">
            <wd-tag
              v-for="skill in requirements.skillRequirements"
              :key="skill"
              type="warning"
              size="small"
              closable
              @close="removeSkillRequirement(skill)"
            >
              {{ skill }}
            </wd-tag>
          </view>
        </view>
      </view>

      <!-- 即时项目 -->
      <view class="bg-white mx-3 mt-3 rounded-3 p-4">
        <view class="flex items-center justify-between mb-4">
          <view class="text-4 font-bold text-gray-800 border-l-4 border-primary pl-3">
            即时项目
          </view>
          <wd-icon name="add" size="20px" color="#52c41a" @click="addProject" />
        </view>

        <!-- 项目列表 -->
        <view v-if="projects.length > 0" class="space-y-3">
          <view
            v-for="(project, index) in projects"
            :key="index"
            class="bg-gray-50 rounded-2 p-3 relative"
          >
            <view class="flex items-start">
              <image
                :src="project.image"
                class="w-12 h-12 rounded-2 mr-3 flex-shrink-0"
                mode="aspectFill"
              />
              <view class="flex-1">
                <text class="text-3 font-medium text-gray-800 block mb-1">{{ project.title }}</text>
                <text class="text-2 text-gray-500">
                  {{ project.date }} · {{ project.location }}
                </text>
              </view>
              <wd-icon name="close" size="16px" color="#999" @click="removeProject(index)" />
            </view>
          </view>
        </view>

        <!-- 空状态 -->
        <view v-else class="text-center py-8">
          <wd-icon name="folder" size="32px" color="#ccc" />
          <text class="text-3 text-gray-400 block mt-2">暂无项目，点击右上角添加</text>
        </view>
      </view>

      <!-- 其他选项 -->
      <view class="bg-white mx-3 mt-3 rounded-3 p-4">
        <view class="text-4 font-bold text-gray-800 mb-4 border-l-4 border-primary pl-3">
          其他选项
        </view>

        <!-- 紧急招聘 -->
        <view class="flex items-center justify-between py-3">
          <view class="flex items-center">
            <text class="text-4 text-gray-800">紧急招聘</text>
            <text class="text-2 text-gray-400 ml-2">优先展示</text>
          </view>
          <wd-switch v-model="otherOptions.urgent" />
        </view>

        <wd-divider />

        <!-- 置顶显示 -->
        <view class="flex items-center justify-between py-3">
          <view class="flex items-center">
            <text class="text-4 text-gray-800">置顶显示</text>
            <text class="text-2 text-gray-400 ml-2">增加曝光度</text>
          </view>
          <wd-switch v-model="otherOptions.pinned" />
        </view>
      </view>
    </scroll-view>

    <!-- 底部发布按钮 -->
    <view class="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100">
      <view class="flex gap-3">
        <wd-button type="info" size="large" custom-class="flex-1" @click="saveDraft">
          取消
        </wd-button>
        <wd-button
          type="primary"
          size="large"
          custom-class="flex-1"
          :loading="publishing"
          :disabled="!canPublish"
          @click="publishJob"
        >
          {{ publishing ? '发布中...' : '发布' }}
        </wd-button>
      </view>
    </view>

    <!-- 各种选择器弹窗 -->
    <wd-action-sheet
      v-model="showJobCategoryModal"
      :actions="jobCategoryActions"
      @select="selectJobCategory"
    />

    <wd-action-sheet v-model="showJobTypeModal" :actions="jobTypeActions" @select="selectJobType" />

    <wd-action-sheet
      v-model="showSalaryRangeModal"
      :actions="salaryRangeActions"
      @select="selectSalaryRange"
    />

    <wd-action-sheet
      v-model="showLocationModal"
      :actions="locationActions"
      @select="selectLocation"
    />

    <wd-action-sheet
      v-model="showExperienceModal"
      :actions="experienceActions"
      @select="selectExperience"
    />

    <wd-action-sheet
      v-model="showEducationModal"
      :actions="educationActions"
      @select="selectEducation"
    />

    <!-- 日期选择器 -->
    <wd-datetime-picker
      v-model="showDateModal"
      type="date"
      :value="jobInfo.deadline"
      @confirm="selectDate"
    />

    <!-- 技能选择弹窗 -->
    <wd-popup v-model="showSkillModal" position="bottom" custom-class="rounded-t-4">
      <view class="p-4">
        <view class="text-center mb-4">
          <text class="text-4 font-bold">选择技能</text>
        </view>
        <view class="flex flex-wrap gap-2 mb-4">
          <wd-tag
            v-for="skill in availableSkills"
            :key="skill"
            :type="salaryInfo.skills.includes(skill) ? 'primary' : 'info'"
            size="small"
            @click="toggleSkill(skill)"
          >
            {{ skill }}
          </wd-tag>
        </view>
        <wd-button type="primary" block @click="showSkillModal = false">确定</wd-button>
      </view>
    </wd-popup>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { toast } from '@/utils/toast'
import { getSystemInfoSync } from '@/utils'
import { createJob } from '@/service/index/yirenzhipinguanlihoutaizhaopinzhiwei'
import type { YRZPJobCreateReqVO } from '@/service/index/types'

const { safeAreaInsets } = getSystemInfoSync()

// 页面状态
const publishing = ref(false)

// 弹窗状态
const showJobCategoryModal = ref(false)
const showJobTypeModal = ref(false)
const showSalaryRangeModal = ref(false)
const showLocationModal = ref(false)
const showExperienceModal = ref(false)
const showEducationModal = ref(false)
const showDateModal = ref(false)
const showSkillModal = ref(false)

// 职位信息
const jobInfo = ref({
  title: '',
  description: '',
  category: '舞蹈',
  type: '兼职',
  deadline: '2025/12/23',
})

// 薪资待遇
const salaryInfo = ref({
  range: '5-10K',
  location: '全国',
  skills: ['五险一金', '包食宿', '过年福利'],
})

// 任职要求
const requirements = ref({
  count: 1,
  experience: '应届生',
  education: '本科',
  others: ['形象气质佳', '身高165cm以上', '过年期间可工作'],
  skillRequirements: ['专业院校毕业', '转业技能优秀', '过年期间可工作'],
})

// 即时项目
const projects = ref([
  {
    title: '亚洲文化艺术节演出',
    date: '2024-06-16',
    location: '重庆大剧院',
    image: '/static/images/project1.jpg',
  },
  {
    title: '亚洲文化艺术节演出',
    date: '2024-06-16',
    location: '重庆大剧院',
    image: '/static/images/project2.jpg',
  },
])

// 其他选项
const otherOptions = ref({
  urgent: false,
  pinned: false,
})

// 可选数据
const jobCategoryActions = ref([
  { name: '舞蹈', value: '舞蹈' },
  { name: '音乐', value: '音乐' },
  { name: '戏剧', value: '戏剧' },
  { name: '影视', value: '影视' },
  { name: '其他', value: '其他' },
])

const jobTypeActions = ref([
  { name: '全职', value: '全职' },
  { name: '兼职', value: '兼职' },
  { name: '实习', value: '实习' },
  { name: '临时', value: '临时' },
])

const salaryRangeActions = ref([
  { name: '3K以下', value: '3K以下' },
  { name: '3-5K', value: '3-5K' },
  { name: '5-10K', value: '5-10K' },
  { name: '10-15K', value: '10-15K' },
  { name: '15-20K', value: '15-20K' },
  { name: '20K以上', value: '20K以上' },
  { name: '面议', value: '面议' },
])

const locationActions = ref([
  { name: '全国', value: '全国' },
  { name: '北京', value: '北京' },
  { name: '上海', value: '上海' },
  { name: '广州', value: '广州' },
  { name: '深圳', value: '深圳' },
  { name: '成都', value: '成都' },
  { name: '杭州', value: '杭州' },
  { name: '其他', value: '其他' },
])

const experienceActions = ref([
  { name: '应届生', value: '应届生' },
  { name: '1年以下', value: '1年以下' },
  { name: '1-3年', value: '1-3年' },
  { name: '3-5年', value: '3-5年' },
  { name: '5-10年', value: '5-10年' },
  { name: '10年以上', value: '10年以上' },
])

const educationActions = ref([
  { name: '不限', value: '不限' },
  { name: '中专', value: '中专' },
  { name: '大专', value: '大专' },
  { name: '本科', value: '本科' },
  { name: '硕士', value: '硕士' },
  { name: '博士', value: '博士' },
])

const availableSkills = ref([
  '五险一金',
  '包食宿',
  '过年福利',
  '交通补贴',
  '餐补',
  '年终奖',
  '带薪年假',
  '弹性工作',
  '团队建设',
  '培训机会',
])

// 计算属性
const canPublish = computed(() => {
  return jobInfo.value.title.trim().length > 0 && jobInfo.value.description.trim().length > 0
})

// 返回上一页
const handleBack = () => {
  if (hasContent()) {
    uni.showModal({
      title: '提示',
      content: '确定要放弃编辑吗？',
      success: (res) => {
        if (res.confirm) {
          uni.navigateBack()
        }
      },
    })
  } else {
    uni.navigateBack()
  }
}

// 检查是否有内容
const hasContent = () => {
  return jobInfo.value.title.trim() || jobInfo.value.description.trim() || projects.value.length > 0
}

// 更多操作
const handleMore = () => {
  uni.showActionSheet({
    itemList: ['保存草稿', '清空内容', '预览'],
    success: (res) => {
      switch (res.tapIndex) {
        case 0:
          saveDraft()
          break
        case 1:
          clearContent()
          break
        case 2:
          previewJob()
          break
      }
    },
  })
}

// 帮助
const handleHelp = () => {
  toast.info('发布招聘帮助功能')
}

// 显示各种选择器
const showJobCategoryPicker = () => {
  showJobCategoryModal.value = true
}

const showJobTypePicker = () => {
  showJobTypeModal.value = true
}

const showSalaryRangePicker = () => {
  showSalaryRangeModal.value = true
}

const showLocationPicker = () => {
  showLocationModal.value = true
}

const showExperiencePicker = () => {
  showExperienceModal.value = true
}

const showEducationPicker = () => {
  showEducationModal.value = true
}

const showDatePicker = () => {
  showDateModal.value = true
}

const showSkillPicker = () => {
  showSkillModal.value = true
}

// 选择器回调
const selectJobCategory = (action: any) => {
  jobInfo.value.category = action.value
}

const selectJobType = (action: any) => {
  jobInfo.value.type = action.value
}

const selectSalaryRange = (action: any) => {
  salaryInfo.value.range = action.value
}

const selectLocation = (action: any) => {
  salaryInfo.value.location = action.value
}

const selectExperience = (action: any) => {
  requirements.value.experience = action.value
}

const selectEducation = (action: any) => {
  requirements.value.education = action.value
}

const selectDate = (value: string) => {
  jobInfo.value.deadline = value
}

// 技能管理
const toggleSkill = (skill: string) => {
  const index = salaryInfo.value.skills.indexOf(skill)
  if (index > -1) {
    salaryInfo.value.skills.splice(index, 1)
  } else {
    salaryInfo.value.skills.push(skill)
  }
}

const removeSkill = (skill: string) => {
  const index = salaryInfo.value.skills.indexOf(skill)
  if (index > -1) {
    salaryInfo.value.skills.splice(index, 1)
  }
}

// 要求管理
const removeRequirement = (req: string) => {
  const index = requirements.value.others.indexOf(req)
  if (index > -1) {
    requirements.value.others.splice(index, 1)
  }
}

const removeSkillRequirement = (skill: string) => {
  const index = requirements.value.skillRequirements.indexOf(skill)
  if (index > -1) {
    requirements.value.skillRequirements.splice(index, 1)
  }
}

// 项目管理
const addProject = () => {
  uni.navigateTo({
    url: '/pages-sub/select-project/select-project',
  })
}

const removeProject = (index: number) => {
  projects.value.splice(index, 1)
}

// 保存草稿
const saveDraft = () => {
  const draft = {
    jobInfo: jobInfo.value,
    salaryInfo: salaryInfo.value,
    requirements: requirements.value,
    projects: projects.value,
    otherOptions: otherOptions.value,
    createTime: Date.now(),
  }

  uni.setStorageSync('recruitment_draft', draft)
  toast.success('草稿已保存')
  uni.navigateBack()
}

// 清空内容
const clearContent = () => {
  uni.showModal({
    title: '提示',
    content: '确定要清空所有内容吗？',
    success: (res) => {
      if (res.confirm) {
        jobInfo.value = {
          title: '',
          description: '',
          category: '舞蹈',
          type: '兼职',
          deadline: '2025/12/23',
        }
        salaryInfo.value = {
          range: '5-10K',
          location: '全国',
          skills: [],
        }
        requirements.value = {
          count: 1,
          experience: '应届生',
          education: '本科',
          others: [],
          skillRequirements: [],
        }
        projects.value = []
        otherOptions.value = {
          urgent: false,
          pinned: false,
        }
        toast.success('内容已清空')
      }
    },
  })
}

// 预览招聘
const previewJob = () => {
  if (!canPublish.value) {
    toast.error('请完善招聘信息')
    return
  }

  // 这里可以跳转到预览页面
  toast.info('预览功能')
}

// 发布招聘
const publishJob = async () => {
  if (!canPublish.value) {
    toast.error('请完善招聘信息')
    return
  }

  try {
    publishing.value = true

    const recruitmentData: YRZPJobCreateReqVO = {
      employerId: 1, // 默认招聘者ID，实际应从用户信息获取
      companyId: 1, // 默认公司ID，实际应从用户信息获取
      categoryId: 1, // 默认分类ID，实际应根据category转换
      name: jobInfo.value.title,
      description: jobInfo.value.description,
      location: salaryInfo.value.location,
      salaryMin: parseInt(salaryInfo.value.range.split('-')[0]) || 5000,
      salaryMax: parseInt(salaryInfo.value.range.split('-')[1]) || 10000,
      experienceRequirement: parseInt(requirements.value.experience) || 0,
      educationRequirement: requirements.value.education,
      headcount: requirements.value.count,
      benefits: salaryInfo.value.skills.join(','),
      status: 1, // 发布状态
    }

    const res = await createJob({
      body: recruitmentData,
    })

    if (res.code === 0) {
      toast.success('发布成功')
      // 清空草稿
      uni.removeStorageSync('recruitment_draft')
      // 返回上一页
      uni.navigateBack()
    } else {
      toast.error(res.msg || '发布失败')
    }
  } catch (error) {
    console.error('发布失败:', error)
    toast.error('发布失败')
  } finally {
    publishing.value = false
  }
}
</script>
