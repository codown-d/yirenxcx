interface DeviceInfo {
  abi?: string // 仅 Android 支持
  deviceAbi?: string // 仅 Android 支持
  benchmarkLevel?: number // 仅 Android 支持
  brand: string
  model: string
  system: string
  platform: string
  cpuType?: string // 仅 Android 支持
  memorySize?: string // 设备内存大小（MB）
}
export const getSystemInfoSync = () => {
  return uni.getSystemInfoSync()
}

export const getDeviceInfo = () => {
  return uni.getDeviceInfo()
}

export const getWindowInfo = () => {
  return uni.getWindowInfo()
}
export const getAppBaseInfo = () => {
  return uni.getAppBaseInfo()
}
