import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/auth";

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser(); // выйти из Firebase
    navigate("/login"); // вернуться на логин
  };

  return (
    <div>
      <h1>Hello WORLD</h1>

      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
}

export default Home;
