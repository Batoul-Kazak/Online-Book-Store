import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "@/app/assets/website/logo.png";
import Image from "next/image";
import { APP_LINKS } from "@/_lib/index"

const Footer = () => {
  return (
    // dark:bg-dark-black dark:text-white text-light-black bg-white
    <div className="w-full bg-gray-800 ">
      <section className="container">
        <div className="grid py-5 md:grid-cols-3">
          <div className="px-4 py-8 ">
            <h1 className="flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left">
              <Image src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Books Store
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <Link href="#">
                <FaInstagram className="text-3xl" />
              </Link>
              <Link href="#">
                <FaFacebook className="text-3xl" />
              </Link>
              <Link href="#">
                <FaLinkedin className="text-3xl" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Important Links
                </h1>
                <ul className={`grid grid-cols-2 gap-[20%]`}>
                  {APP_LINKS.map((link) => (
                    <li
                      key={link.id}
                      className="space-x-1 duration-300 cursor-pointer hover:translate-x-1 hover:text-primary text-silver"
                    >
                      <span>&#11162;</span>
                      <Link href={link.link}>{(link.key).replace('_', ' ')}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="py-10 text-center border-t-2 border-silver-light/50">
            @copyright 2024 All rights reserved || Made with ❤️ by Dilshad
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
