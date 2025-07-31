import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ShowMessage from "./components/ShowMessage";
import Register from "./components/Register";
import ShowProducts from "./components/ShowProducts";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import "./index.css";
import App from "./components/App";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
// import User from './components/User';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* <Products/>
      <div className="info">
        <ShowProducts />
        <div className="forms">
          <AddProduct />
          <Register />
          <Login />
        </div>
        <ShowMessage />
      </div>
      <div><User/>/</div> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);
