"use client";
import DarkPng from "@/app/assets/website/dark-mode-button.png";
import LightPng from "@/app/assets/website/light-mode-button.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  // const { theme, setTheme } = useTheme();
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    console.log(resolvedTheme);
  }, [resolvedTheme]);

  if (!mounted) return <div>Loading light/dark toggle</div>;

  // return (
  //   <div className="relative">
  //     {resolvedTheme === "dark" && (
  //       <Image
  //         src={LightPng}
  //         alt="Switch to dark mode"
  //         onClick={() => setTheme("light")}
  //         className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
  //           resolvedTheme === "dark"
  //             ? "opacity-0 pointer-events-none"
  //             : "opacity-100"
  //         }`}
  //       />
  //     )}
  //     {resolvedTheme === "light" && (
  //       <Image
  //         src={DarkPng}
  //         alt="Switch to light mode"
  //         onClick={() => setTheme("dark")}
  //         className={`w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 ${
  //           resolvedTheme === "light"
  //             ? "opacity-0 pointer-events-none"
  //             : "opacity-100"
  //         }`}
  //       />
  //     )}
  //   </div>
  // );

  if (resolvedTheme === "dark")
    return (
      <button onClick={() => setTheme("light")}>
        <FaSun className="text-silver-dark" />
      </button>
    );

  if (resolvedTheme === "light")
    return (
      <button onClick={() => setTheme("dark")}>
        <FaMoon className="text-silver-dark" />
      </button>
    );
};

export default DarkMode;
