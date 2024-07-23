import React, { useEffect, useRef, useState } from "react";
import Product from "./Product";
import axios from "axios";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { AnimatePresence, delay, motion } from "framer-motion";
import { boxVariant, listVariant } from "./constants/animate";
const Pagination = ({ items, itemsIterate, setItemsIterate, setItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 20;
  const paginationNumbers = [];
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const itemsRef = useRef();
  const currentPosts = itemsIterate.slice(firstIndex, lastIndex);
  for (let i = 1; i <= Math.ceil(itemsIterate.length / postPerPage); i++) {
    paginationNumbers.push(i);
  }

  const getItems = async () => {
    await axios
      .get("https://dummyjson.com/products?limit=120")
      .then((res) => {
        setItems(res.data.products);
        itemsRef.current = res.data.products;
      })
      .catch((err) => {
        console.log(err);
      });
    setItemsIterate(items);
  };

  const handleCurrentPage = (page) => {
    if (page <= 0) {
      setCurrentPage(paginationNumbers.slice(-1));
    } else if (page > paginationNumbers.slice(-1)) {
      setCurrentPage(1);
    } else {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsIterate]);

  return (
    <div>
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="products col-span-3 flex-wrap flex justify-between"
      >
        {items
          ? currentPosts.map((i, index) => {
              return (
                <motion.div variants={listVariant} key={i.id}>
                  <Product
                    item={i}
                    key={i.id}
                    link={i.images[0]}
                    name={i.title}
                    price={i.price}
                  />
                </motion.div>
              );
            })
          : ""}
      </motion.div>
      <div className="flex gap-8 justify-end mb-10 mt-5">
        <button
          className="border-[1px] px-5 rounded-full"
          onClick={() => handleCurrentPage(currentPage - 1)}
        >
          <div className="flex items-center justify-center gap-2">
            <HiOutlineArrowLongLeft fontSize={20} />
            <div>Previous</div>
          </div>
        </button>
        {paginationNumbers.map((i) => {
          return (
            <button
              className={` w-10 h-10 rounded-full  ${
                currentPage == i ? " bg-gray-100 text-orange-400" : ""
              }`}
              onClick={() => setCurrentPage(i)}
            >
              {i}
            </button>
          );
        })}
        <button
          className="border-[1px] px-5 rounded-full"
          onClick={() => handleCurrentPage(currentPage + 1)}
        >
          <div className="flex items-center justify-center gap-2">
            <div>Next</div>
            <HiOutlineArrowLongRight fontSize={20} />
          </div>
        </button>
      </div>
      <div className="text-center font-bold">
        Select a category to start your purchase
      </div>
    </div>
  );
};

export default Pagination;
