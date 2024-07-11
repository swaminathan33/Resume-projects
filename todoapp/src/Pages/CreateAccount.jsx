import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuthentication from "../Components/hooks/useAuthentication";
import { Link } from "react-router-dom";

// things to do
// 1. email id login
// 2. google login
// 3. send name of the person to todo page

const CreateAccount = () => {
  //   const selector = useSelector();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, googleAuth } = useAuthentication();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="font-bold text-lg mb-4">Create Account</h2>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            className="bg-gray-300 w-64 p-1 rounded-md pl-4 py-2 outline-none"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-300 w-64 p-1 rounded-md pl-4 py-2 outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md py-1"
          >
            Sign Up
          </button>
          <div className="text-gray-500 text-xs">
            Already have an account ?
            <Link to={"/login"} className="text-blue-600 ml-1">
              Login
            </Link>
          </div>
          <div className="text-xs text-gray-500 flex justify-center items-center">
            <div className="border-b-2 w-10 my-2 mr-2"></div>
            <div className="">Or Sign Up With</div>
            <div className="border-b-2 w-10 my-2 ml-2"></div>
          </div>
          <button onClick={googleAuth}>
            <div className="flex text-sm items-center gap-3 justify-center border-2 border-sky-300 text-indigo-500 py-1 rounded-full">
              <img
                className="w-5 h-5"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                alt=""
              />
              <div>Sign Up With Google</div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
