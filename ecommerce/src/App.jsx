import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import OrderConfirmation from "./Pages/OrderConfirmation";
import PrivateAuth from "./Components/hooks/PrivateAuth";
const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route element={<PrivateAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<OrderConfirmation />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
