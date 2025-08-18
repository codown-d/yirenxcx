import fs from 'fs-extra'
import path from 'path'

export function copyNativeRes() {
  const waitPath = path.resolve(__dirname, '../src/nativeResources')
  const buildPath = path.resolve(
    __dirname,
    '../dist',
    process.env.NODE_ENV === 'production' ? 'build' : 'dev',
    process.env.UNI_PLATFORM!,
    'nativeResources',
  )

  return {
    enforce: 'post',
    async writeBundle() {
      try {
        // 检查源目录是否存在
        const sourceExists = await fs.pathExists(waitPath)
        if (!sourceExists) {
          return
        }

        // 确保目标目录及中间目录存在
        await fs.ensureDir(buildPath)

        // 执行文件夹复制
        await fs.copy(waitPath, buildPath)
      } catch (error) {}
    },
  }
}
