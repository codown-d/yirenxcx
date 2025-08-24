<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  layout: 'blank',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '薏仁直聘',
    enableShareAppMessage: true,
  },
}
</route>
<template>
  <wd-navbar
    :bordered="false"
    :left-arrow="false"
    left-text="薏仁直聘"
    custom-class="font-bold text-primary"
    fixed
    safeAreaInsetTop
    :custom-style="`background-color: rgba(255,255,255, ${opacity})!important`"
  ></wd-navbar>
  <view class="text-[#252525]">
    <scroll-view scroll-y @scroll="handleScroll" @scrolltolower="onScrollToLower" class="h-100vh">
      <view class="relative pb-10">
        <view
          class="absolute top-0 h-full w-full z-0"
          :style="'z-index:-1;background: linear-gradient( 180deg,rgba(56, 200, 164, 0.25) 0%,rgba(56, 200, 164, 0) 160rpx,rgba(245, 246, 250, 1) 20%);'"
        ></view>
        <view
          class="bg-transparent px-4 pb-4 min-h-screen"
          :style="{
            paddingTop: safeAreaInsets?.top + 44 + 'px',
          }"
        >
          <!-- 搜索栏 -->
          <search placeholder="请输入职位名称" class-name="mt-2" @confirm="handleSearch" />
          <!-- 招聘横幅 -->
          <view class="relative mt-3 rounded-3 overflow-hidden h-40" v-if="swiperList.length">
            <wd-swiper :list="swiperList" autoplay></wd-swiper>
          </view>
          <view
            class="flex justify-center mt-3 gap-4 justify-between mt-[10] mb-4"
            v-if="!isLoggedIn"
            @click="onClick"
          >
            <image
              mode="aspectFill"
              src="/static/images/lzp.svg"
              alt=""
              class="flex-1 h-[57px] rounded-1"
            />
            <image
              mode="aspectFill"
              src="/static/images/lqz.svg"
              alt=""
              class="flex-1 h-[57px] rounded-1"
            />
          </view>
          <!-- 筛选标签 -->
          <scroll-view class="whitespace-nowrap mt-3" scroll-x>
            <view class="flex items-center justify-between">
              <view class="flex gap-3">
                <view
                  v-for="tag in filterTags"
                  :key="tag.value"
                  class="flex text-gray-600 items-center gap-1 px-2 py-1.5 rounded-1 bg-white"
                  :class="{
                    '!bg-primary-100 !text-primary': activeFilterTag === tag.value,
                  }"
                  @click="handleFilterChange(tag.value)"
                >
                  <image
                    :src="activeFilterTag === tag.value ? tag.urlh : tag.url"
                    mode="aspectFill"
                    class="w-[20px] h-[20px]"
                  />
                  <text class="text-sm">{{ tag.label }}</text>
                </view>
              </view>
              <view
                class="flex items-center rounded-1 bg-white px-3 py-1.5 gap-1 text-[#8C8C8C]"
                :class="{
                  '!bg-primary-100 !text-primary': !!hasFilter,
                }"
                @click="navigateToSub('/job-filter/job-filter')"
              >
                <image
                  :src="`/static/images/${hasFilter ? 'filterh.svg' : 'filter.svg'}`"
                  mode="aspectFill"
                  class="w-[20px] h-[20px]"
                />
                <text class="text-sm">筛选</text>
              </view>
            </view>
          </scroll-view>
          <!-- 推荐招聘职位标题 -->
          <template v-if="role === RoleEmu.seeker || !isLoggedIn">
            <view class="py-4">
              <text class="text-lg font-semibold">推荐招聘职位</text>
            </view>
            <job-card
              v-for="job in jobList"
              :key="job.id + '_job'"
              :job-data="job"
              v-if="jobList.length"
              :favorited="job.favorited"
            />
            <yr-nodata v-else></yr-nodata>
          </template>
          <!-- 推荐招聘职位标题 -->
          <template v-if="role === RoleEmu.employer || !isLoggedIn">
            <view class="py-4">
              <text class="text-lg font-semibold">推荐求职薏人</text>
            </view>
            <seeker-card
              v-for="seeker in seekerList"
              :key="seeker.id + '_seeker'"
              :seeker-data="seeker"
              :favorited="seeker.favorited"
              v-if="seekerList.length"
            />
            <yr-nodata v-else></yr-nodata>
          </template>
          <div v-if="noMoreData" class="text-center text-gray-400 mt-4">暂无更多数据</div>
        </view>
      </view>
    </scroll-view>
  </view>
  <wd-popup v-model="show" custom-class="!bg-transparent" closable>
    <view class="flex flex-col gap-3 rounded-3 bg-linear-100 p-5 w-[260px]">
      <view class="text-primary font-bold text-4 text-center">请选择您的身份</view>
      <view class="text-[14px] text-center">注册后浏览更多信息</view>
      <view class="flex flex-col gap-3 mt-3">
        <view
          class="bg-[#F5F6FA] rounded-[6px] flex items-center"
          @click="handleClick(RoleEmu.seeker)"
        >
          <wd-img :width="88" :height="76" src="/static/images/yiren.png" custom-class="mr-5" />
          <view>
            <view class="text-[#252525]">薏人</view>
            <view class="flex gap-1 mt-2">
              <tag label="找工作" :closeable="false"></tag>
              <tag label="投简历" :closeable="false"></tag>
            </view>
          </view>
        </view>
        <view
          class="bg-[#F5F6FA] rounded-[6px] flex items-center"
          @click="handleClick(RoleEmu.employer)"
        >
          <wd-img :width="88" :height="76" src="/static/images/zp.png" custom-class="mr-5" />
          <view>
            <view class="text-[#252525]">我来招聘</view>
            <view class="flex gap-1 mt-2">
              <tag
                label="招人才"
                :closeable="false"
                class-name="!bg-[#e0ebf8] !text-[#1D83E2]"
              ></tag>
              <tag
                label="发职位"
                :closeable="false"
                class-name="!bg-[#e0ebf8] !text-[#1D83E2]"
              ></tag>
            </view>
          </view>
        </view>
        <view class="text-[#8C8C8C] text-3 mt-4 text-center">选择身份后将跳转到登录页面</view>
      </view>
    </view>
  </wd-popup>
  <!-- <yr-tab-bar :tabIndex="0"></yr-tab-bar> -->
  <wd-popup v-model="showSharePopup" custom-class="!bg-transparent" closable>
    <view class="flex flex-col gap-3 rounded-3 bg-white p-5 w-[280px]">
      <!-- 标题 -->
      <view class="text-primary font-bold text-4 text-center">邀请好友，获取更多福利</view>
      <!-- 内容 -->
      <view class="text-[#666] text-3 text-center leading-[20px]">
        分享给好友即可获得更多职位推荐和专属优惠
      </view>
      <!-- 分享按钮 -->
      <view
        class="flex justify-center mt-4 py-2 rounded-[6px] bg-primary text-white text-center"
        @click="handleShare"
      >
        点击右上角分享
      </view>
      <!-- 取消按钮 -->
      <view
        class="flex justify-center mt-2 py-2 rounded-[6px] bg-[#F5F6FA] text-[#666] text-center"
        @click="showSharePopup = false"
      >
        取消
      </view>
    </view>
  </wd-popup>
