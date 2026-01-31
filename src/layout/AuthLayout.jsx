import { Link, Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div>
      <h3>Auth Header</h3>
      <nav>
        <Link to="/login">login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
