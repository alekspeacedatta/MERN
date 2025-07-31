import { Link } from "react-router-dom";

const Header = () => {
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
            <i className="fa-solid fa-user"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
