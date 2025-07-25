import type { GenerateServiceProps } from 'openapi-ts-request'

export default [
  {
    schemaPath: 'https://yiren.7sheng.cn/v3/api-docs/all',
    serversPath: './src/service/app',
    requestLibPath: `import request from '@/utils/request';\n import { CustomRequestOptions } from '@/interceptors/request';`,
    requestOptionsType: 'CustomRequestOptions',
    isGenReactQuery: true,
    reactQueryMode: 'vue',
    isGenJavaScript: false,
  },
] as GenerateServiceProps[]
