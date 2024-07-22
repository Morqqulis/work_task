'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

const TanStackProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
   const [queryClient] = useState(
      () =>
         new QueryClient({
            defaultOptions: {
               queries: {
                  gcTime: 1000 * 60 * 60 * 24
               }
            }
         })
   )
   return (
      <QueryClientProvider client={queryClient}>
         {children}
         <ReactQueryDevtools initialIsOpen={true} buttonPosition={'top-left'} />
      </QueryClientProvider>
   )
}

export default TanStackProvider
