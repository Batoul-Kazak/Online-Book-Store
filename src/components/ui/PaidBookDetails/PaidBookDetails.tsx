"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { allBooks } from "@/_lib/index";
import { AppContext } from "@/context/AppContext";
import { useTranslation } from "@/context/TranslationContext";

const PaidBookDetails = ({ toDisplayIn }: string) => {
  const { lang } = useTranslation();

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
      className={`${toDisplayIn === "homePage"
        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[70rem]"
        : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-[80%]"
        } gap-15 md:gap-5 place-items-center place-self-center py-10`}
    >
      {booksToDisplay.map((book, i) => (
        <div key={book.id} className={`pt-12${toDisplayIn === "homePage" ? "w-[20rem]" : "w-[15rem]"} `} data-aos="zoom-in">
          <div className={`flex relative ${toDisplayIn === "homePage" ? "h-[48rem] w-[22rem]" : "w-auto h-[35rem]"} flex-col gap-5 pt-20 justify-content-center place-items-center bg-silver p-7 rounded-2xl`}>
            <div className={`w-full ${toDisplayIn === "homePage" ? "h-70" : "h-37"}`}></div>

            <div className="flex justify-center place-items-center">
              <Image
                src={book.img}
                alt={book.title["en"] + book.id}
                className={`absolute w-4/5 border-2 -top-10 ${toDisplayIn === "homePage" ? "h-100" : "h-65"} rounded-tl-2xl rounded-tr-2xl border-white/30`}
                data-aos="slide-down"
                data-aos-duration="700"
                data-aos-delay="200"
              />
              <div
                className={`flex gap-1 justify-center absolute ${toDisplayIn === "homePage" ? "top-65" : "top-45"} right-5 rounded-tr-[4px] rounded-br-[4px] bg-black/70 rounded-2xl p-2 font-bold`}
                data-aos="slide-down"
                data-aos-duration="700"
                data-aos-delay="200"
              >
                {book.rating}
                {/* {[1, 2, 3, 4, 5].copyWithin(book.rating, 0, 5).map((item) =>
                      item < Math.floor(book.rating) ? (
                        <div
                          className="relative flex flex-col text-red-500"
                          key={item}
                        >
                          <FaStar className="w-6 h-6 text-yellow-600" />
                          <FaStar className="absolute w-4 h-4 text-yellow-500 top-1 right-1" />
                        </div>
                      ) : (
                        <div className="relative flex flex-col " key={item}>
                          <FaStar className="w-6 h-6 text-silver" />
                          <FaStar className="absolute w-4 h-4 text-silver top-1 right-1" />
                        </div>
                      )
                    )} */}
                {Array.from({ length: 5 }, (_, i) => {
                  const isFull = i + 1 <= Math.floor(book.rating);
                  return (
                    <div key={i} className="relative flex flex-col">
                      <FaStar
                        className={`w-6 h-6 ${isFull ? "text-yellow-600" : "text-silver"
                          }`}
                      />
                      <FaStar
                        className={`w-4 h-4 absolute top-1 right-1 ${isFull ? "text-yellow-500" : "text-silver"
                          }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <h1 className={`${toDisplayIn === "homePage" ? "text-3xl" : "text-2xl"} max-w-[20rem] overflow-clip font-bold min-h-[5rem] text-[#0065ab] dark:text-[#75d0ff]`}>
              {book.title[lang]}
            </h1>
            <p className="text-left line-clamp-4">{book.description[lang]}</p>
            <Link
              // href={`/book/${book.id}`}
              href={`/all-books/${book.id}`}
              className="underline cursor-pointer text-secondary"
            >
              Show More Details
            </Link>
            <Link
              href="/order-book"
              className="w-full px-4 py-3 text-xl font-bold text-center duration-200 bg-gradient-to-r from-primary-dark to-primary-light hover:scale-105 rounded-2xl"
            >
              Order Book
            </Link>
          </div>
          <div className="w-full h-10"></div>
        </div>
      ))}
    </div>
  );
};

export default PaidBookDetails;
