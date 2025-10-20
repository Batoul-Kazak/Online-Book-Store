"use client";
import { usePathname } from "next/navigation";
const NotFound = () => {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];

  return (
    <div className="absolute w-full h-full bg-gradient-to-bl from-blue-900 to-black right-0 left-0">
      <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] flex flex-col gap-5">
        <h1 className="text-blue-700 text-5xl font-bold">Not Found Page</h1>
        {/* <p className="text-silver ">Check the page url</p> */}
      </div>
    </div>
  );
};

export default NotFound;
