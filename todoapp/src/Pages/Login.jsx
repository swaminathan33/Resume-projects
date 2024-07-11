import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useAuthentication from "../Components/hooks/useAuthentication";

// things to do
// 1. email id login
// 2. google login
// 3. send name of the person to todo page

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, googleAuth } = useAuthentication();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={googleAuth}>google</button>
    </div>
  );
};

export default Login;
