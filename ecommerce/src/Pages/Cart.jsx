import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroLayout from "../Components/Layout/HeroLayout";
import Navbar from "../Components/Navbar";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { removeCart, setCart } from "../Components/Slices/reducers/CartDetails";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase";
import {
  onSnapshot,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Cart = () => {
  const cart = useSelector((state) => state.CartDetails);
  const [uid, setUid] = useState(null);
  const [count, setCount] = useState(0);
  const authUser = useSelector((state) => state.authDetails);
  const [subTotal, setSubTotal] = useState(0);
  // const [quantity, setQuantity] = useState([]);
  let quantity = [];
  const dispatch = useDispatch();
  const cartArray = Object.entries(cart)[0][1];
  const handleCart = (id, firebase_id) => {
    const newCart = cartArray.filter((i) => i.id !== id);
    console.log(newCart);
    dispatch(removeCart(newCart));
    deleteDoc(doc(db, "cart", firebase_id));
    window.location.reload();
  };

  useEffect(() => {
    setSubTotal(0);
    cartArray.map((i) => {
      setSubTotal((subTotal) => i.price + subTotal);
    });
    console.log(setSubTotal);
  }, [cartArray]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });
  }, []);

  useEffect(() => {
    dispatch(removeCart([]));
    async function fetchCart() {
      onSnapshot(collection(db, "cart"), (snapshot) => {
        // const cart1 = snapshot.docs.filter((doc) => {
        //   return doc.data.uid == authUser.uid;
        // });
        // console.log("afsadf", cart1);
        const cart = snapshot.docs.map((i) => {
          return i;
        });
        const cartVar = cart.map((i) => {
          return {
            id: i.id,
            data: i.data(),
          };
        });
        // const k = cartVar.map((i) => {
        //   return i.data.quantity;
        // });
        // setQuantity(k);
        // quantity = k;
        cartVar.map((i) => {
          const itemWithId = {
            ...i.data.item,
            firebase_id: i.id,
          };
          dispatch(setCart(itemWithId));
        });
      });
    }
    fetchCart();
  }, []);

  useEffect(() => {
    // console.log("cart", cartArray);
  }, []);

  return (
    <div>
      <div className="title text-white bg-teal-900">
        <Navbar />
        <div className="text-center py-28 text-2xl font-semibold mb-24">
          Shopping Cart
        </div>
      </div>
      <div className="flex justify-center gap-10 pb-20 max-sm:flex-col m-2 ">
        <div className="rounded-xl h-full overflow-hidden">
          <table className="text-center max-sm:w-full">
            <thead className="bg-emerald-900 text-white font-light border-collapse rounded-full">
              <tr className="">
                <th className="font-medium px-4 pr-10 py-3 text-start">
                  Product
                </th>
                <th className="font-medium px-4 pr-10 py-3 text-start">
                  Price
                </th>
                {/* <th className="font-medium px-4 pr-14 py-3 text-start">
                      Quantity
                    </th> */}
                <th className="font-medium px-4 py-3 text-start pr-20 max-sm:pr-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-stone-100">
              {cartArray &&
                cartArray.map((i) => {
                  // console.log("i", i.images[0]);
                  return (
                    <tr className="text-gray-600">
                      <td className="px-4 max-sm:px-1 pr-10 max-sm:pr-1 py-3">
                        <div className="flex max-sm:flex-col justify-start items-center gap-2">
                          <div className="bg-white p-2 rounded-xl">
                            <img
                              className="w-10 h-10"
                              src={i.images[0]}
                              alt=""
                            />
                          </div>
                          <div className="">{i.title}</div>
                        </div>
                      </td>
                      <td className="px-4 pr-16 py-3">${i.price}</td>
                      {/* <td className="flex items-center bg-white justify-center mt-5 gap-5 ml-4 rounded-full py-1 px-2 mr-20">
                            <button
                              className="bg-gray-200 rounded-full p-2"
                              onClick={() => subQuantity(i.firebase_id)}
                            >
                              <LuMinus />
                            </button>
                            {quantity.map((q) => {
                              if (i.id == q.id) {
                                return <div>{q.quantity}</div>;
                              }
                            })}
                            <button
                              className="bg-gray-200 rounded-full p-2"
                              onClick={() => addQuantity(i.firebase_id, i.id)}
                            >
                              <LuPlus />
                            </button>
                          </td> */}
                      <td className="px-4 py-3 pr-10">
                        <div className="flex gap-16 items-center justify-between">
                          {quantity.map((q) => {
                            if (i.id == q.id) {
                              return <div>${q.quantity * i.price}</div>;
                            }
                          })}
                          <button
                            className="p-2 border-[1px] rounded-full border-black"
                            onClick={() => handleCart(i.id, i.firebase_id)}
                            // onClick={() =>
                            //   deleteDoc(doc(db, "cart", i.firebase_id))
                            // }
                          >
                            <RxCross2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="bg-teal-900 py-3 text-white px-5 pr-32 rounded-ss-lg rounded-t-lg">
            Product Summary
          </h2>
          <ul className="bg-stone-100 flex flex-col gap-5 rounded-md">
            <li className="flex justify-between gap-20  p-2 px-5 py-2">
              <div>SubTotal</div>
              <div>{Math.ceil(subTotal)}.00</div>
            </li>
            <li className="flex justify-between gap-20  p-2 px-5 py-2">
              <div>Shipping</div>
              <div>Free</div>
            </li>
            {/* <li className=" p-2 px-5 py-2">Add Coupon Code -</li> */}
            <li className="flex justify-between gap-20 bg-white  p-2 px-5 py-2">
              <div>Total</div>
              <div>{Math.ceil(subTotal)}.00</div>
            </li>
            <li className="flex justify-between gap-20 p-2 px-5 py-2">
              <Link to={"/checkout"}>
                <button className="px-5 w-full py-2 bg-yellow-500 rounded-full text-white">
                  Proceed To Checkout
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
