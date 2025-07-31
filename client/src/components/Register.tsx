import { useState } from "react";
import { useRegister } from "../customHooks/useRegister";
import "../index.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { mutate: register } = useRegister();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = (e: any) => {
    e.preventDefault();
    register({ name, email, password });
    navigate('/');
  };
  return (
    <div className="form-section">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <section>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            value={name}
            placeholder="enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </section>
        <section>
          <label htmlFor="">Email: </label>
          <input
            type="text"
            value={email}
            placeholder="enter your Email"
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
            placeholder="enter your passwrod"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </section>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
