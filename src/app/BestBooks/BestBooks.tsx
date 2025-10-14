import React from "react";
import Book1 from "@/app/assets/books/Stories/book1.jpg";
import Book2 from "@/app/assets/books/Stories/book2.jpg";
import Book3 from "@/app/assets/books/Stories/book3.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import OpenedBookImage from "@/app/assets/website/opened_book.jpg";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
    description:
      "This books talks about a poor family that lives in ice whether where they are struggling to live.",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
    description:
      "This books talks about a poor family that lives in ice whether where they are struggling to live.",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
    description:
      "This books talks about a poor family that lives in ice whether where they are struggling to live.",
  },
  {
    id: 4,
    img: Book2,
    title: "His Life",
    rating: 4.4,
    author: "Someone",
    description:
      "This books talks about a poor family that lives in ice whether where they are struggling to live.",
  },
  {
    id: 5,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
    description:
      "This books talks about a poor family that lives in ice whether where they are struggling to live.",
  },
];

const BestBooks = () => {
  // return (
  //   <div className="py-10">
  //     <div className="center text-[1rem] sm:text-[3rem]">
  //       <div className="text-center mb-20 max-w-[400px] mx-auto flex flex-col gap-5">
  //         <p className="text-sm bg-clip-text dark:text-white bg-gradient-to-r from-primary-normal to-secondary-normal">
  //           Trending Books
  //         </p>
  //         <h1 className="text-3xl font-bold">Best Books</h1>
  //         <p className="text-xs text-gray-400">
  //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
  //           dicta tempora doloremque et ea, sit nihil beatae, ex, iure enim
  //           vero. Recusandae tenetur aspernatur itaque corporis quaerat saepe
  //           nulla placeat!
  //         </p>
  //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 place-items-center">
  //           {booksData.map((book) => (
  //             <div key={book.id}>
  //               <div className="h-[100px]">
  //                 <Image
  //                   src={book.img}
  //                   alt={`${book.id}book`}
  //                   className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
  //                 />
  //               </div>
  //               <div className="p-4 text-center">
  //                 <div className="flex justify-center items-center w-full ">
  //                   {/* {book.rating.} */}
  //                   <FaStar className="text-yellow-500" />
  //                   <FaStar className="text-yellow-500" />
  //                   <FaStar className="text-yellow-500" />
  //                   <FaStar className="text-yellow-500" />
  //                   <FaStar className="text-yellow-500" />
  //                 </div>
  //                 <h1 className="text-xl font-bold">{book.title}</h1>
  //                 <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
  //                   {book.description}
  //                 </p>
  //                 <button>Order Now</button>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  return (
    <div className="pt-10 flex flex-col place-content-center place-items-center relative h-[100rem]">
      <Image
        src={OpenedBookImage}
        alt=""
        className="absolute z-8 brightness-20 h-[100rem]"
      ></Image>
      <div className="absolute z-10">
        <div className="center text-[1rem] sm:text-[3rem]">
          <div className="text-center mb-20 max-w-[400px] mx-auto flex flex-col gap-5">
            <p className="text-sm bg-clip-text dark:text-white bg-gradient-to-r from-primary-normal to-secondary-normal">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              dicta tempora doloremque et ea, sit nihil beatae, ex, iure enim
              vero. Recusandae tenetur aspernatur itaque corporis quaerat saepe
              nulla placeat!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[70rem] md:gap-5 place-items-center ">
          {booksData.map((book) => (
            <div key={book.id} className="pt-12 hover:scale-105 duration-500">
              <div className="flex relative flex-col gap-5 pt-20 justify-content-center place-items-center bg-gray-800 p-7 rounded-2xl">
                <div className="w-full h-70"></div>
                <div className="flex justify-center place-items-center">
                  <Image
                    src={book.img}
                    alt={book.title + book.id}
                    className="absolute -top-10 w-4/5 h-100 rounded-tl-2xl rounded-tr-2xl border-white/30 border-2"
                  />
                  <div className="flex gap-1 justify-center  absolute top-65 right-5 rounded-tr-[4px] rounded-br-[4px] bg-black/80 p-2 font-bold">
                    {book.rating}
                    <div className="relative ">
                      <FaStar className="text-yellow-600 w-6 h-6" />
                      <FaStar className="text-yellow-500 w-4 h-4 absolute top-1 right-1" />
                    </div>
                    <div className="relative ">
                      <FaStar className="text-yellow-600 w-6 h-6" />
                      <FaStar className="text-yellow-500 w-4 h-4 absolute top-1 right-1" />
                    </div>
                    <div className="relative ">
                      <FaStar className="text-yellow-600 w-6 h-6" />
                      <FaStar className="text-yellow-500 w-4 h-4 absolute top-1 right-1" />
                    </div>
                    <div className="relative ">
                      <FaStar className="text-yellow-600 w-6 h-6" />
                      <FaStar className="text-yellow-500 w-4 h-4 absolute top-1 right-1" />
                    </div>
                  </div>
                </div>

                <h1 className="text-3xl font-bold">{book.title}</h1>
                <p>{book.description}</p>
                <button className=" bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestBooks;
