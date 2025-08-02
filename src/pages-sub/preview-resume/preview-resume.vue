<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '预览简历',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <resume />
</template>

<script setup lang="ts">
import resume from './components/resume.vue'
</script>
