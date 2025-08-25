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
                <view class="flex">
                  {{ title1 }}
                </view>
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
          <view class="text-[#000]">{{ userInfo.workType }}</view>
          <view class="text-[#248069]">{{ userInfo.qiWangXinZi }}</view>
        </view>
        <wd-divider custom-class="!px-0"></wd-divider>
        <view class="flex items-center justify-between mb-3 mt-4">
          <text class="text-[14px] text-gray-800">专业技能</text>
        </view>
        <view class="flex flex-wrap gap-2">
          <yr-tag-list v-model="userInfo.tags" class-name="!bg-[#F5F6FA] !text-[#555555]" />
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
        <view
          class="gap-2 gap-y-3 w-full"
          v-if="userInfo.jianJieImages + userInfo.jianJieVideos + userInfo.jiNengVideos"
        >
          <view class="mb-4">
            <yr-img-preview v-model="userInfo.jianJieImages" />
          </view>
          <view class="grid grid-cols-2 gap-2 gap-y-3 w-full">
            <yr-video-preview v-model="userInfo.jianJieVideos" />
            <yr-video-preview v-model="userInfo.jiNengVideos" />
          </view>
        </view>
        <wd-status-tip image="content" tip="暂无内容" v-else />
      </wd-card>
      <!-- 代表作品 -->

      <wd-card>
        <view class="flex items-center justify-between mb-3 mt-1">
          <text class="text-base font-semibold text-gray-800">代表作品</text>
        </view>
        <yr-tag-list
          v-model="userInfo.daiBiaoZuo"
          v-if="userInfo.daiBiaoZuo"
          className="w-full justify-between !px-4 !py-3"
        />
        <wd-status-tip image="content" tip="暂无内容" v-else />
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
    <view class="flex items-center gap-4">
      <wd-icon
        :name="isFavorited ? 'heart-filled' : 'heart'"
        :color="isFavorited ? '#ff4757' : '#999'"
        custom-class="text-6"
      />
      <wd-icon
        @click="handleCollect"
        :name="collect ? 'star-filled' : 'star'"
        :color="collect ? '#ffd700' : '#999'"
        custom-class="text-6"
      />
    </view>
    <wd-button type="success" custom-class="flex-1 !ml-4" :round="false" @click="handleContact">
      立即联系
    </wd-button>
  </yr-page-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navigateToSub } from '@/utils'
import { RoleEmu } from '@/store'
import { find } from 'lodash-es'
import { getUserByIds, getUserInfo, MemberUserDO } from '@/service/member'
const { changeConnect, getGuanZhuJobSeekerFn } = useConnect()
import { useDictData } from '@/hooks'
import { createZuJi, updateUser } from '@/service/app'
let { dictData } = useDictData()

// 用户信息数据
const userInfo = ref<MemberUserDO>({
  qiWangXinZi: '',
})
let isFavorited = ref()
let collect = ref(false)
let { getTitle } = useUserInfoTitle()
let title1 = computed(() => {
  let node = find(dictData.value.SEX, (item) => item.value == userInfo.value?.sexName)
  return getTitle([
    {
      value: userInfo.value.age,
      unit: '岁',
    },
    {
      value: node?.label,
      unit: '',
    },
    {
      value: userInfo.value.teChang,
      unit: '',
    },
  ])
})
let userId = ref()
// 加载用户数据
const loadUserData = async () => {
  await updateUser({ body: { userId: userId.value, jianLiLiuLan: '+1' } })
  await createZuJi({ body: { skeerId: userId.value } })
  let res = await getUserByIds({ params: { userIds: userId.value } })
  userInfo.value = res.data[0]
  let resShouCang = await getGuanZhuJobSeekerFn({ field: 'shouCangJobSeekerId' })
  collect.value = resShouCang.some((item2) => item2.shouCangJobSeekerId == userInfo.value.id)
}
const handleCollect = () => {
  changeConnect({ shouCangJobSeekerId: Number(userInfo.value.id) }, collect.value, () => {
    collect.value = !collect.value
  })
}
const handleContact = () => {
  navigateToSub(`/chat/chat?toUserID=im_${RoleEmu.seeker}_${userInfo.value.id}`)
}
onLoad((options) => {
  if (options?.seekerId) {
    userId.value = options.seekerId
    loadUserData()
  }
})
</script>
