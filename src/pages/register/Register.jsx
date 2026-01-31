import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = async () => {
    if (password !== confirm) {
      setError("Parol ne sovpodaet");
      return;
    }
    if (password.length < 6) {
      setError("Minimum 6 sumvol");
      return;
    }
    try {
      await registerUser(email, password);
      setEmail("");
      setPassword("");
      setConfirm("");
      setError("");

      navigate("/home");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Этот email уже зарегистрирован");
      } else if (err.code === "auth/invalid-email") {
        setError("Неверный формат email");
      } else {
        setError("Ошибка регистрации");
      }
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="confirm password"
        onChange={(e) => setConfirm(e.target.value)}
      />
      <br />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
