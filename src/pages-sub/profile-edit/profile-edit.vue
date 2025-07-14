<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '个人资料',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="mx-4 mt-2">
    <!-- 基本信息 -->
    <text class="text-base font-semibold text-gray-900 block mb-4">基本信息</text>
    <wd-form ref="form" :model="userForm">
      <!-- 头像 -->
      <wd-cell title="头像" vertical>
        <wd-upload :file-list="[]" image-mode="aspectFill"></wd-upload>
      </wd-cell>

      <!-- 姓名 -->
      <wd-cell title="姓名" vertical>
        <wd-input v-model="userForm.nickname" placeholder="请输入姓名" />
      </wd-cell>

      <!-- 专业特长 -->
      <wd-cell title="专业特长" vertical>
        <wd-input v-model="userForm.specialty" placeholder="请输入专业特长" />
      </wd-cell>

      <!-- 手机号 -->
      <wd-cell title="手机号" vertical>
        <wd-input v-model="userForm.mobile" placeholder="请输入手机号" />
      </wd-cell>

      <!-- 邮箱地址 -->
      <wd-cell title="邮箱地址" vertical>
        <wd-input v-model="userForm.email" placeholder="请输入邮箱地址" />
      </wd-cell>

      <!-- 所在地区 -->
      <wd-cell title="所在地区" vertical>
        <wd-col-picker
          v-model="value"
          :columns="area"
          :column-change="columnChange"
        ></wd-col-picker>
      </wd-cell>

      <!-- 毕业院校 -->
      <wd-cell title="毕业院校" vertical>
        <wd-input v-model="userForm.school" placeholder="请输入毕业院校" />
      </wd-cell>
      <!-- 年龄 -->
      <wd-cell title="年龄">
        <wd-picker v-model="value" :columns="ageColumns" />
      </wd-cell>

      <!-- 性别 -->
      <wd-cell title="性别">
        <wd-picker v-model="value" :columns="genderColumns" />
      </wd-cell>

      <!-- 保存按钮 -->
      <wd-button
        :disabled="loading"
        block
        :round="false"
        :loading="loading"
        @click="saveProfile"
        custom-class="mt-4"
      >
        {{ loading ? '保存中...' : '保存' }}
      </wd-button>
    </wd-form>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import type { OAuth2UserUpdateReqVO } from '@/service/index/types'
import { useColPickerData } from '@/hooks/useColPickerData'

// 表单数据
const userForm = ref({
  nickname: '',
  mobile: '',
  email: '',
  sex: 0, // 0: 未知, 1: 男, 2: 女
  avatar: '',
  specialty: '', // 专业特长
  region: '', // 所在地区
  school: '', // 毕业院校
  age: 0, // 年龄
})

// 加载状态
const loading = ref(false)

// 选择器显示状态
const showRegionPicker = ref(false)
const showAgePicker = ref(false)
const showGenderPicker = ref(false)

// 性别文本
const genderText = computed(() => {
  switch (userForm.value.sex) {
    case 1:
      return '男'
    case 2:
      return '女'
    default:
      return '请选择性别'
  }
})

const { colPickerData, findChildrenByCode } = useColPickerData()

const value = ref<string[]>(['150000', '150100', '150121'])

const area = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text,
    }
  }),
  findChildrenByCode(colPickerData, '150000')!.map((item) => {
    return {
      value: item.value,
      label: item.text,
    }
  }),
  findChildrenByCode(colPickerData, '150100')!.map((item) => {
    return {
      value: item.value,
      label: item.text,
    }
  }),
])

const columnChange = ({ selectedItem, resolve, finish }) => {
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text,
        }
      }),
    )
  } else {
    finish()
  }
}
// 年龄选择器数据
const ageColumns = ref([
  Array.from({ length: 50 }, (_, i) => ({
    label: `${i + 18}岁`,
    value: i + 18,
  })),
])

// 性别选择器数据
const genderColumns = ref([
  [
    { label: '男', value: 1 },
    { label: '女', value: 2 },
  ],
])

// 页面加载时获取用户信息
onMounted(() => {
  loadUserInfo()
})

