import React, { useState } from "react";
import useAuthentication from "../Components/hooks/useAuthentication";
import { Link } from "react-router-dom";

const Login = () => {
  const { login, googleAuth } = useAuthentication();
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const handleLogin = () => {
    login(input.name, input.password);
  };
  return (
    <div className="flex justify-center flex-col gap-6 items-center h-screen">
      <div className="flex flex-col gap-7 p-4 shadow-lg border-[1px]">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold">Login</span>
          <span className="text-sm">Stay Updated On Your Ecommerce Word</span>
        </div>
        <input
          className="border-[1px] border-slate-400 rounded-md p-2 pr-10 outline-none"
          type="text"
          placeholder="Email"
          onChange={(e) =>
            setInput((input) => ({ ...input, ["name"]: e.target.value }))
          }
        />
        <div className="flex flex-col gap-2">
          <input
            className="border-[1px] border-slate-400 rounded-md p-2 pr-10 outline-none"
            onChange={(e) =>
              setInput((input) => ({ ...input, ["password"]: e.target.value }))
            }
            placeholder="Password"
            type="password"
          />
          <a className="text-sm text-blue-800 font-semibold" href="">
            Forget Password ?
          </a>
        </div>
        <div>
          <button
            onClick={handleLogin}
            className="bg-blue-500 w-full text-white p-2 rounded-full"
          >
            login
          </button>
          <div className="flex items-center gap-2 justify-center mt-3">
            <div className="w-full border-b-2"></div>
            <div>or</div>
            <div className="w-full border-b-2"></div>
          </div>
        </div>
        <button
          onClick={googleAuth}
          className="border-[1px] flex items-center justify-center border-black w-full font-bold p-2 rounded-full"
        >
          <div className="flex items-center justify-center text-slate-700 gap-2">
            <img
              width={23}
              src="https://banner2.cleanpng.com/20240216/sb/transparent-google-logo-google-logo-with-multicolored-g-and-1710875781697.webp"
              alt=""
            />{" "}
            <div>Sign In With Google</div>
          </div>
        </button>
      </div>
      <div className="text-sm">
        New To LinkedIn?{" "}
        <Link to={"/register"} className="font-semibold text-blue-600">
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Login;
