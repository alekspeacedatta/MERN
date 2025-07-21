import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ShowMessage from './components/ShowMessage';
import User from './components/User';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <User/>
      <ShowMessage/>
    </QueryClientProvider>
  </StrictMode>,
)
