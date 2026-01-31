import { Link, Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      <h3>Home Page</h3>
      <nav>
        <Link to={"/home"}>Dashboard</Link>
        <Link to={"/home/profile"}>Profile</Link>
        <Link to="/home/chat">Chat</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default HomeLayout;
