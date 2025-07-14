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
  <view class="mt-2 px-4">
    <!-- 搜索和筛选 -->
    <view class="flex items-center gap-3">
      <view class="flex-1"><search /></view>
      <view class="flex items-center w-13 justify-end" @click="showFilterMenu">
        <text class="text-sm text-gray-600 mr-1">{{ filterText }}</text>
        <wd-icon name="arrow-down"></wd-icon>
      </view>
    </view>

    <!-- 违规记录列表 -->
    <view class="">
      <view
        v-for="(item, index) in violationList"
        :key="item.id"
        class="bg-white rounded-lg p-4 mb-3 shadow-sm"
      >
        <!-- 用户信息和状态 -->
        <view class="flex items-center justify-between mb-3">
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
            <text class="text-sm text-gray-800">{{ item.violationCode }}</text>
          </view>
          <view class="flex items-center">
            <text class="text-sm text-gray-500 w-20">违规类型：</text>
            <text class="text-sm text-red-600">{{ item.violationType }}</text>
          </view>
          <view class="flex items-start">
            <text class="text-sm text-gray-500 w-20 flex-shrink-0">违规描述：</text>
            <text class="text-sm text-gray-800 flex-1">{{ item.description }}</text>
          </view>
          <view class="flex items-start">
            <text class="text-sm text-gray-500 w-20 flex-shrink-0">处理结果：</text>
            <text class="text-sm text-orange-600 flex-1">{{ item.result }}</text>
          </view>
        </view>

        <!-- 时间和订正信息 -->
        <view class="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <text class="text-xs text-gray-400">举报时间：{{ item.reportTime }}</text>
          <text class="text-xs text-gray-400">订正：{{ item.correctionCount }}项</text>
        </view>
      </view>
    </view>

    <!-- 加载更多 -->
    <view v-if="hasMore" class="flex justify-center py-4">
      <wd-button class="text-primary text-sm" :disabled="loading" @click="loadMore">
        {{ loading ? '加载中...' : '加载更多' }}
      </wd-button>
    </view>
    <view class="flex flex-col">
      <view class="text-center mb-2">
        <text class="text-sm text-gray-600">本月共处理违规案例 {{ monthlyStats.total }} 起</text>
      </view>
      <view class="text-center mb-4">
        <text class="text-xs text-gray-500">平台致力于为用户提供安全、诚信的求职招聘环境</text>
      </view>
    </view>
    <!-- 底部统计和举报 -->
    <view class="fixed left-0 right-0 bottom-4 z-10 p-4 bg-white shadow-sm">
      <view class="text-center flex justify-center justify-between">
        <view class="text-left">
          <text class="text-sm text-gray-600 block mb-2">发现违规行为？</text>
          <text class="text-xs text-gray-500 block">请及时举报，共同维护平台秩序</text>
        </view>
        <wd-button type="primary" :round="false" @click="showReportDialog">
          <wd-icon name="warning"></wd-icon>
          我要举报
        </wd-button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { toast } from '@/utils/toast'

// 数据类型定义
interface MonthlyStats {
  total: number
  processed: number
  processing: number
  pending?: number
  monthlyTotal?: number
}

// 响应式数据
const searchKeyword = ref('')
const violationList = ref<ViolationRecord[]>([])
const loading = ref(false)
const hasMore = ref(true)
const currentPage = ref(1)
const pageSize = ref(10)
const currentFilter = ref('all')

// 筛选相关
const showFilterPicker = ref(false)
const filterColumns = ref([
  [
    { label: '全部', value: 'all' },
    { label: '已处理', value: 'processed' },
    { label: '处理中', value: 'processing' },
    { label: '待处理', value: 'pending' },
    { label: '虚假信息', value: 'fake_info' },
    { label: '恶意行为', value: 'malicious' },
  ],
])

// 月度统计
const monthlyStats = ref<MonthlyStats>({
  total: 3,
  processed: 2,
  processing: 1,
})

// 计算属性
const filterText = computed(() => {
  const option = filterColumns.value[0].find((item) => item.value === currentFilter.value)
  return option?.label || '全部'
})

