import { useState } from "react";
import { useLogin } from "../customHooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{
    text: string;
    color: string;
  } | null>(null);

  const { mutate: login, data: backMessage } = useLogin({
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);

      setMessage({ text: "Login successful", color: "green" });

      setTimeout(() => {
        setMessage(null);
        navigate("/user");
      }, 50);
    },
    onError: (error: any) => {
      setMessage({ text: error.message || "login failed", color: "red" });
      setInterval(() => {
        setMessage(null);
      }, 3000);
    },
  });

  const handleLogin = (e: any) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <div className="form-section">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {message && <p style={{ color: message.color }}>{message.text}</p>}
        {backMessage?.message}
        <section>
          <label htmlFor="">Email: </label>
          <input
            type="text"
            value={email}
            placeholder="enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </section>
        <section>
          <label htmlFor="">Password: </label>
          <input
            type="text"
            value={password}
            placeholder="enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </section>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
