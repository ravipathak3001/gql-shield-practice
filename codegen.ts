import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: '',
  generates: {
    'server/generated/graphql.ts': {
      plugins: ['typpescript', 'typescript-resolvers'],
      config: {
        useIndexSignature: true,
        mappers: {},
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};
export default config;
