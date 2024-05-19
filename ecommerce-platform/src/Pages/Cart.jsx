import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Navbar from "../Components/Navbar";
import "./Cart.css";

const Cart = () => {
  const { cartAdded, setCartAdded } = useGlobalContext();
  const [totalUpdate, setTotalUpdate] = useState(0);
  let total = 0;
  const handleDelete = (id) => {
    const newCart = cartAdded.filter((item) => item.id !== id);
    setCartAdded(newCart);
  };

  useEffect(() => {
    cartAdded.map((item) => (total = total + item.price));
    setTotalUpdate(total);
  }, [cartAdded]);

  return (
    <div>
      <Navbar />
      <div className="Cart">
        <div className="Cart_items">
          <table>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            {cartAdded.map((item, index) => {
              return (
                <tr className="Cart_item">
                  <td className="Cart_item_content">
                    <img src={item.image} width={150} height={150} alt="" className="Cart_item_image" />
                    <div className="Cart_item_title">{item.title}</div>
                  </td>
                  <td>
                    <div className="Cart_item_price">$ {item.price}</div>
                  </td>
                  <td>
                    <button className="Cart_remove_button" onClick={() => handleDelete(item.id)}>❌</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="Cart_checkout_items">
          <div className="summary">CheckOut Summary</div>
          <div className="content">
          <div className="total">Total = $ {totalUpdate}</div>
          <button className="checkout">CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
