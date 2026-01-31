import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      navigate("/home");
    } catch (err) {
      console.log("FIREBASE ERROR:", err.code);

      if (err.code === "auth/invalid-credential") {
        setError("Неверный email или пароль");
      } else if (err.code === "auth/network-request-failed") {
        setError("Нет интернета");
      } else {
        setError("Ошибка входа");
      }
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
          setError("");
        }}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
      />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <br />
      <button onClick={handleLogin}>voyti</button>
    </div>
  );
}

export default Login;
