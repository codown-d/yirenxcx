<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '在线简历',
    navigationStyle: 'custom',
    className: 'bg-bar-white',
  },
}
</route>
<template>
  <view class="pb-16 pt-4">
    <!-- 用户基本信息卡片 -->
    <wd-form ref="form" :model="userInfo">
      <wd-card>
        <!-- 头像和基本信息 -->
        <view class="mb-4">
          <view class="flex items-center">
            <image
              :src="userInfo.avatar"
              mode="aspectFill"
              class="bg-gray-100 w-16 h-16 rounded-full mr-4"
            />
            <view class="flex-1 flex items-center justify-between">
              <view class="flex flex-col gap-">
                <text class="text-lg font-bold text-gray-800 mr-2">{{ userInfo.name }}</text>
                <view class="">{{ title1 }}</view>
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
        <!-- 个人简介 -->
        <wd-cell title="自我介绍" vertical custom-class="mt-4 mb-2">
          <wd-textarea
            v-model="userInfo.jianJie"
            placeholder="请输入个人简介"
            auto-height
            no-border
          />
        </wd-cell>
      </wd-card>

      <!-- 技能标签 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">技能标签</text>
        <wd-icon name="add-circle" custom-class="text-5" @click="addSkill" />
      </view>
      <wd-card>
        <yr-modal-picker
          v-model="userInfo.tags"
          prop="tags"
          ref="tagsRef"
          modal-title="请输入技能标签"
        >
          <view></view>
        </yr-modal-picker>
      </wd-card>
      <!-- 代表作品 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">代表作品</text>
        <wd-icon name="add-circle" custom-class="text-5" @click="addWork" />
      </view>
      <wd-card>
        <yr-modal-picker
          v-model="userInfo.daiBiaoZuo"
          prop="daiBiaoZuo"
          ref="daiBiaoZuoRef"
          modal-title="请输入代表作品"
          className="w-full justify-between !px-4 !py-3"
        >
          <view></view>
        </yr-modal-picker>
      </wd-card>
      <!-- 个人展示 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">个人展示</text>
      </view>
      <wd-card>
        <!-- 个人展示项目 -->
        <view class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">个人展示图片 (最多4张)</text>
          </view>
          <text class="text-xs text-gray-500 block mb-3">展示您的形象、舞台风采或专业照片</text>

          <!-- 图片展示区域 -->
          <yr-upload v-model="userInfo.jianJieImages" :limit="4"></yr-upload>
        </view>
        <view class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">自我介绍视频 (1个)</text>
          </view>
          <text class="text-xs text-gray-500 block mb-3">展示您的形象、舞台风采或专业照片</text>

          <!-- 图片展示区域 -->
          <yr-upload :limit="1" v-model="userInfo.jianJieVideos" accept="video"></yr-upload>
        </view>
        <view class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">专业技能视频 (最多3个)</text>
          </view>
          <text class="text-xs text-gray-500 block mb-3">展示您的专业技能、表演片段或作品集锦</text>

          <!-- 图片展示区域 -->
          <yr-upload :limit="3" accept="video" v-model="userInfo.jiNengVideos"></yr-upload>
        </view>
      </wd-card>
      <!-- 求职意向 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">求职意向</text>
      </view>
      <wd-card>
        <wd-cell title="期望薪资">
          <yr-picker :columns="salaryColumns" v-model="userInfo.qiWangXinZi"></yr-picker>
        </wd-cell>
        <wd-cell title="工作性质">
          <yr-picker :columns="jobTypeColumns" v-model="userInfo.workType"></yr-picker>
        </wd-cell>
      </wd-card>
      <!-- 操作按钮 -->
      <yr-page-footer>
        <wd-button type="info" :round="false" custom-class="flex-1" @click="previewResume">
          预览简历
        </wd-button>
        <wd-button type="primary" :round="false" custom-class="flex-1" @click="saveResume">
          保存
        </wd-button>
      </yr-page-footer>
    </wd-form>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toast } from '@/utils/toast'
import { navigateBack, navigateToSub } from '@/utils'
import { getUserInfo, MemberUserDO, updateUser, updateUser1 } from '@/service/app'
import { jobTypeColumns, salaryColumns } from '@/constant'

// 用户信息数据
const userInfo = ref<MemberUserDO>({})
const tagsRef = ref()
const daiBiaoZuoRef = ref()

const goToProfileEdit = () => {
  navigateToSub('/profile-edit/profile-edit')
}
let title1 = computed(() => {
  return [`${userInfo.value.age} 岁`, userInfo.value.teChang].filter((el) => !!el).join(' • ')
})
// 加载用户数据
const loadUserData = async () => {
  let res = await getUserInfo({})
  userInfo.value = res.data
}

const addSkill = async () => {
  tagsRef.value.addItem()
}
const addWork = async () => {
  daiBiaoZuoRef.value.addItem()
}

// 预览简历
const previewResume = () => {
  navigateToSub('/preview-resume/preview-resume?id=' + userInfo.value.id)
}

const saveResume = async () => {
  await updateUser1({
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
