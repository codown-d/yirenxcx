<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '公司详情',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="pb-16 pt-4">
    <!-- 用户基本信息卡片 -->
    <wd-form ref="form" :model="userInfo" :errorType="'toast'" :rules="rules">
      <wd-card>
        <!-- 头像和基本信息 -->
        <view class="mb-4">
          <view class="flex items-center">
            <yr-logo-img :img="userInfo?.logo" />
            <view class="flex-1 flex items-center justify-between">
              <view class="flex flex-col gap-">
                <text class="text-lg font-bold text-gray-800 mr-2">{{ userInfo.companyName }}</text>
                <view class="">
                  {{ userInfo?.involved }} · {{ userInfo?.personNumber }} ·
                  {{ userInfo?.chengLiTime }}
                </view>
              </view>
              <view @click="goToProfileEdit">
                <wd-icon name="arrow-right" custom-class="text-4"></wd-icon>
              </view>
            </view>
          </view>
          <view class="flex gap-5 mt-2">
            <view class="flex gap-1">
              <yr-img-title url="dianhua.svg" :title="userInfo.mobile" />
            </view>
            <view class="flex gap-1">
              <yr-img-title url="youxiang.svg" :title="userInfo.email" />
            </view>
          </view>
        </view>
        <view>
          <wd-divider custom-class="!px-0"></wd-divider>
        </view>
        <wd-cell title="公司介绍" vertical custom-class="mt-4 mb-2">
          <wd-textarea
            v-model="userInfo.companyInfo"
            placeholder="请输入"
            prop="companyInfo"
            auto-height
            no-border
          />
        </wd-cell>
        <wd-cell title="公司文化" vertical custom-class="mt-4 mb-2">
          <wd-textarea
            v-model="userInfo.companyCulture"
            placeholder="请输入"
            auto-height
            no-border
            prop="companyCulture"
          />
        </wd-cell>
      </wd-card>

      <!-- 技能标签 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">福利待遇</text>
        <wd-icon name="add-circle" custom-class="text-5" @click="addSkill" />
      </view>
      <wd-card>
        <yr-modal-picker
          prop="benefits"
          v-model="userInfo.benefits"
          ref="benefitRef"
          modal-title="福利待遇"
        >
          <view></view>
        </yr-modal-picker>
      </wd-card>
      <!-- 代表作品 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">招聘要求</text>
        <wd-icon name="add-circle" custom-class="text-5" @click="addWork" />
      </view>
      <wd-card>
        <yr-modal-picker
          v-model="userInfo.recruitment"
          ref="recruitmentRef"
          modal-title="招聘要求"
          prop="recruitment"
        >
          <view></view>
        </yr-modal-picker>
      </wd-card>
      <!-- 个人展示 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">公司展示</text>
      </view>
      <wd-card>
        <!-- 个人展示项目 -->
        <view class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">公司展示图片 (最多6张)</text>
          </view>
          <text class="text-xs text-gray-500 block mb-3">展示演出场景、公司环境等</text>
          <yr-upload v-model="userInfo.companyImages" :limit="6"></yr-upload>
        </view>
        <view class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">宣传视频 (最多3个)</text>
          </view>
          <text class="text-xs text-gray-500 block mb-3">展示演出片段、公司介绍等</text>
          <yr-upload :limit="3" v-model="userInfo.companyVideos" accept="video"></yr-upload>
        </view>
      </wd-card>
    </wd-form>
    <yr-page-footer>
      <wd-button type="info" :round="false" custom-class="flex-1" @click="previewResume">
        预览详情
      </wd-button>
      <wd-button type="primary" :round="false" custom-class="flex-1" @click="saveResume">
        保存
      </wd-button>
    </yr-page-footer>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toast } from '@/utils/toast'
import { navigateBack, navigateToSub } from '@/utils'
import { MemberUserDO, getUserInfo, updateUser } from '@/service/member'

// 用户信息数据
const userInfo = ref<MemberUserDO>({ benefits: '' })
const benefitRef = ref()
const recruitmentRef = ref()

const rules = {
  companyInfo: [
    {
      required: true,
      message: '请输入公司介绍',
    },
  ],
  companyCulture: [
    {
      required: true,
      message: '请输入公司文化',
    },
  ],
  benefits: [
    {
      required: true,
      message: '请输入福利待遇',
    },
  ],
  recruitment: [
    {
      required: true,
      message: '请输入招聘要求',
    },
  ],
}
const form = ref()

const goToProfileEdit = () => {
  navigateToSub('/profile-edit/profile-edit')
}
const previewResume = () => {
  navigateToSub('/employer-details/employer-details?id=' + userInfo.value.id)
}

const loadUserData = async () => {
  let res = await getUserInfo({})
  userInfo.value = res.data
}

const addSkill = async () => {
  benefitRef.value.addItem()
}
const addWork = async () => {
  recruitmentRef.value.addItem()
}

const saveResume = async () => {
  let res = await form.value.validate()
  if (!res.valid) {
    return
  }
  await updateUser({
    body: userInfo.value,
  })
  toast.success('保存成功')
  setTimeout(() => {
    navigateBack()
  }, 500)
}

onShow(() => {
  loadUserData()
})
</script>
