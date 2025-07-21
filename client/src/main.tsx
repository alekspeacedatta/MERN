import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import "./index.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ShowMessage from './components/ShowMessage';
import Register from './components/Register';
import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';
import Login from './components/Login';


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='info'>
        <ShowProducts/>
        <div className='forms'>
          <AddProduct/>
          <Register/>
          <Login/>
        </div>
        <ShowMessage/>
      </div>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </StrictMode>,
)
