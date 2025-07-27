<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '在线简历',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="mt-4 pb-16">
    <!-- 用户基本信息卡片 -->
    <wd-form ref="form" :model="userInfo">
      <wd-card>
        <!-- 头像和基本信息 -->
        <view class="mb-4">
          <view class="flex items-center">
            <image
              :src="userInfo.avatar"
              mode="aspectFill"
              class="bg-gray-100 w-16 h-16 rounded-full mr-4"
            />
            <view class="flex-1 flex items-center justify-between">
              <view class="flex flex-col gap-">
                <text class="text-lg font-bold text-gray-800 mr-2">{{ userInfo.name }}</text>
                <view class="">{{ userInfo.age }}岁 · {{ userInfo.teChang }}</view>
              </view>
              <view @click="goToProfileEdit">
                <wd-icon name="arrow-right" custom-class="text-4"></wd-icon>
              </view>
            </view>
          </view>
          <view class="flex gap-5 mt-2">
            <view class="flex gap-1">
              <wd-icon name="phone" custom-class="text-4"></wd-icon>
              <text class="text-sm text-gray-500 mb-1">
                {{ userInfo.mobile }}
              </text>
            </view>
            <view class="flex gap-1">
              <wd-icon name="mail" custom-class="text-4"></wd-icon>
              <text class="text-sm text-gray-500">
                {{ userInfo.email }}
              </text>
            </view>
          </view>
        </view>
        <view>
          <wd-divider custom-class="!px-0"></wd-divider>
        </view>
        <!-- 个人简介 -->
        <wd-cell title="自我介绍" vertical custom-class="mt-4 mb-2">
          <wd-textarea
            v-model="userInfo.jianJie"
            placeholder="请输入个人简介"
            auto-height
            no-border
          />
        </wd-cell>
      </wd-card>

      <!-- 个人展示 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">个人展示</text>
      </view>
      <wd-card>
        <!-- 个人展示项目 -->
        <view v-for="(item, index) in showcase" :key="index" class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">{{ item.title }}</text>
          </view>
          <text class="text-xs text-gray-500 block mb-3">{{ item.description }}</text>

          <!-- 图片展示区域 -->
          <view class="grid grid-cols-3 gap-2">
            <view
              v-for="(photo, photoIndex) in item.list"
              :key="photoIndex"
              @click="previewImage(photo, item.list)"
              class="relative aspect-square bg-gray-100 rounded-2 overflow-hidden"
            >
              <image
                v-if="photo.type === ShowcasePhotoEmu.Image"
                :src="photo.url"
                mode="aspectFill"
                class="w-full h-full"
              />
              <view
                v-else-if="photo.type === ShowcasePhotoEmu.Video"
                class="w-full h-full bg-gray-200 flex items-center justify-center"
              >
                <wd-icon name="play-circle-filled" size="24px" color="#666" />
              </view>
              <view v-else class="w-full h-full bg-gray-200 flex items-center justify-center">
                <wd-icon name="add" size="24px" color="#999" />
              </view>
            </view>
          </view>
        </view>
      </wd-card>
      <!-- 技能标签 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">技能标签</text>
        <wd-icon name="add-circle" custom-class="text-5" @click="addSkill" />
      </view>
      <wd-card>
        <view class="flex flex-wrap gap-2">
          <view
            v-for="(skill, index) in skills"
            :key="index"
            class="flex items-center bg-green-50 text-green-600 text-sm px-2 py-1 rounded-1 border border-green-200"
          >
            <text class="mr-1">{{ skill }}</text>
            <wd-icon name="close" size="14px" @click="removeSkill(index)" />
          </view>
        </view>
      </wd-card>
      <!-- 代表作品 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">代表作品</text>
        <wd-icon name="add-circle" custom-class="text-5" @click="addWork" />
      </view>
      <wd-card>
        <view class="flex flex-wrap gap-2">
          <view
            v-for="(work, index) in []"
            :key="index"
            class="flex items-center justify-between p-3 bg-gray-50 rounded-2 mb-2 last:mb-0"
          >
            <view class="flex items-center flex-1">
              <view class="w-2 h-2 bg-primary rounded-full mr-3"></view>
              <text class="text-sm text-gray-700 flex-1">{{ work.title }}</text>
            </view>
            <wd-icon name="arrow-right" size="16px" color="#999" />
          </view>
        </view>
      </wd-card>

      <!-- 操作按钮 -->
      <yr-page-footer>
        <wd-button type="info" :round="false" custom-class="flex-1" @click="previewResume">
          预览简历
        </wd-button>
        <wd-button type="primary" :round="false" custom-class="flex-1" @click="saveResume">
          保存
        </wd-button>
      </yr-page-footer>
    </wd-form>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { toast } from '@/utils/toast'
