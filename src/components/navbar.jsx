import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navbar">
      <Link to={"/"}>
        <li>Login</li>
      </Link>
      <Link to={"/register"}>
        <li>Register</li>
      </Link>
      {/* <Link to={"/dashboard"}>
        <li>Dashboard</li>
      </Link> */}
    </ul>
  );
};

export default Navbar;
