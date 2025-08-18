<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '违规公示',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="px-4 h-[80vh]">
    <!-- 搜索和筛选 -->
    <view class="flex items-center gap-3" v-if="false">
      <view class="flex-1"><search @confirm="handleSearch" /></view>
      <wd-picker
        :columns="filterColumns"
        v-model="filterText"
        use-default-slot
        @confirm="confirmFilter"
        :z-index="9999999"
      >
        <view class="flex items-center justify-end">
          <text class="text-sm text-gray-600 mr-1">{{ filterText }}</text>
          <wd-icon name="arrow-down"></wd-icon>
        </view>
      </wd-picker>
    </view>

    <!-- 违规记录列表 -->
    <view class="">
      <view
        v-for="(item, index) in violationList"
        :key="item.id"
        class="bg-white rounded-lg p-4 mb-3 shadow-sm"
      >
        <!-- 用户信息和状态 -->
        <view class="flex items-center justify-between mb-3" v-if="false">
          <view class="flex items-center">
            <text class="text-base font-semibold text-gray-900 mr-2">{{ item.userName }}</text>
            <view
              v-for="tag in item.tags"
              :key="tag.type"
              class="px-2 py-1 rounded text-xs mr-1"
              :class="getTagClass(tag.type)"
            >
              {{ tag.label }}
            </view>
          </view>
          <view class="px-2 py-1 rounded text-xs" :class="getStatusClass(item.status)">
            {{ getStatusText(item.status) }}
          </view>
        </view>

        <!-- 违规信息 -->
        <view class="space-y-2">
          <view class="flex items-center">
            <text class="text-sm text-gray-500 w-20">违规编号：</text>
            <text class="text-sm text-gray-800">{{ item.id }}</text>
          </view>
          <view class="flex items-center">
            <text class="text-sm text-gray-500 w-20">违规类型：</text>
            <text class="text-sm text-red-600">
              {{ item.minGanCi ? '敏感词违规' : '虚假信息' }}
            </text>
          </view>
          <view class="flex items-start">
            <text class="text-sm text-gray-500 w-20 flex-shrink-0">违规描述：</text>
            <text class="text-sm text-gray-800 flex-1">{{ item.minGanCi }}</text>
          </view>
          <view class="flex items-start">
            <text class="text-sm text-gray-500 w-20 flex-shrink-0">处理结果：</text>
            <text class="text-sm text-orange-600 flex-1">{{ '已记录' }}</text>
          </view>
        </view>
        <!-- 时间和订正信息 -->
        <view class="flex items-center justify-between mt-3 border-t border-gray-100">
          <text class="text-xs text-gray-400">
            举报时间：{{ dayjs(item.createTime).format('YYYY-MM-DD HH:mm') }}
          </text>
        </view>
      </view>
    </view>

    <!-- 加载更多 -->
    <view v-if="hasMore" class="flex justify-center py-4">
      <wd-button class="text-primary text-sm" :disabled="loading" @click="loadMore">
        {{ loading ? '加载中...' : '加载更多' }}
      </wd-button>
    </view>
    <yr-page-footer>
      <view class="flex flex-col justify-center w-full">
        <view class="text-center mb-2">
          <text class="text-sm text-gray-600">本月共处理违规案例 {{ total }} 起</text>
        </view>
        <view class="text-center mb-4">
          <text class="text-xs text-gray-500">平台致力于为用户提供安全、诚信的求职招聘环境</text>
        </view>
      </view>
    </yr-page-footer>

    <!-- 底部统计和举报 -->
    <view class="fixed left-0 right-0 bottom-4 z-10 p-4 bg-white shadow-sm" v-if="false">
      <view class="text-center flex justify-center justify-between">
        <view class="text-left">
          <text class="text-sm text-gray-600 block mb-2">发现违规行为？</text>
          <text class="text-xs text-gray-500 block">请及时举报，共同维护平台秩序</text>
        </view>
        <wd-button type="primary" :round="false">
          <wd-icon name="warning"></wd-icon>
          我要举报
        </wd-button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { getWeiGuiPage, YRZPWeiGuiRespAppVO } from '@/service/app'
import dayjs from 'dayjs'

const submitReport = async (params: any) => {
  return {
    code: 0,
    data: {
      reportId: 'report_' + Date.now(),
      status: 'submitted',
    },
    msg: 'success',
  }
}

interface ReportRequest {
  type: string
  targetId: string
  targetType: 'user' | 'post' | 'comment'
  reason: string
  description?: string
  evidence?: string[]
}
interface MonthlyStats {
  total: number
  processed: number
  processing: number
  pending?: number
  monthlyTotal?: number
}

// 响应式数据
const violationList = ref<YRZPWeiGuiRespAppVO[]>([])
const loading = ref(false)
const hasMore = ref(true)
const currentPage = ref(1)
const pageSize = ref(20)
let filter = ref({ type: 'all' })

const filterColumns = ref([
  [
    { label: '全部', value: 'all' },
    { label: '已处理', value: 'processed' },
    { label: '处理中', value: 'processing' },
    { label: '待处理', value: 'pending' },
    { label: '虚假信息', value: 'fake_info' },
    { label: '恶薏行为', value: 'malicious' },
  ],
])

const total = computed(() => {
  return violationList.value.filter((it) => {
    const targetTime = dayjs(it.createTime) // 假设你要判断的时间

    const oneMonthAgo = dayjs().subtract(1, 'month')

    const isWithinOneMonth = targetTime.isAfter(oneMonthAgo)
    return isWithinOneMonth
  }).length
})
// 月度统计
const monthlyStats = ref<MonthlyStats>({
  total: 3,
  processed: 2,
  processing: 1,
})

// 计算属性
const filterText = computed(() => {
  const option = filterColumns.value[0].find((item) => item.value === filter.value.type)
  return option?.label || '全部'
})

// 页面加载
onMounted(() => {
  loadViolationList()
})

// 获取标签样式
const getTagClass = (type: string) => {
  switch (type) {
    case 'jobseeker':
      return 'bg-blue-100 text-blue-600'
    case 'employer':
      return 'bg-green-100 text-green-600'
    case 'verified':
      return 'bg-orange-100 text-orange-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

// 获取状态样式
const getStatusClass = (status: string) => {
  switch (status) {
    case 'processed':
      return 'bg-green-100 text-green-600'
    case 'processing':
      return 'bg-orange-100 text-orange-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

// 获取状态文本
const getStatusText = (status: string) => {
  switch (status) {
    case 'processed':
      return '已处理'
    case 'processing':
      return '处理中'
    default:
      return '待处理'
  }
}
// 加载违规记录列表
const loadViolationList = async (reset = false, keyword = '') => {
  if (reset) {
    currentPage.value = 1
  }
  loading.value = true
  try {
    let res = await getWeiGuiPage({
      params: {
        ...filter.value,
        pageNo: currentPage.value,
        pageSize: pageSize.value,
      },
    })

    loading.value = false
    currentPage.value = currentPage.value + 1
    if (res.data.list.length < pageSize.value) {
      hasMore.value = false
    }
    violationList.value = res.data.list
  } finally {
    loading.value = false
  }
}

// 执行搜索
const handleSearch = (val) => {
  filter.value = { ...filter.value, keyword: val }
  loadViolationList(true)
}
const confirmFilter = ({ value }) => {
  filter.value = { ...filter.value, type: value }
  loadViolationList(true)
}

// 加载更多
const loadMore = () => {
  loadViolationList(false)
}
</script>
