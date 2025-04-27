import { QueryClient } from '@tanstack/react-query'

export const queryCient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 6 * 5,
      retry: 1,
    },
  },
})
