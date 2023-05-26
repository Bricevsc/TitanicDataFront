import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("authToken"));
  const deleteToken = () => {
    localStorage.clear();
    setIsLogin(false);
  };
  return (
    <ul className="navbar">
      <Link to={"/"}>
        <li>Login</li>
      </Link>
      <Link to={"/register"}>
        <li>Register</li>
      </Link>
      <Link to={"/dashboard"}>
        <li>Dashboard</li>
      </Link>
      {Boolean(isLogin) && (
        <button className="navbutton" onClick={deleteToken}>
          Déconnection
        </button>
      )}
    </ul>
  );
};

export default Navbar;
