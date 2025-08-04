<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '基本信息',
    navigationStyle: 'custom',
    className: 'bg-bar-white',
  },
}
</route>

<template>
  <employer v-if="isEmployer" />
  <seeker v-else />
</template>

<script setup lang="ts">
import employer from './components/employer.vue'
import seeker from './components/seeker.vue'
import { RoleEmu, useRoleStore } from '@/store'
const { getRole } = useRoleStore()

const isEmployer = computed(() => {
  return getRole() === RoleEmu.employer
})
</script>