// 加载用户信息
const loadUserInfo = async () => {
  try {
    const res = await getUserInfo({})
    if (res.code === 0 && res.data) {
      const userData = res.data
      userForm.value = {
        nickname: userData.nickname || '',
        mobile: userData.mobile || '',
        email: userData.email || '',
        sex: userData.sex || 0,
        avatar: userData.avatar || '',
        specialty: '', // 这些字段需要从其他接口获取或扩展
        region: '',
        school: '',
        age: 0,
      }
    }
  } catch (error) {
    console.error('获取用户信息失败:', error)
    toast.error('获取用户信息失败')
  }
}

// 选择头像
const chooseAvatar = () => {
  uni.showActionSheet({
    itemList: ['拍照', '从相册选择'],
    success: (res) => {
      const sourceType = res.tapIndex === 0 ? ['camera'] : ['album']

      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType,
        success: async (imageRes) => {
          try {
            loading.value = true

            // 实现文件上传逻辑
            const tempFilePath = imageRes.tempFilePaths[0]

            // 这里应该调用真实的上传接口
            // const formData = new FormData()
            // formData.append('file', tempFilePath)
            // const uploadRes = await uploadFile({ params: formData })
            // userForm.value.avatar = uploadRes.data

            // 临时使用本地路径进行预览
            userForm.value.avatar = tempFilePath
            toast.success('头像选择成功')
          } catch (error) {
            console.error('头像上传失败:', error)
            toast.error('头像上传失败')
          } finally {
            loading.value = false
          }
        },
        fail: () => {
          toast.error('选择图片失败')
        },
      })
    },
  })
}

// 选择地区
const chooseRegion = () => {
  showRegionPicker.value = true
}

// 地区确认
const onRegionConfirm = (value: any) => {
  userForm.value.region = value.selectedOptions[0].label
  showRegionPicker.value = false
}

// 选择年龄
const chooseAge = () => {
  showAgePicker.value = true
}

// 年龄确认
const onAgeConfirm = (value: any) => {
  userForm.value.age = value.selectedOptions[0].value
  showAgePicker.value = false
}

// 选择性别
const chooseGender = () => {
  showGenderPicker.value = true
}

// 性别确认
const onGenderConfirm = (value: any) => {
  userForm.value.sex = value.selectedOptions[0].value
  showGenderPicker.value = false
}

// 表单验证
const validateForm = () => {
  if (!userForm.value.nickname.trim()) {
    toast.error('请输入姓名')
    return false
  }

  if (userForm.value.nickname.trim().length < 2) {
    toast.error('姓名至少需要2个字符')
    return false
  }

  if (!userForm.value.mobile.trim()) {
    toast.error('请输入手机号')
    return false
  }

  if (!/^1[3-9]\d{9}$/.test(userForm.value.mobile)) {
    toast.error('请输入正确的手机号格式')
    return false
  }

  if (userForm.value.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userForm.value.email)) {
    toast.error('请输入正确的邮箱地址格式')
    return false
  }

  if (userForm.value.sex === 0) {
    toast.error('请选择性别')
    return false
  }

  return true
}

// 保存个人资料
const saveProfile = async () => {
  // 表单验证
  if (!validateForm()) {
    return
  }

  try {
    loading.value = true

    const updateData: OAuth2UserUpdateReqVO = {
      nickname: userForm.value.nickname.trim(),
      mobile: userForm.value.mobile.trim(),
      email: userForm.value.email?.trim() || undefined,
      sex: userForm.value.sex,
    }

    const res = await updateUserInfo({ body: updateData })

    if (res.code === 0) {
      toast.success('个人资料保存成功')

      // 延迟返回，让用户看到成功提示
      setTimeout(() => {
        uni.navigateBack({
          success: () => {
            // 可以在这里触发父页面刷新用户信息
            uni.$emit('userInfoUpdated')
          },
        })
      }, 1000)
    } else {
      toast.error(res.msg || '保存失败，请重试')
    }
  } catch (error) {
    console.error('保存个人资料失败:', error)
    toast.error('网络错误，请检查网络连接后重试')
  } finally {
    loading.value = false
  }
}
</script>
