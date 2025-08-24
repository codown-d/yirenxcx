<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '我的足迹',
  },
}
</route>
<template>
  <view class="px-4">
    <view v-if="followList.length !== 0">
      <!-- 统计信息 -->
      <view class="py-3 text-3 text-gray-500 text-right">共{{ followList.length }}条记录</view>
      <!-- 关注列表 -->
      <view class="pb-3 flex flex-col gap-3">
        <view
          v-for="item in followList"
          :key="item.id"
          class="bg-white rounded-4 p-6 mb-4 shadow-sm"
        >
          <view class="flex items-start justify-between" v-if="getRole() === RoleEmu.seeker">
            <view class="flex-1">
              <view class="flex mb-2 flex-col">
                <view class="flex items-center justify-between">
                  <view class="flex items-center mb-[6px]">
                    <text class="text-4 font-bold text-gray-800 mr-2">{{ item.title }}</text>
                    <wd-tag
                      custom-class="!text-[12px]  font-bold "
                      type="primary"
                      mark
                      v-if="item.workType"
                    >
                      {{ item.workType }}
                    </wd-tag>
                  </view>
                  <yr-salary :salary="item.salary" />
                </view>
                <view>{{ getEmployerTitle(item) }}</view>
              </view>
              <!-- 标签 -->
              <view class="flex gap-1 my-2">
                <yr-tag-list v-model="item.requirementDetails"></yr-tag-list>
              </view>
            </view>
          </view>
          <view class="flex items-start justify-between" v-else>
            <image
              :src="item.logo"
              mode="aspectFit"
              class="w-16 h-16 rounded-2 mr-4"
              v-if="false"
            />

            <view class="flex-1">
              <view class="flex mb-2 flex-col">
                <view class="flex items-center justify-between">
                  <view class="flex items-center mb-[6px]">
                    <text class="text-4 font-bold text-gray-800 mr-2">{{ item.title }}</text>
                    <wd-tag custom-class="!text-[12px]  font-bold " type="primary" mark>
                      {{ item.workType }}
                    </wd-tag>
                  </view>
                  <yr-salary :salary="item.salary" />
                </view>
                <view>{{ getTitle(item) }}</view>
              </view>
              <!-- 标签 -->
              <view class="flex gap-1 my-2">
                <yr-tag-list
                  v-model="item.advantage"
                  class-name="!bg-[#F5F6FA] !text-[#555555]"
                ></yr-tag-list>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <wd-status-tip image="content" v-else tip="暂无内容" />
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RoleEmu, useRoleStore } from '@/store'
import { getJob, getZuJiByJob, getZuJiBySkeer, getJobSeekerByUserId } from '@/service/app'
import { uniq } from 'lodash-es'
let { getRole } = useRoleStore()

// 页面状态
const followList = ref<any>([])
const loading = ref(false)

// 页面加载
onMounted(() => {
  loadFollowList()
})
let getEmployerTitle = (item) => {
  return [item.experienceRequirement, item.educationRequirement]
    .filter((item) => item && item.trim())
    .join('  ·  ')
}
let getTitle = (item) => {
  let node = item.jobSpecific?.split('-').pop()
  return [item.experience, node, item.workType].filter((item) => item && item.trim()).join('  ·  ')
}
// 加载关注列表
const loadFollowList = async () => {
  if (loading.value) return
  loading.value = true
  try {
    if (getRole() === RoleEmu.seeker) {
      let list = await getZuJiByJob({})
      let ids = uniq(list.data.map((item) => item.jobId)).join(',')
      let jobs = await getJob({ params: { ids } })
      followList.value = jobs.data
    } else {
      let list = await getZuJiBySkeer({})
      let userIds = uniq(list.data.map((item) => item.skeerId)).join(',')
      let jobs = await getJobSeekerByUserId({ params: { userIds } })
      followList.value = jobs.data
    }
  } finally {
    loading.value = false
  }
}
</script>
