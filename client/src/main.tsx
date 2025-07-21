import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ShowMessage from './components/ShowMessage';
import Product from './components/Product';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='info'>
        <Product/>
        <ShowMessage/>
      </div>
    </QueryClientProvider>
  </StrictMode>,
)
