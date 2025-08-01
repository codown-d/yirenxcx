<template>
  <view
    class="relative bg-white rounded-3 p-4 mb-3 shadow-sm border border-gray-100 active:bg-gray-50 transition-colors duration-200"
    @click="handleCardClick"
  >
    <!-- VIP标签 -->
    <view
      v-if="seekerData?.isVip"
      class="absolute top-0 right-3 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-b-2 px-2 py-1"
    >
      <text class="text-white text-xs font-medium">VIP</text>
    </view>
    <!-- 描述信息 -->
    <view v-if="seekerData.description" class="mb-3">
      <wd-img src="/static/images/img1.png" width="12" height="12" custom-class="mt-[2rpx] mr-1" />
      <text class="text-[24rpx] text-[#999999]">{{ seekerData.description }}</text>
    </view>
    <!-- 头像和基本信息 -->
    <view class="flex items-start mb-3 gap-2">
      <!-- 头像 -->
      <wd-img
        :src="seekerData?.avatar || '/static/images/default-avatar.png'"
        custom-class="w-16 h-16 rounded-full bg-gray-100 overflow-hidden shadow"
      />
      <!-- 基本信息 -->
      <view class="flex-1">
        <view class="flex mb-1 justify-between">
          <view class="flex items-center mt-2">
            <text class="text-base font-semibold text-gray-800 mr-2">{{ seekerData.title }}</text>
            <!-- 认证标识 -->
            <view v-if="seekerData?.isCertified">
              <wd-tag type="primary" custom-class="!px-[12rpx] !py-[4rpx] !rounded-[2px] !text-3">
                认证
              </wd-tag>
            </view>
          </view>
          <!-- 收藏按钮 -->
          <view
            class="active:opacity-70 transition-opacity duration-200"
            @click.stop="handleFavorite"
          >
            <wd-icon
              :name="isFavorited ? 'heart-filled' : 'heart'"
              :color="isFavorited ? '#ff4757' : '#ddd'"
              custom-class="text-6"
            />
          </view>
        </view>
        <view class="mb-1">
          <text class="text-sm text-gray-600">
            {{ seekerData.age }}岁 • {{ seekerData.category }} • {{ seekerData.experience }}
          </text>
        </view>
      </view>
    </view>

    <!-- 标签列表 -->
    <view class="flex flex-wrap gap-1.5 mb-2">
      <view
        v-for="tag in tags"
        :key="tag"
        class="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-1 border border-green-100"
      >
        {{ tag }}
      </view>
    </view>
    <yr-img-title :title="seekerData.school + ' ' + seekerData.specialty" url="school.svg" />
    <!-- 联系方式和期望薪资 -->
    <view class="flex items-center justify-between text-sm mt-2">
      <yr-img-title :title="seekerData.contactMobile" url="lxdh.svg" />
      <yr-time-now :time="Number(seekerData.createTime)" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useConnect } from '@/hooks'
import { YRZPJobSeekerDO } from '@/service/app'
import { navigateToSub } from '@/utils'
const { changeConnect } = useConnect()

interface Props {
  seekerData: YRZPJobSeekerDO
  favorited?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  favorited: false,
})

const isFavorited = ref(props.favorited)
const tags = computed(() => {
  return [props.seekerData.advantage, props.seekerData.certificate]
})
watch(
  () => props.favorited,
  (newVal) => {
    isFavorited.value = newVal
  },
)

const emit = defineEmits(['click', 'favorite', 'contact'])
const handleCardClick = () => {
  emit('click', props.seekerData)
  navigateToSub(`/seeker-detail/seeker-detail?seekerId=${props.seekerData.id}`)
}

const handleFavorite = () => {
  changeConnect({ guanZhuJobSeekerId: props.seekerData.id }, isFavorited.value, () => {
    isFavorited.value = !isFavorited.value
    emit('favorite', isFavorited.value)
  })
}
</script>
