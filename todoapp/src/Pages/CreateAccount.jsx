import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuthentication from "../Components/hooks/useAuthentication";

// things to do
// 1. email id login
// 2. google login
// 3. send name of the person to todo page

const CreateAccount = () => {
  //   const selector = useSelector();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuthentication();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div>
      <h2>Create Account</h2>
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
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default CreateAccount;
