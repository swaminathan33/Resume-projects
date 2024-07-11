import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Slices/AuthDetails";

try {
  var user2 = JSON.parse(localStorage.getItem("authUser"));
} catch (err) {
  console.log(err);
}

const PrivateAuth = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (user2) {
    dispatch(addUser(user2));
  }
  const user = useSelector(({ authdetails }) => authdetails.user);
  try {
    if (!user.email) {
      useEffect(() => {
        navigate("/login");
      }, []);
      return;
    } else {
      return <>{children}</>;
    }
  } catch (err) {
    console.log(err);
  }
};

export default PrivateAuth;
