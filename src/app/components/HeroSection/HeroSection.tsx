"use client";
import React, { useContext, useState } from "react";
import book7 from "@/app/assets/books/math/calculus.png";
import vector from "@/app/assets/website/blue-pattern.png";
import { allBooks } from "@/app/lib/index";
import Image from "next/image";
import { useTranslation } from "@/app/context/TranslationContext";
import { AppContext } from "@/app/context/AppContext";

const HeroSection = () => {
  const { t, lang, setLang } = useTranslation();
  const { setShowAddToCartPopup, showAddToCartPopup } = useContext(AppContext);

  const booksToDisplay = allBooks.filter(
    (book) =>
      book.id === "book_3" || book.id === "book_13" || book.id === "book_14"
  );
  const [imageId, setImageId] = useState(booksToDisplay[2].img);
  const [author, setAuthor] = useState(booksToDisplay[2].author);
  const [title, setTitle] = useState(booksToDisplay[2].title);
  const [description, setDescription] = useState(booksToDisplay[2].description);

  const bgImage = {
    backgroundImage: `url(${vector.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "10rem",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px]  flex justify-center items-center dark:bg-dark-black dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {title}
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                  by {author}
                </p>{" "}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-2xl bg-clip-text text-transparent bg-gradient-to-l from-secondary to-white"
              >
                {description}
              </p>
              <div>
                <button
                  onClick={() => setShowAddToCartPopup(true)}
                  className="bg-secondary text-2xl font-bold hover:scale-105 duration-200 text-white p-5 rounded-full"
                >
                  Order
                  {/* {t("common.books")} */}
                </button>
              </div>
            </div>
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <Image
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt="Book image"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto mask-linear-50 mask-linear-from-60% mask-linear-to-80% "
                  width={450}
                  height={450}
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                {booksToDisplay.map((item) => (
                  <Image
                    key={item.id}
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(item.img);
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    alt={item.title}
                    className="max-w-[100px] h-[100px]  object-contain inline-block hover:scale-110 duration-200 cursor-pointer"
                    width={100}
                    height={100}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
