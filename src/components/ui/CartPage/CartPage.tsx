"use client";

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import { FaDeleteLeft } from "react-icons/fa6";
import Link from "next/link";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const CartPage = () => {
  const {
    currentUserCurrentCart,
    setCurrentUserCurrentCart,
    currentLoggedinUser,
    setNormalBookCopies,
    normalBookCopies,
  } = useContext(AppContext);

  const [temporaryCartList, setTemporaryCartList] = useState(
    currentUserCurrentCart
  );
  const [isConfirmed, setIsConfirmed] = useState(false);

  function handleDeleteBook(itemID) {
    setTemporaryCartList((items) => items.filter((item) => item.id !== itemID));
  }

  function handleClearCartList() {
    setTemporaryCartList([]);
  }

  function handleConfirm() {
    setCurrentUserCurrentCart(temporaryCartList);
  }

  function handleResetDeletedItems() {
    setTemporaryCartList(currentUserCurrentCart);
  }

  function handleUpdateBookCopies(bookID) {
    const bookInfo = temporaryCartList.find((book) => book.id == bookID);
    setTemporaryCartList((tempList) =>
      tempList.map((book) =>
        book == bookInfo ? (book.copiesCount = book.copiesCount + 1) : book
      )
    );
  }

  useEffect(function () {
    console.log("cart " + JSON.stringify(currentUserCurrentCart));
  });

  if (currentUserCurrentCart.length == 0) {
    return (
      <div className="flex flex-col gap-25">
        {/* <NavBar /> */}
        <div className="flex flex-col gap-10 place-content-center place-items-center">
          <p className="text-2xl">
            The Cart List is empty, click the button below if you want to
            explore our books
          </p>
          <button className="px-5 py-3 text-xl font-bold text-white bg-gradient-to-r from-secondary-dark to-secondary rounded-2xl">
            <Link href="/all-books">Explore Books</Link>
          </button>
        </div>
      </div>
    );
  }

  if (isConfirmed)
    return (
      <div>
        <p>Thank you for using our service</p>
        <Link href="/">Discover more books</Link>
      </div>
    );

  return (
    <div>
      {/* <NavBar /> */}
      <div className="flex flex-col gap-5 px-20 pb-10 text-center text-white bg-my-black place-content-center place-items-center">
        <h1 className="w-full py-10 text-5xl text-white rounded-bl-4xl rounded-br-4xl bg-secondary-dark">
          {currentLoggedinUser.name} Cart
        </h1>
        <table className="flex flex-col w-full p-10 place-content-center place-items-center">
          {/* <caption className="text-xl font-black pb-15 text-silver-very-dark"> */}
          {/* Books Cart
        </caption> */}
          <th className="flex justify-between w-full p-5 font-bold text-white bg-primary-very-dark">
            <td>Cover</td>
            <td className="font-bold w-100">Title</td>
            <td className="w-20">Price</td>
            <td className="w-30">Type</td>
            <td className="w-20">Language</td>
            <td className="w-20">Translation</td>
            <td className="w-10">Edition</td>
            <td className="w-40">Copies</td>
            <td className="w-40">Total</td>
            <td></td>
          </th>
          {temporaryCartList.map((item, i) => (
            <tr
              key={item.id}
              className={`p-5 hover:bg-primary-very-light hover:*:text-dark-gray relative cursor-pointer hover:text-white transition-all duration-150  text-xl w-full flex justify-between text-silver-very-dark ${i % 2 === 0 ? "bg-primary-light " : "bg-primary "
                }
              `}
            >
              <td>
                <Image
                  src={item.cover}
                  alt="book-cover"
                  className="absolute left-2 top-2 w-15 h-13"
                />
                <div className="w-15"></div>
              </td>
              <td className="w-100 text-start">{item.title}</td>
              <td className="w-20">
                {item.price > 0 ? item.price + "$" : "free"}
              </td>
              {item.isPDF ? (
                <td className="w-30">PDF</td>
              ) : (
                <td className="w-30">Hand Copy</td>
              )}
              <td className="w-20">{item.bookLanguage}</td>
              <td className="w-20">{item.translationOrder ? "Yes" : "No"}</td>
              <td className="w-10">{item.edition}</td>

              {item.isPDF ? (
                <td>_</td>
              ) : (
                <td className="flex gap-5">
                  <p>{item.copiesCount}</p>
                  <div className="flex flex-col gap-3">
                    <button onClick={() => handleUpdateBookCopies(item.id)}>
                      <FaArrowCircleUp className="duration-300 hover:text-secondary-dark hover:scale-105" />
                    </button>
                    <button onClick={() => handleUpdateBookCopies(item.id)}>
                      <FaArrowCircleDown className="duration-300 hover:text-secondary-dark hover:scale-105" />
                    </button>
                  </div>
                </td>
              )}

              <td className="w-40 font-bold text-lime-600">
                {item.totalPrice}$
              </td>
              <td className="w-5 cursor-pointer">
                <button onClick={() => handleDeleteBook(item.id)}>
                  <FaDeleteLeft className="text-secondary-dark" />
                </button>
              </td>
            </tr>
          ))}
          <tr className="flex w-full gap-5 p-3">
            <button
              onClick={handleClearCartList}
              className="px-5 py-3 font-bold text-white bg-secondary-dark rounded-2xl"
            >
              Clear All
            </button>

            <button
              onClick={handleResetDeletedItems}
              disabled={isConfirmed}
              className="px-5 py-3 text-white bg-secondary-dark disabled:bg-silver-very-dark rounded-2xl"
            >
              Undo Deleted Items
            </button>
            <button
              disabled={isConfirmed}
              onClick={handleConfirm}
              className={` text-white rounded-2xl py-3 disabled:bg-silver-very-dark px-5 ${isConfirmed ? "bg-silver-very-dark" : "bg-secondary-dark"
                }`}
            >
              Confirm
            </button>
            <button className="px-5 py-3 font-bold text-white bg-secondary-dark rounded-2xl">
              <Link href="/cart/order-form">Order</Link>
            </button>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
