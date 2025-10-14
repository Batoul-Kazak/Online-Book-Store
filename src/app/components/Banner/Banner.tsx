import React from "react";
import Image from "next/image";
import LibraryImage from "@/app/assets/website/library.jpg";
import { GrSecure } from "react-icons/gr";

const Banner = () => {
  return (
    <div className="place-items-center pt-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
          <div>
            <Image
              src={LibraryImage}
              alt="library-image"
              className=" max-w-[470px] block mx-auto h-[400px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Library at your finger print
            </h1>
            <p className="text text-gray-500 tracking-wide leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              optio blanditiis necessitatibus error eveniet cupiditate corrupti
              sint corporis nemo officia porro, iure debitis et molestias
              voluptatem, laborum commodi, dolorum suscipit Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quibusdam cupiditate
              recusandae nisi explicabo assumenda repellat laborum, odit dicta
              voluptatem ad aperiam facere eius, ratione nobis, ducimus iure
              praesentium? Minima, quos..
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Books</p>
              </div>
              <div className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment Method</p>
              </div>
              <div className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get offers on Books</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
