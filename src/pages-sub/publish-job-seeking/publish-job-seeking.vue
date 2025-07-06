<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '发布求职信息',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="min-h-screen bg-[#F5F6FA]">
    <view class="py-3 px-3">
      <text class="text-base font-bold text-gray-900">基本信息</text>
    </view>
    <wd-form ref="formRef" :model="formData" :rules="rules">
      <!-- 基本信息 -->
      <wd-card>
        <!-- 求职标题 -->
        <wd-cell title="求职标题" vertical>
          <wd-input
            v-model="formData.title"
            no-border
            placeholder="如：专业古典舞蹈演员求职"
            prop="title"
            required
          />
        </wd-cell>
        <!-- 个人简介 -->
        <wd-cell title="个人简介" vertical custom-class="mt-4">
          <wd-textarea
            no-border
            v-model="formData.description"
            placeholder="请简要介绍您的专业背景、表演经验、个人特长等"
            prop="description"
            :maxlength="200"
            :auto-height="true"
          />
        </wd-cell>
      </wd-card>

      <!-- 求职期望 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">求职期望</text>
      </view>
      <wd-card>
        <!-- 期望薪资 -->
        <wd-cell title="期望薪资">
          <wd-picker
            v-model="formData.expectedSalary"
            :columns="salaryColumns"
            placeholder="请选择期望薪资"
            prop="expectedSalary"
          />
        </wd-cell>

        <!-- 工作性质 -->
        <wd-cell title="工作性质">
          <wd-picker
            v-model="formData.jobType"
            :columns="jobTypeColumns"
            placeholder="请选择工作性质"
            prop="jobType"
          />
        </wd-cell>

        <!-- 到岗时间 -->
        <wd-cell title="到岗时间">
          <wd-picker
            v-model="formData.availableTime"
            :columns="availableTimeColumns"
            placeholder="请选择到岗时间"
            prop="availableTime"
          />
        </wd-cell>
      </wd-card>

      <!-- 个人背景 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">个人背景</text>
      </view>
      <wd-card>
        <!-- 工作经验 -->
        <wd-cell title="工作经验">
          <wd-picker
            v-model="formData.workExperience"
            :columns="experienceColumns"
            placeholder="请选择工作经验"
            prop="workExperience"
          />
        </wd-cell>

        <!-- 学历水平 -->
        <wd-cell title="学历水平">
          <wd-picker
            v-model="formData.education"
            :columns="educationColumns"
            placeholder="请选择学历水平"
            prop="education"
          />
        </wd-cell>

        <!-- 专业技能 -->
        <wd-cell title="专业技能">
          <wd-select-picker
            v-model="formData.skill"
            :columns="skillActions"
            @change="onAdvantageSelect"
          ></wd-select-picker>
        </wd-cell>
        <view class="flex flex-wrap gap-2">
          <wd-tag
            v-for="skill in selectedSkills"
            :key="skill"
            type="primary"
            size="small"
            closable
            @close="removeSkill(skill)"
          >
            {{ skill }}
          </wd-tag>
        </view>
        <!-- 个人优势 -->
        <wd-cell title="个人优势">
          <wd-picker
            v-model="formData.advantage"
            :columns="advantageActions"
            placeholder="请选择个人优势"
            prop="advantage"
          />
        </wd-cell>
        <view class="flex flex-wrap gap-2">
          <wd-tag
            v-for="advantage in selectedAdvantages"
            :key="advantage"
            type="success"
            size="small"
            closable
            @close="removeAdvantage(advantage)"
          >
            {{ advantage }}
          </wd-tag>
        </view>
      </wd-card>

      <!-- 联系方式 -->
      <view class="bg-white mb-3">
        <view class="px-4 py-3 border-b border-gray-100">
          <text class="text-base font-medium text-gray-900">联系方式</text>
        </view>

        <!-- 联系方式 -->
        <wd-cell-group>
          <wd-input
            v-model="formData.contactInfo"
            label="联系方式"
            placeholder="请输入手机号/微信号"
            prop="contactInfo"
            required
          />
        </wd-cell-group>
      </view>

      <!-- 其他选项 -->
      <view class="bg-white mb-6">
        <view class="px-4 py-3 border-b border-gray-100">
          <text class="text-base font-medium text-gray-900">其他选项</text>
        </view>

        <!-- 是否公开 -->
        <wd-cell-group>
          <wd-cell title="公开工作">
            <wd-switch v-model="formData.isPublic" />
          </wd-cell>
        </wd-cell-group>
      </view>
    </wd-form>

    <!-- 底部按钮 -->
    <view class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <view class="flex gap-3">
        <button
          class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg text-base font-medium active:bg-gray-200 transition-colors"
          @click="saveDraft"
        >
          取消
        </button>
        <button
          class="flex-1 bg-primary text-white py-3 rounded-lg text-base font-medium active:bg-primary-600 transition-colors"
          :disabled="loading"
          @click="publishJobSeekingInfo"
        >
          {{ loading ? '发布中...' : '发布' }}
        </button>
      </view>
    </view>

    <!-- 加载提示 -->
    <wd-loading v-model="loading" type="circular" />
  </view>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import {
  publishJobSeeking,
  getSkillOptions,
  getAdvantageOptions,
  saveJobSeekingDraft,
  type PublishJobSeekingRequest,
  type SkillOption,
  type AdvantageOption,
} from '@/service/index/jobSeeking'

