# 位置搜索工具函数说明

## 功能概述

为 `src/constant/locations.ts` 文件添加了完整的位置搜索功能，支持省市区任意级别的查找，提供了多种搜索方式和实用工具函数。

## 新增功能

### 1. 类型定义

#### LocationItem 接口
```typescript
export interface LocationItem {
  label: string        // 位置名称
  value: string        // 位置编码
  children?: LocationItem[]  // 子级位置数组
}
```

#### LocationSearchResult 接口
```typescript
export interface LocationSearchResult {
  province: LocationItem    // 省份信息
  city?: LocationItem      // 城市信息（可选）
  district?: LocationItem  // 区县信息（可选）
  fullPath: string        // 完整路径（如：北京 / 北京 / 朝阳）
  level: 'province' | 'city' | 'district'  // 匹配级别
}
```

### 2. 核心搜索函数

#### searchLocations() - 基础搜索
```typescript
function searchLocations(keyword: string, locationData?: LocationItem[]): LocationSearchResult[]
```

**功能特点：**
- ✅ 支持省市区三级搜索
- ✅ 不区分大小写匹配
- ✅ 包含匹配（部分匹配即可）
- ✅ 返回完整的层级信息

**使用示例：**
```typescript
import { searchLocations } from '@/constant/locations'

// 搜索包含"北京"的所有位置
const results = searchLocations('北京')
console.log(results)
// 输出：
// [
//   {
//     province: { label: '北京', value: '11' },
//     fullPath: '北京',
//     level: 'province'
//   },
//   {
//     province: { label: '北京', value: '11' },
//     city: { label: '北京', value: '1101' },
//     fullPath: '北京 / 北京',
//     level: 'city'
//   }
// ]

// 搜索包含"朝阳"的所有位置
const chaoyangResults = searchLocations('朝阳')
// 会找到北京朝阳区、长春朝阳区等所有包含"朝阳"的位置
```

#### findLocationByValue() - 精确查找
```typescript
function findLocationByValue(value: string, locationData?: LocationItem[]): LocationSearchResult | null
```

**功能特点：**
- ✅ 根据位置编码精确查找
- ✅ 返回完整的层级信息
- ✅ 未找到时返回null

**使用示例：**
```typescript
import { findLocationByValue } from '@/constant/locations'

// 根据编码查找位置
const location = findLocationByValue('110105')
console.log(location)
// 输出：
// {
//   province: { label: '北京', value: '11' },
//   city: { label: '北京', value: '1101' },
//   district: { label: '朝阳', value: '110105' },
//   fullPath: '北京 / 北京 / 朝阳',
//   level: 'district'
// }
```

#### fuzzySearchLocations() - 智能搜索
```typescript
function fuzzySearchLocations(keyword: string, limit?: number): LocationSearchResult[]
```

**功能特点：**
- ✅ 智能排序：完全匹配 > 开头匹配 > 包含匹配
- ✅ 结果数量限制（默认10条）
- ✅ 适合搜索框实时搜索

**使用示例：**
```typescript
import { fuzzySearchLocations } from '@/constant/locations'

// 智能搜索，返回最相关的结果
const results = fuzzySearchLocations('海', 5)
// 会优先返回完全匹配"海"的位置，然后是以"海"开头的，最后是包含"海"的
```

#### getHotCities() - 热门城市
```typescript
function getHotCities(): LocationSearchResult[]
```

**功能特点：**
- ✅ 返回预定义的热门城市列表
- ✅ 包含北京、上海、广州、深圳等主要城市
- ✅ 适合城市选择器的热门推荐

**使用示例：**
```typescript
import { getHotCities } from '@/constant/locations'

const hotCities = getHotCities()
console.log(hotCities.map(city => city.fullPath))
// 输出：['北京 / 北京', '上海 / 上海', '广东 / 广州', ...]
```

## 实际应用场景

### 1. 搜索框实时搜索
```vue
<template>
  <view>
    <wd-input 
      v-model="searchKeyword" 
      placeholder="请输入城市名称"
      @input="handleSearch"
    />
    <view v-for="result in searchResults" :key="result.fullPath">
      <text>{{ result.fullPath }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref, watch } from 'vue'
import { fuzzySearchLocations } from '@/constant/locations'

const searchKeyword = ref('')
const searchResults = ref([])

const handleSearch = () => {
  if (searchKeyword.value.trim()) {
    searchResults.value = fuzzySearchLocations(searchKeyword.value, 10)
  } else {
    searchResults.value = []
  }
}
</script>
```