</template>

<script lang="ts" setup>
import { FILTER_TAGS, FilterTag } from '@/constant/recruitment'
import { getSystemInfoSync, navigateToSub } from '@/utils'
import { RoleEmu, useFilterStore, useRoleStore, useUserStore } from '@/store'
import { getJobPage1, getJobSeekerPage, YRZPJobDO, YRZPJobSeekerDO } from '@/service/app'
import { getBannerList } from '@/service/customize'
import { keys } from 'lodash-es'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import { toast } from '@/utils/toast'

const { safeAreaInsets } = getSystemInfoSync()
const { getRole, setRole } = useRoleStore()
let { getFilter } = useFilterStore()

const opacity = ref(0)
const show = ref(false)
let role = ref(getRole())
const activeFilterTag = ref()
const jobList = ref<any[]>([])
const seekerList = ref<any[]>([])
const filterTags = ref<FilterTag[]>(FILTER_TAGS)
const isShowPopup = ref(false)
const filter = ref(getFilter())
const isLoggedIn = ref(!!uni.getStorageSync('token'))

const swiperList = ref([])
function handleClick(type) {
  setRole(type)
  setTimeout(() => {
    navigateToSub('/login/login')
  }, 0)
}
const onClick = () => {
  toast.info('您还未登录，请先进行登录')
  setTimeout(() => {
    navigateToSub('/login/login')
  }, 1000)
}

