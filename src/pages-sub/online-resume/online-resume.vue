<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '在线简历',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="mt-4 pb-16">
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
                <view class="">{{ userInfo.age }}岁 · {{ userInfo.teChang }}</view>
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
        <view class="flex flex-wrap gap-2">
          <view
            v-for="(skill, index) in tags"
            :key="index"
            class="flex items-center bg-green-50 text-green-600 text-sm px-2 py-1 rounded-1 border border-green-200"
          >
            <text class="mr-1">{{ skill }}</text>
            <wd-icon name="close" size="14px" @click="removeSkill(index)" />
          </view>
        </view>
      </wd-card>
      <!-- 代表作品 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">代表作品</text>
        <wd-icon name="add-circle" custom-class="text-5" @click="addWork" />
      </view>
      <wd-card v-if="daiBiaoZuo.length">
        <view class="flex flex-wrap gap-2">
          <view
            v-for="(work, index) in daiBiaoZuo"
            :key="index"
            class="flex items-center justify-between py-3 px-4 bg-[#E9F7F4] rounded-2 mb-2 last:mb-0 w-full"
          >
            <text class="text-sm text-[#248069]">{{ work }}</text>
            <wd-icon
              name="close-normal"
              custom-class="text-5 text-[#248069]"
              @click.stop="removeDaiBiaoZuo(index)"
            ></wd-icon>
          </view>
        </view>
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
          <yr-upload
            :limit="4"
            :file-list="jianJieImages"
            @change="(val) => changeUpload(val, 'jianJieImages')"
          ></yr-upload>
        </view>
        <view class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">自我介绍视频 (1个)</text>
          </view>
          <text class="text-xs text-gray-500 block mb-3">展示您的形象、舞台风采或专业照片</text>

          <!-- 图片展示区域 -->
          <yr-upload
            :limit="1"
            :file-list="jianJieVideos"
            accept="video"
            @change="(val) => changeUpload(val, 'jianJieVideos')"
          ></yr-upload>
        </view>
        <view class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">专业技能视频 (最多3个)</text>
          </view>
          <text class="text-xs text-gray-500 block mb-3">展示您的专业技能、表演片段或作品集锦</text>

          <!-- 图片展示区域 -->
          <yr-upload
            :limit="3"
            accept="video"
            :file-list="jiNengVideos"
            @change="(val) => changeUpload(val, 'jiNengVideos')"
          ></yr-upload>
        </view>
      </wd-card>
      <!-- 求职意向 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">求职意向</text>
      </view>
      <wd-card>
        <yr-picker
          :columns="salaryColumns"
          v-model="userInfo.qiWangXinZi"
          title="期望薪资"
        ></yr-picker>

        <yr-picker
          :columns="jobTypeColumns"
          v-model="userInfo.workType"
          title="工作性质"
        ></yr-picker>
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
import { navigateToSub } from '@/utils'
import { getUserInfo, MemberUserDO, updateUser } from '@/service/app'
import { merge } from 'lodash'
import { useMessage } from 'wot-design-uni'
import {
  educationColumns,
  experienceColumns,
  jobTypeColumns,
  availableTimeColumns,
  salaryColumns,
} from '@/constant'

// 用户信息数据
const userInfo = ref<MemberUserDO>({
  qiWangXinZi: '',
})
const jianJieImages = ref([])
const jianJieVideos = ref([])
const jiNengVideos = ref([])
const daiBiaoZuo = ref([])
const tags = ref([])

watch(
  () => userInfo.value,
  (value) => {
    tags.value = value.tags.split(',')
    daiBiaoZuo.value = value.daiBiaoZuo.split(',')
    jianJieImages.value = userInfo.value.jianJieImages?.split(',').map((item) => ({
      url: item,
    }))
    jianJieVideos.value = userInfo.value.jianJieVideos?.split(',').map((item) => ({
      url: item,
    }))
    jiNengVideos.value = userInfo.value.jiNengVideos?.split(',').map((item) => ({
      url: item,
    }))
  },
)
const goToProfileEdit = () => {
  navigateToSub('/profile-edit/profile-edit')
}

const changeUpload = (list: Array<any>, key: string) => {
  console.log(list, key)
  if (key == 'jianJieVideos') {
    jianJieVideos.value = list
  } else if (key == 'jianJieImages') {
    jianJieImages.value = list
  } else {
    jiNengVideos.value = list
  }
}
// 加载用户数据
const loadUserData = async () => {
  let res = await getUserInfo({})
  userInfo.value = res.data
}

// 移除技能
const removeSkill = (index: number) => {
  tags.value.splice(index, 1)
}
const removeDaiBiaoZuo = (index: number) => {
  daiBiaoZuo.value.splice(index, 1)
}
// 添加技能
let tagValue = ref('')
const addSkill = async () => {
  let res = await message.prompt({
    title: '请输入技能标签',
    inputValue: tagValue.value,
    inputPattern: /^(?!\s*$).+/,
  })
  tags.value.push(res.value)
}
// 添加作品
const message = useMessage()
let workValue = ref('')
const addWork = async () => {
  let res = await message.prompt({
    title: '请输入代表作品名称',
    inputValue: workValue.value,
    inputPattern: /^(?!\s*$).+/,
  })
  daiBiaoZuo.value.push(res.value)
}

// 预览简历
const previewResume = () => {
  toast.info('跳转到简历预览页面')
  // uni.navigateTo({
  //   url: '/pages-sub/resume-preview/resume-preview?id=' + userInfo.value.id
  // })
}

const saveResume = async () => {
  await updateUser({
    body: merge({}, userInfo.value, {
      jianJieImages: jianJieImages.value.map((p) => p.url).join(','),
      jianJieVideos: jianJieVideos.value.map((p) => p.url).join(','),
      jiNengVideos: jiNengVideos.value.map((p) => p.url).join(','),
      tags: tags.value.join(','),
      daiBiaoZuo: daiBiaoZuo.value.join(','),
    }),
  })
  toast.success('保存成功')
  setTimeout(() => {
    // navigateBack()
  }, 500)
}

onShow(() => {
  loadUserData()
})
</script>