### 2. 城市选择器
```vue
<template>
  <view>
    <!-- 热门城市 -->
    <view class="hot-cities">
      <text class="title">热门城市</text>
      <view class="city-grid">
        <view 
          v-for="city in hotCities" 
          :key="city.city?.value"
          @click="selectCity(city)"
          class="city-item"
        >
          {{ city.city?.label }}
        </view>
      </view>
    </view>

    <!-- 搜索结果 -->
    <view v-if="searchResults.length > 0">
      <view 
        v-for="result in searchResults" 
        :key="result.fullPath"
        @click="selectLocation(result)"
        class="search-result-item"
      >
        <text>{{ result.fullPath }}</text>
        <text class="level-tag">{{ getLevelText(result.level) }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getHotCities, fuzzySearchLocations } from '@/constant/locations'

const hotCities = ref([])
const searchResults = ref([])

onMounted(() => {
  hotCities.value = getHotCities()
})

const selectCity = (city) => {
  console.log('选择城市:', city)
  // 处理城市选择逻辑
}

const selectLocation = (location) => {
  console.log('选择位置:', location)
  // 处理位置选择逻辑
}

const getLevelText = (level) => {
  const levelMap = {
    province: '省',
    city: '市',
    district: '区'
  }
  return levelMap[level] || ''
}
</script>
```

### 3. 地址解析
```typescript
import { findLocationByValue, searchLocations } from '@/constant/locations'

// 根据编码获取完整地址
function getFullAddress(provinceCode: string, cityCode?: string, districtCode?: string) {
  const codes = [districtCode, cityCode, provinceCode].filter(Boolean)
  
  for (const code of codes) {
    const location = findLocationByValue(code)
    if (location) {
      return location.fullPath
    }
  }
  
  return '未知地址'
}

// 地址模糊匹配
function matchAddress(address: string) {
  const results = searchLocations(address)
  return results.length > 0 ? results[0] : null
}
```

### 4. 表单验证
```typescript
import { findLocationByValue } from '@/constant/locations'

// 验证位置编码是否有效
function validateLocationCode(code: string): boolean {
  return findLocationByValue(code) !== null
}

// 验证完整地址
function validateFullAddress(provinceCode: string, cityCode: string, districtCode: string): boolean {
  const province = findLocationByValue(provinceCode)
  const city = findLocationByValue(cityCode)
  const district = findLocationByValue(districtCode)
  
  return !!(province && city && district)
}
```

## 性能特点

### 1. 高效搜索
- **时间复杂度**：O(n)，其中n是总的位置数量
- **空间复杂度**：O(m)，其中m是匹配结果数量
- **优化策略**：使用toLowerCase()进行不区分大小写匹配

### 2. 内存友好
- **数据复用**：默认使用全局locations数据，避免重复加载
- **按需返回**：只返回匹配的结果，不复制整个数据结构
- **类型安全**：完整的TypeScript类型定义

### 3. 扩展性强
- **自定义数据源**：支持传入自定义的位置数据
- **灵活配置**：支持限制返回结果数量
- **易于扩展**：可以轻松添加新的搜索算法

## 使用建议

### 1. 搜索性能优化
```typescript
// 对于频繁搜索，建议使用防抖
import { debounce } from 'lodash-es'

const debouncedSearch = debounce((keyword: string) => {
  const results = fuzzySearchLocations(keyword, 10)
  // 处理搜索结果
}, 300)
```

### 2. 结果缓存
```typescript
// 缓存搜索结果，避免重复计算
const searchCache = new Map<string, LocationSearchResult[]>()

function cachedSearch(keyword: string): LocationSearchResult[] {
  if (searchCache.has(keyword)) {
    return searchCache.get(keyword)!
  }
  
  const results = fuzzySearchLocations(keyword)
  searchCache.set(keyword, results)
  return results
}
```

### 3. 错误处理
```typescript
// 安全的搜索函数
function safeSearchLocations(keyword: string): LocationSearchResult[] {
  try {
    if (!keyword || typeof keyword !== 'string') {
      return []
    }
    return fuzzySearchLocations(keyword)
  } catch (error) {
    console.error('位置搜索失败:', error)
    return []
  }
}
```

## 总结

这套位置搜索工具函数提供了完整的省市区查找功能，具有以下优势：

### 主要特点
- 🔍 **全面搜索**：支持省市区三级任意匹配
- 🎯 **精确查找**：支持根据编码精确定位
- 🧠 **智能排序**：按匹配度智能排序结果
- 🏙️ **热门推荐**：内置热门城市列表
- 📱 **移动优化**：适合移动端搜索场景
- 🔧 **易于集成**：简单的API，易于在项目中使用

### 适用场景
- 城市选择器组件
- 地址搜索功能
- 位置筛选功能
- 地址验证和解析
- 热门城市推荐

这些工具函数为意仁直聘应用的位置相关功能提供了强大的支持，可以轻松实现各种位置搜索和选择需求。
