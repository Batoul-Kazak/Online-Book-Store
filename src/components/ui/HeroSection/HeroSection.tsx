"use client";
import React, { useContext, useState } from "react";
import vector from "@/app/assets/website/blue-pattern.png";
import { allBooks } from "@/lib/index";
import Image from "next/image";
import { useTranslation } from "@/context/TranslationContext";
import Link from "next/link";

const HeroSection = () => {
  const { t, lang, setLang } = useTranslation();

  const booksToDisplay = allBooks.filter(
    (book) =>
      book.id === "book_3" || book.id === "book_13" || book.id === "book_14"
  );
  const defaultBook = booksToDisplay[2];
  const [selectedImage, setSelectedImage] = useState(defaultBook.img);

  const currentBook = booksToDisplay.find(book => book.img === selectedImage) || defaultBook;
  // const [author, setAuthor] = useState(booksToDisplay[2].author[lang]);
  // const [title, setTitle] = useState(booksToDisplay[2].title[lang]);
  // const [description, setDescription] = useState(booksToDisplay[2].description[lang]);
  const author = currentBook.author[lang];
  const title = currentBook.title[lang];
  const description = currentBook.description[lang];


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
        className="min-h-[550px] sm:min-h-[650px] flex justify-center items-center dark:bg-dark-black dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div
              data-aos-once="true"
              className="flex flex-col justify-center order-2 gap-4 pt-12 text-center sm:pt-0 sm:text-left sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl font-bold sm:text-6xl lg:text-7xl"
              >
                {title}
                <p className="text-sm text-right text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary">
                  by {author}
                </p>{" "}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-2xl text-transparent bg-clip-text bg-gradient-to-l from-secondary to-white"
              >
                {description}
              </p>
              <div>
                <Link
                  href="/cart"
                  className="p-5 text-2xl font-bold text-white duration-200 rounded-full bg-secondary hover:scale-105"
                >
                  Order
                  {/* {t("common.books")} */}
                </Link>
              </div>
            </div>
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <Image
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={selectedImage}
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
                      setSelectedImage(item.img)
                    }}
                    alt={item.title[lang]}
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
