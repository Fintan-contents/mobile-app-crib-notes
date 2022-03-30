import {defineConfig} from 'orval';

export default defineConfig({
  backend: {
    output: {
      mode: 'tags-split',
      clean: true,
      target: 'src/generated/backend/api.ts',
      schemas: 'src/generated/backend/model',
      client: 'react-query',
      prettier: true,
      tsconfig: 'tsconfig.json',
      override: {
        query: {
          useQuery: true,
        },
        mutator: {
          path: 'src/framework/backend/customInstance.ts',
          name: 'backendCustomInstance',
        },
      },
    },
    input: {
      target: '../api-document/openapi.yaml',
    },
  },
  sandbox: {
    output: {
      mode: 'split',
      clean: true,
      target: 'src/generated/sandbox/api.ts',
      schemas: 'src/generated/sandbox/model',
      client: 'react-query',
      prettier: true,
      tsconfig: 'tsconfig.json',
      override: {
        query: {
          useQuery: true,
        },
        mutator: {
          path: 'src/framework/backend/customInstance.ts',
          name: 'sandboxCustomInstance',
        },
        operations: {
          'list-todo-by-cursor': {
            query: {
              useQuery: false,
              useInfinite: true,
              useInfiniteQueryParam: 'cursor',
            },
          },
        },
      },
    },
    input: {
      target: '../api-document/sandbox/openapi.yaml',
    },
  },
});
