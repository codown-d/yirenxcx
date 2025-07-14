import type { GenerateServiceProps } from 'openapi-ts-request'

export default [
  {
    schemaPath: 'https://49a019482d89.ngrok-free.app/v3/api-docs/all',
    serversPath: './src/service/index',
    requestLibPath: `import request from '@/utils/request';\n import { CustomRequestOptions } from '@/interceptors/request';`,
    requestOptionsType: 'CustomRequestOptions',
    isGenReactQuery: true,
    reactQueryMode: 'vue',
    isGenJavaScript: false,
  },
] as GenerateServiceProps[]
