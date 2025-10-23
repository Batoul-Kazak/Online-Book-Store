"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { allBooks } from "@/app/lib/index";
import { AppContext } from "@/app/context/AppContext";

const PaidBookDetails = ({ toDisplayIn }: string) => {
  const { setShowAddToCartPopup, setCurrentOrderedBookInfo } =
    useContext(AppContext);
  const booksToDisplay =
    toDisplayIn === "homePage"
      ? allBooks.filter((book) => book.rating >= 4.7)
      : allBooks;

  function handleOrderBook(book) {
    setShowAddToCartPopup(true);
    setCurrentOrderedBookInfo(book);
    console.log(book);
  }

  return (
    <div
      className={`${
        toDisplayIn === "homePage"
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[70rem]"
          : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-[80%]"
      } gap-4  md:gap-5 place-items-center place-self-center`}
    >
      {booksToDisplay.map((book, i) => (
        <div key={book.id} className="pt-12 " data-aos="zoom-in">
          <div className="flex relative min-h-[45rem] flex-col gap-5 pt-20 justify-content-center place-items-center bg-silver-very-dark p-7 rounded-2xl">
            <div className="w-full h-70"></div>

            <div className="flex justify-center place-items-center">
              <Image
                src={book.img}
                alt={book.title + book.id}
                className="absolute -top-10 w-4/5 h-100 rounded-tl-2xl rounded-tr-2xl border-white/30 border-2"
                data-aos="slide-down"
                data-aos-duration="1000"
                data-aos-delay="100"
              />
              <div
                className="flex gap-1 justify-center  absolute top-65 right-5 rounded-tr-[4px] rounded-br-[4px] bg-black/80 p-2 font-bold"
                data-aos="slide-down"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {book.rating}
                {/* {[1, 2, 3, 4, 5].copyWithin(book.rating, 0, 5).map((item) =>
                      item < Math.floor(book.rating) ? (
                        <div
                          className="relative flex flex-col text-red-500"
                          key={item}
                        >
                          <FaStar className="text-yellow-600 w-6 h-6" />
                          <FaStar className="text-yellow-500 w-4 h-4 absolute top-1 right-1" />
                        </div>
                      ) : (
                        <div className="relative flex flex-col " key={item}>
                          <FaStar className="text-silver w-6 h-6" />
                          <FaStar className="text-silver w-4 h-4 absolute top-1 right-1" />
                        </div>
                      )
                    )} */}
                {Array.from({ length: 5 }, (_, i) => {
                  const isFull = i + 1 <= Math.floor(book.rating);
                  return (
                    <div key={i} className="flex flex-col relative">
                      <FaStar
                        className={`w-6 h-6 ${
                          isFull ? "text-yellow-600" : "text-silver"
                        }`}
                      />
                      <FaStar
                        className={`w-4 h-4 absolute top-1 right-1 ${
                          isFull ? "text-yellow-500" : "text-silver"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <h1 className="text-3xl font-bold min-h-[5rem] text-primary">
              {book.title}
            </h1>
            <p className="line-clamp-4 text-left">{book.description}</p>
            <Link
              // href={`/book/${book.id}`}
              href={`/paid-books/${book.id}`}
              className="underline cursor-pointer text-blue-200"
            >
              Show More Details
            </Link>
            <button
              onClick={() => handleOrderBook(book)}
              className=" bg-gradient-to-r from-primary to-secondary w-full font-bold text-xl hover:scale-105 duration-200 text-white py-2 px-4 rounded-2xl"
            >
              Order Book
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaidBookDetails;
