import type { GenerateServiceProps } from 'openapi-ts-request'

export default [
  {
    schemaPath:
      'https://735b-2409-8a48-513-e064-6595-6e2d-2ee0-69db.ngrok-free.app/v3/api-docs/all',
    serversPath: './src/service/index',
    requestLibPath: `import request from '@/utils/request';\n import { CustomRequestOptions } from '@/interceptors/request';`,
    requestOptionsType: 'CustomRequestOptions',
    isGenReactQuery: true,
    reactQueryMode: 'vue',
    isGenJavaScript: false,
  },
] as GenerateServiceProps[]
