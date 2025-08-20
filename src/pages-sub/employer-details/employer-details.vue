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
            <image
              :src="userInfo.logo"
              mode="aspectFill"
              class="bg-gray-100 w-16 h-16 rounded-full mr-4"
            />
            <view class="flex-1 flex items-center justify-between">
              <view class="flex flex-col gap-">
                <text class="text-lg font-bold text-gray-800 mr-2">{{ userInfo.companyName }}</text>
                <view class="">
                  {{ userInfo?.involved }} · {{ userInfo?.personNumber }} ·
                  {{ userInfo?.chengLiTime }}
                </view>
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
        <wd-cell title="公司介绍" vertical custom-class="mt-4 mb-2">
          <wd-textarea v-model="userInfo.companyInfo" placeholder="请输入" auto-height no-border />
        </wd-cell>
        <wd-cell title="公司文化" vertical custom-class="mt-4 mb-2">
          <wd-textarea
            v-model="userInfo.companyCulture"
            placeholder="请输入"
            auto-height
            no-border
          />
        </wd-cell>
      </wd-card>
      <wd-card custom-class="!mt-4">
        <view class="flex items-center justify-between mb-3">
          <text class="text-base font-semibold text-gray-800">团队地址</text>
        </view>
        <view v-if="userInfo.xiangXiAddress">{{ userInfo.xiangXiAddress }}</view>
        <wd-status-tip image="content" tip="暂无内容" v-else />
      </wd-card>
      <!-- 技能标签 -->

      <wd-card custom-class="!mt-4">
        <view class="flex items-center justify-between mb-3">
          <text class="text-base font-semibold text-gray-800">公司展示</text>
        </view>
        <!-- 个人展示项目 -->
        <view class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">工作环境照片</text>
          </view>
          <yr-img-preview v-model="userInfo.companyImages" v-if="userInfo.companyImages" />
          <wd-status-tip image="content" tip="暂无内容" v-else />
        </view>

        <view class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">宣传视频</text>
          </view>
          <yr-video-preview v-model="userInfo.companyVideos" v-if="userInfo.companyVideos" />
          <wd-status-tip image="content" tip="暂无内容" v-else />
        </view>
      </wd-card>
    </wd-form>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toast } from '@/utils/toast'
import { navigateBack, navigateToSub } from '@/utils'
import { updateUser } from '@/service/app'
import { MemberUserDO, getUserByIds } from '@/service/member'

// 用户信息数据
const userInfo = ref<MemberUserDO>({ benefits: '' })
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

const loadUserData = async () => {
  await updateUser({ body: { userId: companyId.value, qiYeLiuLan: '+1' } })
  let res = await getUserByIds({ params: { userIds: companyId.value } })
  userInfo.value = res.data[0]
}

let companyId = ref()
onLoad((options) => {
  if (options?.companyId) {
    companyId.value = options.companyId
    loadUserData()
  }
})
</script>
