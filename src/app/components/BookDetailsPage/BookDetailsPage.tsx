"use client";
import Image from "next/image";
import NavBar from "../NavBar/NavBar";
import { FaStar } from "react-icons/fa6";
import { FaBookBookmark } from "react-icons/fa6";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { useTranslation } from "@/context/TranslationContext";

const BookDetailsPage = ({ bookInfo }) => {
  const { setShowAddToCartPopup, showAddToCartPopup } = useContext(AppContext);
  const { lang } = useTranslation();

  function handleAddToCartPopup() {
    setShowAddToCartPopup(true);
    console.log(showAddToCartPopup);
  }
  return (
    <div className="">
      {/* <NavBar /> */}
      <div className="flex gap-10 p-20">
        <Image
          src={bookInfo?.img}
          alt="book-cover"
          className="w-1/3 h-[50rem]  drop-shadow-[-15px_15px_18px_#75D0FF] object-cover rounded-xl"
        />
        <div>
          <h1 className="font-bold text-7xl p-15 text-hue-light text-primary">
            {bookInfo?.title[lang]}
          </h1>
          <div className="flex flex-col gap-10 py-2 text-xl px-15">
            <div className="flex justify-between p-5 border-b-2 border-b-silver-light place-content-center place-items-center">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl text-secondary ">
                  Written By {bookInfo?.author[lang]}
                </h2>
                <div className="flex justify-between ">
                  <div className="flex gap-3">
                    {Array.from({ length: 5 }, (_, i) => {
                      const isFull = i + 1 <= Math.round(bookInfo.rating);
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

                    <span className="font-bold text-yellow-700">
                      {bookInfo?.rating}
                    </span>
                    <div className="p-2 text-2xl duration-300 cursor-pointer border-1 text-primary hover:scale-105">
                      <FaBookBookmark />
                    </div>
                    <p className="ml-10 font-bold text-lime-600">
                      Book Price: {bookInfo?.price}$
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-bold text-bold text-primary">
                {bookInfo?.edition[lang]}
              </p>
            </div>
            <p className="text-justify text-silver-very-light">
              {bookInfo?.depthDescription[lang]}
            </p>
            <div className="flex justify-between ">
              <p className="font-bold text-primary">
                {" "}
                Available Language: {bookInfo?.language}
              </p>
              <p className="font-bold text-secondary-light">
                Recieving Type:{" "}
                {bookInfo?.type == "PDF" ? bookInfo.downloadURL : "Hand Copy"}
              </p>
            </div>
            <div className="flex gap-5">
              <button
                onClick={() => handleAddToCartPopup()}
                className="px-5 py-3 font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-2xl"
              >
                Order Book
              </button>
              <button className="px-5 py-3 font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-2xl">
                <Link href="/all-books">Explore Other Books</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
