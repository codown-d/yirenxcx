<template>
  <view class="h-100vh">
    <template v-for="(item, index) in num" :key="index">
      <slot :item="item" />
    </template>
    <wd-loadmore :state="state" @reload="loadmore" />
  </view>
</template>

<script lang="ts" setup>
import { onLoad, onReachBottom } from '@dcloudio/uni-app'
import { LoadMoreState } from 'wot-design-uni/components/wd-loadmore/types'

const state = ref<LoadMoreState>('loading')
const num = ref<number>(0)
const max = ref<number>(60)

onReachBottom(() => {
  if (num.value === 45) {
    state.value = 'error'
  } else if (num.value < max.value) {
    loadmore()
  } else if (num.value === max.value) {
    state.value = 'finished'
  }
})

onLoad(() => {
  loadmore()
})

function loadmore() {
  setTimeout(() => {
    num.value = num.value + 15
    state.value = 'loading'
  }, 200)
}
</script>