// 表单数据
const formData = reactive({
  title: '',
  description: '',
  expectedSalary: '',
  jobType: '',
  availableTime: '',
  workExperience: '',
  education: '',
  contactInfo: '',
  isPublic: true,
  skill: [],
  advantage: [],
})

// 表单验证规则
const rules = {
  title: [{ required: true, message: '请输入求职标题' }],
  description: [{ required: true, message: '请输入个人简介' }],
  expectedSalary: [{ required: true, message: '请选择期望薪资' }],
  jobType: [{ required: true, message: '请选择工作性质' }],
  contactInfo: [{ required: true, message: '请输入联系方式' }],
}

// 响应式数据
const formRef = ref()
const loading = ref(false)
const showSkillSheet = ref(false)
const showAdvantageSheet = ref(false)
const selectedSkills = ref<string[]>([])
const selectedAdvantages = ref<string[]>([])

// 页面加载
onMounted(() => {
  loadSkillOptions()
  loadAdvantageOptions()
})

// 加载技能选项
const loadSkillOptions = async () => {
  try {
    const res = await getSkillOptions()
    if (res.code === 0 && res.data) {
      // 更新技能选项
      skillActions.splice(
        0,
        skillActions.length,
        ...res.data.map((item) => ({
          name: item.label,
          value: item.value,
        })),
      )
    }
  } catch (error) {
    console.error('加载技能选项失败:', error)
  }
}

// 加载优势选项
const loadAdvantageOptions = async () => {
  try {
    const res = await getAdvantageOptions()
    if (res.code === 0 && res.data) {
      // 更新优势选项
      advantageActions.splice(
        0,
        advantageActions.length,
        ...res.data.map((item) => ({
          name: item.label,
          value: item.value,
        })),
      )
    }
  } catch (error) {
    console.error('加载优势选项失败:', error)
  }
}

// 选择器数据
const salaryColumns = [
  { label: '3-5K', value: '3-5K' },
  { label: '5-8K', value: '5-8K' },
  { label: '8-10K', value: '8-10K' },
  { label: '10K以上', value: '10K以上' },
  { label: '面议', value: '面议' },
]

const jobTypeColumns = [
  { label: '全职', value: '全职' },
  { label: '兼职', value: '兼职' },
  { label: '实习', value: '实习' },
  { label: '临时', value: '临时' },
]

const availableTimeColumns = [
  { label: '随时到岗', value: '随时到岗' },
  { label: '一周内到岗', value: '一周内到岗' },
  { label: '一个月内到岗', value: '一个月内到岗' },
  { label: '三个月内到岗', value: '三个月内到岗' },
]

