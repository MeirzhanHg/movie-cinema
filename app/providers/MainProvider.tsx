import Layout from '@/components/layout/Layout'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false
      }
   }
})

const MainProvider = ({ children }: { children: React.ReactElement }) => {
   return (
      <QueryClientProvider client={queryClient}>
         <Layout>
            {children}
         </Layout>
      </QueryClientProvider>
   )
}

export default MainProvider