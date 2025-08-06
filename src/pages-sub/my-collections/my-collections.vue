<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '我的关注',
  },
}
</route>
<template>
  <view class="px-4 min-h-screen">
    <!-- 统计信息 -->
    <view class="py-3 text-3 text-gray-500 text-right">共{{ followList.length }}条记录</view>
    <!-- 关注列表 -->
    <view class="pb-3 flex flex-col gap-3">
      <view v-for="item in followList" :key="item.id" class="bg-white rounded-4 p-6 mb-4 shadow-sm">
        <view class="flex items-start justify-between">
          <image :src="item.logo" mode="aspectFit" class="w-16 h-16 rounded-2 mr-4" v-if="false" />

          <view class="flex-1">
            <view class="flex mb-2 flex-col">
              <view class="flex items-center justify-between">
                <view class="flex items-center mb-[6px]">
                  <text class="text-4 font-bold text-gray-800 mr-2">{{ item.title }}</text>
                  <wd-tag custom-class="!text-[12px]  font-bold " type="primary" mark>
                    {{ item.workType }}
                  </wd-tag>
                </view>
                <yr-salary :salaryMax="item.salaryMax" :salaryMin="item.salaryMin" />
              </view>
              <view>{{ item.experienceRequirement }} · {{ item.workType }}</view>
            </view>
            <!-- 标签 -->
            <view class="flex gap-1 my-2">
              <yr-tag-list
                v-model="item.requirementDetails"
                class-name="!bg-[#F5F6FA] !text-[#555555]"
              ></yr-tag-list>
            </view>
            <view class="flex justify-between items-center">
              <view class="w-[120px] flex">
                {{ dayjs(item.updateAt).format('YYYY/MM/DD') }}
                关注
              </view>
              <wd-button size="small" @click="unfollowCompany(item.id)">取消关注</wd-button>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 空状态 -->
    <view v-if="followList.length === 0" class="flex flex-col items-center justify-center">
      <image
        src="/static/images/empty-follow.png"
        mode="aspectFit"
        class="w-32 h-32 mb-6 opacity-60"
      />
      <text class="text-6 text-gray-500 mb-4">暂无关注</text>
      <text class="text-4 text-gray-400">去发现更多内容</text>
      <wd-button
        v-if="false"
        type="primary"
        size="medium"
        @click="goToDiscover"
        :round="false"
        custom-class="mt-4  rounded-3"
      >
        去发现
      </wd-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import dayjs from 'dayjs'
import { useConnect } from '@/hooks/useConnect'
const { changeConnect, getGuanZhu } = useConnect()

// 页面状态
const followList = ref<any[]>([])
const loading = ref(false)

// 页面加载
onMounted(() => {
  loadFollowList()
})

// 加载关注列表
const loadFollowList = async () => {
  if (loading.value) return
  try {
    loading.value = true
    let list = await getGuanZhu()
    followList.value = list
  } catch (error) {
    toast.error('加载失败，请重试')
  } finally {
    loading.value = false
  }
}

// 去发现页面
const goToDiscover = () => {}

// 取消关注
const unfollowCompany = (jobId: any) => {
  changeConnect({ guanZhuJobId: Number(jobId) }, true, () => {
    loadFollowList()
  })
}
</script>
