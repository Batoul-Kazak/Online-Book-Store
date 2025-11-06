"use client";
import React, { useContext, useEffect } from "react";
import Logo from "@/app/assets/website/logo.png";
import Image from "next/image";
import defaultProfileImage from "@/app/assets/website/defaultProfileImage.png";

import { FaCartShopping, FaPerson } from "react-icons/fa6";
import Link from "next/link";
import DarkMode from "./DarkMode/DarkMode";
import { AppContext } from "@/context/AppContext";
import { useTranslation } from "@/context/TranslationContext";
import { APP_LINKS } from "@/_lib/index";
import { usePathname } from "next/navigation";
// import { link } from "fs";

const languages = [
  { value: "en", name: "English" },
  { value: "ru", name: "Русский" },
  { value: "ar", name: "العربية" },
  { value: "de", name: "Deutsch" },
];

const NavBar = () => {
  const {
    currentLoggedinUser,
    setShowSignUpPopup,
    setCurrentLoggedinUser,
    setShowLogin,
  } = useContext(AppContext); //
  const { t, lang, setLang } = useTranslation();
  const pathname = usePathname();

  useEffect(function () {
    console.log(lang);
  }, []);

  return (
    <nav className="fixed top-0 right-0 w-full duration-200 bg-transparent shadow-lg z-800 dark:text-white">
      {/* <TestColors /> */}
      {/* <h1 className="text=4xl bg-primary">Heeeel</h1> */}
      <div className="w-full p-16 py-3 bg-white/60 sm:p-25 sm:py-0 ">
        <div className="flex justify-between ">
          <div className="flex flex-col transition-all delay-100 hover:scale-105">
            <Link
              href="/"
              className="flex flex-col font-bold place-content-center place-items-center"
            >
              <Image src={Logo} alt="logo" className="w-10" />
              <h1 className="font-bold place-self-center text-primary">BookHaven</h1>
            </Link>
          </div>
          <div className="flex items-center justify-between gap-4">
            <ul className="flex items-center gap-4 sm:flex">
              <div className="flex flex-wrap">
                {APP_LINKS.map((item) => {
                  const isActive = pathname === item.link || pathname.startsWith(item.link);
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.link}
                        className={` ${isActive ? "text-secondary" : "text-silver-very-dark"} text-sm text-nowrap inline-block px-4 font-bold duration-300 hover:scale-105 `}
                      >
                        {(item.key).replace('_', ' ')}
                      </Link>
                    </li>
                  )
                })}
              </div>


              <li className="relative cursor-pointer group">
                {/* <p className="flex items-center h-[72px] gap[2px]">
                  Translate to
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </p> */}

                <div className="p-2 text-white shadow-md ">
                  <select
                    value={lang}
                    onChange={(e) => setLang(e.target.value as any)}
                    className="text-sm text-silver-dark "
                  >
                    {languages.map((lang_) => (
                      <option
                        key={lang_.value}
                        value={lang_.value}
                        className="bg-white text-secondary"
                      >
                        {lang_.name}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="flex items-center gap-3 px-4 py-1 text-sm duration-300 rounded-full text-silver-dark bg-gradient-to-r from-primary-normal to-secondary-normal hover:scale-105"
                >
                  Cart
                  <FaCartShopping className="cursor-pointer text-silver-dark drop-shadow-sm" />
                </Link>
              </li>
              <li className="duration-300 cursor-pointer hover:scale-110 ">
                {/* hover:*:text-white hover:*:border-silver-light */}
                {currentLoggedinUser ? (
                  <button
                    onClick={() => setCurrentLoggedinUser(null)}
                    className="flex gap-1 p-2 outline-white text-silver-dark"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="flex gap-1 p-2 font-bold underline text-silver-dark outline-white"
                  >
                    {/* <FaPerson /> */}
                    Login
                  </Link>
                )}
              </li>
              <li className="relative duration-300 cursor-pointer hover:scale-110">
                {currentLoggedinUser ? (
                  <Link href={`/user-profile/${currentLoggedinUser.id}`}>
                    <Image
                      src={
                        currentLoggedinUser.profileImage
                          ? currentLoggedinUser.profileImage
                          : defaultProfileImage
                      }
                      className="w-10 h-10 rounded-full border-1 border-silver-dark"
                      alt="user-profile-img"
                    />
                    <p className="absolute p-1 font-bold top-10 -right-10 text-secondary-very-light rounded-xl bg-primary-dark hover:border-none">
                      {currentLoggedinUser.name}
                    </p>
                  </Link>
                ) : (
                  <Link
                    href="/signup"
                    className="flex gap-1 p-2 font-bold underline text-silver-dark outline-white"
                  >
                    Sign Up
                  </Link>
                )}
              </li>
              <li>
                <DarkMode />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
