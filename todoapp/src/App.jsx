import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import CreateAccount from "./Pages/CreateAccount.jsx";
import PrivateAuth from "./Components/Private/PrivateAuth.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateAuth>
              <Home />
            </PrivateAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
