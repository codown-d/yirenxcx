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
                <view class="">{{ title1 }}</view>
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
      </view>
      <wd-card>
        <yr-tag-list
          v-if="userInfo.tags"
          v-model="userInfo.tags"
          className="!bg-green-50 !text-green-600 !text-sm !px-2 !py-1"
        />
        <wd-status-tip image="content" tip="暂无内容" v-else />
      </wd-card>
      <!-- 代表作品 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">代表作品</text>
      </view>
      <wd-card>
        <yr-tag-list
          v-if="userInfo.daiBiaoZuo"
          v-model="userInfo.daiBiaoZuo"
          className="w-full justify-between !px-4 !py-3"
        />
        <wd-status-tip image="content" tip="暂无内容" v-else />
      </wd-card>
      <!-- 个人展示 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">个人展示</text>
      </view>
      <wd-card>
        <!-- 个人展示项目 -->
        <view class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">个人展示图片</text>
          </view>
          <text class="text-xs text-gray-500 block mb-3">展示您的形象、舞台风采或专业照片</text>
          <yr-img-preview v-model="userInfo.jianJieImages" v-if="userInfo.jiNengVideos" />
          <wd-status-tip image="content" tip="暂无内容" v-else />
        </view>
        <view class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">自我介绍视频</text>
          </view>
          <text class="text-xs text-gray-500 block mb-3">展示您的形象、舞台风采或专业照片</text>
          <yr-img-preview v-model="userInfo.jianJieVideos" v-if="userInfo.jianJieVideos" />
          <wd-status-tip image="content" tip="暂无内容" v-else />
        </view>
        <view class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">专业技能视频</text>
          </view>
          <text class="text-xs text-gray-500 block mb-3">展示您的专业技能、表演片段或作品集锦</text>
          <yr-video-preview v-model="userInfo.jiNengVideos" v-if="userInfo.jiNengVideos" />
          <wd-status-tip image="content" tip="暂无内容" v-else />
        </view>
      </wd-card>
      <!-- 求职薏向 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">求职薏向</text>
      </view>
      <wd-card>
        <wd-cell title="期望薪资">
          <yr-picker
            :columns="dictData.salaryColumns"
            v-model="userInfo.qiWangXinZi"
            disabled
          ></yr-picker>
        </wd-cell>
        <wd-cell title="工作性质">
          <yr-picker
            :columns="dictData.WORK_TYPES"
            disabled
            v-model="userInfo.workType"
          ></yr-picker>
        </wd-cell>
      </wd-card>
    </wd-form>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getUserInfo, MemberUserDO } from '@/service/member'
import { find } from 'lodash-es'
import { useDictData } from '@/hooks'
let { dictData } = useDictData()

// 用户信息数据
const userInfo = ref<MemberUserDO>()
let title1 = computed(() => {
  let node = find(dictData.value.SEX, (item) => item.value == userInfo.value?.sexName)
  return [`${userInfo.value.age || '-'} 岁`, node?.label, userInfo.value.teChang]
    .filter((el) => !!el)
    .join(' • ')
})
const loadUserData = async () => {
  let res = await getUserInfo({})
  userInfo.value = res.data
}

onShow(() => {
  loadUserData()
})
</script>
