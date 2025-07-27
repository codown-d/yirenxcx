<template>
  <wd-upload
    :custom-class="customClass"
    :file-list="list"
    :limit="limit"
    image-mode="aspectFill"
    :action="uploadUrl"
    :accept="accept"
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
  fileList: {
    type: Array as PropType<UploadFile[]>,
    default: () => [],
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
  () => props.fileList,
  (val) => {
    list.value = val
  },
)
const emit = defineEmits(['change'])
const handleChange = async ({ fileList = [] }) => {
  list.value = fileList.map((item) => {
    if (item.percent === 100) {
      return { url: JSON.parse(item.response).data }
    } else {
      return { url: item.url }
    }
  })
  emit('change', list.value)
}
</script>
