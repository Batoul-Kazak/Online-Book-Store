"use client";
import React, { useContext, useEffect } from "react";
import Logo from "@/app/assets/website/logo.png";
import Image from "next/image";
import defaultProfileImage from "@/app/assets/website/defaultProfileImage.png";

import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import DarkMode from "./DarkMode/DarkMode";
import { AppContext } from "@/app/context/AppContext";
import { useTranslation } from "@/app/context/TranslationContext";
import { appLinks } from "@/app/lib/index";

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

  useEffect(function () {
    console.log(lang);
  }, []);

  return (
    <nav className="shadow-lg fixed top-0 right-0 z-800 bg-light-black dark:text-white duration-200 w-full">
      {/* <TestColors /> */}
      {/* <h1 className="text=4xl bg-primary">Heeeel</h1> */}
      <div className="sm:p-25 p-16 py-3 sm:py-0 dark:bg-[#0065ab] bg-white w-full">
        <div className="flex justify-between ">
          <div>
            <Link
              href="/"
              className="font-bold text-2xl sm:text-3xl flex gap-2"
            >
              <Image src={Logo} alt="logo" className="w-10" />
            </Link>
            <p>Books</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <ul className="flex gap-4 items-center text-xl sm:flex">
              {appLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className="inline-block text-silver-very-light px-4 hover:scale-105 duration-300 hover:text-white"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}

              <li className="group relative cursor-pointer">
                {/* <p className="flex items-center h-[72px] gap[2px]">
                  Translate to
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </p> */}

                <div className=" text-white  p-2 shadow-md ">
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
                  className="bg-gradient-to-r from-primary-normal to-secondary-normal text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300"
                >
                  Cart
                  <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </Link>
              </li>
              <li className="duration-300  cursor-pointer hover:scale-110 hover:*:text-white hover:*:border-silver-light">
                {currentLoggedinUser ? (
                  <div
                    onClick={() => setCurrentLoggedinUser(null)}
                    className="flex gap-1 p-2 outline-white"
                  >
                    {/* <FaPerson /> */}
                    {/* <FaPersonBreastfeeding /> */}
                    {/* <FaPerson className="w-7 h-7 text-secondary" />  */}
                    Sign out
                  </div>
                ) : (
                  <div
                    onClick={() => setShowLoginPopup(true)}
                    className="flex gap-1 p-2 outline-white font-bold underline"
                  >
                    {/* <FaPerson /> */}
                    {/* <FaPersonBreastfeeding /> */}
                    {/* <FaPerson className="w-7 h-7 text-secondary" />  */}
                    Login
                  </div>
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
                      className="w-15 h-15 border-1 border-silver-dark rounded-full"
                      alt="user-profile-img"
                    />
                    <p className="absolute top-10 -right-10 font-bold text-secondary-very-light p-1 rounded-xl bg-primary-dark hover:border-none">
                      {currentLoggedinUser.name}
                    </p>
                  </Link>
                ) : (
                  <div
                    onClick={() => setShowSignUpPopup(true)}
                    className="flex gap-1 p-2 outline-white font-bold underline"
                  >
                    {/* <FaPerson /> */}
                    {/* <FaPersonBreastfeeding /> */}
                    {/* <FaPerson className="w-7 h-7 text-secondary" />  */}
                    Sign Up
                  </div>
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
