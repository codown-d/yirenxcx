// utils/im.ts
import TIM from 'tim-wx-sdk'
import TIMUploadPlugin from 'tim-upload-plugin'

// 从环境变量读取 SDKAppID
const SDKAppID = import.meta.env.VITE_APP_SDKAppID

const tim = TIM.create({ SDKAppID })

// 设置日志级别：0 关闭日志，1 打印错误，2 打印错误 + 警告，3 全部打印
tim?.setLogLevel(1)

// 注册上传插件
tim?.registerPlugin({ 'tim-upload-plugin': TIMUploadPlugin })

// SDK 就绪状态标志
let isSDKReady = false
let msg_resFn = (arg: any) => {}

// ✅ 初始化事件监听
function initEventListeners() {
  const ready = () => {
    isSDKReady = true
  }
  tim?.on(TIM.EVENT.SDK_READY, ready)
  const kicked_out = () => {
    console.warn('[IM] 被踢下线')
    uni.showToast({ title: '账号在别处登录', icon: 'none' })
    clearCache()
  }
  tim?.on(TIM.EVENT.KICKED_OUT, kicked_out)
  const onerror = ({ data }) => {
    if (data.code === 70001 || data.code === 70003) {
      console.warn('[IM] 签名非法或过期')
      clearCache()
    }
  }
  tim?.on(TIM.EVENT.ERROR, onerror)
  const msg_res = ({ data }) => {
    console.log('[IM] 收到新消息', data)
    uni.$emit('im-new-message', data)
    msg_resFn(data) // 触发全局事件（你页面可以用 uni.$on 监听）
  }
  tim.on(TIM.EVENT.MESSAGE_RECEIVED, msg_res)
}

const setMsgCallback = (callback) => {
  msg_resFn = callback
}
// ✅ 清理缓存
function clearCache() {
  uni.removeStorageSync('imUserID')
  uni.removeStorageSync('imUserSig')
}

// ✅ 登录
async function loginIM(userID: string | number, userSig: string) {
  await tim.login({ userID, userSig })
  uni.setStorageSync('imUserID', userID)
  uni.setStorageSync('imUserSig', userSig)
}

// ✅ 封装：等待 SDK Ready
function waitUntilReady(timeout = 5000): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isSDKReady) return resolve()

    const timer = setTimeout(() => {
      reject(new Error('TIM SDK 初始化超时'))
    }, timeout)

    const onReady = () => {
      clearTimeout(timer)
      tim.off(TIM.EVENT.SDK_READY, onReady)
      resolve()
    }

    tim.on(TIM.EVENT.SDK_READY, onReady)
  })
}

// ✅ 自动登录（初始化时调用）
async function tryAutoLogin() {
  const userID = uni.getStorageSync('imUserID')
  const userSig = uni.getStorageSync('imUserSig')
  if (!userID || !userSig || isSDKReady) return
  try {
    let res = await loginIM(userID, userSig)
    console.log(res)
  } catch (err) {
    console.warn('[IM] 自动登录失败', err)
  }
}

/**
 * 发送文本消息
 * @param toUserID 对方用户 ID 或群 ID
 * @param text 文本内容
 * @param isGroup 是否为群聊
 */
async function sendTextMessage(toUserID: string, text: string, isGroup = false) {
  await waitUntilReady()

  if (!text.trim()) {
    console.warn('[IM] 消息为空，已拦截')
    return Promise.reject(new Error('消息不能为空'))
  }
  const message = tim.createTextMessage({
    to: toUserID,
    conversationType: isGroup ? TIM.TYPES.CONV_GROUP : TIM.TYPES.CONV_C2C,
    payload: { text },
  })

  try {
    const res = await tim.sendMessage(message)
    console.log('[IM] 文本消息发送成功', res)
    return res
  } catch (err) {
    console.error('[IM] 文本消息发送失败', err)
    throw err
  }
}

// ✅ 图片消息发送
async function sendImageMessage(toUserID: string, isGroup = false) {
  const chooseRes = await new Promise((resolve, reject) => {
    wx?.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: resolve,
      fail: reject,
    })
  })

  const message = tim.createImageMessage({
    to: toUserID,
    conversationType: isGroup ? TIM.TYPES.CONV_GROUP : TIM.TYPES.CONV_C2C,
    payload: {
      file: chooseRes,
    },
    onProgress: (percent) => {
      console.log('[IM] 图片上传进度', percent)
    },
  })

  return tim.sendMessage(message)
}

// ✅ 获取历史消息（含 waitUntilReady）
async function getMessageList(options: {
  toUserID: string
  isGroup?: boolean
  nextReqMessageID?: string
  count?: number
}) {
  await waitUntilReady()
  const { toUserID, isGroup = false, nextReqMessageID = '', count = 20 } = options
  const conversationID = isGroup ? `GROUP${toUserID}` : `C2C${toUserID}`
  try {
    const res = await tim.getMessageList({
      conversationID,
      nextReqMessageID,
      count,
    })
    return res
  } catch (err) {
    console.error('[IM] 获取历史消息失败', err)
    throw err
  }
}

// ✅ 退出登录
async function logoutIM() {
  await tim.logout()
  clearCache()
}

// ✅ 获取当前登录状态
function getLoginStatus() {
  return isSDKReady
}

// ✅ 初始化
async function initIM() {
  initEventListeners()
  await tryAutoLogin()
}
/**
 * 获取当前用户的最近会话列表
 */
async function getConversationList() {
  await waitUntilReady()
  try {
    const res = await tim.getConversationList()
    return res.data.conversationList // 返回会话数组
  } catch (err) {
    console.error('[IM] 获取会话列表失败', err)
    throw err
  }
}
async function setMessageRead(conversationID) {
  await waitUntilReady()
  try {
    await tim.setMessageRead({
      conversationID: conversationID, // 或者 'GROUPxxx'
    })
  } catch (err) {
    console.error('[IM] 获取会话列表失败', err)
    throw err
  }
}

// ✅ 导出方法
export {
  tim,
  initIM,
  loginIM,
  logoutIM,
  sendTextMessage,
  sendImageMessage,
  getMessageList,
  waitUntilReady,
  getLoginStatus,
  getConversationList,
  initEventListeners,
  setMsgCallback,
  setMessageRead,
}
