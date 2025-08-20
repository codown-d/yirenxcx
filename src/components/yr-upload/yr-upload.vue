<template>
  <wd-upload
    :custom-class="customClass"
    :file-list="list"
    :limit="limit"
    image-mode="aspectFill"
    :action="uploadUrl"
    :accept="accept"
    :header="{ 'tenant-id': 1 }"
    @change="handleChange"
  ></wd-upload>
</template>

<script lang="ts" setup>
import { getEnvBaseUploadUrl } from '@/utils'
import { UploadFileType } from 'wot-design-uni/components/wd-upload/types'

interface UploadFile {
  url: string
}
const props = defineProps({
  customClass: {
    type: String,
    default: 'rounded-full',
  },
  limit: {
    type: Number,
    default: 1,
  },
  modelValue: {
    type: String,
    default: () => '',
  },
  accept: {
    type: String as PropType<UploadFileType>,
    default: 'image',
  },
})

const list = ref([])
const uploadUrl = computed(() => {
  return `${getEnvBaseUploadUrl()}/app-api/infra/file/upload`
})
watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      list.value = val
        .split(',')
        .filter((item) => item)
        .map((item) => {
          return { url: item }
        })
    }
  },
)
const emit = defineEmits(['update:modelValue'])
const handleChange = async ({ fileList = [] }) => {
  list.value = fileList.map((item) => {
    if (item.percent === 100) {
      return { url: JSON.parse(item.response).data }
    } else {
      return { url: item.url }
    }
  })
  emit('update:modelValue', list.value.map((item) => (item as UploadFile).url).join(','))
}
</script>