import { ShowcasePhotoEmu, SKILL_CATEGORIES, type ShowcasePhoto } from '@/constant/resume'
import { navigateBack, navigateToSub } from '@/utils'
import { AppMemberUserUpdateReqVO, getUserInfo, updateUser } from '@/service/app'

// 用户信息数据
const userInfo = ref<AppMemberUserUpdateReqVO>({
  id: 1,
  nickname: '李四',
  avatar: 'https://www.iocoder.cn/x.png',
  sex: 1,
  mobile: '13333916701',
  password: '$2a$04$Fwk//mDrb91IYYzbRsUSM.WGxX9Q6P/ZEe97eNMzA8wp8McyfgoKu',
  status: 0,
  registerIp: '192.168.1.1',
  registerTerminal: 10,
  loginIp: '192.168.1.1',
  loginDate: '2023-01-01T16:00:00',
  name: '张三',
  birthday: '1990-01-01T00:00:00',
  areaId: 110101,
  mark: '优质客户',
  email: 'example@iocoder.cn',
  location: '北京市海淀区',
  age: 30,
  point: 100,
  tagIds: [1, 2, 3],
  levelId: 1,
  experience: 500,
  groupId: 2,
  teChang: 'Java开发',
  biYeYuanXiao: '清华大学',
  jianJie: '5年Java开发经验，精通Spring Boot',
  tags: 'Java,Spring,MySQL',
  huoJiangJiLi: '2021年度优秀员工',
  daiBiaoZuo: '芋道源码开源项目',
  jianJieImages: 'https://www.iocoder.cn/images/1.png,https://www.iocoder.cn/images/2.png',
  jianJieVideos: 'https://www.iocoder.cn/videos/1.mp4',
  jiNengVideos: 'https://www.iocoder.cn/videos/2.mp4',
  qiWangXinZi: '15k-25k',
  workType: '全职',
  companyName: '芋道科技有限公司',
  workLavel: '高级',
  involved: '互联网/IT',
  personNumber: '100-499人',
  networkAddress: 'https://www.iocoder.cn',
  xiangXiAddress: '北京市朝阳区xxx大厦',
  chengLiTime: '2018年',
  companyInfo: '芋道源码是一家专注于...',
  companyCulture: '创新、激情、诚信...',
  benefits: '五险一金、带薪年假、免费零食...',
  recruitment: '招聘Java开发工程师5名...',
  companyImages:
    'https://www.iocoder.cn/images/company1.png,https://www.iocoder.cn/images/company2.png',
  companyVideos: 'https://www.iocoder.cn/videos/company.mp4',
})
const skills = ref(['Java', 'Spring', 'MySQL'])
watch(
  () => userInfo.value,
  (value) => {
    skills.value = value.tags.split(',').map((item) => {
      return item
    })
  },
)
const goToProfileEdit = () => {
  navigateToSub('/profile-edit/profile-edit')
}
onMounted(() => {
  loadUserData()
})

