import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: '薏仁直聘',
    navigationBarBackgroundColor: '#F5F6FA',
    navigationBarTextStyle: 'black',
    backgroundColor: '#F5F6FA',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^fg-(.*)': '@/components/fg-$1/fg-$1.vue',
      '^yr-(.*)': '@/components/yr-$1/yr-$1.vue',
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  // 如果不需要tabBar，推荐使用 spa 模板。（pnpm create xxx -t spa）
  tabBar: {
    color: '#999999',
    selectedColor: '#018d71',
    fontSize: '12px',
    iconWidth: '30px',
    spacing: '3px',
    list: [
      {
        iconPath: 'static/tabbar/index.png',
        selectedIconPath: 'static/tabbar/indexH.png',
        pagePath: 'pages/index/index',
        text: '薏人',
      },
      {
        iconPath: 'static/tabbar/msg.png',
        selectedIconPath: 'static/tabbar/msgH.png',
        pagePath: 'pages/message/message',
        text: '消息',
      },
      {
        pagePath: 'pages/plus/plus',
        iconPath: 'static/tabbar/add.png',
        selectedIconPath: 'static/tabbar/addH.png',
        text: '',
      },
      {
        iconPath: 'static/tabbar/luntan.png',
        selectedIconPath: 'static/tabbar/luntanH.png',
        pagePath: 'pages/forum/forum',
        text: '论坛',
      },
      {
        iconPath: 'static/tabbar/mine.png',
        selectedIconPath: 'static/tabbar/mineH.png',
        pagePath: 'pages/mine/mine',
        text: '我的',
      },
    ],
  },
})
