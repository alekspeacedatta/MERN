import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import Login from "./Login";
import Register from "./Register";
import User from "./User";
import AddProduct from "./AddProduct";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Products endpoint="" title="all products" />
              <Products endpoint="/user-product" title="User cart" />{" "}
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <AddProduct endpoint="" />
    </>
  );
};
export default App;
