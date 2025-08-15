import { Link } from "react-router-dom";
import useCartStore from "../stores/CartStore";

const Header = () => {
  const toggleCart = useCartStore((state) => state.toggleCart);
  return (
    <header>
      <div className="header-content">
        <h2>
          <Link to="/">logo</Link>
        </h2>

        <div className="action">
          <Link to="/register">
            <button>Register</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/user">
            <i className="fa-solid fa-user user"></i>
          </Link>
          <button className="cartb" onClick={() => { toggleCart() }}>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