const experienceColumns = [
  { label: '应届生', value: '应届生' },
  { label: '1年以下', value: '1年以下' },
  { label: '1-3年', value: '1-3年' },
  { label: '3-5年', value: '3-5年' },
  { label: '5年以上', value: '5年以上' },
]

const educationColumns = [
  { label: '高中', value: '高中' },
  { label: '大专', value: '大专' },
  { label: '本科', value: '本科' },
  { label: '硕士', value: '硕士' },
  { label: '博士', value: '博士' },
]

// 专业技能选项
const skillActions = [
  { label: '古典舞', value: '古典舞' },
  { label: '民族舞', value: '民族舞' },
  { label: '芭蕾舞', value: '芭蕾舞' },
  { label: '现代舞', value: '现代舞' },
  { label: '街舞', value: '街舞' },
  { label: '拉丁舞', value: '拉丁舞' },
  { label: '爵士舞', value: '爵士舞' },
  { label: '声乐', value: '声乐' },
  { label: '器乐', value: '器乐' },
  { label: '表演', value: '表演' },
]

// 个人优势选项
const advantageActions = [
  { label: '形象气质佳', value: '形象气质佳' },
  { label: '舞台经验丰富', value: '舞台经验丰富' },
  { label: '专业技能过硬', value: '专业技能过硬' },
  { label: '学习能力强', value: '学习能力强' },
  { label: '团队协作能力强', value: '团队协作能力强' },
  { label: '抗压能力强', value: '抗压能力强' },
]

// 显示专业技能选择器
const showSkillPicker = () => {
  showSkillSheet.value = true
}

// 显示个人优势选择器
const showAdvantagesPicker = () => {
  showAdvantageSheet.value = true
}

// 选择专业技能
const onSkillSelect = (action: { name: string; value: string }) => {
  if (!selectedSkills.value.includes(action.value)) {
    selectedSkills.value.push(action.value)
  }
  showSkillSheet.value = false
}

// 选择个人优势
const onAdvantageSelect = (action: { label: string; value: string }) => {
  if (!selectedAdvantages.value.includes(action.value)) {
    selectedAdvantages.value.push(action.value)
  }
  showAdvantageSheet.value = false
}

// 移除专业技能
const removeSkill = (skill: string) => {
  const index = selectedSkills.value.indexOf(skill)
  if (index > -1) {
    selectedSkills.value.splice(index, 1)
  }
}

// 移除个人优势
const removeAdvantage = (advantage: string) => {
  const index = selectedAdvantages.value.indexOf(advantage)
  if (index > -1) {
    selectedAdvantages.value.splice(index, 1)
  }
}

// 保存草稿
const saveDraft = () => {
  uni.showModal({
    title: '提示',
    content: '确定要取消发布吗？',
    success: (res) => {
      if (res.confirm) {
        uni.navigateBack()
      }
    },
  })
}

// 发布求职信息
const publishJobSeekingInfo = async () => {
  try {
    // 表单验证
    const valid = await formRef.value.validate()
    if (!valid) {
      return
    }

    loading.value = true

    // 构建提交数据
    const submitData: PublishJobSeekingRequest = {
      title: formData.title,
      description: formData.description,
      expectedSalary: formData.expectedSalary,
      jobType: formData.jobType,
      availableTime: formData.availableTime,
      workExperience: formData.workExperience,
      education: formData.education,
      skills: selectedSkills.value,
      advantages: selectedAdvantages.value,
      contactInfo: formData.contactInfo,
      isPublic: formData.isPublic,
    }

    const res = await publishJobSeeking({ body: submitData })

    if (res.code === 0) {
      toast.success('发布成功')

      // 延迟跳转
      setTimeout(() => {
        uni.navigateBack()
      }, 1500)
    } else {
      toast.error(res.msg || '发布失败')
    }
  } catch (error) {
    console.error('发布失败:', error)
    toast.error('网络错误，请稍后重试')
  } finally {
    loading.value = false
  }
}
</script>
