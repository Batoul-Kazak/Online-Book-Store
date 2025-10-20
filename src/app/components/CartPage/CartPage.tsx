import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "@/app/context/AppContext";
import Image from "next/image";
import { FaDeleteLeft } from "react-icons/fa6";
import Link from "next/link";
import NavBar from "../NavBar/NavBar";
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
        <NavBar />
        <div className="flex place-content-center place-items-center flex-col gap-10">
          <p className="text-2xl">
            The Cart List is empty, click the button below if you want to
            explore our books
          </p>
          <button className="text-xl bg-gradient-to-r from-secondary-dark to-secondary font-bold text-white py-3 px-5 rounded-2xl">
            <Link href="/books">Explore Books</Link>
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
      <NavBar />
      <div className="text-center bg-my-black px-20 text-white flex flex-col gap-5 place-content-center place-items-center pb-10">
        <h1 className="w-full text-5xl rounded-bl-4xl rounded-br-4xl bg-secondary-dark text-white py-10">
          {currentLoggedinUser.name}'s Cart
        </h1>
        <table className="p-10 flex flex-col place-content-center place-items-center w-full">
          {/* <caption className="text-xl font-black pb-15 text-silver-very-dark"> */}
          {/* Books Cart
        </caption> */}
          <th className="flex justify-between w-full p-5 bg-primary-very-dark text-white font-bold">
            <td>Cover</td>
            <td className="w-100 font-bold">Title</td>
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
              className={`p-5 hover:bg-primary-very-light hover:*:text-dark-gray relative cursor-pointer hover:text-white transition-all duration-150  text-xl w-full flex justify-between text-silver-very-dark ${
                i % 2 === 0 ? "bg-primary-light " : "bg-primary "
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
              <td className="w-20">{item.price}$</td>
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
                      <FaArrowCircleUp className="hover:text-secondary-dark hover:scale-105 duration-300" />
                    </button>
                    <button onClick={() => handleUpdateBookCopies(item.id)}>
                      <FaArrowCircleDown className="hover:text-secondary-dark hover:scale-105 duration-300" />
                    </button>
                  </div>
                </td>
              )}

              <td className="w-40 text-lime-600 font-bold">
                {item.totalPrice}$
              </td>
              <td className="w-5 cursor-pointer">
                <button onClick={() => handleDeleteBook(item.id)}>
                  <FaDeleteLeft className="text-secondary-dark" />
                </button>
              </td>
            </tr>
          ))}
          <tr className="flex gap-5 w-full p-3">
            <button
              onClick={handleClearCartList}
              className="py-3 px-5 font-bold bg-secondary-dark text-white rounded-2xl"
            >
              Clear All
            </button>

            <button
              onClick={handleResetDeletedItems}
              disabled={isConfirmed}
              className="bg-secondary-dark disabled:bg-silver-very-dark text-white rounded-2xl py-3 px-5"
            >
              Undo Deleted Items
            </button>
            <button
              disabled={isConfirmed}
              onClick={handleConfirm}
              className={` text-white rounded-2xl py-3 disabled:bg-silver-very-dark px-5 ${
                isConfirmed ? "bg-silver-very-dark" : "bg-secondary-dark"
              }`}
            >
              Confirm
            </button>
            <button className="py-3 px-5 font-bold bg-secondary-dark text-white rounded-2xl">
              <Link href="/cart/order-form">Order</Link>
            </button>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
