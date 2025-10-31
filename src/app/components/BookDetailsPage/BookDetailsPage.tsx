"use client";
import Image from "next/image";
import NavBar from "../NavBar/NavBar";
import { FaStar } from "react-icons/fa6";
import { FaBookBookmark } from "react-icons/fa6";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";

const BookDetailsPage = ({ bookInfo }) => {
  const { setShowAddToCartPopup, showAddToCartPopup } = useContext(AppContext);

  function handleAddToCartPopup() {
    setShowAddToCartPopup(true);
    console.log(showAddToCartPopup);
  }
  return (
    <div className="">
      {/* <NavBar /> */}
      <div className="p-20 flex gap-10">
        <Image
          src={bookInfo?.img}
          alt="book-cover"
          className="w-1/3 h-[50rem]  drop-shadow-[-15px_15px_18px_#75D0FF] object-cover rounded-xl"
        />
        <div>
          <h1 className="text-7xl p-15 text-hue-light text-primary font-bold">
            {bookInfo?.title}
          </h1>
          <div className="px-15 py-2 flex flex-col gap-10 text-xl">
            <div className="flex justify-between p-5 border-b-2 border-b-silver-light place-content-center place-items-center">
              <div className="flex flex-col gap-3">
                <h2 className="text-secondary text-3xl  ">
                  Written By {bookInfo?.author}
                </h2>
                <div className="flex justify-between ">
                  <div className="flex gap-3">
                    {Array.from({ length: 5 }, (_, i) => {
                      const isFull = i + 1 <= Math.round(bookInfo.rating);
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

                    <span className="text-yellow-700 font-bold">
                      {bookInfo?.rating}
                    </span>
                    <div className="border-1 p-2 text-2xl text-primary hover:scale-105 duration-300 cursor-pointer">
                      <FaBookBookmark />
                    </div>
                    <p className="text-lime-600 ml-10 font-bold">
                      Book Price: {bookInfo?.price}$
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-bold text-primary font-bold">
                {bookInfo?.edition}
              </p>
            </div>
            <p className="text-justify text-silver-very-light">
              {bookInfo?.depthDescription}
            </p>
            <div className="flex justify-between ">
              <p className="text-primary font-bold">
                {" "}
                Available Language: {bookInfo?.language}
              </p>
              <p className="text-secondary-light font-bold">
                Recieving Type:{" "}
                {bookInfo?.type == "PDF" ? bookInfo.downloadURL : "Hand Copy"}
              </p>
            </div>
            <div className="flex gap-5">
              <button
                onClick={() => handleAddToCartPopup()}
                className="bg-gradient-to-r from-primary to-secondary font-bold text-white py-3 px-5 rounded-2xl"
              >
                Order Book
              </button>
              <button className="bg-gradient-to-r from-primary to-secondary font-bold text-white py-3 px-5 rounded-2xl">
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
