<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'
import { navigateTo } from './utils'
// import TIM from 'tim-wx-sdk'
import { initIM } from '@/utils/im'

onLaunch(() => {
  initIM()
})
onShow(() => {
  uni?.onTabBarMidButtonTap?.(() => {
    navigateTo('/publish-info/publish-info')
  })
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
/* stylelint-disable selector-type-no-unknown */
button::after {
  border: none;
}

swiper,
scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

image {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

// 单行省略，优先使用 unocss: text-ellipsis
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// 两行省略
.ellipsis-2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

// 三行省略
.ellipsis-3 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.wd-navbar__left .wd-navbar__text {
  color: inherit;
}
.bg-linear {
  background: linear-gradient(
    180deg,
    rgba(56, 200, 164, 0.25) 0%,
    rgba(56, 200, 164, 0) 30%,
    rgba(255, 255, 255, 1) 60%
  );
}

.bg-linear-100 {
  background: linear-gradient(180deg, #eefffa 10%, #ffffff 41.97%, #ffffff 100%);
}
.bg-bar-white {
  background-color: #ffffff !important;
  opacity: 1;
}
.wd-tag__text {
  white-space: nowrap !important;
}
.wd-card {
  .wd-cell {
    padding-left: 0rpx !important;
  }
  .wd-textarea {
    padding: 0 !important;
  }
  .wd-cell__wrapper {
    padding-right: 0px !important;
    padding: 0rpx !important;
  }
}
.wd-cell {
  .wd-cell__wrapper {
    align-items: center !important;
  }
  .wd-picker__cell {
    padding-right: 0rpx !important;
  }
  &.is-small {
    .wd-cell__wrapper {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
}
.wd-calendar__cell,
.wd-col-picker__cell {
  padding-right: 0 !important;
  padding-left: 0 !important ;
}
.wd-cell__right {
  flex: none !important;
}
.no-padding .wd-cell__wrapper {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>
