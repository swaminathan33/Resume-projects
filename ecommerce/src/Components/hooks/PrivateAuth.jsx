import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { addUser } from "../Slices/reducers/authDetails";

try {
  var user2 = JSON.parse(localStorage.getItem("auth"));
} catch (err) {
  console.log(err);
}

const PrivateAuth = () => {
  const dispatch = useDispatch();
  if (user2) {
    dispatch(addUser(user2));
  }

  const { authUser } = useSelector((state) => state.authDetails);
  const navigate = useNavigate();
  if (authUser) {
    return (
      <div>
        <Outlet />
      </div>
    );
  } else {
    useEffect(() => {
      navigate("/login");
    }, []);
  }
};

export default PrivateAuth;