const showcase = computed(() => {
  let jianJieImagesArr = userInfo.value.jianJieImages.split(',')
  let jianJieVideos = userInfo.value.jianJieVideos.split(',')
  let jiNengVideos = userInfo.value.jiNengVideos.split(',')
  return [
    {
      title: '个人展示图片 (最多4张)',
      count: 4,
      description: '展示您的形象、舞台风采或专业照片',
      list: jianJieImagesArr.reduce((list, item, index) => {
        list.push({
          type: ShowcasePhotoEmu.Image,
          url: item,
        })
        if (jianJieImagesArr.length < 4 && index == jianJieImagesArr.length - 1) {
          list.push({
            type: ShowcasePhotoEmu.Add,
            url: item,
          })
        }
        return list
      }, []),
    },
    {
      title: '自我介绍视频 (1个)',
      count: 1,
      description: '展示您的形象、舞台风采或专业照片',
      list: jianJieVideos.reduce((list, item, index) => {
        list.push({
          type: ShowcasePhotoEmu.Video,
          url: item,
        })
        if (jianJieVideos.length < 1 && index == jianJieVideos.length - 1) {
          list.push({
            type: ShowcasePhotoEmu.Add,
            url: item,
          })
        }
        return list
      }, []),
    },
    {
      title: '专业技能视频 (最多3个)',
      count: 3,
      description: '展示您的专业技能、表演片段或作品集锦',
      list: jiNengVideos.reduce((list, item, index) => {
        list.push({
          type: ShowcasePhotoEmu.Video,
          url: item,
        })
        if (jiNengVideos.length < 3 && index == jiNengVideos.length - 1) {
          list.push({
            type: ShowcasePhotoEmu.Add,
            url: item,
          })
        }
        return list
      }, []),
    },
  ]
})

// 加载用户数据
const loadUserData = async () => {
  // 这里可以从API获取真实数据
  let res = await getUserInfo({})
  console.log(res)
  if (res.code === 200) {
    userInfo.value = res.data
    console.log('加载用户数据')
  }
}

// 添加技能
const addSkill = () => {
  // 这里可以打开技能选择弹窗
  uni.showActionSheet({
    itemList: SKILL_CATEGORIES.map((cat) => cat.label),
    success: (res) => {
      const category = SKILL_CATEGORIES[res.tapIndex]
      // 显示该分类下的技能选项
      uni.showActionSheet({
        itemList: category.skills,
        success: (skillRes) => {
          const skill = category.skills[skillRes.tapIndex]
          console.log(skills.value, skill)
          if (!skills.value.includes(skill)) {
            skills.value.push(skill)
          } else {
            toast.info('该技能已存在')
          }
        },
      })
    },
  })
}

// 移除技能
const removeSkill = (index: number) => {
  skills.value = skills.value.splice(index, 1)
}

// 添加作品
const addWork = () => {
  // 这里可以跳转到添加作品页面
  toast.info('跳转到添加作品页面')
  // uni.navigateTo({
  //   url: '/pages-sub/add-work/add-work'
  // })
}

// 预览图片
const previewImage = (photo: ShowcasePhoto, photos) => {
  if (photo.type === ShowcasePhotoEmu.Image) {
    const urls = photos.filter((p) => p.type === 'image').map((p) => p.url)
    uni.previewImage({
      urls,
      current: photo.url,
    })
  } else if (photo.type === ShowcasePhotoEmu.Video) {
    toast.info('播放视频功能开发中')
    // 这里可以实现视频播放功能
  } else {
    // 添加展示内容
    uni.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // 这里应该上传图片到服务器
        toast.success('图片上传成功')
      },
    })
  }
}

// 预览简历
const previewResume = () => {
  toast.info('跳转到简历预览页面')
  // uni.navigateTo({
  //   url: '/pages-sub/resume-preview/resume-preview?id=' + userInfo.value.id
  // })
}

// 保存简历
const saveResume = async () => {
  // 验证必填信息
  if (!userInfo.value.name.trim()) {
    toast.error('请填写姓名')
    return
  }
  if (!userInfo.value.mobile.trim()) {
    toast.error('请填写联系电话')
    return
  }
  let res = await updateUser({ body: userInfo.value })
  toast.success('简历保存成功')
  setTimeout(() => {
    navigateBack()
  }, 500)
}
</script>
