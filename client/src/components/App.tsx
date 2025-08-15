import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import Login from "./Login";
import Register from "./Register";
import User from "./User";
import UserCartItems from "./UserCartItems";
import AddProduct from "./AddProduct";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <Header />
      <UserCartItems endpoint="/user-product" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Products title="all products" />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/add" element={<AddProduct endpoint='' />} />
      </Routes>
      <Footer/>
    </>
  );
};
export default App;
