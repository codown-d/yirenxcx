<template>
  <view>
    <wd-popup
      v-model="showPopup"
      :close-on-click-modal="false"
      custom-class="wd-privacy-popup"
      @close="handleClose"
    >
      <view class="wd-privacy-popup__header">
        <view class="wd-picker__title">{{ title }}</view>
      </view>
      <view class="wd-privacy-popup__container">
        <text>{{ desc }}</text>
        <text>
          {{ protocol }}
        </text>
        <text>{{ subDesc }}</text>
      </view>
      <view class="wd-privacy-popup__footer">
        <wd-button
          custom-class="wd-privacy-popup__footer-disagree wd-button is-block is-round is-medium is-plain"
          id="disagree-btn"
          type="info"
          @click="handleDisagree"
        >
          拒绝
        </wd-button>
        <wd-button
          custom-class="wd-privacy-popup__footer-agree wd-button is-primary is-block is-round is-medium"
          id="agree-btn"
          open-type="agreePrivacyAuthorization"
          @agreeprivacyauthorization="handleAgree"
        >
          同意
        </wd-button>
      </view>
    </wd-popup>
  </view>
</template>

<script lang="ts">
export default {
  name: 'privacy-popup',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  },
}
</script>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'

type Props = {
  title?: string // 标题
  desc?: string // 描述
  subDesc?: string // 字描述
  protocol?: string // 协议名称
  showPopup: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '用户隐私保护提示',
  desc: '感谢您使用本应用，您使用本应用的服务之前请仔细阅读并同意',
  subDesc:
    '。当您点击同意并开始时用产品服务时，即表示你已理解并同息该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法使用相应服务。',
  protocol: '《用户隐私保护指引》',
})

let showPopup = computed(() => props.showPopup)

const emit = defineEmits(['agree', 'disagree'])

/**
 * 同意隐私协议
 */
function handleAgree() {
  emit('agree')
}

/**
 * 拒绝隐私协议
 */
function handleDisagree() {
  emit('disagree')
}

function handleClose() {
  emit('disagree')
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
