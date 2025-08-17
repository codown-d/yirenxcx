<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '我的收藏',
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
          class="bg-white rounded-4 p-4 mb-2 shadow-sm"
        >
          <view class="flex items-start justify-between" v-if="getRole() === RoleEmu.seeker">
            <image :src="item.logo" mode="aspectFit" class="w-16 h-16 rounded-2 mr-4" />
            <view class="flex-1">
              <view class="flex mb-2 flex-col">
                <view class="flex items-center justify-between">
                  <view class="flex items-center mb-[6px]">
                    <text class="text-4 font-bold text-gray-800 mr-2">{{ item.companyName }}</text>
                  </view>
                </view>
                <view>{{ item.involved }} · {{ item.personNumber }}</view>
              </view>

              <view class="flex justify-between items-center">
                <view class="w-[120px] flex">
                  {{ dayjs(item.updateAt).format('YYYY/MM/DD') }}
                  收藏
                </view>
                <wd-button size="small" @click="unfollowCompany(item.id)">取消收藏</wd-button>
              </view>
            </view>
          </view>
          <view class="flex items-start justify-between" v-else>
            <image :src="item.avatar" mode="aspectFit" class="w-16 h-16 rounded-2 mr-4" />
            <view class="flex-1">
              <view class="flex mb-2 flex-col">
                <view class="flex items-center justify-between">
                  <view class="flex items-center mb-[6px]">
                    <text class="text-4 font-bold text-gray-800 mr-2">{{ item.name }}</text>
                    <wd-tag custom-class="!text-[12px]  font-bold " type="primary" mark>
                      {{ item.workType }}
                    </wd-tag>
                  </view>
                  <view class="text-[16px] font-bold text-teal-600">{{ item.qiWangXinZi }}</view>
                </view>
                <view>{{ getTitle(item) }}</view>
              </view>

              <view class="flex justify-between items-center">
                <view class="w-[120px] flex">
                  {{ dayjs(item.updateAt).format('YYYY/MM/DD') }}
                  收藏
                </view>
                <wd-button size="small" @click.stop="unfollowCompany(item.id)">取消收藏</wd-button>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <wd-status-tip image="collect" tip="暂无收藏" v-else />
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import { useConnect } from '@/hooks/useConnect'
import { RoleEmu, useRoleStore } from '@/store'
import { find } from 'lodash'
import { SEX } from '@/constant'
const { changeConnect, getShouCang } = useConnect()
const { getRole } = useRoleStore()
import { useDictData } from '@/hooks'
let { dictData } = useDictData()

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
    let list = await getShouCang()
    followList.value = list
  } finally {
    loading.value = false
  }
}
let getTitle = (item) => {
  let node = find(dictData.value.SEX, (it) => it.value == item.sex)
  return [`${item.age} 岁`, node?.label, item.gongZuoJingYan].filter((el) => !!el).join(' • ')
}
// 取消关注
const unfollowCompany = (userId: any) => {
  if (RoleEmu.employer == getRole()) {
    changeConnect({ shouCangJobSeekerId: Number(userId) }, true, () => {
      loadFollowList()
    })
  } else {
    changeConnect({ shouCangJobId: Number(userId) }, true, () => {
      loadFollowList()
    })
  }
}
</script>
