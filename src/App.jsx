import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Chat from "./pages/chat/Chat";

const router = createBrowserRouter([
  // Auth pages
  {
    path: "/",
    element: <AuthLayout />,

    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  // App pages
  {
    path: "/home",
    element: <HomeLayout />,

    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "chat", element: <Chat /> },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
