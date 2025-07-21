import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ShowMessage from './components/ShowMessage';
import Register from './components/Register';
import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='info'>
        <ShowProducts/>
        <div className='forms'>
          <AddProduct/>
          <Register/>
        </div>
        <ShowMessage/>
      </div>
    </QueryClientProvider>
  </StrictMode>,
)
