import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import Login from "./Login";
import Register from "./Register";
import User from "./User";
import AddProduct from "./AddProduct";
import UserCartItems from "./UserCartItems";
const App = () => {
  return (
    <>
      <Header />
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
      </Routes>
    </>
  );
};
export default App;
