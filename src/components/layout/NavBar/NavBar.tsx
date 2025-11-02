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
    setShowLoginPopup,
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
      <div className="w-full p-16 py-3 bg-white sm:p-25 sm:py-0 dark:bg-primary/75">
        <div className="flex justify-between ">
          <div>
            <Link
              href="/"
              className="flex gap-2 text-2xl font-bold sm:text-3xl"
            >
              <Image src={Logo} alt="logo" className="w-10" />
            </Link>
            <p>Books</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <ul className="flex items-center gap-4 text-xl sm:flex">
              {APP_LINKS.map((item) => {
                const isActive = pathname === item.link || pathname.startsWith(item.link);
                return (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className={` ${isActive ? "text-secondary-very-light" : "text-silver-very-light"} inline-block px-4 font-bold duration-300 hover:scale-105 hover:text-white`}
                    >
                      {(item.key).replace('_', ' ')}
                    </Link>
                  </li>
                )
              })}


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
                    className="bg-[#0065ab]"
                  >
                    {languages.map((lang_) => (
                      <option
                        key={lang_.value}
                        value={lang_.value}
                        className="bg-silver-very-dark text-secondary"
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
                  className="flex items-center gap-3 px-4 py-1 text-white duration-300 rounded-full bg-gradient-to-r from-primary-normal to-secondary-normal hover:scale-105"
                >
                  Cart
                  <FaCartShopping className="text-xl text-white cursor-pointer drop-shadow-sm" />
                </Link>
              </li>
              <li className="duration-300  cursor-pointer hover:scale-110 hover:*:text-white hover:*:border-silver-light">
                {currentLoggedinUser ? (
                  <button
                    onClick={() => setCurrentLoggedinUser(null)}
                    className="flex gap-1 p-2 outline-white"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="flex gap-1 p-2 font-bold underline outline-white"
                  >
                    {/* <FaPerson /> */}
                    Login
                  </Link>
                )}
              </li>
              <li className="relative cursor-pointer duration-300 hover:scale-110 hover:*:text-white hover:*:border-silver-light">
                {currentLoggedinUser ? (
                  <Link href={`/user-profile/${currentLoggedinUser.id}`}>
                    <Image
                      src={
                        currentLoggedinUser.profileImage
                          ? currentLoggedinUser.profileImage
                          : defaultProfileImage
                      }
                      className="rounded-full w-15 h-15 border-1 border-silver-dark"
                      alt="user-profile-img"
                    />
                    <p className="absolute p-1 font-bold top-10 -right-10 text-secondary-very-light rounded-xl bg-primary-dark hover:border-none">
                      {currentLoggedinUser.name}
                    </p>
                  </Link>
                ) : (
                  <Link
                    href="/signup"
                    className="flex gap-1 p-2 font-bold underline outline-white"
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
