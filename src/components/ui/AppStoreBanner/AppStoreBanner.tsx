import React from "react";
import BoardImage from "@/app/assets/website/board.png";
import PlayStoreImage from "@/app/assets/play_store.png";
import AppStoreImage from "@/app/assets/app_store.png";
import Link from "next/link";
import Image from "next/image";

const bannerImage = {
  backgroundImage: `url(${BoardImage.src})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStoreBanner = () => {
  return (
    <div
      className="bg-gray-100 dark:bg-silver-very-dark text-white py-10"
      style={bannerImage}
    >
      <div className="space-y-6 max-w-xl mx-auto">
        <div>
          <h1
            data-aos="slide-down"
            className="text-2xl text-center sm:text-4xl font-semibold p-5"
          >
            Read Books at your fingertips
          </h1>
          <div
            data-aos="slide-up"
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <Link href="#">
              <Image
                src={PlayStoreImage}
                alt="play-store"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </Link>
            <Link href="#">
              <Image
                src={AppStoreImage}
                alt="play-store"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
