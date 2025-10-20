"use client";
import React, { useContext } from "react";
import Logo from "@/app/assets/website/logo.png";
import Image from "next/image";
import defaultProfileImage from "@/app/assets/website/defaultProfileImage.png";
import { it } from "node:test";

import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import DarkMode from "./DarkMode/DarkMode";
import { AppContext } from "@/app/context/AppContext";
import { useTranslation } from "@/app/context/TranslationContext";
// import "../../globals.css";

const Menu = [
  // {
  //   id: 2,
  //   name: "Best Seller",
  //   link: "/#services",
  // },
  {
    id: 1,
    name: "Free Books",
    link: "/books",
  },

  {
    id: 2,
    name: "All books",
    link: "/books",
  },
  {
    id: 3,
    name: "Notes",
    link: "/rich-text-editor",
  },
];

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
  } = useContext(AppContext);
  const { t, lang, setLang } = useTranslation();

  return (
    <nav className="shadow-lg bg-light-black dark:bg-my-black dark:text-white duration-200 ">
      <div className="sm:p-48 p-16 py-3 sm:py-0">
        <div className="flex justify-between items-center">
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
            <DarkMode />
            <ul className="flex gap-4 items-center hidden sm:flex">
              {Menu.map((item) => (
                // <Item key={item.id} />
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className="inline-block hover:text-primary-normal px-4 duration-200"
                  >
                    {item.name}
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

                <div className=" text-white bg-my-black p-2 shadow-md ">
                  {/* <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id} className="hover:bg-silver-very-dark">
                        <p
                          // href={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary-normal/10"
                        >
                          {data.name}
                        </p>
                      </li>
                    ))}
                  </ul> */}

                  <select
                    value={lang}
                    onChange={(e) => setLang(e.target.value as any)}
                    className=""
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
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