const hasFilter = computed(() => keys(filter.value).some((tag) => filter.value[tag]))
const handleScroll = (e: any) => {
  if (e.detail.scrollTop > 100) {
    opacity.value = 1
  } else {
    opacity.value = e.detail.scrollTop / 100
  }
}

const handleFilterChange = (type: string) => {
  activeFilterTag.value = type === activeFilterTag.value ? '' : type
  getDataFn()
}
let pageNo = ref(1)
let pageSize = ref(10)
let noMoreData = ref(false)
const { getGuanZhuJobSeekerFn } = useConnect()
let getDataFn = async (keyword?: string) => {
  if (noMoreData.value) return
  if (!isLoggedIn.value || role.value === RoleEmu.employer) {
    let resJobSeeker = await getGuanZhuJobSeekerFn({
      field: 'guanZhuJobSeekerId',
    })
    let res = await getJobSeekerPage({
      params: {
        keyword,
        pageNo: pageNo.value,
        pageSize: !isLoggedIn.value ? 6 : pageSize.value,
        ...filter.value,
        jobType: activeFilterTag.value,
      },
    })
    if (pageSize.value == res.data.list.length) {
      pageNo.value++
    } else {
      noMoreData.value = true
    }
    seekerList.value = [
      ...seekerList.value,
      ...res.data.list.map((item) => {
        let info = JSON.parse(item.info || '{}')
        item['info'] = info
        return {
          ...item,
          favorited: resJobSeeker.some((item2) => item2.guanZhuJobSeekerId === item.id),
        }
      }),
    ]
  }
  if (!isLoggedIn.value || role.value === RoleEmu.seeker) {
    let resJob = await getGuanZhuJobSeekerFn({
      field: 'guanZhuJobId',
    })
    let res = await getJobPage1({
      params: {
        keyword,
        pageNo: pageNo.value,
        pageSize: !isLoggedIn.value ? 6 : pageSize.value,
        ...filter.value,
        jobType: activeFilterTag.value,
      },
    })
    if (pageSize.value == res.data.list.length) {
      pageNo.value++
    } else {
      noMoreData.value = true
    }
    jobList.value = [
      ...jobList.value,
      ...res.data.list.map((item) => {
        let info = JSON.parse(item.info || '{}')
        item['info'] = info
        return {
          ...item,
          favorited: resJob.some((item2) => item2.guanZhuJobId === item.id),
        }
      }),
    ]
    console.log()
  }
}
let showSharePopup = ref(false)
const onScrollToLower = () => {
  let token = uni.getStorageSync('token')
  let isShare = uni.getStorageSync('isShare')
  if (!isShowPopup.value && !token) {
    show.value = true
    isShowPopup.value = true
  } else if (isShare != 1) {
    showSharePopup.value = true
  } else {
    getDataFn()
  }
}
const handleSearch = (val) => {
  getDataFn(val)
}
onLoad(async () => {
  let res = await getBannerList({ params: { position: 1 } })
  swiperList.value = res.data.map((item) => item.picUrl)
})
onShow(() => {
  noMoreData.value = false
  pageNo.value = 1
  seekerList.value = []
  jobList.value = []
  show.value = false
  isShowPopup.value = false
  isLoggedIn.value = !!uni.getStorageSync('token')
  role.value = getRole()
  filter.value = getFilter()
  getDataFn()
  uni.setTabBarItem({
    index: 0,
    text: role.value === RoleEmu.employer ? '薏人' : '求职',
  })
})
const handleShare = () => {
  showSharePopup.value = false
}
// 右上角分享给好友
onShareAppMessage((res) => {
  uni.setStorageSync('isShare', '1')
  if (res.from === 'button') {
    console.log('用户点击了页面内转发按钮')
  } else if (res.from === 'menu') {
    console.log('用户通过右上角菜单分享')
  }
  return {
    title: '薏人直聘',
    path: '/pages/index/index?from=share', // 分享后跳转路径
  }
})

// 右上角分享到朋友圈
onShareTimeline(() => {
  return {
    title: '薏人直聘',
    query: 'from=timeline',
  }
})
</script>
