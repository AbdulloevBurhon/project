import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
