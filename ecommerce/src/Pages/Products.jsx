import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import MainLayout from "../Components/Layout/MainLayout";
import HeroLayout from "../Components/Layout/HeroLayout";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import {
  MdOutlinePermPhoneMsg,
  MdOutlineShoppingBag,
  MdRadioButtonChecked,
} from "react-icons/md";
import { IoRadioButtonOffSharp } from "react-icons/io5";
import { FaArrowsRotate, FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import Pagination from "../Components/Pagination";
import { FiTruck } from "react-icons/fi";

const Products = () => {
  const itemRef = useRef([]);
  const [items, setItems] = useState(itemRef.current);
  // console.log("hi", items);
  const [priceRange, setPriceRange] = useState(2500);
  const [clickedStock, setClickedStock] = useState("In Stock");
  const [openCategory, setOpenCategory] = useState(true);
  const [openRange, setOpenRange] = useState(true);
  const [openStatus, setOpenStatus] = useState(true);

  let [itemsIterate, setItemsIterate] = useState([]);
  const [clickedCategory, setClickedCategory] = useState("all");
  const [category, setCategory] = useState([
    "fragrances",
    "furniture",
    "beauty",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
  ]);
  const [availability, setAvailability] = useState([
    "Low Stock",
    "In Stock",
    "Out of Stock",
  ]);

  // const getItems = async () => {
  //   await axios
  //     .get("https://dummyjson.com/products?limit=50")
  //     .then((res) => setItems(res.data.products))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   setItemsIterate(items, () => {
  //     setItemsIterate(items);
  //   });
  // };

  const handleRange = (price) => {
    setPriceRange(price);
    if (clickedCategory == "all") {
      const newArray = items.filter((i) => i.price <= price);
      setItemsIterate(newArray);
    } else {
      const newArray1 = items.filter((k) => k.category == clickedCategory);
      const newArray2 = newArray1.filter((k) => k.price <= price);
      setItemsIterate(newArray2);
    }
  };

  const handleFilter = (i) => {
    setClickedCategory(i);
    if (i == "all") {
      setItemsIterate(items);
    } else {
      let newArray = items.filter((k) => k.category == i);
      setItemsIterate(newArray);
    }
  };

  const handleStock = (status) => {
    setClickedStock(status);
    const newArray = items.filter((i) => i.availabilityStatus == status);
    setItemsIterate(newArray);
  };

  const contents = [
    {
      logo: <FiTruck />,
      text: "Fast & Free Shipping ",
      styles: "left-[3.1rem]",
    },
    {
      logo: <MdOutlineShoppingBag />,
      text: "Easy to shop ",
      styles: "left-[1.3rem]",
    },
    {
      logo: <MdOutlinePermPhoneMsg />,
      text: "24/7 Support",
      styles: "left-[1.4rem]",
    },
    {
      logo: <FaArrowsRotate />,
      text: "Hassle Free Returns",
      styles: "left-[2.9rem]",
    },
  ];

  useEffect(() => {
    const getItems = async () => {
      await axios
        .get("https://dummyjson.com/products?limit=50")
        .then((res) => {
          setItems(res.data.products);
          itemRef.current = res.data.products;
          // console.log(itemRef.current, items);
        })
        .catch((err) => {
          console.log(err);
        });
      setItemsIterate(itemRef.current);
    };
    getItems();
    // console.log("redering");
  }, []);

  return (
    <div>
      <div className="title text-white bg-teal-900">
        <Navbar />
        <div className="text-center py-28 text-2xl font-semibold mb-24">
          Products
        </div>
      </div>
      <MainLayout>
        <div className="grid grid-cols-4 max-sm:flex max-sm:flex-col">
          <div className="filter col-span-1">
            <div className="title font-semibold text-2xl max-sm:hidden">
              Filter Option
            </div>
            <div className="category border-[1px] rounded-lg p-2 w-5/6 max-sm:w-full mt-4">
              <h2 className="text-xl font-medium text-gray-700 mb-2 flex items-center justify-between">
                Category
                <FaChevronUp
                  className={`${openCategory ? "block" : "hidden"}`}
                  onClick={() => setOpenCategory(false)}
                />
                <FaChevronDown
                  className={`${openCategory ? "hidden" : "block"}`}
                  onClick={() => setOpenCategory(true)}
                />
              </h2>
              {openCategory ? (
                <ul className="flex gap-3 flex-col">
                  <li
                    className={`cursor-pointer border-[1px] w-full text-md p-1 rounded-full text-center flex items-center gap-2 ${
                      clickedCategory == "all" ? "" : ""
                    }`}
                    onClick={() => handleFilter("all")}
                  >
                    <IoRadioButtonOffSharp
                      className={`text-gray-300 ${
                        clickedCategory == "all" ? "hidden" : "block"
                      }  `}
                    />
                    <MdRadioButtonChecked
                      className={`text-orange-400 ${
                        clickedCategory == "all" ? "block" : "hidden"
                      }`}
                    />
                    <button
                      className={`${
                        clickedCategory == "all" && "text-orange-400"
                      }`}
                    >
                      {"All"}
                    </button>
                  </li>

                  {category.map((i, index) => {
                    return (
                      <li
                        key={index}
                        className={`border-[1px] cursor-pointer w-full text-md p-1 rounded-full text-center flex items-center gap-2 ${
                          clickedCategory == i ? "" : ""
                        }`}
                        onClick={() => handleFilter(i)}
                      >
                        <IoRadioButtonOffSharp
                          className={`text-gray-300 ${
                            clickedCategory == i ? "hidden" : "block"
                          }  `}
                        />
                        <MdRadioButtonChecked
                          className={`text-orange-400 ${
                            clickedCategory == i ? "block" : "hidden"
                          }`}
                        />
                        <button
                          className={`${
                            clickedCategory == i && "text-orange-400"
                          }`}
                        >
                          {i}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div></div>
              )}
            </div>
            <div className="price-range mt-4 border-[1px] rounded-lg p-2 w-5/6 max-sm:w-full">
              <h2 className="text-xl font-medium text-gray-700 mb-2 flex items-center justify-between">
                Price
                <FaChevronUp
                  className={`${openRange ? "block" : "hidden"}`}
                  onClick={() => setOpenRange(false)}
                />
                <FaChevronDown
                  className={`${openRange ? "hidden" : "block"}`}
                  onClick={() => setOpenRange(true)}
                />
              </h2>
              {openRange ? (
                <div>
                  <label className="text-gray-600" htmlFor="">
                    $0 - ${priceRange}
                  </label>
                  <br />
                  <input
                    type="range"
                    max={2500}
                    onChange={(e) => handleRange(e.target.value)}
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="availability mt-4 border-[1px] rounded-lg p-2 w-5/6 mb-16 max-sm:w-full">
              <h2 className="text-xl font-medium text-gray-700 mb-2 flex items-center justify-between">
                Availability
                <FaChevronUp
                  className={`${openStatus ? "block" : "hidden"}`}
                  onClick={() => setOpenStatus(false)}
                />
                <FaChevronDown
                  className={`${openStatus ? "hidden" : "block"}`}
                  onClick={() => setOpenStatus(true)}
                />
              </h2>
              {openStatus ? (
                <div>
                  <ul className="flex gap-3 flex-col">
                    {availability.map((i, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => handleStock(i)}
                          className={`border-[1px] w-full cursor-pointer text-md p-1 rounded-full text-center flex items-center gap-2 ${
                            clickedStock == i ? "" : ""
                          }`}
                        >
                          <IoRadioButtonOffSharp
                            className={`text-gray-300 ${
                              clickedStock == i ? "hidden" : "block"
                            }  `}
                          />
                          <MdRadioButtonChecked
                            className={`text-orange-400 ${
                              clickedStock == i ? "block" : "hidden"
                            }`}
                          />
                          <button
                            className={`${
                              clickedStock == i && "text-orange-400"
                            }`}
                          >
                            {i}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="products col-span-3 sm:flex-wrap flex max-sm:flex-col justify-between">
            {items ? (
              <Pagination
                items={items}
                itemsIterate={itemsIterate}
                setItemsIterate={setItemsIterate}
                setItems={setItems}
              />
            ) : (
              ""
            )}
            {/* {items
              ? itemsIterate.map((i) => {
                  return (
                    <Product
                      link={i.images[0]}
                      name={i.title}
                      price={i.price}
                    />
                  );
                })
              : ""} */}
          </div>
        </div>
        <MainLayout>
          <div>
            <ul className="flex justify-between my-20">
              {contents.map((i, index) => {
                return (
                  <li
                    key={index}
                    className="flex relative flex-col items-center z-40"
                  >
                    <div
                      className={`absolute p-2 bg-slate-200 rounded-full w-8 h-8 ${i.styles}`}
                    ></div>
                    <span className="bg-yellow-400 relative rounded-full p-2 z-30">
                      {i.logo}
                    </span>
                    <span className="font-semibold mt-2">{i.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </MainLayout>
      </MainLayout>
    </div>
  );
};

export default Products;