// 页面加载
onMounted(() => {
  loadViolationList()
  loadViolationStats()
  loadViolationTypes()
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
const loadViolationList = async (reset = false) => {
  if (loading.value) return

  try {
    loading.value = true

    if (reset) {
      currentPage.value = 1
      violationList.value = []
    }

    // 调用真实的API接口
    const params: ViolationListParams = {
      page: currentPage.value,
      pageSize: pageSize.value,
      keyword: searchKeyword.value.trim() || undefined,
      filter: currentFilter.value !== 'all' ? currentFilter.value : undefined,
    }

    const res = await getViolationList({ params })

    if (res.code === 0 && res.data) {
      const newData = res.data.list || []

      if (reset) {
        violationList.value = newData
      } else {
        violationList.value.push(...newData)
      }

      hasMore.value = newData.length === pageSize.value && currentPage.value < (res.data.pages || 1)
      currentPage.value++
      return
    } else {
      toast.error(res.msg || '获取违规记录失败')
      return
    }
  } catch (error) {
    console.error('加载违规记录失败:', error)
    toast.error('加载失败，请重试')
  } finally {
    loading.value = false
  }
}

// 加载违规统计信息
const loadViolationStats = async () => {
  try {
    const res = await getViolationStats()
    if (res.code === 0 && res.data) {
      monthlyStats.value = {
        total: res.data.monthlyTotal || res.data.total || 3,
        processed: res.data.processed || 2,
        processing: res.data.processing || 1,
        pending: res.data.pending || 0,
      }
    }
  } catch (error) {
    console.error('加载统计信息失败:', error)
    // 使用默认值
    monthlyStats.value = {
      total: 3,
      processed: 2,
      processing: 1,
    }
  }
}

// 加载违规类型
const loadViolationTypes = async () => {
  try {
    const res = await getViolationTypes()
    if (res.code === 0 && res.data) {
      // 更新筛选选项
      const typeOptions = res.data.map((item) => ({
        label: item.label,
        value: item.value,
      }))

      filterColumns.value[0] = [
        { label: '全部', value: 'all' },
        { label: '已处理', value: 'processed' },
        { label: '处理中', value: 'processing' },
        { label: '待处理', value: 'pending' },
        ...typeOptions,
      ]
    }
  } catch (error) {
    console.error('加载违规类型失败:', error)
  }
}

// 搜索输入
const onSearchInput = () => {
  // 可以添加防抖逻辑
}

// 执行搜索
const handleSearch = () => {
  loadViolationList(true)
}

// 显示筛选菜单
const showFilterMenu = () => {
  showFilterPicker.value = true
}

// 筛选确认
const onFilterConfirm = (value: any) => {
  currentFilter.value = value.selectedOptions[0].value
  showFilterPicker.value = false
  loadViolationList(true)
}

// 加载更多
const loadMore = () => {
  loadViolationList(false)
}

// 显示更多菜单
const showMoreMenu = () => {
  uni.showActionSheet({
    itemList: ['分享', '收藏', '举报问题'],
    success: (res) => {
      switch (res.tapIndex) {
        case 0:
          toast.info('分享功能开发中')
          break
        case 1:
          toast.info('收藏功能开发中')
          break
        case 2:
          showReportDialog()
          break
      }
    },
  })
}

// 显示设置
const showSettings = () => {
  toast.info('设置功能开发中')
}

// 显示举报对话框
const showReportDialog = () => {
  uni.showActionSheet({
    itemList: ['举报用户违规', '举报职位违规', '举报帖子违规', '其他违规行为'],
    success: (res) => {
      const reportTypes = [
        { type: 'user', title: '举报用户违规' },
        { type: 'job', title: '举报职位违规' },
        { type: 'post', title: '举报帖子违规' },
        { type: 'other', title: '其他违规行为' },
      ]

      const selectedType = reportTypes[res.tapIndex]
      showReportForm(selectedType.type as 'user' | 'job' | 'post' | 'other')
    },
  })
}

// 显示举报表单
const showReportForm = (targetType: 'user' | 'job' | 'post' | 'other') => {
  uni.showModal({
    title: '举报违规行为',
    content: '请详细描述您发现的违规行为，我们会及时处理',
    confirmText: '提交举报',
    editable: true,
    placeholderText: '请详细描述违规行为...',
    success: async (res) => {
      if (res.confirm && res.content) {
        await submitReportRequest(targetType, res.content)
      }
    },
  })
}

// 提交举报请求
const submitReportRequest = async (
  targetType: 'user' | 'job' | 'post' | 'other',
  description: string,
) => {
  try {
    loading.value = true

    const reportData: ReportRequest = {
      targetType,
      violationType: '其他违规',
      description: description.trim(),
      reporterContact: '', // 可以从用户信息中获取
    }

    const res = await submitReport({ body: reportData })

    if (res.code === 0) {
      toast.success('举报提交成功，我们会及时处理')
      uni.showModal({
        title: '举报成功',
        content: `举报编号：${res.data.reportCode}\n请保存此编号以便查询处理进度`,
        showCancel: false,
        confirmText: '知道了',
      })
    } else {
      toast.error(res.msg || '举报提交失败')
    }
  } catch (error) {
    console.error('提交举报失败:', error)
    toast.error('网络错误，请稍后重试')
  } finally {
    loading.value = false
  }
}
</script>
