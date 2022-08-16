import {defineConfig} from 'orval';

export default defineConfig({
  backend: {
    output: {
      mode: 'tags-split',
      clean: true,
      target: 'src/features/backend/apis/api.ts',
      schemas: 'src/features/backend/apis/model',
      client: 'react-query',
      prettier: true,
      tsconfig: 'tsconfig.json',
      override: {
        query: {
          useQuery: true,
        },
        mutator: {
          path: 'src/features/backend/utils/customInstance.ts',
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
      target: 'src/features/sandbox/apis/api.ts',
      schemas: 'src/features/sandbox/apis/model',
      client: 'react-query',
      prettier: true,
      tsconfig: 'tsconfig.json',
      override: {
        query: {
          useQuery: true,
        },
        mutator: {
          path: 'src/features/backend/utils/customInstance.ts',
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
