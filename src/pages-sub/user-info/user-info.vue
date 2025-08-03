<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '求职者详情',
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
              <view class="flex flex-col">
                <text class="text-lg font-bold text-gray-800 mr-2">{{ userInfo.name }}</text>
                <view class="flex">{{ userInfo.age }}岁 · {{ userInfo.sex }}</view>
              </view>
            </view>
          </view>
          <view class="grid grid-cols-2 gap-2 mt-2">
            <yr-img-title url="dianhua.svg" :title="userInfo.mobile" />
            <yr-img-title url="youxiang.svg" :title="userInfo.email" />
            <yr-img-title url="weizhi.svg" :title="userInfo.location" />
            <yr-img-title
              url="school.svg"
              :title="userInfo.biYeYuanXiao + '·' + userInfo.teChang"
            />
          </view>
        </view>
        <wd-divider custom-class="!px-0"></wd-divider>
        <view class="flex items-center justify-between mb-3 mt-3">
          <text class="text-[14px] text-gray-800">求职期望</text>
        </view>
        <view class="flex justify-between mb-4">
          <view>{{ userInfo.workType }}</view>
          <view class="text-[#248069]">{{ userInfo.qiWangXinZi }}</view>
        </view>
        <wd-divider custom-class="!px-0"></wd-divider>
        <view class="flex items-center justify-between mb-3 mt-4">
          <text class="text-[14px] text-gray-800">专业技能</text>
        </view>
        <view class="flex flex-wrap gap-2">
          <view
            v-for="(skill, index) in tags"
            :key="index"
            class="flex items-center text-[12px] px-[6px] py-[2px] rounded-1 bg-gray-50"
          >
            <text>{{ skill }}</text>
          </view>
        </view>
        <!-- 个人简介 -->
        <wd-cell title="自我介绍" vertical custom-class="mt-4 mb-2">
          <wd-textarea
            disabled
            v-model="userInfo.jianJie"
            placeholder="请输入个人简介"
            auto-height
            no-border
          />
        </wd-cell>
      </wd-card>

      <!-- 个人展示 -->

      <wd-card>
        <view class="flex items-center justify-between mb-3 mt-1">
          <text class="text-base font-semibold text-gray-800">个人展示</text>
        </view>
        <view class="grid grid-cols-2 gap-2 gap-y-3 w-full">
          <view
            class="flex-1 h-[101px]"
            v-for="item in userInfo.jianJieImages.split(',')"
            :key="item"
          >
            <image
              class="w-full h-full rounded-2 overflow-hidden"
              :src="item"
              mode="scaleToFill"
            ></image>
          </view>
          <view
            class="flex-1 h-[101px]"
            v-for="item in [
              ...userInfo.jianJieVideos.split(','),
              ...userInfo.jiNengVideos.split(','),
            ]"
            :key="item"
          >
            <video
              class="w-full h-full rounded-2 overflow-hidden"
              :src="item"
              mode="aspectFill"
            ></video>
          </view>
        </view>
      </wd-card>
      <!-- 代表作品 -->

      <wd-card v-if="daiBiaoZuo.length">
        <view class="flex items-center justify-between mb-3 mt-1">
          <text class="text-base font-semibold text-gray-800">代表作品</text>
        </view>
        <view class="flex flex-wrap gap-2">
          <view
            v-for="(work, index) in daiBiaoZuo"
            :key="index"
            class="flex items-center justify-between py-3 px-4 bg-[#E9F7F4] rounded-2 mb-2 last:mb-0 w-full"
          >
            <text class="text-sm text-[#248069]">{{ work }}</text>
          </view>
        </view>
      </wd-card>
      <wd-card>
        <view class="flex items-center justify-between mb-3 mt-1">
          <text class="text-base font-semibold text-gray-800">教育背景</text>
        </view>
        <view class="grid grid-cols-2 gap-2">
          <view class="">毕业院校： {{ userInfo.biYeYuanXiao }}</view>
          <view class="">学历：{{ userInfo.xueLi }}</view>
          <view class="">专业： {{ userInfo.teChang }}</view>
        </view>
      </wd-card>
    </wd-form>
  </view>
  <yr-page-footer>
    <wd-button type="success" block custom-class="flex-1 " :round="false" @click="handleContact">
      立即联系
    </wd-button>
  </yr-page-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navigateBack, navigateToSub } from '@/utils'
import { getUserInfo, MemberUserDO, updateUser } from '@/service/app'
import { RoleEmu, useRoleStore } from '@/store'

const { getRole } = useRoleStore()

// 用户信息数据
const userInfo = ref<MemberUserDO>({
  qiWangXinZi: '',
})
const daiBiaoZuo = ref([])
const tags = ref([])

watch(
  () => userInfo.value,
  (value) => {
    tags.value = value.tags.split(',')
    daiBiaoZuo.value = value.daiBiaoZuo.split(',')
  },
)

// 加载用户数据
const loadUserData = async () => {
  let res = await getUserInfo({})
  userInfo.value = res.data
}
const handleContact = () => {
  navigateToSub(`/chat/chat?toUserID=im_${RoleEmu.seeker}_${userInfo.value.id}`)
}
onShow(() => {
  loadUserData()
})
</script>
