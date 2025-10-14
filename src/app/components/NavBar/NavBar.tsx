"use client";
import React from "react";
import Logo from "@/app/assets/website/logo.png";
import Image from "next/image";
import { it } from "node:test";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import DarkMode from "./DarkMode/DarkMode";
// import "../../globals.css";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Books",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Authors",
    link: "/#",
  },
];

const NavBar = () => {
  return (
    <nav className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="sm:p-48 p-16 py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <Image src={Logo} alt="logo" className="w-10" />
            </a>
            <p>Books</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <DarkMode />
            <ul className="flex gap-4 items-center hidden sm:flex">
              {Menu.map((item) => (
                // <Item key={item.id} />
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block hover:text-primary-normal px-4 duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              {/* dropdown section */}
              <li className="group relative cursor-pointer">
                <Link href="/#" className="flex items-center h-[72px] gap[2px]">
                  Quick Links
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </Link>

                {/* dropdown Link section */}
                <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px]">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <Link
                          href={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary-normal/10"
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            {/* <button className="btn btn-primary">Order</button> */}
            <button className="bg-gradient-to-r from-primary-normal to-secondary-normal text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300">
              Order
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// const Item = ({ key }) => {
//   return;
//   <li key={key}></li>;
// };

export default NavBar;
