import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { allBooks } from "@/app/index";
import { Input } from "@mui/material";
import { Search } from "@mui/icons-material";

const AllBooks = () => {
  return (
    <div>
      <div className="flex place-items-center place-content-center flex-col">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            All Books
          </p>
          <h1 className="Books">Top Books</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi vel
            earum praesentium laboriosam consequuntur autem tempora in maiores,
            aspernatur reiciendis sunt nobis temporibus nam aperiam totam
            adipisci? Consequatur, facere dolore.
          </p>
        </div>
        <div className="flex flex-col gap-10 place-items-center place-content-center">
          {/* <Input
            type="search"
            placeholder="Search for your book..."
            className="transparent text-white p-4 w-[30rem] rounded-2xl border-gray-600
            
            "
          /> */}
          <div className="relative w-1/2">
            <input
              type="search  w-1/2"
              className=" bg-transparent w-full text-white rounded-2xl p-4 border-gray-400 placeholder:text-white border-2"
              placeholder="Search for your book"
            />
            <Search className="  text-white w-10 h-10 absolute right-5 top-[50%] -translate-y-[50%]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {allBooks.map((book) => (
              <div
                key={book.id}
                className="div space-y-3 rounded-xl hover:scale-105 transition-all duration-500 bg-black/80 p-0 pb-4 h-[35rem] flex flex-col gap-4 place-items-center relative"
              >
                <Image
                  src={book.img}
                  alt={book.title + book.id}
                  className="h-3/5 w-[200px] object-cover rounded-md rounded-br-none mask-x-from-95% mask-y-from-95% rounded-bl-none"
                />

                <div>
                  <h3 className="font-semibold max-w-[10rem] h-[5rem] text-center">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-700">{book.author}</p>
                </div>
                <div className="flex items-center gap-1 absolute bottom-5 bg-blue-800/80 p-2 w-full place-content-center">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <span>{book.rating}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
              View All Books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
