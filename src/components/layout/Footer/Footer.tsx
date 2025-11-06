import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import footerLogo from "@/app/assets/website/logo.png";
import Image from "next/image";
import { APP_LINKS } from "@/_lib/index"
import { FaCat, FaFaceGrinHearts, FaFaceSmile, FaGift, FaHeart, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    // dark:bg-dark-black dark:text-white text-light-black bg-white
    <div className="w-full p-10 bg-primary-very-dark/20 text-silver-light">
      <section className="container">
        <div className="grid py-5 md:grid-cols-3">
          <div className="">
            <h1 className="flex items-center gap-3 mb-3 text-xl font-bold text-justify text-primary sm:text-2xl sm:text-left">
              <Image src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Books Store
            </h1>
            <p className="">
              Get your favourit books in easy way with our fast service and you can also enjoy reading online
            </p>
            <br />
            <Link href="#" className="flex items-center gap-3">
              <FaTelegramPlane />
              <p className="font-bold underline text-secondary-dark">Join our mice books society on Telegram</p>
            </Link>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <Link href="#">
                <FaInstagram className="text-2xl" />
              </Link>
              <Link href="#">
                <FaFacebook className="text-2xl" />
              </Link>
              <Link href="#">
                <FaLinkedin className="text-2xl" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-2 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8">
                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Important Links
                </h1>
                <ul className={`grid grid-cols-3 gap-5`}>
                  {APP_LINKS.map((link) => (
                    <li
                      key={link.id}
                      className="space-x-1 duration-300 cursor-pointer hover:translate-x-1 hover:text-primary"
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
          <div className="py-5 text-center border-t-2 border-silver-light/50">
            <p className="flex gap-1 place-content-center place-items-center">@copyright 2025 All rights reserved || Made with
              <span>
                <FaHeart className="text-secondary-dark" />
              </span>
              by Die Blaue Katze
              <FaGift className="text-xl text-primary" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
